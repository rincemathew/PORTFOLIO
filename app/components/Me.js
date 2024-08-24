import React from 'react'

function Me() {
  return (
    <section className="h-screen flex justify-center items-center bg-white" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    
                    <div className="lg:w-7/12 w-full flex items-center">
                        <div className="about-text">
                            <small className="text-gray-500 block mb-2">Welcome to <span className="block lg:inline">my portfolio website!</span></small>
                            <h1 className="text-4xl font-bold mb-4">
                                <span className="mr-2">Hey folks, I'm</span>
                                <div className="inline-block">
                                    <span className="block text-blue-600">Marvel Sann</span>
                                    <span className="block text-blue-600">Web Designer</span>
                                    <span className="block text-blue-600">UI Specialist</span>
                                </div>
                            </h1>

                            <p className="text-gray-700 mb-6">
                                Building a successful product is a challenge. I am highly energetic in user experience design, interfaces, and web development.
                            </p>
                            
                            <div className="flex mt-4">
                                <a href="#" className="btn bg-blue-500 text-white mr-4 py-2 px-4 rounded-lg flex items-center hover:bg-blue-600 transition">
                                    <i className='uil uil-file-alt mr-2'></i> Download Resume
                                </a>
                                <a href="#contact" className="btn bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition">
                                    Get a free quote
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-5/12 w-full mt-8 lg:mt-0">
                        <div className="about-image">
                            <img src="/new.png" className="w-full h-auto" alt="Software Engineer Illustration" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Me