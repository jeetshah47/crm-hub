"use client";
import React, { useState } from "react";

const LoginForm = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    }
    
    return (
        <div className="grid grid-cols-1 place-items-center">
            <div className="w-2/4">
                <p className="text-2xl font-semibold">Sign In to Woorkroom</p>
                <div>
                    <form onSubmit={handleSubmit} className="py-6 text-secondary">
                        <div className=" font-semibold space-y-3 py-4 w-full">
                            <p className="text-sm">Email Address</p>
                            <input
                                placeholder="youremail@gmail.com"
                                className="outline-none px-4 py-2 rounded-lg w-full border-2"
                            />
                        </div>
                        <div className="font-semibold space-y-3 py-4 w-full">
                            <p className="text-sm">Password</p>
                            <input
                                placeholder="youremail@gmail.com"
                                className="outline-none px-4 py-2 rounded-lg w-full border-2"
                            />
                        </div>
                        <div className="flex">
                            <div className="flex-1">
                                <input type="checkbox" />
                                <label className="px-2">Remember me</label>
                            </div>
                            <p>Forgot Password</p>
                        </div>
                        <div className="items-center flex py-4 flex-col space-y-3">
                            <button className="bg-blue-500 rounded-lg px-10 py-2 text-white shadow-lg shadow-blue-500/50 hover:shadow-sm duration-300">
                                Sing In{" "}
                            </button>
                            <p className="text-blue-600"><a> Dont Have an Account ?</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
