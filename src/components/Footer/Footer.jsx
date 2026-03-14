import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#13131305] mt-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-3xl font-bold text-[#131313]">
              Shelf<span className="text-[#23BE0A]">Stream</span>
            </Link>
            <p className="mt-6 text-[#131313B3] leading-relaxed">
              আপনার প্রিয় বইগুলো এক জায়গায় জমা করুন, পড়ুন এবং শেয়ার করুন। বইয়ের
              জগতের সাথে জুড়ে থাকতে আমাদের সাথেই থাকুন।
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-[#23BE0A] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-[#23BE0A] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-[#23BE0A] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-[#23BE0A] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:ml-10">
            <h3 className="text-xl font-bold text-[#131313] mb-6">Services</h3>
            <ul className="space-y-4 text-[#131313B3]">
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Book Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Authors
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#131313] mb-6">Company</h3>
            <ul className="space-y-4 text-[#131313B3]">
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-xl font-bold text-[#131313] mb-6">Legal</h3>
            <ul className="space-y-4 text-[#131313B3]">
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#23BE0A] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-[#13131380]">
          <p>© {new Date().getFullYear()} ShelfStream. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
