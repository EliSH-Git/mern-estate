import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import OAuth from "./OAuth.jsx";

export default function SignIn() {
    const [formData, setFormData] = useState({});

    const { loading, error } = useSelector((state) => state.user);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // setLoading(true);
            dispatch(signInStart());
            const response = await fetch(`/api/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(`User created successfully: ${data.message}`);
            if (data.success === false) {
                dispatch(signInFailure(data.message));
                // setLoading(false);
                // setError(data.message);
                return;
            }
            dispatch(signInSuccess(data));
            // setLoading(false);
            // setError(null);
            navigate("/");
        } catch (error) {
            dispatch(signInFailure(error.message));
            // setLoading(false);
            // setError(error.message);
            // console.error("Error during sign-up:", error.message);
        }
    };

    console.log(formData);

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="border p-3 rounded-lg"
                />
                <button
                    disabled={loading}
                    className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                >
                    {loading ? "Loading..." : " Sign In"}
                </button>
                <OAuth />
            </form>
            <div className="flex gap-2 mt-5">
                <p>Dont have an Account?</p>
                <Link to={"/sign-up"}>
                    <span className="text-blue-700">Sign Up</span>
                </Link>
            </div>
            {error && <p className="text-red-500 mt-5"> {error} </p>}
        </div>
    );
}
