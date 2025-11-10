import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const { createUser, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, email, photo, password });

    // Password Authentication
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  //   SignIn with Google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error;
        console.log(errorMessage);
      });
  };

  //   password show toggle
  const handleTogglePasswordVisibility = () => {
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

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name field */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full outline-none focus:border-2 focus:border-primary"
                placeholder="Enter your name"
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

              {/* photoURL field */}
              <label className="label">PhotoURL</label>
              <input
                type="text"
                name="photo"
                className="input w-full outline-none focus:border-2 focus:border-primary"
                placeholder="https://example.com/images.png"
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
                  onClick={handleTogglePasswordVisibility}
                  className="absolute top-[50%] translate-y-[-50%] right-6 z-50 cursor-pointer"
                >
                  {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                </span>
              </div>
              <button
                type="submit"
                className="btn bg-primary text-white hover:opacity-90 mt-4"
              >
                Register
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px bg-gray-400 w-1/3"></div>
                <span className="text-sm font-medium text-secondary">or</span>
                <div className="h-px bg-gray-400 w-1/3"></div>
              </div>

              {/* Google */}
              <button
                type="button"
                onClick={handleSignInWithGoogle}
                className="btn bg-white text-black hover:bg-secondary hover:text-white border-[#e5e5e5]"
              >
                <FcGoogle size={18} />
                Continue with Google
              </button>
            </fieldset>
          </form>

          {/* Forgot password and other link*/}
          <div className="text-center pt-2.5 flex flex-col justify-center items-center gap-2">
            <Link className="link link-hover">Forgot password?</Link>
            <p className="font-semibold text-secondary">
              Already have an account??{" "}
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

export default Register;
