import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, SetShowPassword] = useState(false);

  const handleTogglePassword = () => {
    SetShowPassword(!showPassword);
  };

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
              Join
              <span> ECO</span>{" "}
              <span className="font-salsa text-primary tracking-wider">
                Track
              </span>
            </a>
          </div>

          <form className="">
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full outline-none focus:border-2 focus:border-primary"
                placeholder="Enter your name"
                required
              />

              {/* photoURL field */}
              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photo"
                className="input w-full outline-none focus:border-2 focus:border-primary"
                placeholder="https://example.com/images.png"
                required
              />

              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full outline-none focus:border-2 focus:border-primary"
                placeholder="example@gmail.com"
                required
              />

              {/* password field */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full outline-none focus:border-2 focus:border-primary"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={handleTogglePassword}
                  className="absolute top-[50%] translate-y-[-50%] right-6 z-50 cursor-pointer"
                >
                  {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                </span>
              </div>
              <button className="btn bg-primary text-white hover:opacity-90 mt-4">
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px bg-gray-400 w-1/3"></div>
                <span className="text-sm font-medium text-secondary">or</span>
                <div className="h-px bg-gray-400 w-1/3"></div>
              </div>

              {/* Google */}
              <button className="btn bg-white text-black hover:bg-secondary hover:text-white border-[#e5e5e5]">
                <FcGoogle size={18} />
                Continue with Google
              </button>

              <div className="text-center pt-3 flex flex-col justify-center items-center gap-2">
                <Link className="link link-hover font-medium">
                  Forgot password?
                </Link>
                <a className="font-semibold text-secondary">
                  Already have an account??{" "}
                  <Link
                    to="/auth/login"
                    className="text-primary tracking-wider hover:underline"
                  >
                    Login
                  </Link>
                </a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
