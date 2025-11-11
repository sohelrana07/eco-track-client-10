import React, { use, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";
import { FaSpinner } from "react-icons/fa6";

const Login = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const { signInUser, signInWithGoogle, loading, setLoading } =
    use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    if (password.length < 6) return setError("Minimum 6 characters required");
    if (!/[A-Z]/.test(password))
      return setError("At least 1 uppercase letter required");
    if (!/[a-z]/.test(password))
      return setError("At least 1 lowercase letter required");
    if (!/[!@#$%^&*(),.?/":{}|<>]/.test(password))
      return setError("At least 1 special character required");

    // signIn User
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Login failed: " + errorMessage);
        setLoading(false);
      });
  };

  //   Login with Google
  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setLoading(false);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorMessage = error;
        toast.error("Login failed: " + errorMessage);
        setLoading(false);
      });
  };

  //   password show toggle
  const handleTogglePasswordVisibility = () => {
    SetShowPassword(!showPassword);
  };

  // loading
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <title>Eco Track | login</title>
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
              Login to
              <span> ECO</span>{" "}
              <span className="font-salsa text-primary tracking-wider">
                Track
              </span>
            </a>
          </div>

          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* name field */}
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
                  onClick={handleTogglePasswordVisibility}
                  className="absolute top-[50%] translate-y-[-50%] right-6 z-50 cursor-pointer"
                >
                  {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                </span>
              </div>
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="btn bg-primary text-white hover:opacity-90 mt-4"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" size={18} />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
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
                onClick={handleLoginWithGoogle}
                className="btn bg-white text-black hover:bg-secondary hover:text-white border-[#e5e5e5]"
              >
                <FcGoogle size={18} />
                Login with Google
              </button>
            </fieldset>
          </form>

          {/* Forgot password and other*/}
          <div className="text-center pt-2.5 flex flex-col justify-center items-center gap-2 text-xs">
            <Link to="/auth/password/reset" className="link link-hover">
              Forgot password?
            </Link>
            <p className="font-semibold text-secondary">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-primary tracking-wider hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
