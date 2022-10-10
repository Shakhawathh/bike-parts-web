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
                  class="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <button
              type="button"
              class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10 ">
              {navbarItems}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar2;
