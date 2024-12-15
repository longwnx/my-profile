"use client";
import React from "react";
import Image from "next/image";

export const Banner: React.FC = () => {
  return (
    <div>
      <div id="banner" className="banner-area relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div
                className="banner-content"
                data-cue="slideInUp"
                data-show="true"
                style={{
                  animationName: "slideInUp",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="title">
                  <span className="sub-title inline-block">
                    Online Education Website
                  </span>
                  <h2>
                    Empower Your Future, Learn Digital
                    <span className="relative">
                      Skills
                      <Image
                        src="/title-shape.svg"
                        alt="shape"
                        width={50}
                        height={10}
                      />
                    </span>
                  </h2>
                  <p>
                    Embark on a Journey of Digital Discovery: Expert-Led Courses
                    Designed to Equip
                  </p>
                </div>
                <div className="button-list flex items-center">
                  <a
                    href="https://demo.themeies.com/edugen-html/about.html"
                    className="default-btn"
                  >
                    <Image
                      src="/left-bold.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    Enroll Now
                  </a>
                  <a
                    className="play-button"
                    data-fslightbox="gallery"
                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                    target="_blank"
                  >
                    <i className="ri-play-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div
                className="banner-image relative z-10"
                data-cue="slideInUp"
                data-show="true"
                style={{
                  animationName: "slideInUp",
                  animationDuration: "600ms",
                  animationTimingFunction: "ease",
                  animationDelay: "0ms",
                  animationDirection: "normal",
                  animationFillMode: "both",
                }}
              >
                <div className="image">
                  <Image
                    src="/banner1.png"
                    alt="banner-image"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="udemy-item">
                  <ul className="list-none p-0 m-0">
                    <li className="inline-block">
                      <Image
                        src="/udemy.svg"
                        alt="image"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="inline-block">
                      <h3>
                        4.9
                        <i className="ri-star-s-fill"></i>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="user-info text-center">
                  <div className="icon">
                    <Image
                      src="/user-icon.svg"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h2>Students</h2>
                  <h3>
                    <span className="counter">10</span>K+
                  </h3>
                  <ul className="list-none p-0">
                    <li className="inline-block">
                      <Image
                        src="/user1.jpg"
                        alt="user-image"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="inline-block">
                      <Image
                        src="/user2.jpg"
                        alt="user-image"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="inline-block">
                      <Image
                        src="/user3.jpg"
                        alt="user-image"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="inline-block">
                      <Image
                        src="/user4.jpg"
                        alt="user-image"
                        width={50}
                        height={50}
                      />
                    </li>
                    <li className="inline-block">
                      <Image
                        src="/user5.jpg"
                        alt="user-image"
                        width={50}
                        height={50}
                      />
                    </li>
                  </ul>
                </div>
                <div className="mentor-info flex items-center">
                  <div className="content">
                    <h3>Chat with a mentor</h3>
                    <span>Find your mentor here</span>
                  </div>
                  <div className="icon">
                    <Image
                      src="/message-icon.svg"
                      alt="icon"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape1">
          <Image src="/banner-shape1.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape2">
          <Image src="/banner-shape2.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape3">
          <Image src="/banner-shape3.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape4">
          <Image src="/banner-shape4.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape5">
          <Image src="/banner-shape5.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape6">
          <Image src="/banner-shape6.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape7">
          <Image src="/banner-shape7.png" alt="shape" width={50} height={50} />
        </div>
        <div className="banner-shape8">
          <Image src="/banner-shape8.png" alt="shape" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
