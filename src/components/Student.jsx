import student from '../assets/student.png'

function Student() {
    return (
        <section id="getStarted" className="w-full h-full pt-[50px] lg:pt-[50px] pb-[100px] bg-light">
            <div className="flex items-center justify-center flex-col w-full">
                <h2 className="text-3xl font-medium text-primary text-center mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="text-xl text-primary font-light text-center w-[90%] mb-12">Join thousand of student achieving their academic <br />goals with EasyLearn</p>
                <div className="w-[95%] pr-5 md:pr-0 sm:w-[75%] grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-12 text-left">
                    <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
                        <img src={student} alt="studentProfile" className='object-cover h-full w-full' />
                    </div>
                    <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
                        <img src={student} alt="studentProfile" className='object-cover h-full w-full' />
                    </div>
                    <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
                        <img src={student} alt="studentProfile" className='object-cover h-full w-full' />
                    </div>
                    <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
                        <img src={student} alt="studentProfile" className='object-cover h-full w-full' />
                    </div>
                    <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
                        <img src={student} alt="studentProfile" className='object-cover h-full w-full' />
                    </div>
                    <div className="items-center h-[100px] bg-pink-100 rounded-full overflow-hidden">
                        <img src={student} alt="studentProfile" className='object-cover h-full w-full' />
                    </div>
                </div>
                <div className="mt-[50px]">
                    <a href="#" className='flex items-center justify-center w-[150px] h-[50px] bg-primary shadow-md shadow-dark p-3 text-lg font-medium rounded-[30px] text-light hover:bg-accent  hover:text-light '>Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Student