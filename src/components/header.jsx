import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white max-w-6xl rounded-[20px] lg:mx-auto fidex top--10  p-4 h-[100px] flex items-center justify-center font-poppins z-[999] mb-[20px]'>
      <nav className="flex justify-between items-center w-full h-full p-[20px]">
        <div className="logo">
          <h2 className="text-primary text-4xl font-bold">
            Easy<span className="text-accent">Learn</span>
          </h2>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-x-10 h-full">
          <ul className="list-none flex gap-10 ml-10 text-2xl text-primary font-medium justify-center">
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
          <div>
            <a
              href="#"
              className="flex items-center justify-center w-[150px] h-[50px] bg-primary shadow-md shadow-dark p-3 text-lg font-medium rounded-[30px] text-light hover:bg-accent hover:text-light"
            >
              Get Starte
            </a>
          </div>
        </div>
        <div className="lg:hidden flex mr-[20px]">
          <button
            className="text-primary text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white rounded-[20px] shadow-lg p-4 z-[998]">
          <ul className="list-none flex flex-col gap-4 text-xl text-primary font-medium">
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
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-full h-[50px] bg-primary shadow-md shadow-dark p-3 text-lg font-medium rounded-[30px] text-light hover:bg-accent hover:text-light"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;