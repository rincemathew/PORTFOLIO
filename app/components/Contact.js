"use client";

import React from 'react'
import { IonIcon } from '@ionic/react';
import { callOutline, mailOutline, logoGithub, logoLinkedin, logoInstagram } from 'ionicons/icons';

function Contact() {
  return (
    <section className="bg-gray-100 py-10" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    
                    <div className="lg:w-5/12 w-full mb-10 lg:mb-0 lg:mr-10">
                        <div className="google-map w-full">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.558402180099!2d-73.99373482142036!3d40.75895421922642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855b8fb3083%3A0xa0f9aef176042a5c!2sTheater+District%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2smm!4v1549875377188" 
                                width="400" 
                                height="300" 
                                frameBorder="0" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                title="Google Map"
                            ></iframe>
                        </div>

                        <div className="bg-gray-800 text-white flex justify-between items-center py-4 px-6 mt-6">
                            <div>
                                <h3 className="mb-3">Say hello</h3>
                                <p className="mb-0">010 020 0960</p>
                                <p><a href="mailto:hello@company.co" className="text-blue-400 hover:underline">hello@company.co</a></p>
                            </div>

                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-white hover:text-blue-400" title="Dribbble"><i className="uil uil-dribbble"></i></a></li>
                                <li><a href="#" className="text-white hover:text-blue-400" title="Instagram"><i className="uil uil-instagram"></i></a></li>
                                <li><a href="#" className="text-white hover:text-blue-400" title="Youtube"><i className="uil uil-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-6/12 w-full">
                        <div className="contact-form">
                            <h2 className="text-2xl font-bold mb-6">Interested to work together? Let's talk</h2>

                            <form action="" method="get">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="lg:w-1/2 w-full px-3 mb-6">
                                        <input 
                                            type="text" 
                                            className="form-input w-full p-3 border border-gray-300 rounded" 
                                            name="name" 
                                            placeholder="Your Name" 
                                            id="name" 
                                        />
                                    </div>

                                    <div className="lg:w-1/2 w-full px-3 mb-6">
                                        <input 
                                            type="email" 
                                            className="form-input w-full p-3 border border-gray-300 rounded" 
                                            name="email" 
                                            placeholder="Email" 
                                            id="email" 
                                        />
                                    </div>

                                    <div className="w-full px-3 mb-6">
                                        <textarea 
                                            name="message" 
                                            rows="6" 
                                            className="form-textarea w-full p-3 border border-gray-300 rounded" 
                                            id="message" 
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <div className="lg:ml-auto lg:w-5/12 w-full px-3">
                                        <input 
                                            type="submit" 
                                            className="bg-blue-500 text-white w-full p-3 rounded cursor-pointer hover:bg-blue-600" 
                                            value="Send Message" 
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Contact