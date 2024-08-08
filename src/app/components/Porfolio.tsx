export default function Porfolio() {
  return (
    <div>
      <h1 className="text-gray-900 text-4xl text-center font-extrabold mb-4 tracking-tight">
        Porfolio
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg" src="\pos_system.jpg  " alt="" />
            </a>
            <div className="p-5 flex flex-col grow">
              <div className="grow-0">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    POS System Project
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  School project using java language to build.
                </p>
              </div>
              <div className="grow flex items-end">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm
                  font-medium text-center text-white bg-blue-700 rounded-lg
                   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/textboard-project.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <div className="">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Textboard Project
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  School project in web design course using html, tailwindcss
                  which css library and javascript framework react.js with vite.
                </p>
              </div>
              <div className="  ">
                <a
                  href="https://gic-textboard.netlify.app/"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
