import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a leading technology company, focused on innovation and delivering top-notch solutions for businesses worldwide.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#home" className="text-sm hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="text-sm hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="text-sm hover:text-blue-400">About Us</a></li>
              <li><a href="#contact" className="text-sm hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: contact@company.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-blue-600"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="text-white hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-white hover:text-pink-500"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-700"><FaLinkedin size={24} /></a>
              <a href="https://github.com" className="text-white hover:text-gray-600"><FaGithub size={24} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">© 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
