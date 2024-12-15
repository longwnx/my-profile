import React from "react";
import Image from "next/image";
import { Logo } from "@public";

export default function Home() {
  const courses = [
    {
      id: 1,
      image: "/courses1.jpg",
      price: "$27.00",
      level: "Beginner",
      title: "Introduction to Digital Marketing",
      ratings: 4.5,
      students: "70+ students",
      teacher: "Prof. Donnie Ball",
      teacherImage: "/assets/courses-user1.jpg",
    },
    {
      id: 2,
      image: "/courses2.jpg",
      price: "$33.00",
      level: "Intermediate",
      title: "Increasing Engagement with Instagram & Facebook",
      ratings: 4.5,
      students: "1.5k+ students",
      teacher: "Prof. Angela Bryant",
      teacherImage: "/assets/courses-user2.jpg",
    },
    {
      id: 3,
      image: "/courses3.jpg",
      price: "$26.00",
      level: "Beginner",
      title: "Full Stack Web Development Bootcamp",
      ratings: 4.5,
      students: "70+ students",
      teacher: "Prof. Vivian Farney",
      teacherImage: "/assets/courses-user3.jpg",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Tim R. Moyer",
      role: "Lecturer",
      image: "/team1.jpg",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://x.com/home",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      id: 2,
      name: "Harold J. Eakes",
      role: "Lecturer",
      image: "/team2.jpg",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://x.com/home",
        linkedin: "https://www.linkedin.com/",
      },
    },
    {
      id: 3,
      name: "Ruth R. Scott",
      role: "Lecturer",
      image: "/assets/team1.jpg",
      social: {
        facebook: "https://www.facebook.com/",
        twitter: "https://x.com/home",
        linkedin: "https://www.linkedin.com/",
      },
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Enrolling in courses at Edugen was the best decision I made for my career. The instructors were incredibly knowledgeable and supportive, guiding me through every step of the learning process. Thanks to their expert guidance, I was able to land a job in my desired field even before completing the course.",
      name: "Krystal France",
      role: "Ex-Student",
      image: "/assets/testimonial6.jpg",
    },
    {
      id: 2,
      text: "The instructors at Edugen helped me master new skills that I needed to progress in my career. The courses were engaging and well-structured, and I feel confident applying what I learned in real-world scenarios.",
      name: "John Doe",
      role: "Ex-Student",
      image: "/assets/testimonial7.jpg",
    },
    {
      id: 3,
      text: "Edugen's learning resources are top-notch! I gained the skills I needed to transition into a new industry, and the support I received from the mentors was invaluable. Highly recommend to anyone looking to upgrade their skill set.",
      name: "Emily White",
      role: "Ex-Student",
      image: "/assets/testimonial8.jpg",
    },
  ];

  const blogs = [
    {
      id: 1,
      title: "5 Essential Skills Every Digital Marketer Should Master",
      image: "/assets/blog1.jpg",
      author: "Admin",
      date: "Jan 29, 2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      link: "#",
    },
    {
      id: 2,
      title: "Graphic Design Trends Shaping Visual Communication",
      image: "/assets/blog2.jpg",
      author: "Admin",
      date: "Jan 29, 2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      link: "#",
    },
    {
      id: 3,
      title: "Navigating the Data Science Job Market",
      image: "/assets/blog3.jpg",
      author: "Admin",
      date: "Jan 29, 2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      link: "#",
    },
  ];

  return (
    <div className="font-sans antialiased bg-gray-50">
      {/* Navbar */}
      <nav className="navbar-area bg-white shadow-md fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <a href="#" className="text-lg font-bold">
            <Image src={Logo} alt={"Icon"} width={193} height={60} />
          </a>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contacts
              </a>
            </li>
          </ul>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="banner-area bg-gradient-to-r from-blue-600 to-green-400 text-white py-24">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="font-bold leading-tight text-[3rem] bg-gradient-to-r from-[#0063F4] via-[#00F0AA] to-[#00F0AA] text-transparent bg-clip-text">
              Empower Your Future, Learn Digital Skills
            </h1>
            <p className="text-lg mt-4">
              Start your journey in the world of digital education today with
              expert-led courses that will help you achieve your career goals.
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="#"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100"
              >
                Enroll Now
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white py-3 px-6 rounded-md hover:bg-white hover:text-blue-600"
              >
                <span className="mr-2">Watch Video</span>
                <i className="ri-play-fill"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/assets/banner1.png"
              alt="Digital Marketing"
              className="mx-auto mb-4 mt-4"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-area py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Top Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-md">
              <img
                src="/assets/categories1.svg"
                alt="Digital Marketing"
                className="mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Web Design</h3>
              <p className="text-gray-600">78 Courses</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <img
                src="/assets/categories2.svg"
                alt="Digital Marketing"
                className="mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Digital Marketing</h3>
              <p className="text-gray-600">58 Courses</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-md">
              <img
                src="/assets/categories3.svg"
                alt="Data Science"
                className="mx-auto h-16 mb-4"
              />
              <h3 className="text-xl font-semibold">Data Science</h3>
              <p className="text-gray-600">24 Courses</p>
            </div>
          </div>
        </div>
      </section>
      {/*  About Section */}
      <section className="about-area py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="flex flex-wrap">
                  <div className="w-1/2 p-2">
                    <img
                      src="/assets/about1.jpg"
                      alt="about-image"
                      className="rounded-md shadow-lg transition-transform duration-300 hover:scale-90"
                    />
                    <img
                      src="/assets/about2.jpg"
                      alt="about-image"
                      className="rounded-md shadow-lg mt-4 transition-transform duration-300 hover:scale-90"
                    />
                  </div>
                  <div className="w-1/2 p-2">
                    <img
                      src="/assets/about3.jpg"
                      alt="about-image"
                      className="rounded-md shadow-lg mt-16 transition-transform duration-300 hover:scale-90"
                    />
                    <div className="transition-transform duration-300 hover:scale-90 bg-gradient-to-r from-blue-200 to-green-300 mt-4 flex items-center justify-between bg-white shadow-lg p-4 rounded-md">
                      <div>
                        <h3 className="text-4xl font-bold text-green-600">
                          15
                        </h3>
                        <p className="text-gray-600">years experience</p>
                      </div>
                      <a
                        href="/about"
                        className="text-blue-600 hover:text-blue-800 text-lg"
                      >
                        <i className="ph ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-0">
                  <img src="/assets/shape1.svg" alt="shape" className="h-12" />
                </div>
                <div className="absolute bottom-0 right-0 animate-zoom">
                  <img
                    src="/assets/shape2.svg"
                    alt="shape"
                    className="h-12  animate-rotate"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <div>
                <span className="font-parkinsans text-xl bg-gradient-to-r from-[#0063F4] via-[#00F0AA] to-[#00F0AA] text-transparent bg-clip-text">
                  About Edugen
                </span>
                <h2 className="text-3xl font-bold mt-8">
                  <span className="font-varela text-[3rem] leading-tight">
                    Explore Top Education
                    <span className="relative Emp">
                      Categories
                      <img
                        src="/assets/title-shape.svg"
                        alt="shape"
                        className="absolute -bottom-2 left-0 h-4 animate-zoom"
                      />
                    </span>
                  </span>
                </h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <h4 className="text-lg font-semibold mt-6">
                  Our mission & vision
                </h4>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center mt-6">
                  <a
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    <img
                      src="/assets/left-bold.svg"
                      alt="icon"
                      className="h-5 mr-2"
                    />
                    Learn More
                  </a>
                  <div className="ml-6 flex items-center">
                    <img
                      src="/assets/about4.jpg"
                      alt="CEO"
                      className="h-12 w-12 rounded-full shadow-md"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold">Jason S. Ellis</h3>
                      <span className="text-gray-500 text-sm">
                        CEO & Founder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Video Section*/}
      <section className="video-area relative bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="video-area-info relative flex items-center justify-between bg-white shadow-lg rounded-lg p-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800">
                Intro <span className="text-blue-600">Video</span>
              </h1>
            </div>
            <div className="flex items-center">
              <div className="relative mr-4">
                <img
                  src="/assets/video-shape.svg"
                  alt="shape"
                  className="w-24 h-24"
                />
              </div>
              <a
                href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                <i className="ri-play-fill text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*   Courses Area   */}
      <section className="courses-area py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-medium text-sm">
              Most Featured Courses
            </span>
            <h2 className="text-4xl font-bold mt-4">
              Choose Our Top{" "}
              <span className="relative">
                Courses
                <img
                  src="/assets/title-shape.svg"
                  alt="shape"
                  className="absolute -bottom-2 left-0 h-4"
                />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
                    {course.price}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 text-sm">
                      {course.level}
                    </span>
                    <i className="ri-heart-line text-gray-400 text-lg hover:text-red-500"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center text-yellow-500 mb-4">
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star"></i>
                    <i className="ph-fill ph-star-half"></i>
                    <span className="ml-2 text-gray-600">
                      ({course.ratings} ratings)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={course.teacherImage}
                      alt={course.teacher}
                      className="h-10 w-10 rounded-full mr-3"
                    />
                    <div>
                      <h6 className="text-sm font-medium">{course.teacher}</h6>
                      <span className="text-gray-500 text-xs">
                        {course.students}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="/assets/user-icon2.svg"
                      alt="students"
                      className="h-5 w-5 mr-2"
                    />
                    <span className="text-gray-600">{course.students}</span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    ENROLL NOW
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              View All Courses
            </a>
          </div>
        </div>
      </section>
      {/*.  Choose Area.  */}
      <section className="choose-area relative bg-gray-50 py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <div className="mb-10 lg:mb-0">
                <span className="text-blue-600 font-medium text-sm">
                  Why Choose Us
                </span>
                <h2 className="text-4xl font-bold mt-4">
                  One Platform & Many{" "}
                  <span className="relative">
                    Courses
                    <img
                      src="/assets/title-shape.svg"
                      alt="shape"
                      className="absolute -bottom-2 left-0 h-4"
                    />
                  </span>{" "}
                  For You
                </h2>
                <p className="text-gray-600 mt-4">
                  {`Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.`}
                </p>
                <div className="mt-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Skill Mastery Levels
                    </h3>
                    <div className="w-full bg-gray-200 rounded-md">
                      <div
                        className="bg-blue-600 text-white text-sm font-medium text-center py-1 rounded-md"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Learning Milestones
                    </h3>
                    <div className="w-full bg-gray-200 rounded-md">
                      <div
                        className="bg-blue-600 text-white text-sm font-medium text-center py-1 rounded-md"
                        style={{ width: "92%" }}
                      >
                        92%
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Digital Proficiency Journey
                    </h3>
                    <div className="w-full bg-gray-200 rounded-md">
                      <div
                        className="bg-blue-600 text-white text-sm font-medium text-center py-1 rounded-md"
                        style={{ width: "92%" }}
                      >
                        92%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img
                  src="/assets/choose1.png"
                  alt="choose image"
                  className=""
                />
                <img
                  src="/assets/choose-image-shape.svg"
                  alt="background shape"
                  className="absolute -bottom-10 -right-10 w-24"
                />
                {/* Decorative Shapes */}
                <div className="absolute top-0 right-0">
                  <img src="/assets/shape4.svg" alt="shape" className="w-12" />
                </div>
                <div className="absolute bottom-0 left-0">
                  <img src="/assets/shape5.svg" alt="shape" className="w-12" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img src="/assets/shape6.svg" alt="shape" className="w-8" />
                </div>
                <div className="absolute bottom-2 right-2">
                  <img src="/assets/shape7.svg" alt="shape" className="w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Team.  */}
      <section className="team-area py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-medium text-sm">
              Team Members
            </span>
            <h2 className="text-4xl font-bold mt-4">
              Our Expert{" "}
              <span className="relative">
                Lecturer
                <img
                  src="/assets/title-shape.svg"
                  alt="shape"
                  className="absolute -bottom-2 left-0 h-4"
                />
              </span>
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <a
              href="#"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Join Our Team
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <i className="ri-facebook-fill text-2xl"></i>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <i className="ri-twitter-x-fill text-2xl"></i>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      <i className="ri-linkedin-fill text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  Newsletter */}
      <section className="newsletter-area py-20 bg-gray-50 relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-8 relative z-10">
            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center">
                <img
                  src="/assets/newsletter-icon.svg"
                  alt="newsletter icon"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Enter Your email To Subscribe Our Newsletter
                  </h2>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <form className="flex items-center">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="form-control px-6 py-3 w-full bg-gray-100 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Write your email"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Subscribe
                    <img
                      src="/assets/inbox-icon.svg"
                      alt="icon"
                      className="inline-block ml-2 w-6 h-6"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Decorative Shapes */}
          <div className="absolute top-0 left-0">
            <img src="/assets/shape8.svg" alt="shape" className="w-12 h-12" />
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="/assets/shape9.svg" alt="shape" className="w-12 h-12" />
          </div>
        </div>
      </section>
      {/*  Testimonials Area */}
      <section className="testimonial-area py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <span className="text-blue-600 font-medium text-sm">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Voices of Success: Hear from Our{" "}
            <span className="relative">
              Students
              <img
                src="/assets/title-shape.svg"
                alt="shape"
                className="absolute -bottom-2 left-0 h-4"
              />
            </span>
          </h2>

          <div className="owl-carousel owl-theme mt-8">
            <div className="flex justify-center space-x-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="max-w-sm bg-white shadow-lg rounded-lg p-6 space-y-4"
                >
                  <p className="text-gray-600 italic">{`"${testimonial.text}"`}</p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <span className="text-gray-500 text-sm">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  Learning. */}
      <section className="learning-area py-20 bg-gray-50 relative">
        <div className="container mx-auto text-center">
          <div className="section-title mb-10">
            <span className="text-blue-600 font-medium text-sm">
              Live Classes
            </span>
            <h2 className="text-4xl font-bold mt-4">
              It’s Easy To Start{" "}
              <span className="relative">
                Learning
                <img
                  src="/assets/title-shape.svg"
                  alt="shape"
                  className="absolute -bottom-2 left-0 h-4"
                />
              </span>
            </h2>
          </div>
          <div className="relative bg-white shadow-lg rounded-lg p-8 flex items-center justify-between">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-800">
                Live <span className="text-blue-600">Classes</span>
              </h1>
              <p className="text-gray-600 mt-4">
                Join our live learning sessions and start enhancing your skills
                right away. Engage with expert instructors and peers in
                real-time.
              </p>
            </div>
            {/* Right Image */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative">
                <img
                  src="/assets/learning1.jpg"
                  alt="learning"
                  className="rounded-lg shadow-lg w-full h-72 object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-lg">
                  LIVE
                </div>
                <div className="absolute bottom-2 left-2 text-white bg-gray-800 p-2 rounded-md">
                  <p>01:30:08</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ul className="flex justify-center space-x-8">
              <li className="flex items-center">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <i className="ph-bold ph-speaker-slash text-2xl"></i>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <i className="ph-bold ph-phone text-2xl"></i>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <i className="ph-bold ph-video-camera text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0">
          <img src="/assets/shape10.svg" alt="shape" className="w-12 h-12" />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="/assets/shape11.svg" alt="shape" className="w-12 h-12" />
        </div>
      </section>
      {/*  Blogs */}
      <section className="blog-area py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="section-title mb-10">
            <span className="text-blue-600 font-medium text-sm">Our Blog</span>
            <h2 className="text-4xl font-bold mt-4">
              Read Our Latest{" "}
              <span className="relative">
                Blog
                <img
                  src="/assets/title-shape.svg"
                  alt="shape"
                  className="absolute -bottom-2 left-0 h-4"
                />
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="single-blog-card bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <ul className="list-unstyled flex space-x-4">
                      <li className="flex items-center text-gray-600">
                        <img
                          src="/assets/user-icon3.svg"
                          alt="icon"
                          className="w-5 h-5 mr-2"
                        />
                        <a href="#" className="hover:text-blue-600">
                          {blog.author}
                        </a>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <img
                          src="/assets/calendar-icon.svg"
                          alt="calendar"
                          className="w-5 h-5 mr-2"
                        />
                        {blog.date}
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    <a href={blog.link} className="hover:text-blue-600">
                      {blog.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a
                    href={blog.link}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    READ MORE
                    <i className="ph-bold ph-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*. Footer.  */}
      <footer className="footer-area bg-gray-800 text-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between mb-10">
            {/* Footer Logo and Links */}
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <img
                  src="/assets/footer-logo.svg"
                  alt="Logo"
                  className="h-12"
                />
                <span className="text-2xl font-semibold ml-3">Edugen</span>
              </div>
              <p className="text-gray-400">
                Empowering individuals to take charge of their digital
                education. Start your journey with us.
              </p>
              <div className="mt-4">
                <ul className="list-none flex space-x-6">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <i className="ri-facebook-fill text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <i className="ri-twitter-fill text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <i className="ri-instagram-fill text-xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
              <ul className="text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    How to Build a Website
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Top 10 Digital Marketing Strategies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Web Development Tips & Tricks
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="w-full lg:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Sign up for our newsletter to get the latest updates and
                resources.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-l-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center py-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Edugen. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/*  Copyright*/}
      <section className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Edugen. All Rights Reserved. Designed with{" "}
            <span className="text-red-600">❤️</span> by{" "}
            <a
              href="https://www.yourcompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400"
            >
              Your Company
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
