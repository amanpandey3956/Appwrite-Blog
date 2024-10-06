import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-400 border-t-2 border-t-black py-4">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap">
          <div className="w-full p-2 md:w-1/2 lg:w-5/12">
            <p className="text-sm text-gray-600 text-center">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-2/12">
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul className="text-sm">
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/features">Features</Link>
              </li>
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/pricing">Pricing</Link>
              </li>
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/affiliate">Affiliate Program</Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-700" to="/press-kit">Press Kit</Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-2/12">
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Support
            </h3>
            <ul className="text-sm">
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/account">Account</Link>
              </li>
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/help">Help</Link>
              </li>
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-700" to="/customer-support">Customer Support</Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-3/12">
            <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul className="text-sm">
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/terms">Terms &amp; Conditions</Link>
              </li>
              <li className="mb-1">
                <Link className="text-gray-900 hover:text-gray-700" to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-gray-900 hover:text-gray-700" to="/licensing">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
