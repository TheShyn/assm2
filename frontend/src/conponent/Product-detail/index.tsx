import React from 'react'

type Props = {}

const Product_detail = (props: Props) => {
    return (
        <div className="tw-py-9 tw-bg-gray-light">
        <div className="container">
            <div className="tw-grid tw-grid-cols-12 tw-gap-x-4">
                <div className="tw-col-span-12">
                    <nav>
                        <ul className="tw-flex tw-flex-wrap tw-items-center tw-justify-center">
                            <li className="tw-mr-5"><a href="index.html" className="tw-text-dark tw-font-medium tw-text-base tw-uppercase tw-transition-all tw-hover:text-orange tw-relative tw-before:w-5 tw-before:h-1px tw-before:empty tw-before:absolute tw-before:top-3 tw-before:bg-dark tw-before:transform tw-before:rotate-115 tw-before:-right-5">Home</a></li>
                            <li className="tw-text-dark tw-font-medium tw-text-base tw-uppercase mr-5">Airp Variable product</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
    <div className="py-24">

<div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
            <div className="relative overflow-hidden">
                <span className="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 bg-orange">Sale</span>
                <div className="gallery mb-6">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/lg/product1.webp" alt="product image"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/lg/product2.webp" alt="product image"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/lg/product3.webp" alt="product image"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/lg/product4.webp" alt="product image"/>
                            </div>
                            <div className="swiper-slide">
                                <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/lg/product5.webp" alt="product image"/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="gallery-nav relative">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="javascript:void(0)">
                                    <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/sm/product1.webp" alt="product image"/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:void(0)">
                                    <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/sm/product2.webp" alt="product image"/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:void(0)">
                                    <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/sm/product3.webp" alt="product image"/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:void(0)">
                                    <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/sm/product4.webp" alt="product image"/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="javascript:void(0)">
                                    <img src="http://127.0.0.1:5501/Template_Asm2/assets/images/single-product/sm/product5.webp" alt="product image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                   
                    <div className="swiper-buttons">
                        <div className="swiper-button-prev right-auto left-4  w-8 h-8 rounded-full  border border-solid border-gray-500 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange">
                            <i className="ion-chevron-left"></i>
                        </div>
                        <div className="swiper-button-next left-auto right-4  w-8 h-8 rounded-full  border border-solid border-gray-500 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange">
                            <i className="ion-chevron-right"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <h3 className="font-medium text-lg capitalize">Airp Variable product</h3>
            <h5 className="font-bold text-md leading-none text-orange my-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
            <div className="mb-3">Vendor:<span> Vendor 3 </span></div>
            <div className="mb-3">Type: <span> Type 3 </span></div>
            <div className="mb-3"><span>Availability:</span> <span className="font-semibold">9 left in stock</span></div>
            <p className="mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

            <div>
                <div className="flex flex-wrap items-center  mb-6">
                    <span className="mr-6">Color:</span>
                    <form action="#" className="colors-swatch">
                        <ul className="flex flex-wrap">
                            <li className="mx-1">
                                <input className="hidden opacity-0" type="radio" checked name="radio-group" id="color1"/>
                                <label htmlFor="color1" className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-indigo-800 cursor-pointer capitalize"></label>
                            </li>

                            <li className="mx-1">
                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color2"/>
                                <label htmlFor="color2" className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-pink-600 cursor-pointer capitalize"></label>
                            </li>
                            <li className="mx-1">
                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color3"/>
                                <label htmlFor="color3" className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-red-600 cursor-pointer capitalize"></label>
                            </li>

                            <li className="mx-1">
                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color4"/>
                                <label htmlFor="color4" className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-green-500 cursor-pointer capitalize"></label>
                            </li>

                            <li className="mx-1">
                                <input className="hidden opacity-0" type="radio" name="radio-group" id="color5"/>
                                <label htmlFor="color5" className="w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all relative bg-yellow-500 cursor-pointer capitalize"></label>
                            </li>
                        </ul>
                    </form>
                </div>


                <div className="mb-8">
                    <div className="flex flex-wrap items-center mt-8">
                        <div className="flex count border border-solid border-gray-300 p-2 h-11">
                            <button className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                            <input type="number" min="1" max="100" step="1" value="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none"/>
                            <button className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                        </div>
                        <div className="ml-2 sm:ml-8">
                            <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange" aria-label="add to cart">Add to Cart</button>
                        </div>
                        <a href="#" className="text-md ml-8"><i className="icon-heart"></i></a>
                        <a href="#" className="text-md ml-8"><i className="icon-refresh"></i></a>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-start mb-8">
                    <a href="#" className="text-md text-facebook hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><i className="icon-social-facebook"></i></a>
                    <a href="#" className="text-md text-twitter hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><i className="icon-social-twitter"></i></a>
                    <a href="#" className="text-md text-dribbble hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><i className="icon-social-instagram"></i></a>
                    <a href="#" className="text-md text-pinterest hover:text-dark leading-none transition"><i className="icon-social-youtube"></i></a>
                    <div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <a href="#" className="mr-2"><img src="http://127.0.0.1:5501/Template_Asm2/assets/images/payment/amazon.svg" alt="payment icon"/></a>
                    <a href="#" className="mr-2"><img src="http://127.0.0.1:5501/Template_Asm2/assets/images/payment/apple-pay.svg" alt="payment icon"/></a>
                    <a href="#" className="mr-2"><img src="http://127.0.0.1:5501/Template_Asm2/assets/images/payment/bitcoin.svg" alt="payment icon"/></a>
                    <a href="#" className="mr-2"><img src="http://127.0.0.1:5501/Template_Asm2/assets/images/payment/google-pay.svg" alt="payment icon"/></a>
                    <a href="#" className="mr-2"><img src="http://127.0.0.1:5501/Template_Asm2/assets/images/payment/paypal.svg" alt="payment icon"/></a>
                    <a href="#" className="mr-2"><img src="http://127.0.0.1:5501/Template_Asm2/assets/images/payment/visa.svg" alt="payment icon"/></a>
                </div>

            </div>

        </div>
    </div>
</div>

</div>
    </div>
    )
}

export default Product_detail