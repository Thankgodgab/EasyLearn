import React, { useState } from 'react';

function Faqs() {

    const [openFAQs, setOpenFAQs] = useState(Array(6).fill(false));

    const faqs = [
        {
            question: 'How do live tutoring sessions work?',
            answer:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia incidunt, eos impedit quaerat exercitationem itaque reiciendis harum quo ex.',
        },
        {
            question: 'What subjects are available for tutoring?',
            answer:
                'Our platform offers tutoring in a wide range of subjects, including Math, Science, English, History, and more, tailored to various academic levels.',
        },
        {
            question: 'How can I access past questions?',
            answer:
                'Past questions are available through our comprehensive question bank, accessible anytime with your subscription, organized by subject and difficulty.',
        },
        {
            question: 'Is the platform suitable for all grade levels?',
            answer:
                'Yes, EasyLearn supports students from elementary to college levels, with resources and tutoring tailored to each grade.',
        },
        {
            question: 'Can I become a tutor on EasyLearn?',
            answer:
                'Absolutely! Qualified educators can join our marketplace as tutors, set their schedules, and connect with students globally.',
        },
        {
            question: 'How does AI-powered learning work?',
            answer:
                'Our AI tailors learning experiences by analyzing your progress, recommending resources, and providing personalized practice questions.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenFAQs((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            console.log(`Toggling FAQ ${index}:`, newState);
            return newState;
        });
    };

    return (
        <section id="fqas" className="w-full h-full pt-[50px] lg:pt-[100px] pb-[100px] bg-light">
            <div className="flex items-center justify-center flex-col w-full">
                <p className="text-xl text-primary font-light text-left w-[80%]">FAQs</p>
                <h2 className="text-3xl font-medium text-primary sm:w-[80%]">Common questions</h2>
                <div className="w-[95%] pr-5 md:pr-0 sm:w-[75%] grid lg:grid-cols-2 grid-cols-1 mt-[50px] gap-12 text-left items-start">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`flex flex-row gap-x-7 justify-between border-2 rounded-[30px] px-7 py-3 transition-all duration-300 min-h-0 ${openFAQs[index] ? 'bg-primary text-white' : 'border-primary'
                                }`}
                        >
                            <div className="flex flex-col text-left justify-start items-start">
                                <h2
                                    className={`text-lg ${openFAQs[index] ? 'text-white' : 'text-primary'
                                        } self-start`}
                                >
                                    {faq.question}
                                </h2>
                                {openFAQs[index] && (
                                    <p className="text-sm mt-2 transition-opacity duration-300 opacity-100">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                            <div className="flex items-center justify-center">
                                <div
                                    className={`rounded-full w-[40px] h-[40px] flex items-center justify-center ${openFAQs[index] ? 'bg-white' : 'bg-primary'
                                        } cursor-pointer`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="w-[20px] h-[20px]">
                                        {openFAQs[index] ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="#0d6efd"
                                                    d="M416 208H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32s-14.33-32-32-32z"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    fill="#ffffff"
                                                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faqs