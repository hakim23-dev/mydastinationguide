import React from "react";
import { FaEnvelope, FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16 p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-xl">MDG</h4>
          <p className="text-sm mt-2">
            Découvrez les meilleurs cafés, restaurants, hôtels et attractions de
            la région de Beni Mellal-Khénifra.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Services</h5>
          <ul className="text-sm space-y-1">
            <li>Online Booking</li>
            <li>Reviews & Ratings</li>
            <li>24/7 Support</li>
            <li>Recommendations</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="text-sm space-y-1">
            <li>Home</li>
            <li>Destinations</li>
            <li>Reservations</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Address</h5>
          <p className="text-sm">
            123 Lorem Ipsum Street
            <br />
            Jakarta, Indonesia
          </p>
          <div className="mt-4 space-x-4 text-xl text-gray-300 flex">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookF />
            </Link>
            <Link to="mailto:foodguide@gmail.com" className="hover:text-red-400">
              <FaEnvelope />
            </Link>
            <Link to="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaGoogle />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © 2025 FDG. All rights reserved.
      </div>
    </footer>
  );
}
