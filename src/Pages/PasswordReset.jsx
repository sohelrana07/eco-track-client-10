import React, { use, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

import LoadingSpinner from "./LoadingSpinner";

const PasswordReset = () => {
  const { loading, setLoading } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    console.log({ email });
  };

  // // loading
  // useEffect(() => {
  //   setLoading(true);

  // const timer = setTimeout(() => {
  //   setLoading(false);
  // }, 1500);

  //   return () => clearTimeout(timer);
  // }, [setLoading]);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="flex flex-col justify-center items-center gap-2 pb-5">
            <a className="">
              <img
                src="/logo.png"
                alt=""
                className="w-12 md:w-12 rounded-full"
              />
            </a>
            <a className="text-2xl font-bold">
              <span>Forgot</span>{" "}
              <span className="font-salsa text-primary tracking-wider">
                Password
              </span>
            </a>
          </div>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full outline-none focus:border-2 focus:border-primary"
                placeholder="example@gmail.com"
                required
              />

              <button
                type="submit"
                className="btn bg-primary text-white hover:opacity-90 mt-4"
              >
                Reset Password
              </button>
            </fieldset>
          </form>

          {/* Forgot password and other link*/}
          <div className="text-center pt-2.5 flex flex-col justify-center items-center gap-2 text-xs">
            <p className="font-semibold text-secondary">
              Back to Login?{" "}
              <Link
                to="/auth/login"
                className="text-primary tracking-wider hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PasswordReset;
