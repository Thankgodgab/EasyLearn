function Footer() {
  return (
    <footer className="bg-dark w-full flex items-center justify-center pt-[100px] pb-[50px]">
      <div className="lg:w-[80%] px-[20px] lg:px-[50px] flex flex-col items-center justify-between h-full">
        <div className="flex flex-col md:flex-row gap-3 w-full mb-[80px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="logo w-full">
              <h2 className="text-primary text-4xl font-bold text-left">
                Easy<span className="text-accent">Learn</span>
              </h2>
            </div>
          </div>
          <div className="lg:w-[95%] grid grid-cols-2 md:grid-cols-3 text-white items-center justify-start gap-10">
            <div>
              <h3 className="text-white text-xl font-semibold mb-[10px]">Quick Links</h3>
              <ul className="list-none flex flex-col gap-4 text-lg text-white font-normal justify-center item">
                <li>
                  <a href="#hero-section">Home</a>
                </li>
                <li>
                  <a href="#Features">Features</a>
                </li>
                <li>
                  <a href="#howItWorks">How it works</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold mb-[10px]">Support</h3>
              <ul className="list-none flex flex-col gap-4 text-lg text-white font-normal justify-center item">
                <li>
                  <a href="#fqas">FAQ</a>
                </li>
                <li>
                  <a href="#helpCenter">Help Center</a>
                </li>
                <li>
                  <a href="#T&C">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-white text-xl font-semibold mb-[10px]">Stay Connected</h3>
              <ul className=" list-none flex flex-col gap-4 text-lg text-white font-normal justify-center item">
                <li>
                  <a href="www.linkedin.com">Linkedin</a>
                </li>
                <li>
                  <a href="www.instagram.com">Instagram</a>
                </li>
                <li>
                  <a href="#">Hotline</a>
                </li>
                <li>
                  <a href="www.x.com">X</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="text-sm font-light text-white">
            &copy; 2025 EasyLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;