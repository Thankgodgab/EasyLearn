
function footer() {
  return (
    <footer className="bg-dark w-full flex items-center justify-center pt-[100px] pb-[80px]">
        <div className="lg:w-[80%] px-[20px] lg:px-[50px] flex flex-col items-center justify-between h-full ">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="logo w-full">
                    <h2 className="text-primary text-4xl font-bold text-left">Easy<span className='text-accent'>Learn</span></h2>
                </div>
              </div>
              <div className="lg:w-[80%] grid grid-cols-2 md:grid-cols-3 text-white items-center justify-start gap-10">
                  <div className="">
                    <h3 className="text-white text-xl font-semibold mb-[10px]">Quick Links</h3>
                    <ul className=" list-none flex flex-col gap-4 text-lg text-white font-normal justify-center item">
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
                  </div>
                  <div className="">
                    <h3 className="text-white text-xl font-semibold mb-[10px]">Quick Links</h3>
                    <ul className=" list-none flex flex-col gap-4 text-lg text-white font-normal justify-center item">
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
                  </div>
                  <div className="">
                    <h3 className="text-white text-xl font-semibold mb-[10px]">Quick Links</h3>
                    <ul className=" list-none flex flex-col gap-4 text-lg text-white font-normal justify-center item">
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
  )
}

export default footer