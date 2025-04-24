import React from 'react'

function header() {
  return (
    <header className='bg-white max-w-6xl rounded-[20px] lg:mx-auto fidex top--10  p-4 h-[100px] flex items-center justify-center font-poppins z-[999] mb-[20px]'>
        <nav className="flex justify-between items-center w-full h-full p-[20px]">
            <div className="logo">
                <h2 className="text-primary text-4xl font-bold">Easy<span className='text-accent'>Learn</span></h2>
            </div>
            <div className="hidden lg:flex items-center justify-between gap-x-10 h-full">
                <ul className=" list-none flex gap-10 ml-10 text-2xl text-primary font-medium justify-center item">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">How it works</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    
                </ul>
                <div className="">
                    <a href="#" className='flex items-center justify-center w-[150px] h-[50px] bg-primary shadow-md shadow-dark p-3 text-lg font-medium rounded-[30px] text-light hover:bg-accent  hover:text-light '>Get Started</a>
                </div>
            </div>
            <div className="lg:hidden flex mr-[20px]">
                <button className="text-primary text-3xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>

    </header>
  )
}

export default header