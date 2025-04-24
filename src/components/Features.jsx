
function Features() {
    return (
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
    )
}

export default Features