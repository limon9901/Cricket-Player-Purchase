
import logo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#060919] text-white relative ">
      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-45">
        
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="Footer Logo"
            className="w-35 h-auto object-contain"
          />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              About Us
            </h3>

            <p className="max-w-72 text-[16px] leading-6 text-white/60 ">
              We are a passionate team dedicated to providing the best
              services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-[16px] text-white/60">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Subscribe
            </h3>

            <p className=" text-[16px]  text-white/60 mb-3 leading-6">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>

            <div className="flex h-10 w-full max-w-95">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-md border border-gray-200 bg-white px-3 text-[16px] text-gray-700 outline-none placeholder:text-gray-400"
              />

              <button
                className="rounded-r-md bg-linear-to-r from-pink-300 to-yellow-300 px-3 text-[16px] font-semibold text-black"
              >
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center">
        <p className="text-[16px] text-gray-500">
          ©2026 Limon All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;