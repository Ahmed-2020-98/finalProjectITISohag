import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import React, { component } from "react";
import Slider from "react-slick";
import image1 from "../../src/assets-images/image1.webp";
import image3 from "../../src/assets-images/image3.webp";
import image2 from "../../src/assets-images/image2.webp";
import image4 from "../../src/assets-images/image4.webp";
import image5 from "../../src/assets-images/image5.webp";
import image6 from "../../src/assets-images/image6.webp";
import image7 from "../../src/assets-images/image7.webp";
import image from "../../src/assets-images/image.webp";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import air from "../assets-images/air.jpg";
import fan from "../assets-images/fan.png";
import tv1 from "../assets-images/tv1.jpg";
import lenovo1 from "../assets-images/lenovo1.webp";
import tv2 from "../assets-images/tv2.webp";
import tv3 from "../assets-images/tv3.jpg";
import tv5 from "../assets-images/tv5.webp";
import tv4 from "../assets-images/tv4.webp";
import mob1 from "../assets-images/mob1.jpg";
import mob2 from "../assets-images/mob2.jpg";
import mob3 from "../assets-images/mob3.jpg";
import mob4 from "../assets-images/mob4.jpeg";
import mob5 from "../assets-images/mob5.jpg";
import mob6 from "../assets-images/mob6.jpg";
import mob7 from "../assets-images/mob7.jpg";
import mob8 from "../assets-images/mob8.png";
import mob9 from "../assets-images/mob9.jpg";
import mob10 from "../assets-images/mob10.jpeg";
import mob11 from "../assets-images/mob11.webp";
import download1 from "../assets-images/download1.webp";
import air1 from "../assets-images/air1.jpg";
import air2 from "../assets-images/air2.jpg";
import air3 from "../assets-images/air3.webp";
import air4 from "../assets-images/air4.webp";
import fan1 from "../assets-images/fan1.webp";
import fred1 from "../assets-images/fred1.webp";
import fred2 from "../assets-images/fred2.jpg";
import fred3 from "../assets-images/fred3.jpeg";
import fred4 from "../assets-images/fred4.jpg";
import fred5 from "../assets-images/fred5.webp";
import water from "../assets-images/water.jpeg";
import water1 from "../assets-images/water1.webp";
import water2 from "../assets-images/water2.jpg";
import offer from "../assets-images/offer.webp"
import StarRating from "star-rating-react";
import Carousel from 'react-bootstrap/Carousel';
import cool from '../assets-images/cool.webp'

export default class Raya extends React.Component {
  render() {
    const settings = {
        // className: "slider variable-width",
      //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    //   variableWidth: true
    };
    return (
      <>
      <div className="container ">
        <div className="row">
            <div className="col-6 ">
                <Carousel>
                    <Carousel.Item interval={10000}>
                <img className="d-block w-100 mg" src={image1} alt=""/>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img className="d-block w-100 mg" src={image3} alt=""/>
                </Carousel.Item>
                <Carousel.Item >
                <img className="d-block w-100 mg" src={image4} alt=""/>
                </Carousel.Item>
                <Carousel.Item >
                <img className="d-block w-100 mg" src={image5} alt=""/>
                </Carousel.Item>
                <Carousel.Item >
                <img className="d-block w-100 mg" src={image6} alt=""/>
                </Carousel.Item>
                <Carousel.Item >
                <img className="d-block w-100 mg" src={image7} alt=""/>
                </Carousel.Item>
                </Carousel>
                </div>
                <div className="col-3  ">
                 <img className="mm" src={image} alt=""/>
                </div>
                <div className="col-3  ">
                    <img className="mm" src={image2} alt=""/>
                </div>              
        </div>

      </div>
      <div className="icon  contanier d-flex justify-contect-center mx-4 col-11">
      <section  className="[mt-24 lg:mt-19 px-6 lg:px-0] container mx-auto w-full [xs:px-6 md:px-0][grid grid-cols-4 md:grid-cols-6 lg:flex flex-wrap justify-between] [gap-y-14 lg:gap-0]">
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
          
            <img  src={offer} alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
           
            <div className="pp ">
                <p  className="tt f">Hot Deals</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
            
            <img  src="	https://rayashop.hypernode.io/media/catalog/category/mobiles-_-tablets.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
            
            <div  className="pp ">
                <p  className="tt ">Mobiles & Tablets</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
           
            <img  src="https://rayashop.hypernode.io/media/catalog/category/tv_home_theater_2x.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
            
            <div  className="pp ">
                <p  className="tt ">Televisions</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
            
            <img  src="	https://rayashop.hypernode.io/media/catalog/category/large_appliances_2x.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
           
            <div  className="pp ">
                <p  className="tt ">Large Appliances</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
            
            <img  src="	https://rayashop.hypernode.io/media/catalog/category/small_appliances_2x.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
            
            <div  className="pp ">
                <p  className="tt ">Small Appliances</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
            
            <img  src="https://rayashop.hypernode.io/media/catalog/category/mobiles-_-tablets.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
            
            <div  className="pp ">
                <p  className="tt ">Summer Offers</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
           
            <img src="		https://rayashop.hypernode.io/media/catalog/category/kitchen_appliances_2x.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
           
            <div  className="pp ">
                <p  className="tt ">Kitchen Appliances</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
           
            <img  src="		https://rayashop.hypernode.io/media/catalog/category/electronics_2x_2.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
           
            <div  className="pp ">
                <p  className="tt ">Electronics</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
           
            <img src="		https://rayashop.hypernode.io/media/catalog/category/computers_2x.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
            
            <div className="pp ">
                <p  className="tt ">Laptops & PCs</p>
            </div>
        </a>
        <a  href="/deals" className="rounded-3xs justify-center item relative md:flex flex-1">
            
            <img  src="	https://rayashop.hypernode.io/media/catalog/category/health_and_wellness_2x.png" alt="Hot Deals" role="presentation"  className=" immg [absolute -top-10 transform -translate-x-1/2] w-15 h-15 object-contain left-1/2"/>
            
            <div  className="pp ">
                <p  className="tt ">Health & Beauty</p>
            </div>
        </a>
      </section>
      </div>
        <h1>OUR TOP OFFERS</h1>
        <div className="container col-10">
            
          <Slider {...settings}>
            {/* <div className=" d-flex justify-content-center my-5"> */}
            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
              <div className="d-flex position-absolute heart">
                <FiHeart className="loveBtn grow" />
              </div>
              <div className="my-4 d-flex justify-content-center">
                <img
                  src={fan}
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm">
                  <MdCompare className="mx-2" size={18} />
                  Compare
                </button>
              </div>
            </article>
            {/* </div> */}
            <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
              <div className="d-flex position-absolute heart">
                <FiHeart className="loveBtn grow" />
              </div>
              <div className="my-4 d-flex justify-content-center">
                <img
                  src={air}
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src={tv1}
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src={lenovo1}
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src={mob1}
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/g/s/gsmarena_001_5.jpg"
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/g/s/gsmarena_001_5.jpg"
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/g/s/gsmarena_001_5.jpg"
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/g/s/gsmarena_001_5.jpg"
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
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
                <img
                  src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/g/s/gsmarena_001_5.jpg"
                  alt="Samsung"
                  loading="lazy"
                  className="ProductCard__Thumb object-contain grow mt-5"
                />
              </div>
              <div className="ProductCard__Details bg-white">
                <div>
                  <StarRating size={5} value={0} disable />
                </div>
                <p className="font-body name text-sm">
                  Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
                </p>
                <span className="product-price">7,200 EGP</span>
                <div
                  data-v-6569f61a=""
                  class="border border-secondary-200 w-full mt-1 mb-3"
                ></div>
                <p className="font-body name text-sm">
                  From 480 EGP / 24 Months with Raya Installments
                </p>
                <button type="button" class="compareButton p-3 text-sm">
                  <MdCompare className="mx-2" size={18} />
                  Compare
                </button>
              </div>
            </article>
          </Slider>
        </div>
        <div className="col-4"></div>
        <div className=" col-4 ex">
          <button className="btn btn-primary ">Explore Offers</button>
        </div>
        <div className="col-4"></div>
       
        
            <div>
                <img className="car" src={cool} alt=""/> 
            </div>
            
       
        <h1>BEST SELLERS</h1>
        <Slider {...settings}>
          <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
            <div className="d-flex position-absolute heart">
              <FiHeart className="loveBtn grow" />
            </div>
            <div className="my-4 d-flex justify-content-center">
              <img
                src={mob1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob2}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob3}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob4}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob5}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob6}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob7}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob8}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob9}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob10}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob11}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob3}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob11}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
              <button type="button" class="compareButton p-3 text-sm">
                <MdCompare className="mx-2" size={18} />
                Compare
              </button>
            </div>
          </article>
        </Slider>
        <h1>SAMSUNG OFFERS</h1>
        <Slider {...settings}>
          <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
            <div className="d-flex position-absolute heart">
              <FiHeart className="loveBtn grow" />
            </div>
            <div className="my-4 d-flex justify-content-center">
              <img
                src={mob10}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob9}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob8}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob7}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob6}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob5}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob4}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob3}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob2}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
              <button type="button" class="compareButton p-3 text-sm">
                <MdCompare className="mx-2" size={18} />
                Compare
              </button>
            </div>
          </article>
        </Slider>
        <div>
            <h1>FEATURED BRANDS</h1>
        </div>
        <div className="icon  contanier d-flex justify-contect-center mx-4 col-11">
            <div className="row ">
                <a className="a" href="/deals">
                    <img src="https://api-rayashop.freetls.fastly.net/media/brands/165037446574.png?width=200&format=webp" alt="" />
                </a>
                <a className="a" href="/deals">
                    <img src="https://api-rayashop.freetls.fastly.net/media/brands/1650460419922.png?width=200&format=webp" alt="" />
                </a>
                <a className="a" href="/deals">
                    <img src="https://api-rayashop.freetls.fastly.net/media/brands/165037602363.png?width=200&format=webp" alt="" />
                </a>
                <a className="a" href="/deals">
                    <img src="	https://api-rayashop.freetls.fastly.net/media/brands/165037610130.png?width=200&format=webp" alt="" />
                </a>
                <a className="a" href="/deals">
                    <img src="	https://api-rayashop.freetls.fastly.net/media/brands/1650376649750.png?width=200&format=webp" alt="" />
                </a>
                <a className="a" href="/deals">
                    <img src="	https://api-rayashop.freetls.fastly.net/media/brands/1654439018933.png?width=200&format=webp" alt="" />
                </a>
                <a className="a" href="/deals">
                    <img src="https://api-rayashop.freetls.fastly.net/media/brands/1650530584800.png?width=200&format=webp" alt="" />
                </a>
            </div>
        </div>
        <div className="img">
          <img src={download1} alt="" />
        </div>
        <h1>SUMMER OFFERS</h1>
        <Slider {...settings}>
          <article className="ProductCard shadow bg-white col-3 mx-2 position-relative">
            <div className="d-flex position-absolute heart">
              <FiHeart className="loveBtn grow" />
            </div>
            <div className="my-4 d-flex justify-content-center">
              <img
                src={air}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={air1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={air2}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={air3}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={water}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={water1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={water2}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={fred2}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob2}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob3}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={air}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={air1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
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
              <img
                src={mob1}
                alt="Samsung"
                loading="lazy"
                className="ProductCard__Thumb object-contain grow mt-5"
              />
            </div>
            <div className="ProductCard__Details bg-white">
              <div>
                <StarRating size={5} value={0} disable />
              </div>
              <p className="font-body name text-sm">
                Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue
              </p>
              <span className="product-price">7,200 EGP</span>
              <div
                data-v-6569f61a=""
                class="border border-secondary-200 w-full mt-1 mb-3"
              ></div>
              <p className="font-body name text-sm">
                From 480 EGP / 24 Months with Raya Installments
              </p>
              <button type="button" class="compareButton p-3 text-sm">
                <MdCompare className="mx-2" size={18} />
                Compare
              </button>
            </div>
          </article>
        </Slider>
       
      </>
    );
  }
}
