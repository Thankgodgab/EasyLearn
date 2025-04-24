import React, { useState, useEffect } from 'react';

import Image from '../assets/image.png';
import Brain from '../assets/brain/9228417.jpg';
import Mission from '../assets/mission-concept/5994523.jpg';
import Phone from '../assets/smartphone/3991832.jpg';
import Student from '../assets/student.png'

function Body() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  const successRates = [
    { value: "100K+", label: "Expert Tutors" },
    { value: "25K+", label: "Past Questions" },
    { value: "95%", label: "Success Rate" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % successRates.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [successRates.length]);


  return (
    <>
      <section id="hero-section" className="w-full h-full pb-[50px] lg:pb-[100px]">
        <div className="container flex flex-col lg:flex-row items-center justify-start lg:justify-between h-full mx-auto px-[20px] lg:px-[100px]">
          <div className="hero-text text-center md:text-left mb-14">
            <h2 className="text-4xl text-white font-semibold mb-[50px]">
              Your Gateway to Smarter <br />
              Learning
            </h2>
            <p className="text-lg mb-[50px]">
              Unlocked unlimited access to past question, live tutoring <br />
              and a marketplace where educatots thrives.
            </p>
            <a
              href="#"
              className="mx-auto lg:ml-5 flex items-center justify-center w-[150px] h-[50px] bg-light shadow-md shadow-dark p-3 text-lg font-medium rounded-[30px] text-primary hover:bg-accent hover:text-light"
            >
              Get Started
            </a>
          </div>
          <div className="image-container w-full md:w-[40%]">
            <img src={Image} alt="" className="object-fit-cover rounded-full mx-auto" />
          </div>
        </div>
      </section>
      <section id="Features" className="w-full h-full pt-[50px] lg:pt-[100px] pb-[100px] bg-light">
        <div className="flex items-center justify-center flex-col">
          <p className="text-xl text-primary px-2 font-light text-center">Why Choose EasyLearn</p>
          <h2 className="text-3xl font-medium text-primary">Our Values</h2>
          <div className="w-[80%] pr-5 md:pr-0 sm:w-[75%] grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 mt-[50px] gap-12 text-left">
            <div className="flex flex-col gap-y-1.5 items-left md:items-center justify-start md:text-center">
              <div className="w-[60px] md:w-[80px] lg:w-[100px] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#74C0FC"
                    d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl mb-3 text-primary font-medium">
                Comprehensive question Bank
              </h2>
              <p className="text-lg text-primary">
                Unlocked unlimited access to past question, live tutoring and a marketplace where educatots thrives.
              </p>
            </div>
            <div className="flex flex-col gap-y-1.5 items-left md:items-center justify-start md:text-center">
              <div className="w-[60px] md:w-[80px] lg:w-[100px] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#ff85c0"
                    d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl mb-3 text-primary font-medium">Expert Tutors</h2>
              <p className="text-lg text-primary">
                Unlocked unlimited access to past question, live tutoring and a marketplace where educatots thrives.
              </p>
            </div>
            <div className="flex flex-col md:col-span-2 lg:col-span-1 lg:px-0 md:px-[100px] gap-y-1.5 items-left md:items-center justify-start md:text-center">
              <div className="w-[60px] md:w-[80px] lg:w-[100px] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#B197FC"
                    d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl mb-3 text-primary font-medium">AI-Powered learning</h2>
              <p className="text-lg text-primary">
                Unlocked unlimited access to past question, live tutoring and a marketplace where educatots thrives.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="howItWorks" className="w-full h-full lg:pb-[100px] bg-light">
        <div className="flex items-center justify-center flex-col pb-[100px]">
          <h2 className="text-3xl font-medium text-primary">How it Works</h2>
          <div className="w-[80%] pr-5 md:pr-0 sm:w-[75%] grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 mt-[50px] gap-12 text-left">
            <div className="flex flex-col gap-y-1.5 items-left md:items-center justify-start md:text-center">
              <h2 className="hidden md:flex text-6xl mb-3 text-primary font-londrina font-extrabold">1</h2>
              <div className="w-[100px] md:w-[80px] lg:w-[100px] mb-6">
                <img src={Phone} alt="mobile phone" />
              </div>
              <p className="text-lg text-primary">
                Unlocked unlimited access to past question, live tutoring and a marketplace where educatots thrives.
              </p>
            </div>
            <div className="flex flex-col gap-y-1.5 items-left md:items-center justify-start md:text-center">
              <h2 className="hidden md:flex text-6xl mb-3 text-primary font-londrina font-extrabold">2</h2>
              <div className="w-[100px] md:w-[80px] lg:w-[100px] mb-6">
                <img src={Brain} alt="mobile phone" />
              </div>
              <p className="text-lg text-primary">
                Unlocked unlimited access to past question, live tutoring and a marketplace where educatots thrives.
              </p>
            </div>
            <div className="flex flex-col md:col-span-2 lg:col-span-1 lg:px-0 md:px-[100px] gap-y-1.5 items-left md:items-center justify-start md:text-center">
              <h2 className="hidden md:flex text-6xl mb-3 text-primary font-londrina font-extrabold">3</h2>
              <div className="w-[100px] md:w-[80px] lg:w-[100px] mb-6">
                <img src={Mission} alt="mobile phone" />
              </div>
              <p className="text-lg text-primary">
                Unlocked unlimited access to past question, live tutoring and a marketplace where educatots thrives.
              </p>
            </div>

          </div>
        </div>
        <div className="w-full h-28 bg-accent flex gap-14 items-center justify-center text-primary text-center">
          <div className="hidden lg:flex flex-col success-Rate">
            <h2 className="text-primary text-4xl font-bold mb-2">
              50K+
            </h2>
            <p className="text-2xl font-normal">
              Active Learners
            </p>
          </div>
          <div className="hidden lg:flex flex-col success-Rate">
            <h2 className="text-primary text-4xl font-bold mb-2">
              100K+
            </h2>
            <p className="text-2xl font-normal">
              Expert Tutors
            </p>
          </div>
          <div className="hidden lg:flex flex-col success-Rate">
            <h2 className="text-primary text-4xl font-bold mb-2">
              25K+
            </h2>
            <p className="text-2xl font-normal">
              Past Questions
            </p>
          </div>
          <div className="hidden lg:flex flex-col success-Rate">
            <h2 className="text-primary text-4xl font-bold mb-2">
              98%
            </h2>
            <p className="text-2xl font-normal">
              Success Rate
            </p>
          </div>
          <div className=" flex flex-col lg:hidden successRate-carousel text-center text-primary">
            <h2 className="text-primary text-4xl font-bold mb-2">{successRates[currentIndex].value}</h2>
            <p className="text-2xl font-normal">{successRates[currentIndex].label}</p>
          </div>

        </div>
      </section>
      <section id="Features" className="w-full h-full pt-[50px] lg:pt-[100px] pb-[100px] bg-light">
        <div className="flex items-center justify-center flex-col w-full">
          <p className="text-xl text-primary font-light text-left w-[80%]">FAQs</p>
          <h2 className="text-3xl font-medium text-primary sm:w-[80%]">Common questions</h2>
          <div className="w-[95%] pr-5 md:pr-0 sm:w-[75%] grid lg:grid-cols-2 grid-col-1 mt-[50px] gap-12 text-left">
            
            <div className="flex gap-x-7 items-center justify-between border-2 border-primary rounded-[30px] px-7 py-3">
              <h2 className="text-lg text-primary">
                How do live tutoring sessions work?
              </h2>
              <div className="h-full items-center justify-center flex">
                <div className="rounded-full w-[40px] h-[40px] bg-primary text-white items-center justify-center flex">
                  <div className="w-[20px] h-[20px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex gap-x-7 items-center justify-between border-2 border-primary rounded-[30px] px-7 py-3">
              <h2 className="text-lg text-primary">
                How do live tutoring sessions work?
              </h2>
              <div className="h-full items-center justify-center flex">
                <div className="rounded-full w-[40px] h-[40px] bg-primary text-white items-center justify-center flex">
                  <div className="w-[20px] h-[20px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex gap-x-7 items-center justify-between border-2 border-primary rounded-[30px] px-7 py-3">
              <h2 className="text-lg text-primary">
                How do live tutoring sessions work?
              </h2>
              <div className="h-full items-center justify-center flex">
                <div className="rounded-full w-[40px] h-[40px] bg-primary text-white items-center justify-center flex">
                  <div className="w-[20px] h-[20px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex gap-x-7 items-center justify-between border-2 border-primary rounded-[30px] px-7 py-3">
              <h2 className="text-lg text-primary">
                How do live tutoring sessions work?
              </h2>
              <div className="h-full items-center justify-center flex">
                <div className="rounded-full w-[40px] h-[40px] bg-primary text-white items-center justify-center flex">
                  <div className="w-[20px] h-[20px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex gap-x-7 items-center justify-between border-2 border-primary rounded-[30px] px-7 py-3">
              <h2 className="text-lg text-primary">
                How do live tutoring sessions work?
              </h2>
              <div className="h-full items-center justify-center flex">
                <div className="rounded-full w-[40px] h-[40px] bg-primary text-white items-center justify-center flex">
                  <div className="w-[20px] h-[20px] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex gap-x-7 items-center justify-between border-2 border-primary rounded-[30px] px-7 py-3">
              <div className="flex flex-col text-left justify-start items-center">
                <h2 className="text-lg text-primary self-start">
                  How do live tutoring sessions work?
                </h2>
              </div>
              
              <div className="h-full items-center justify-center flex">
                  <div className="rounded-full w-[40px] h-[40px] bg-primary text-white items-center justify-center flex">
                    <div className="w-[20px] h-[20px] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    </div>
                  </div>
                  
              </div>
            </div>
            {/* <div
              className={`flex gap-x-7 items-start justify-between border-2 rounded-[30px] px-7 py-3 transition-all duration-300 ${isHovered ? 'bg-primary text-white h-auto' : 'border-primary h-[80px]'
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col text-left justify-start items-start">
                <h2 className={`text-lg ${isHovered ? 'text-white' : 'text-primary'} self-start`}>
                  How do live tutoring sessions work?
                </h2>
                {isHovered && (
                  <p className="text-sm text-white mt-2 transition-opacity duration-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, sint. Aut, tempora. Quis reprehenderit eum nam illum est voluptates officia itaque minus molestias, sed soluta possimus hic quo. Fugiat, animi.
                  </p>
                )}
              </div>

              <div className="h-full items-center justify-center flex">
                <div
                  className={`rounded-full w-[40px] h-[40px] flex items-center justify-center ${isHovered ? 'bg-white' : 'bg-primary'
                    }`}
                >
                  <div className="w-[20px] h-[20px]">
                    {isHovered ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          fill="#1b4c2e"
                          d="M416 208H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          fill="#ffffff"
                          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </section>
      <section id="getStarted" className="w-full h-full pt-[50px] lg:pt-[50px] pb-[100px] bg-light">
        <div className="flex items-center justify-center flex-col w-full">
          <h2 className="text-3xl font-medium text-primary text-center mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-primary font-light text-center w-[90%] mb-12">Join thousand of student achieving their academic <br />goals with EasyLearn</p>
          <div className="w-[95%] pr-5 md:pr-0 sm:w-[75%] grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-12 text-left">
            <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
              <img src={Student} alt="studentProfile" className='object-cover h-full w-full'/>
            </div>
            <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
              <img src={Student} alt="studentProfile" className='object-cover h-full w-full'/>
            </div>
            <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
              <img src={Student} alt="studentProfile" className='object-cover h-full w-full'/>
            </div>
            <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
              <img src={Student} alt="studentProfile" className='object-cover h-full w-full'/>
            </div>
            <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
              <img src={Student} alt="studentProfile" className='object-cover h-full w-full'/>
            </div>
            <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
              <img src={Student} alt="studentProfile" className='object-cover h-full w-full'/>
            </div>
          </div>
          <div className="mt-[50px]">
              <a href="#" className='flex items-center justify-center w-[150px] h-[50px] bg-primary shadow-md shadow-dark p-3 text-lg font-medium rounded-[30px] text-light hover:bg-accent  hover:text-light '>Get Started</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Body