import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-[#8080804d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
            দারুল এহসান ক্যাডেট মাদ্রাসা 
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="#home" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><Link href="#services" className="text-sm hover:text-blue-400">Services</Link></li>
              <li><Link href="#about" className="text-sm hover:text-blue-400">About Us</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">Email: gmail.com</p>
            <p className="text-sm">Phone: ০১৭১৫৯৯৬৭৩৪</p>
            <p className="text-sm">Phone: ০১৬১৬০১৬৫১৬</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/mystudy.com.bd/friends_likes/" target="_blank" className="text-white hover:text-blue-600"><FaFacebook size={24} /></Link>
              <Link href="https://www.youtube.com/@dicms2022?app=desktop&fbclid=IwY2xjawI-ovhleHRuA2FlbQIxMAABHSoqiPYVthC6e87JIiLEFta0WLakkodFmUgdKMs4DbPipcjrjajX_NlPXw_aem_F5GRhNKGYUGf03PXOsp-bQ" className="text-white hover:text-blue-600"><FaYoutube size={24} /></Link>
              <Link href="https://twitter.com" className="text-white hover:text-blue-400"><FaTwitter size={24} /></Link>
              <Link href="https://instagram.com" className="text-white hover:text-pink-500"><FaInstagram size={24} /></Link>
              <Link href="https://linkedin.com" className="text-white hover:text-blue-700"><FaLinkedin size={24} /></Link>
              
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
