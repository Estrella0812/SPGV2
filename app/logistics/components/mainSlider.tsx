"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 var settings = {
    dots: false, // Optional: Adds navigation dots below the slider
    infinite: true, // Enables infinite looping
    speed: 2000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false, // Removes navigation arrows
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 1500, // Sets the time interval for auto-sliding (in ms)
    };

export function MainSlider1() {

    return (
        <div className="h-full w-full main-slider">
        <Slider {...settings}>
            <div className="main-slider relative">
                <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/1.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute container lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-4xl text-2xl font-bold">SPG LOGISTICS</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                        backgroundImage: 'url("/images/logistics/logistics_customs.webp")',
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-4xl text-2xl font-bold ">CUSTOMS</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                        backgroundImage: 'url("/images/logistics/logistics_freight_forwarding.webp")',
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-4xl text-2xl font-bold ">FREIGHT FORWARDING</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/2.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-4xl text-2xl font-bold ">TRANSPORTATION</div>
                </div>
            </div>
        </Slider>
        </div>
    );
}


export function MainSlider2() {

    return (
        <div className="h-full w-full main-slider">
        <Slider {...settings}>
            <div className="main-slider relative">
                <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/1.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute container lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-3xl text-2xl font-bold">WAREHOUSE OPERATION <br className="lg:hidden block"/> & CONSULT</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/2.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-3xl text-2xl font-bold ">TRANSPORTATION</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
            <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/3.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-3xl text-2xl font-bold ">HUMAN RECRUITING</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/4.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-3xl text-2xl font-bold ">IT TECHNOLOGY INSTALLATION SERVICES</div>
                </div>
            </div>
            <div className="bg-[var(--background-grey)] main-slider relative">
                <div style={{
                        backgroundImage: `url("https://spgltd.s3.us-east-2.amazonaws.com/main/5.webp")`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        height: "100%",
                    }}>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                <div className="absolute lg:p-12 lg:ml-[20vh] p-4 text-white slider-text">
                    <div className="lg:text-3xl text-2xl font-bold ">WAREHOUSE MHE <br className="lg:hidden block"/> TRAINING ACADEMY</div>
                </div>
            </div>
        </Slider>
        </div>
    );
}