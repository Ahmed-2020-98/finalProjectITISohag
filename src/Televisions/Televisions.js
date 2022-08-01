import React from "react";
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Rating from "react-rating";
import StarRating from 'star-rating-react';
import Slider from "react-slick";
import { FaSortAmountDown } from "react-icons/fa";




const Televisions = () => {


    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };

    return (<>

        <div className="mx-3 marginDiv">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h1 className="pageHeader">Televisions</h1>
                </div>
                <div className=" mb-5 ms-1">

                    <Slider {...settings}>
                        <div class="compareButton p-3 m-2 d-flex justify-content-center">
                            TVs
                        </div>
                        <div className="mx-3"></div>
                        <div class="compareButton p-3 m-2">
                            TVs Accessories
                        </div>
                        <div className="mx-3"></div>
                        <div class="compareButton p-3 m-2">
                            Resivers Home Theaters
                        </div>
                        <div className="mx-3"></div>
                        <div class="compareButton p-3 m-2">
                            Feature Phones
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                {/* Call sidebar */}
                </div>
                <div className="col-9">
                    <div className="mx-5">
                        <div className="d-flex justify-content-between">
                            <span>10000 Product</span>

                            <div className="d-flex">
                            <FaSortAmountDown/>
                                <select className="d-flex px-5 border-bottom dropDown active">
                                    <option className="dropdown-item" value="1" selected disabled>Position</option>
                                    <option className="dropdown-item" value="2">Price</option>
                                    <option className="dropdown-item" value="3">A-z</option>
                                    <option className="dropdown-item" value="4">Rating</option>

                                </select>
                            </div>

                        </div>
                        <div className=" d-flex justify-content-center my-5">
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>

                        </div>
                        <div className=" d-flex justify-content-center my-5">
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>

                        </div>
                        <div className=" d-flex justify-content-center my-5">
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                        </div>
                        <div className=" d-flex justify-content-center my-5">
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>

                        </div>
                        <div className=" d-flex justify-content-center my-5">
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>
                            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/l/3/l32ut420.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body name text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body name text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm">
                                        <MdCompare className="mx-2" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </article>

                        </div>
                        <div className="endLine"><span>Showing 20 out of 2022</span></div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center my-5">
                        <div className="mx-3">
                            <i class="bi bi-arrow-down loadMore btn text-light"></i>
                        </div>
                        <p className="mt-3">Load More</p>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default Televisions;