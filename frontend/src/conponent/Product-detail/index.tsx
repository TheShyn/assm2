import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductBySlugQuery } from '../../api/product'

type Props = {}

const Product_detail = (props: Props) => {
    const { slug } = useParams()
    console.log(slug)
    const { data } = useGetProductBySlugQuery(slug)
    console.log(data);

    const [count, Setcount] = useState(1)
    const countId = count;
    const increment = () => {
        return Setcount(count + 1);
    }
    const decrement = () => {
        if (countId === 1) {

        } else {
            return Setcount(count - 1);
        }
    }
    return (
        <div className="tw-py-9 tw-bg-gray-light">
           
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
                                                <img src="../../../src/assets/images/single-product/lg/product1.webp" alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="../../../src/assets/images/single-product/lg/product2.webp" alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="../../../src/assets/images/single-product/lg/product3.webp" alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="../../../src/assets/images/single-product/lg/product4.webp" alt="product image" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="../../../src/assets/images/single-product/lg/product5.webp" alt="product image" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="gallery-nav relative">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <a href="javascript:void(0)">
                                                    <img src="../../../src/assets/images/single-product/sm/product1.webp" alt="product image" />
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
                            <h3 className="font-medium text-lg capitalize">{data?.data?.name}</h3>
                            <h5 className="font-bold text-md leading-none text-orange my-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>{data?.data?.price}</h5>
                            <div className="mb-3">Người  bán:<span> Trung  </span></div>
                            <div className="mb-3">Số lượng : <span> 100 </span></div>
                            <div className="mb-3"><span>Ngày bán:</span> <span className="font-semibold">9 left in stock</span></div>
                            <p className="mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                            <div>
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center mt-8">
                                        <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                            <button onClick={() => decrement()} className="decrement flex-auto w-5 leading-none" aria-label="button">-</button>
                                            <input type="number" min="1" max="100" step="1" value={countId} className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none" />
                                            <button onClick={() => increment()} className="increment flex-auto w-5 leading-none" aria-label="button">+</button>
                                        </div>
                                        <div className="ml-2 sm:ml-8">
                                            <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange" aria-label="add to cart">Mua</button>
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
                                    <a href="#" className="mr-2"><img src="../../../src/assets/images/payment/amazon.svg" alt="payment icon" /></a>
                                    <a href="#" className="mr-2"><img src="../../../src/assets/images/payment/apple-pay.svg" alt="payment icon" /></a>
                                    <a href="#" className="mr-2"><img src="../../../src/assets/images/payment/bitcoin.svg" alt="payment icon" /></a>
                                    <a href="#" className="mr-2"><img src="../../../src/assets/images/payment/google-pay.svg" alt="payment icon" /></a>
                                    <a href="#" className="mr-2"><img src="../../../src/assets/images/payment/paypal.svg" alt="payment icon" /></a>
                                    <a href="#" className="mr-2"><img src="../../../src/assets/images/payment/visa.svg" alt="payment icon" /></a>
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