import React from "react";
import { useAppDispatch } from "../../app/hook";
import { useGetProductBySlugQuery, useGetProductsQuery } from "../../api/product";
import { Link } from "react-router-dom";

const ListProduct = () => {
    const dispatch = useAppDispatch();
    
    const { data, isLoading } = useGetProductsQuery()
    console.log(data?.data);
    // console.log(data);
    if (isLoading) return <>loading...</>
    return (
        <div>
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Check Our Products</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Our Latest Products</h2>
                                <span>Check out all of our products.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {data?.data?.map((item: any) => {
                            console.log(item);


                            return (
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <Link to={`/products/${item?.slug}`}>
                                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                    </Link>

                                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src={item?.images?.[0]} alt=""  className='w-[400px] h-[500px] object-cover'/>
                                        </div>


                                        <div className="down-content">
                                            <h4>{item?.name}</h4>
                                            <span>${item?.price}</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </section>
        </div>


    );
};

export default ListProduct;
