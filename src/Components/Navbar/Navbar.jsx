import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  console.log(user);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        console.log("logout successful");
        navigate("/auth/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const links = (
    <>
      <li className="hover:text-primary">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink to="/challenges">Challenges</NavLink>
      </li>

      {user && (
        <>
          <li className="hover:text-primary">
            <NavLink to="/myActivities">My Activities</NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center lg:px-7">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* logo */}
          <div className="flex justify-center items-center gap-0.5">
            <a className="">
              <img src="/logo.png" alt="" className="w-10 md:w-14" />
            </a>
            <a className="text-xl md:text-3xl">
              <span className=" font-bold">ECO</span>{" "}
              <span className="font-salsa text-primary tracking-wide font-semibold">
                Track
              </span>
            </a>
          </div>
        </div>
        {/* navbar end */}
        <div className="navbar-end">
          <div className="hidden lg:flex mr-6">
            <ul className="flex gap-6 items-center text-sm text-secondary font-medium special">
              {links}
            </ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img title={user?.displayName} alt="" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li className=" hover:text-primary">
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li className=" hover:text-primary">
                  <Link to="/myActivities" className="justify-between">
                    My Activities
                  </Link>
                </li>
                <li className=" hover:text-primary">
                  <button type="button" onClick={handleSignOutUser}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-outline btn-accent hover:bg-primary hover:text-white px-5 mr-6"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn bg-primary hover:opacity-90 text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
