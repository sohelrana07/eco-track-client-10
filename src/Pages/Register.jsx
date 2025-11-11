import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

const Register = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const { createUser, signInWithGoogle, loading, setLoading } =
    use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //   const validatePassword = (password) => {
  // };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, email, photo, password });

    if (password.length < 6) return setError("Minimum 6 characters required");
    if (!/[A-Z]/.test(password))
      return setError("At least 1 uppercase letter required");
    if (!/[a-z]/.test(password))
      return setError("At least 1 lowercase letter required");
    if (!/[!@#$%^&*(),.?/":{}|<>]/.test(password))
      return setError("At least 1 special character required");

    // Password Authentication
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Register successful");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Registration failed: " + errorMessage);
      });
  };

  //   SignIn with Google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error;
        toast.error("Login failed: " + errorMessage);
      });
  };

  //   password show toggle
  const handleTogglePasswordVisibility = () => {
    SetShowPassword(!showPassword);
  };

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
                placeholder="Enter your full name"
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
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

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

          {/* link */}
          <p className="font-semibold text-secondary text-center text-xs">
            Already have an account?{" "}
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
  );
};
export default Register;
