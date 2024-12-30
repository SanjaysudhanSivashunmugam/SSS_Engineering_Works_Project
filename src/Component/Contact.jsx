function Contact() {
    return (
        <div className="container mx-auto border-t">
            <div className="mx-auto px-8 lg:px-12" id="cu">
                <h1 className="font-semibold text-3xl text-center py-8">Contact Us</h1>
                <div className="lg:flex pb-10 ">
                    <div className="lg:w-1/2 justify-center items-center h-ful pb-14 lg:pb-0">
                        <iframe
                            className="w-full border shadow-2xl"
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d245.2821614123316!2d77.98769579920285!3d10.38064259391075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssss%20engineering%20works!5e0!3m2!1sen!2sin!4v1735542714532!5m2!1sen!2sin"
                            height="500"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border">
                            <h2 className="text-2xl font-medium text-gray-700 mb-6 text-center">
                                Let’s Connect! Share Your Needs and Get a Customized Quote!
                            </h2>

                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Write your message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FFC107] text-white font-bold py-2 rounded-lg hover:bg-[#FFD54F] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
