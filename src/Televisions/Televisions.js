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

<div className="mx-3">
            <div className="container-fluid">

                <div className="row d-flex flex-column">

                <div className="row col-12">
                    <div className="d-flex justify-content-center">
                        <h1 className="pageHeader">TELEVISIONS</h1>
                    </div>
                    <div className=" mb-5">

                        <Slider {...settings}>
                            <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                TVs
                            </div>
                            <div className="mx-3"></div>
                            <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                TV Accessoires
                            </div>
                            <div className="mx-3"></div>
                            <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                Reciver
                            </div>
                            <div className="mx-3"></div>
                            <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                Home Theaters
                            </div>
                        </Slider>
                    </div>
                </div>

                    <div className="col-12">

                        <div className="col-12 px-5">
                            <div className="d-flex mx-3 justify-content-between col-12 flex-wrap">
                                <div>
                                <span className="col-md-6 col-12">10000 Product</span>
                                </div>

                                <div className="d-flex col-6 col-12 justify-content-end">
                                    <FaSortAmountDown />
                                    <select className="d-flex px-5 border-bottom dropDown active">
                                        <option className="dropdown-item" value="1" selected disabled>Position</option>
                                        <option className="dropdown-item" value="2">Price</option>
                                        <option className="dropdown-item" value="3">A-z</option>
                                        <option className="dropdown-item" value="4">Rating</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap">

                            
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column shadow bg-white col mx-3 col-lg-2  my-2 position-relative">
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/4/3/43au7000.jpg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>



                        </div>




                        <div className="endLine"><span>Showing 20 out of 2022</span></div>

                        <div className="d-flex align-items-center justify-content-center my-5">
                            <div className="mx-3">
                                <i class="bi bi-arrow-down loadMore btn text-light"></i>
                            </div>
                            <p className="mt-3">Load More</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    </>);
}

export default Televisions;