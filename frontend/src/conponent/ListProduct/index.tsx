import React from "react";

type Props = {};

const ListProduct = (props: Props) => {
  return (
    <div className="py-24">
    <div className="container">
        <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
            <div className="lg:w-1/4 px-4 order-last lg:order-first mt-8 lg:mt-0">
                <div>
                    <div className="mb-12">
                        <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">Search</h4>
                        <div className="pro-sidebar-search mb-50 mt-25">
                            <form className="border border-solid border-gray-300" action="#" method="get">
                                <div className="relative">
                                    <input className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search our store" />
                                    <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300" type="submit"><i className="icon-magnifier"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="mb-12">
                        <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-5">Categories</h4>
                        <ul>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-1" type="checkbox" />
                                <label htmlFor="checkbox-1" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Backpack </label>
                                <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
    hover:bg-orange transition-all">9</a>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-2" type="checkbox" />
                                <label htmlFor="checkbox-2" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Headphone </label>
                                <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
    hover:bg-orange transition-all">8</a>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-3" type="checkbox" />
                                <label htmlFor="checkbox-3" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Drone </label>
                                <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
    hover:bg-orange transition-all">7</a>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-4" type="checkbox" />
                                <label htmlFor="checkbox-4" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Fourth option</label>
                                <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
    hover:bg-orange transition-all">7</a>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-5" type="checkbox" />
                                <label htmlFor="checkbox-5" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Smartwatch </label>
                                <a href="#" className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300 text-sm hover:text-white
    hover:bg-orange transition-all">7</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-8">Vendors</h4>

                        <ul>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-11" type="checkbox" />
                                <label htmlFor="checkbox-11" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center"> Vendor 1 </label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-21" type="checkbox" />
                                <label htmlFor="checkbox-21" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center"> Vendor 10 </label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-31" type="checkbox" />
                                <label htmlFor="checkbox-31" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center"> Vendor 11 </label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-41" type="checkbox" />
                                <label htmlFor="checkbox-41" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Vendor 12</label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-51" type="checkbox" />
                                <label htmlFor="checkbox-51" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">Vendor 2 </label>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">Color</h4>
                        <ul>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-12" type="checkbox" />
                                <label htmlFor="checkbox-12" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">red </label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-22" type="checkbox" />
                                <label htmlFor="checkbox-22" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">green </label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-32" type="checkbox" />
                                <label htmlFor="checkbox-32" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">blue </label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-42" type="checkbox" />
                                <label htmlFor="checkbox-42" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">yellow</label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-52" type="checkbox" />
                                <label htmlFor="checkbox-52" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">white </label>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">Size</h4>

                        <ul>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-13" type="checkbox" />
                                <label htmlFor="checkbox-13" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">s</label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-23" type="checkbox" />
                                <label htmlFor="checkbox-23" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">m</label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-33" type="checkbox" />
                                <label htmlFor="checkbox-33" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">l</label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-43" type="checkbox" />
                                <label htmlFor="checkbox-43" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">xl</label>
                            </li>
                            <li className="mb-5 flex justify-between items-center transition-all hover:text-orange">
                                <input className="checkbox opacity-0 absolute" id="checkbox-53" type="checkbox" />
                                <label htmlFor="checkbox-53" className="relative cursor-pointer before:empty before:inline-block before:w-5 before:h-5 before:bg-white before:border-2 before:border-solid before:border-gray-300 before:rounded before:mr-4 align-middle flex items-center">xxl</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-md lg:text-lg text-dark capitalize mb-10">Tags</h4>

                        <ul className="flex flex-wrap -m-1">
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">black</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">blue</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">fiber</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">gold</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">gray</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">green</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">l</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">leather</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">m</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">magenta</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">maroon</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">metal</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">navy</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">orange</a></li>
                            <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">pink</a></li>
                        </ul>


                    </div>
                </div>
            </div>

            <div id="shoptab" className="flex-1">
                <div className="flex flex-wrap justify-between items-center px-4">
                    <div className="flex flex-wrap">
                        <div className="shop-select flex mr-12">
                            <label htmlFor="SortBy">Sort by :</label>
                            <select id="SortBy" className="px-2 bg-transparent">
                                <option value="manual">Featured</option>
                                <option value="best-selling">Best Selling</option>
                                <option value="title-ascending">Alphabetically, A-Z</option>
                                <option value="title-descending">Alphabetically, Z-A</option>
                                <option value="price-ascending">Price, low to high</option>
                                <option value="price-descending">Price, high to low</option>
                                <option value="created-descending">Date, new to old</option>
                                <option value="created-ascending">Date, old to new</option>
                            </select>
                        </div>
                        <p className="my-2 sm:my-0">Showing 1 - 9 of 9 result</p>
                    </div>
                    <div>
                        <span>Show :</span>
                        <select className="bg-transparent">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <ul className="shop-tab-nav flex flex-wrap">
                            <li className="active"><a href="#grid" className="text-base hover:text-orange inline-block py-2 px-2"><i className="icon-grid"></i></a></li>
                            <li><a href="#list" className="text-base hover:text-orange inline-block py-2 px-2 ml-5"><i className="icon-menu"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10">
                    <div id="grid" className="shop-tab-content active">
                        <div className="flex flex-wrap -mb-7 -px-4">
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-7">
                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                    <div className="relative overflow-hidden">
                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                        <img className="w-full h-full" src="/src/assets/images/products/drone/product2.webp" alt="product image" loading="lazy" width="432" height="480" />


                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="quick view" data-tippy-content="Quick View">
                                                        <i className="icon-magnifier"></i>
                                                    </a>
                                                </li>
                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="quick veiw" data-tippy-content="Add to wishlist">
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                </li>
                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="compare" data-tippy-content="Compare">
                                                        <i className="icon-refresh"></i>
                                                    </a>
                                                </li>
                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="add to cart" data-tippy-content="Add to cart">
                                                        <i className="icon-bag"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="py-5 px-4">
                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Esse quam nihil molestiae</a></h4>
                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="list" className="shop-tab-content">
                        <div className="flex flex-wrap -mb-7 -px-4">

                            <div className="w-full px-4 mb-7">
                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                    <div className="relative overflow-hidden md:w-1/3">
                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                        <img className="md:absolute w-full md:h-full md:object-cover" src="/src/assets/images/products/drone/product2.webp" alt="product image" loading="lazy" width="432" height="480" />


                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                <li>
                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                        <i className="icon-magnifier-add"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
{/* 
                                    <div className="py-5 px-4 flex-1">
                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Esse quam nihil molestiae</a></h4>
                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                        <ul className="flex items-center">
                                            <li className="mr-2">
                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                    <i className="icon-heart"></i>
                                                </a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                    <i className="icon-basket-loaded"></i>
                                                    <span className="text-sm ml-2">Add to cart</span>

                                                </a>
                                            </li>
                                            <li className="mr-2">
                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                    <i className="icon-refresh"></i>
                                                </a>
                                            </li>

                                        </ul>
                                    </div> */}

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <ul className="pagination flex flex-wrap items-center justify-center">
                        <li className="mx-2">
                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">
                                <i className="icon-arrow-left"></i>
                            </a>
                        </li>

                        <li className="mx-2">
                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white active" href="#">1</a>
                        </li>
                        <li className="mx-2">
                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">2</a>
                        </li>
                        <li className="mx-2">
                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">3</a>
                        </li>
                        <li className="mx-2">
                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">
                                <i className="icon-arrow-right"></i>
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ListProduct;
