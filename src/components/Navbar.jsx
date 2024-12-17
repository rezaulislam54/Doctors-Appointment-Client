import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/assets_frontend/logo.svg";
// import Spinar from "./Spinar";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = (e) => {
    e.preventDefault();
    if (user) {
      logOut().then(() => {
        // console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "User Logout Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      });
    }
  };

  const navlinks = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? (
            <Spinar></Spinar>
          ) : isActive ? (
            "text-primary font-semibold md:border-b-2 border-[#FF497C]"
          ) : (
            "font-semibold"
          )
        }
      >
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink
        to={"/doctors"}
        className={({ isActive, isPending }) =>
          isPending ? (
            // <Spinar></Spinar>
            <p>Loading.....</p>
          ) : isActive ? (
            "text-primary font-semibold md:border-b-2 border-[#FF497C]"
          ) : (
            "font-semibold"
          )
        }
      >
        <li>
          <a>All Doctors</a>
        </li>
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive, isPending }) =>
          isPending ? (
            // <Spinar></Spinar>
            <p>Loading.....</p>
          ) : isActive ? (
            "text-primary font-semibold md:border-b-2 border-[#FF497C]"
          ) : (
            "font-semibold"
          )
        }
      >
        <li>
          <a>About</a>
        </li>
      </NavLink>

      {/* <NavLink
        to={"/myadded"}
        className={({ isActive, isPending }) =>
          isPending ? (
            <Spinar></Spinar>
          ) : isActive ? (
            "text-primary md:border-b-2 border-[#FF497C]"
          ) : (
            "font-semibold"
          )
        }
      >
        <li>
          <a>Services</a>
        </li>
      </NavLink> */}

      <NavLink
        to={"/addservice"}
        className={({ isActive, isPending }) =>
          isPending ? (
            <Spinar></Spinar>
          ) : isActive ? (
            "text-primary font-semibold md:border-b-2 border-[#FF497C]"
          ) : (
            "font-semibold"
          )
        }
      >
        <li>
          <a>Contact</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className=" h-20 bg-base-100 shadow-md">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <Link>
            <img className="h-14 p-1" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 font-medium text-[17px]">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {/* profile Icons  */}
          <button className="btn btn-outline btn-secondary mr-3">
            Appointment
          </button>
          {user ? (
            <div className="dropdown dropdown-end hidden md:flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img alt="" src={user?.photoURL} />
                  ) : (
                    <img
                      alt=""
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-md dropdown-content bg-base-100 rounded-box z-[5] mt-14 w-40 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="bg-[#ff487c] text-white px-7 py-1 font-semibold rounded-md">
                Login
              </button>
            </Link>
          )}
          {/* Menu Icons */}

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="absolute right-0 menu menu-md dropdown-content bg-base-100 rounded-box z-[5] mt-1 w-52 p-2 pl-5 shadow font-medium text-[17px]"
            >
              {navlinks}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mx-auto my-2"
              >
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} />
                  ) : (
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  )}
                </div>
              </div>
              <h1 className="text-center">
                <p>{user?.displayName}</p>
                <button
                  onClick={handleLogOut}
                  className="bg-[#ff487c] text-white w-full py-1 my-4 rounded-sm"
                >
                  LogOut
                </button>
              </h1>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
