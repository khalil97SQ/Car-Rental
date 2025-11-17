import {
  Car,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="">
          <Link className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">AutoRent</span>
          </Link>
          <p className="leading-relaxed my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quidem cumque tenetur fugiat consequatur praesentium maxime itaque
            aliquam alias quae?
          </p>
          <div className="flex gap-4 mt-2">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="">
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Economy Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Luxury Vehicles
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                SUVs & Trucks
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electric Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Long-term Rentals
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="">
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="text-blue-400 w-5 h-5" /> +97 (059) 341-3616
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-blue-400 w-5 h-5" /> kh@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-blue-400 w-5 h-5" /> Palestine Gaza
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 mt-10 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AutoRent. All rights reserve</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
