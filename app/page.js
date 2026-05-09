"use client";
import React from 'react'
import { useState } from "react";



const Page = () => {
  const [form, setForm] = useState({
  name: "",
  email: "",
  query: "",
});


const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);

    alert("Form Submitted Successfully");

    setForm({
      name: "",
      email: "",
      query: "",
    });

  } catch (error) {
    console.log(error);
  }
};
  return (
    <>

     






      {/* Hero Section */}
      <div id='home' className=" relative w-full min-h-screen overflow-hidden">

  {/* Background Image */}
  <img
    className="w-full h-[90vh] object-cover opacity-60"
    src="/background.jpeg"
    alt="Background"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Hero Content */}
  <div
  className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20 -top-210 md:-top-90 sm:-top-150  lg:-top-50 2xl:top-0">

    <div className="w-full md:w-[70%] lg:w-[45%]">

      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        YOUR PARTNER IN LEGAL & FINANCIAL COMPLIANCE.
      </h1>

      <p className="text-white mt-5 text-lg sm:text-xl md:text-2xl">
        We simplify Company Registration and ITR Filing for you.
      </p>

      <button className="mt-8 px-6 py-3 text-base sm:text-lg md:text-xl rounded-3xl font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300">
        GET STARTED NOW
      </button>
    </div>
  </div>

  {/* Cards Section */}
  <div className="relative z-20 -mt-24 px-4 md:px-10 lg:px-16 pb-10">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white border-4 border-black rounded-3xl shadow-xl p-5 flex flex-col sm:flex-row gap-4">

        <div className="flex justify-center">
          <img
            className="w-28 sm:w-36 md:w-40"
            src="/company.gif"
            alt="Company"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black">
            COMPANY REGISTRATION
          </h2>

          <p className="mt-3 text-gray-700">
            Company registration services designed for startups and businesses.
          </p>

          <span className="text-blue-600 font-semibold cursor-pointer">
            Learn more...
          </span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white border-4 border-black rounded-3xl shadow-xl p-5 flex flex-col sm:flex-row gap-4">

        <div className="flex justify-center">
          <img
            className="w-28 sm:w-36 md:w-40"
            src="/tax.gif"
            alt="Tax"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black">
            ITR FILING & TAXATION
          </h2>

          <p className="mt-3 text-gray-700">
            Simplified taxation and ITR filing solutions for businesses.
          </p>

          <span className="text-blue-600 font-semibold cursor-pointer">
            Learn more...
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border-4 border-black rounded-3xl shadow-xl p-5 flex flex-col sm:flex-row gap-4">

        <div className="flex justify-center">
          <img
            className="w-28 sm:w-36 md:w-40"
            src="/service.gif"
            alt="Service"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black">
            OTHER LEGAL SERVICES
          </h2>

          <p className="mt-3 text-gray-700">
            Professional legal services for documentation and compliance.
          </p>

          <span className="text-blue-600 font-semibold cursor-pointer">
            Learn more...
          </span>
        </div>
      </div>

    </div>
  </div>
</div>





      {/* ================= ABOUT SECTION ================= */}

<section id='about' className="w-full min-h-screen bg-white text-black py-16 px-4 md:px-10 overflow-hidden">

  {/* Heading */}
  <div className="flex flex-col items-center text-center gap-4">

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
      About Us
    </h1>

    <div className="bg-blue-600 text-white px-6 py-2 rounded-xl text-2xl md:text-4xl font-bold">
      OUR MISSION
    </div>

    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
      BUILDING TRUST THROUGH EXPERIENCE
    </h2>
  </div>

  {/* Description */}
  <p className="text-center text-gray-700 text-base sm:text-lg leading-8 mt-8 max-w-6xl mx-auto">
    Since 1998, JMP Legal Services has been providing trusted legal and
    professional company solutions for businesses and individuals.
    Our commitment is to simplify registration, taxation, compliance,
    and legal processes with professionalism and transparency.

    <br />
    <br />

    We focus on building long-term trust with our clients by delivering
    reliable services, expert consultation, and complete support for
    startups, enterprises, and growing businesses.
  </p>

  {/* Team Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

    {/* Card 1 */}
    <div className="bg-gray-100 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center">

      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src="/man.gif"
          alt="Consultant"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mt-5">
        Karat Chanson
      </h2>

      <p className="text-blue-600 font-semibold">
        Lead Consultant
      </p>

      <p className="text-gray-700 mt-4 leading-7">
        JMP Legal Services provides professional legal and financial
        support to businesses and individuals with complete dedication.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center">

      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src="/man.gif"
          alt="Consultant"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mt-5">
        Karat Chanson
      </h2>

      <p className="text-blue-600 font-semibold">
        Senior Advisor
      </p>

      <p className="text-gray-700 mt-4 leading-7">
        Expert guidance in taxation, compliance, and business registration
        services for startups and enterprises.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-100 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center">

      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src="/man.gif"
          alt="Consultant"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold mt-5">
        Karat Chanson
      </h2>

      <p className="text-blue-600 font-semibold">
        Legal Expert
      </p>

      <p className="text-gray-700 mt-4 leading-7">
        Helping businesses with legal documentation, registrations,
        and corporate compliance solutions.
      </p>
    </div>

  </div>
</section>







  {/* ================= SERVICES SECTION ================= */}

<section id='service' className="w-full min-h-screen bg-white py-16 px-4 md:px-8 overflow-hidden">

  {/* Main Container */}
  <div className="w-full bg-[#303030] rounded-[35px] py-10 px-4 md:px-8">

    {/* Heading */}
    <div className="text-center">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
        SERVICES COMPANY REGISTRATION
      </h1>

      <p className="text-gray-300 mt-4 text-base md:text-lg">
        Professional registration and legal services for your business.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">

      {/* ================= Card 1 ================= */}
      <div className="bg-white text-black rounded-3xl shadow-xl border-2 border-black p-6 flex flex-col hover:scale-105 duration-300">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/house.gif"
            alt="Solo Proprietorship"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-5 text-center">
          Solo Proprietorship
        </h2>

        {/* Content */}
        <div className="mt-4 flex-1">

          <p className="text-gray-700 font-medium text-center">
            Company registration services for startups and small businesses.
          </p>

          <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-700">
            <li>Sole Proprietorship</li>
            <li>Business Registration</li>
            <li>GST Registration</li>
            <li>Legal Documentation</li>
          </ul>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300">
            Get Quote
          </button>
        </div>
      </div>

      {/* ================= Card 2 ================= */}
      <div className="bg-white text-black rounded-3xl shadow-xl border-2 border-black p-6 flex flex-col hover:scale-105 duration-300">

        <div className="flex justify-center">
          <img
            src="/hand.gif"
            alt="Partnership"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>

        <h2 className="text-2xl font-bold mt-5 text-center">
          Partnership
        </h2>

        <div className="mt-4 flex-1">

          <p className="text-gray-700 font-medium text-center">
            Partnership registration and legal support for businesses.
          </p>

          <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-700">
            <li>Partnership Firm</li>
            <li>LLP Registration</li>
            <li>Documentation</li>
            <li>Legal Support</li>
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300">
            Get Quote
          </button>
        </div>
      </div>

      {/* ================= Card 3 ================= */}
      <div className="bg-white text-black rounded-3xl shadow-xl border-2 border-black p-6 flex flex-col hover:scale-105 duration-300">

        <div className="flex justify-center">
          <img
            src="/tax.gif"
            alt="Private Limited"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>

        <h2 className="text-2xl font-bold mt-5 text-center">
          Private Limited
        </h2>

        <div className="mt-4 flex-1">

          <p className="text-gray-700 font-medium text-center">
            Simplified taxation and company registration services.
          </p>

          <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-700">
            <li>Private Limited Registration</li>
            <li>Tax Filing</li>
            <li>ROC Compliance</li>
            <li>Business Support</li>
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300">
            Get Quote
          </button>
        </div>
      </div>

      {/* ================= Card 4 ================= */}
      <div className="bg-white text-black rounded-3xl shadow-xl border-2 border-black p-6 flex flex-col hover:scale-105 duration-300">

        <div className="flex justify-center">
          <img
            src="/envelope.gif"
            alt="LLP Incorporation"
            className="w-28 sm:w-32 md:w-36"
          />
        </div>

        <h2 className="text-2xl font-bold mt-5 text-center">
          LLP Incorporation
        </h2>

        <div className="mt-4 flex-1">

          <p className="text-gray-700 font-medium text-center">
            LLP incorporation and compliance services for growing businesses.
          </p>

          <ul className="list-disc pl-5 mt-5 space-y-2 text-gray-700">
            <li>LLP Incorporation</li>
            <li>Partnership Support</li>
            <li>Legal Filing</li>
            <li>Compliance Services</li>
          </ul>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300">
            Get Quote
          </button>
        </div>
      </div>

    </div>
  </div>
</section>





























  {/* ================= TESTIMONIAL SECTION ================= */}

<section id='client' className="w-full bg-white py-16 px-4 overflow-hidden">

  {/* Background Container */}
  <div className="relative rounded-[35px] overflow-hidden">

    {/* Background Image */}
    <img
      className="w-full h-[240vh] md:h-[150vh] lg:h-[110vh] object-cover opacity-60"
      src="/background2.jpeg"
      alt="Background"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="absolute inset-0 px-4 md:px-10 py-10">

      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
        Client Testimonials
      </h1>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {/* ================= Card 1 ================= */}
        <div className="bg-white rounded-3xl p-6 text-center shadow-2xl">

          {/* Quote Icon */}
          <div className="flex justify-center">
            <img
              width={70}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW9nS-CqT6plY8p3iACU2aI9O7xRU79IgwA&s"
              alt="quote"
            />
          </div>

          {/* Review */}
          <h2 className="text-2xl font-bold mt-4 text-black">
            JMP made ITR filing easy!
          </h2>

          {/* Stars */}
          <div className="flex justify-center mt-4 gap-1">

            <img
              className="w-8"
              src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360"
              alt=""
            />

            <img
              className="w-8"
              src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360"
              alt=""
            />

            <img
              className="w-8"
              src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360"
              alt=""
            />

            <img
              className="w-8"
              src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360"
              alt=""
            />

            <img
              className="w-8"
              src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360"
              alt=""
            />
          </div>

          {/* Client */}
          <div className="flex items-center justify-center gap-4 mt-6">

            <img
              className="w-14 h-14 rounded-full"
              src="/man.gif"
              alt="client"
            />

            <div className="text-left">
              <h3 className="text-xl font-bold text-black">
                Rahul K
              </h3>

              <p className="text-gray-600">
                Company Owner
              </p>
            </div>
          </div>
        </div>

        {/* ================= Card 2 ================= */}
        <div className=" relative bg-white rounded-3xl p-6 text-center shadow-2xl">

          <div className="flex justify-center">
            <img
              width={70}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW9nS-CqT6plY8p3iACU2aI9O7xRU79IgwA&s"
              alt="quote"
            />
          </div>

          <h2 className="text-2xl font-bold mt-4 text-black">
            Excellent legal services!
          </h2>

          <div className="flex justify-center mt-4 gap-1">

            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">

            <img
              className="w-14 h-14 rounded-full"
              src="/man.gif"
              alt="client"
            />

            <div className="text-left">
              <h3 className="text-xl font-bold text-black">
                Sahil Pal
              </h3>

              <p className="text-gray-600">
                Startup Founder
              </p>
            </div>
          </div>
        </div>

        {/* ================= Card 3 ================= */}
        <div className="bg-white rounded-3xl p-6 text-center shadow-2xl">

          <div className="flex justify-center">
            <img
              width={70}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtW9nS-CqT6plY8p3iACU2aI9O7xRU79IgwA&s"
              alt="quote"
            />
          </div>

          <h2 className="text-2xl font-bold mt-4 text-black">
            Professional support team!
          </h2>

          <div className="flex justify-center mt-4 gap-1">

            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
            <img className="w-8" src="https://img.freepik.com/premium-vector/yellow-golden-star-rating-review-design-vector_198454-302.jpg?w=360" alt="" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">

            <img
              className="w-14 h-14 rounded-full"
              src="/man.gif"
              alt="client"
            />

            <div className="text-left">
              <h3 className="text-xl font-bold text-black">
                Mohit
              </h3>

              <p className="text-gray-600">
                Business Client
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= OUR CLIENTS ================= */}

      <div className=" rounded-3xl mt-10 absolute bg-white md:p-8 p-1 lg:w-[94%] 2xl:w-[97%]  w-[90%] md:w-[91%] ">

        <h2 className="text-3xl md:text-5xl font-bold text-center text-black">
          OUR CLIENTS
        </h2>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-10">

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Rohan</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Mohit</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Rahul</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Raju</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Aman</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Sahil</span>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-32 md:h-32 rounded-full"
              src="/man.gif"
              alt="client"
            />
            <span className="text-xl mt-3 font-semibold text-black">Karan</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
















  {/* <d================= CONTACT SECTION ================= */}

<section id='contact' className="w-full bg-white py-16 px-4 ">

  {/* Background Container */}
  <div className="relative rounded-[35px]">

    {/* Background Image */}
    <img
      className="w-full h-[150vh] md:h-[150vh] lg:h-[120vh] object-cover opacity-60"
      src="/background3.jpeg"
      alt="Background"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="absolute inset-0 px-4 md:px-10 py-10">

      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
        Get In Touch With Us
      </h1>

      {/* Main Contact Box */}
      <div className="flex justify-center mt-20">

        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ================= LEFT SIDE ================= */}
          <div className="text-black">

            <h2 className="text-2xl md:text-3xl font-bold">
              Send us your request
            </h2>

            <p className="text-gray-700 text-base md:text-lg mt-5 leading-8">
              You can drop an email and we’ll get in touch shortly,
              or call us between 9:30 AM and 6:00 PM,
              Monday to Friday.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-5">

              <div>
                <span className="font-bold text-lg">Address :</span>

                <p className="text-gray-700 mt-1">
                  AH55 3RD FLOOR SHALIMAR BAGH DELHI 110015
                </p>
              </div>

              <div>
                <span className="font-bold text-lg">Timings :</span>

                <p className="text-gray-700 mt-1">
                  Mon - Fri | 9:30 AM - 6:00 PM
                </p>
              </div>

              <div>
                <span className="font-bold text-lg">Phone :</span>

                <p className="text-gray-700 mt-1">
                  +91 9654473401 | +91 0000000000
                </p>
              </div>

              <div>
                <span className="font-bold text-lg">Email :</span>

                <p className="text-gray-700 mt-1">
                  sjmdglobal@gmail.com
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            {/* Name */}
            <div>

              <label className="text-black text-lg font-semibold">
                Your Name
              </label>

              <input
                className="w-full border-2 text-black border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>

            {/* Email */}
            <div>

              <label className="text-black text-lg font-semibold">
                Your Email
              </label>

              <input
                className="w-full text-black border-2 border-gray-300 rounded-xl p-4 mt-2 outline-none focus:border-blue-500"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </div>

            {/* Query */}
            <div>

              <label className="text-black text-lg font-semibold">
                Your Query
              </label>

              <textarea
                className="w-full border-2 text-black border-gray-300 rounded-xl p-4 mt-2 h-40 resize-none outline-none focus:border-blue-500"
                name="query"
                value={form.query}
                onChange={handleChange}
                placeholder="Write your query here..."
              />
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">

              <button
                type="submit"
                className="px-8 py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 duration-300"
              >
                Submit Now
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>



    </>
  )}


export default Page

