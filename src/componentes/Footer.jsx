import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-10 text-white py-10">
      <div
        className="max-w-[1400px] mx-auto grid gap-8 
             2xl:grid-cols-5  xl:grid-cols-4 
             md:grid-cols-2 grid-cols-1 px-4"
      >
        <div>
          <h1 className="font-bold text-lg mb-3">BPL — Player Auction</h1>
          <p className="text-gray-400 text-sm">
            Check out the top players of BPL and their auction prices. Get your
            favorite players for your team and experience the thrill of cricket
            like never before!
          </p>
        </div>

        <div className="2xl:ml-10 xl:ml-0">
          <h1 className="font-bold text-lg mb-3">Top Players</h1>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Shakib Al Hasan</li>
            <li>Mosaddek Hossain</li>
            <li>Andre Russell</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3">Price</h1>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Shakib : $60000000</li>
            <li>Andre Russell : $120000000</li>
            <li>Glenn Maxwell : $110000000</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-3">Purchase Info</h1>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Buy Now</li>
            <li>Bid for Auction</li>
            <li>Contact Manager</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h1 className="font-bold text-lg mb-3">Follow BPL</h1>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <FaXTwitter className="text-3xl text-black hover:text-gray-700 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">@BPL_Cricket</span>
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <FaLinkedin className="text-3xl text-black hover:text-blue-800 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">@BPL_Cricket</span>
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <FaFacebookF className="text-black text-3xl hover:text-gray-700 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">@BPL_Cricket</span>
          </a>

          <a href="mailto:support@bpl.com" className="flex gap-2 items-center">
            <HiOutlineMail className="text-black text-3xl hover:text-gray-700 transition-colors rounded-full bg-white p-1" />
            <span className="text-gray-400">support@bpl.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
