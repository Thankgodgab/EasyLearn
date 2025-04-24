import Image from '../assets/image.png';

function Hero() {
    return (
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
  )
}

export default Hero