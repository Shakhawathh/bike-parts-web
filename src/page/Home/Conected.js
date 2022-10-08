import React from "react";

const Conected = () => {
  return (
    <div>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <img
                class="w-full max-w-md mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png"
                alt=""
              />
            </div>

            <div class="text-center lg:text-left">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow business with connections.
              </h2>
              <p class="mt-6 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Check all 1486 Business{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conected;
