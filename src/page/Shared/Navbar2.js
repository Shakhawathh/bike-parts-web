import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar2 = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const navbarItems = (
    <>
      <Link
        to="/"
        class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
      >
        {" "}
        Home{" "}
      </Link>
      <a
        href="#"
        title=""
        class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
      >
        {" "}
        Service{" "}
      </a>
      <a
        href="/blog"
        title=""
        class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
      >
        {" "}
        Blog{" "}
      </a>
      {user && (
        <a
          href="/Dashboard"
          title=""
          class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
        >
          {" "}
          Dashboard{" "}
        </a>
      )}

      <div class="w-px h-5 bg-black/20"></div>
      {user ? (
        <a
          href="#"
          title=""
          onClick={logout}
          class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
        >
          {" "}
          Log out{" "}
        </a>
      ) : (
        <a
          href="/login"
          title=""
          class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
        >
          {" "}
          Log in{" "}
        </a>
      )}
    </>
  );
  return (
    <div>
      <header class="bg-gradient-to-b from-green-50 to-green-50">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="#" title="" class="flex">
                <img
                  class=" w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-b from-green-50 to-green-50 gap-2 rounded-box w-52"
                >
                  {navbarItems}
                </ul>
              </div>
            </div>

            <div class="hidden ml-auto  lg:flex lg:items-center lg:justify-center lg:space-x-10 ">
              {navbarItems}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar2;
