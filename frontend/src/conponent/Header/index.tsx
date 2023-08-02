import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <header id="sticky-header">
        <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
          <div className="flex items-center lg:relative">
            <div className="w-6/12 lg:w-2/12">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/src/assets/images/logo/logo.webp"
                    alt="logo"
                    loading="lazy"
                    width="125"
                    height="45"
                  />
                </a>
              </div>
            </div>
            <div className="hidden lg:flex flex-1 xl:relative">
              <nav className="main-menu">
                <ul className="flex flex-wrap">
                  <li className="main-menu__item relative group">
                    <a
                      className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="https://htmldemo.net/"
                    >
                      Home
                    </a>
                  </li>

                  <li className="main-menu__item group">
                    <a
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                  <li className="main-menu__item relative group">
                    <a
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="main-menu__item relative group">
                    <a
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="#"
                    >
                      pages
                    </a>
                  </li>
                  <li className="main-menu__item">
                    <a
                      className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all"
                      href="contact-us.html"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="w-6/12 lg:w-3/12">
              <ul className="flex items-center justify-end">
                <li className="ml-6 hidden lg:block">
                  <button
                    className="search-toggle text-right text-primary text-md hover:text-orange transition-all"
                    aria-label="icon-settings"
                  >
                    <i className="icon-magnifier"></i>
                  </button>
                </li>
                <li className="ml-6">
                  <a
                    href="#offcanvas-cart"
                    className="text-primary text-md hover:text-orange transition-all relative offcanvas-toggle"
                  >
                    <span className="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">
                      4
                    </span>
                    <i className="icon-bag"></i>
                    <span className="text-base leading-none text-dark">
                      $245
                    </span>
                  </a>
                </li>
                <li id="toggle-menu" className="ml-6 hidden lg:block relative">
                  <button
                    className="text-primary text-md hover:text-orange transition-all toggle-menu"
                    aria-label="icon-settings"
                  >
                    <i className="icon-settings"></i>
                  </button>
                  <div
                    id="settings-card"
                    className="bg-white absolute right-0 px-8 py-5 shadow w-80 opacity-0 invisible transition-all duration-300 ease-in-out z-20"
                  >
                    <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">
                      Currency
                    </h4>
                    <ul>
                      <li className="my-4">
                        <a
                          href="#"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          USD - US Dollar
                        </a>
                      </li>
                      <li className="my-4">
                        <a
                          href="#"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          EUR - Euro
                        </a>
                      </li>
                      <li className="my-4">
                        <a
                          href="#"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          GBP - British Pound
                        </a>
                      </li>
                    </ul>
                    <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">
                      Account
                    </h4>
                    <ul>
                      <li className="my-4">
                        <a
                          href="login-register.html"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          Login
                        </a>
                      </li>
                      <li className="mt-4">
                        <a
                          href="account.html"
                          className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide"
                        >
                          Create Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="ml-6 lg:hidden">
                  <a
                    href="#offcanvas-mobile-menu"
                    className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"
                  >
                    <i className="icon-menu"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="search-form fixed top-0 left-0 w-full bg-black opacity-95 min-h-screen items-center justify-center py-8 px-10 transform  transition-transform translate-x-full ease-in-out duration-500 hidden lg:flex z-50">
        <button
          className="search-close absolute left-1/2 text-white text-xl top-12 translate-y-1/2"
          aria-label="close icon"
        >
          <span className="icon-close"></span>
        </button>
        <form className="relative xl:w-1/3 lg:w-1/2" action="#" method="get">
          <input
            className="text-md font-normal border-b border-solid border-gray-600 bg-transparent h-14 w-full focus:outline-none pr-14 text-white"
            type="search"
            name="search"
            placeholder="Search our store"
          />
          <button
            className="absolute right-0 top-3 text-white text-md font-normal"
            type="submit"
            aria-label="submit button"
          >
            <i className="icon-magnifier"></i>
          </button>
        </form>
      </div>

      <div className="offcanvas-overlay hidden fixed inset-0 bg-black opacity-50 z-50"></div>

      <div
        id="offcanvas-mobile-menu"
        className="offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-72 sm:w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white"
      >
        <div className="px-8 py-12 h-5/6 overflow-y-auto">
          <form
            className="pb-10 mb-10 border-b border-solid border-gray-600"
            action="#"
            method="get"
          >
            <div className="relative">
              <input
                className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-gray-light text-dark placeholder-current focus:outline-none"
                type="search"
                name="search"
                placeholder="Search our store"
              />
              <button
                className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-600"
                type="submit"
                aria-label="button"
              >
                <i className="icon-magnifier"></i>
              </button>
            </div>
          </form>

          <button
            className="offcanvas-close bg-dark group transition-all hover:text-orange text-white w-10 h-10 flex items-center justify-center absolute -left-10 top-0"
            aria-label="offcanvas"
          >
            <i className="icon-close transition-all transform group-hover:rotate-90"></i>
          </button>

          <nav className="offcanvas-menu pb-10 mb-10 border-b border-solid border-gray-600">
            <ul>
              <li className="relative block">
                <a
                  href="#"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Home
                </a>
                <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="index.html"
                    >
                      Airpod
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="index-2.html"
                    >
                      Smartwatch
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="index-3.html"
                    >
                      Drone
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="index-4.html"
                    >
                      BackPack
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative block">
                <a
                  href="#"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Shop
                </a>
                <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="#"
                    >
                      Shop Grid
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-grid-3-column.html"
                        >
                          Shop Grid 3 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-grid-4-column.html"
                        >
                          Shop Grid 4 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-grid-left-sidebar.html"
                        >
                          Shop Grid Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-grid-right-sidebar.html"
                        >
                          shop Grid Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="#"
                    >
                      shop list
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-list.html"
                        >
                          Shop List
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-list-left-sidebar.html"
                        >
                          Shop List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="shop-list-right-sidebar.html"
                        >
                          Shop List right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="#"
                    >
                      blogs
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-3-column.html"
                        >
                          Blog Grid 3 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-4-column.html"
                        >
                          Blog Grid 4 Column
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-left-sidebar.html"
                        >
                          Blog Grid Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-right-sidebar.html"
                        >
                          Blog Grid Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="#"
                    >
                      Product Types
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="single-product.html"
                        >
                          Shop Single
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="single-product-configurable.html"
                        >
                          Shop Variable
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="single-product-affiliate.html"
                        >
                          Shop Affiliate
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="single-product-group.html"
                        >
                          Shop Group
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="relative block">
                <a
                  href="#"
                  className="block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Blog
                </a>
                <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="#"
                    >
                      Blog Grid
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-3-column.html"
                        >
                          Blog Grid 3 column
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-2-column.html"
                        >
                          Blog Grid 2 column
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-left-sidebar.html"
                        >
                          Blog Grid Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-grid-right-sidebar.html"
                        >
                          Blog Grid Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange"
                      href="#"
                    >
                      Blog List
                    </a>
                    <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-list-left-sidebar.html"
                        >
                          Blog List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-list-right-sidebar.html"
                        >
                          Blog List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange"
                          href="blog-details.html"
                        >
                          Blog details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="relative block">
                <a
                  href="about-us.html"
                  className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  about Us
                </a>
              </li>
              <li className="relative block">
                <a
                  href="contact.html"
                  className="relative block capitalize font-normal text-base my-2 py-1 font-roboto"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul id="settings-menu">
              <li className="block mb-3">
                <a
                  className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange"
                  href="javascript:void(0)"
                >
                  Currency <i className="icon-arrow-down"></i>
                </a>
                <ul className="sub-category hidden py-5 px-6 shadow">
                  <li className="my-2 block">
                    <a
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      EUR €
                    </a>
                  </li>
                  <li className="my-2 block">
                    <a
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      USD $
                    </a>
                  </li>
                </ul>
              </li>
              <li className="block mb-3">
                <a
                  className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange"
                  href="javascript:void(0)"
                >
                  Account <i className="icon-arrow-down"></i>
                </a>
                <ul className="sub-category hidden py-5 px-6 shadow">
                  <li className="my-2 block">
                    <a
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      English
                    </a>
                  </li>
                  <li className="my-2 block">
                    <a
                      className="font-light text-sm tracking-wide text-dark block hover:text-orange"
                      href="#"
                    >
                      Français
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        id="offcanvas-cart"
        className="offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white overflow-y-auto"
      >
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-solid border-gray-600">
            <h4 className="font-normal text-md text-dark capitalize">
              Shoping Cart
            </h4>
            <button
              className="offcanvas-close hover:text-orange"
              aria-label="close icon"
            >
              <i className="icon-close"></i>
            </button>
          </div>
          <ul className="h-96 overflow-y-auto">
            <li className="flex flex-wrap group mb-8">
              <div className="mr-5 relative">
                <a href="#">
                  <img
                    src="assets/images/cart/product1.webp"
                    alt="product image"
                    loading="lazy"
                    width="90"
                    height="100"
                  />
                </a>
                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="flex-1">
                <h4>
                  <a
                    className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                    href="#"
                  >
                    Birpod product unsde - m / gold
                  </a>
                </h4>
                <span className="font-light text-sm text-dark transition-all tracking-wide">
                  1 x <span>$80.00</span>
                </span>
              </div>
            </li>
            <li className="flex flex-wrap group mb-8">
              <div className="mr-5 relative">
                <a href="https://htmldemo.net/#">
                  <img
                    src="assets/images/cart/product2.webp"
                    alt="product image"
                    loading="lazy"
                    width="90"
                    height="100"
                  />
                </a>
                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="flex-1">
                <h4>
                  <a
                    className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                    href="https://htmldemo.net/#"
                  >
                    Airpod product kiebd - red
                  </a>
                </h4>
                <span className="font-light text-sm text-dark transition-all tracking-wide">
                  1 x <span>$99.00</span>
                </span>
              </div>
            </li>
            <li className="flex flex-wrap group mb-8">
              <div className="mr-5 relative">
                <a href="#">
                  <img
                    src="assets/images/cart/product3.webp"
                    alt="product image"
                    loading="lazy"
                    width="90"
                    height="100"
                  />
                </a>
                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="flex-1">
                <h4>
                  <a
                    className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide"
                    href="#"
                  >
                    Airpod product ides - navy
                  </a>
                </h4>
                <span className="font-light text-sm text-dark transition-all tracking-wide">
                  1 x <span>$39.00</span>
                </span>
              </div>
            </li>
          </ul>
          <div>
            <div className="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-solid border-gray-600 font-normal text-base text-dark capitalize">
              Total:<span>$218.00</span>
            </div>
            <div className="text-center">
              <a
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none"
                href="checkout.html"
              >
                Checkout
              </a>
              <a
                className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none mt-3"
                href="cart.html"
              >
                View Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
