import React, { useState, useEffect } from 'react';

import Brain from '../assets/brain/9228417.jpg';
import Mission from '../assets/mission-concept/5994523.jpg';
import Phone from '../assets/smartphone/3991832.jpg';

function HowItWorks() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const successRates = [
        { value: '100K+', label: 'Expert Tutors' },
        { value: '25K+', label: 'Past Questions' },
        { value: '95%', label: 'Success Rate' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % successRates.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [successRates.length]);

    return (
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
    )
}

export default HowItWorks