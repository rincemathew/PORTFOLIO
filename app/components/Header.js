

import React from 'react'

function Header() {
  return (
    <nav className="bg-white border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                <a className="text-2xl font-bold flex items-center" href="index.html">
                    <i className='uil uil-user mr-2'></i> Marvel
                </a>

                <button className="lg:hidden flex flex-col space-y-1.5" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </button>

                <div className="hidden lg:flex flex-grow items-center justify-between" id="navbarNav">
                    <ul className="flex flex-col lg:flex-row lg:space-x-8">
                        <li className="nav-item">
                            <a href="#about" className="nav-link py-2 lg:py-0 hover:text-gray-600 transition-colors">
                                <span data-hover="About">About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" className="nav-link py-2 lg:py-0 hover:text-gray-600 transition-colors">
                                <span data-hover="Projects">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#resume" className="nav-link py-2 lg:py-0 hover:text-gray-600 transition-colors">
                                <span data-hover="Resume">Resume</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link py-2 lg:py-0 hover:text-gray-600 transition-colors">
                                <span data-hover="Contact">Contact</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="flex items-center space-x-4 ml-auto">
                        <div className="flex items-center">
                            <i className="color-mode-icon mr-2"></i>
                            <span>Color mode</span>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Header