import React from "react";

type Props = {};

const Section = (props: Props) => {
  return (
    <div className="py-9 bg-gray-light">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12">
            <nav>
              <ul className="flex flex-wrap items-center justify-center">
                <li className="mr-5">
                  <a
                    href="index.html"
                    className="text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5"
                  >
                    Home
                  </a>
                </li>
                <li className="text-dark font-medium text-base uppercase mr-5">
                  shop left sidebar
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
