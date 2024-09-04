import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    // Coordinates for the location you want to pin
    const lat = 12.8678006; // Example latitude
    const lng = 74.8966624; // Example longitude

    return (
        <footer className="bg-black text-white py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Footer Links */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <a href="/" className="text-white hover:text-gray-400 mx-2 transition">Home</a>
                        <a href="/problem-statements" className="text-white hover:text-gray-400 mx-2 transition">Problem Statements</a>
                        <a href="/register" className="text-white hover:text-gray-400 mx-2 transition">Register</a>
                        <a href="/hackthon-details" className="text-white hover:text-gray-400 mx-2 transition">Hackathon Details</a>
                    </div>
                    
                    {/* Contact Information */}
                    <div className="text-center md:text-right mb-6 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} College Hackathon. All rights reserved.</p>
                        <p>Email: contact@collegehackathon.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://facebook.com" className="text-white hover:text-gray-400 transition" aria-label="Facebook"><FaFacebook size={24} /></a>
                        <a href="https://twitter.com/nmamitnitte" className="text-white hover:text-gray-400 transition" aria-label="Twitter"><FaTwitter size={24} /></a>
                        <a href="https://www.instagram.com/nmamit_nitte/" className="text-white hover:text-gray-400 transition" aria-label="Instagram"><FaInstagram size={24} /></a>
                        <a href="https://linkedin.com" className="text-white hover:text-gray-400 transition" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
                    </div>
                </div>
                
                {/* Map and Location */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Event Location</h3>
                    <div className="w-full h-64 md:h-80">
                        <iframe
                            src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=AIzaSyA0qkxAQx7FEKXcUFsC9Y56361qXePgw3k`}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                            title="Event Location"
                        ></iframe>
                    </div>
                    <p className="mt-4 text-center">
                        <a 
                            href={`https://www.google.com/maps?q=${lat},${lng}&hl=en`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-400 hover:text-blue-300 transition"
                        >
                            Nitte Institute of Professional Education, Kodakal, Kannur Post, Mangaluru - 575007, Karnataka, India
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
