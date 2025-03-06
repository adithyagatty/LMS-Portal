import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from 'lucide-react';
import { Menu, ShoppingCart, User, LogOut, BookOpen } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo and Search Bar */}
      <div className="flex items-center space-x-4 w-full justify-between">
      <Link to="/" className="text-xl font-bold whitespace-nowrap">
          LMS Portal
        </Link>
        <div className="flex justify-center items-center flex-grow ">
        <div className="relative w-full mr-5"> {/* Container for icon and input, relative for absolute positioning of icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"> {/* Icon container, absolute position to place icon inside input */}
        <Search className="h-5 w-5 text-gray-500" /> {/* Lucid UI Search Icon */}
      </div>
      <input
        type="text"
        placeholder="Search courses..."
        className="sm:block p-2 border border-gray-400 hover:border-blue-400 rounded-lg w-full mr-5 pl-8" /* Added pl-8 for padding left to accommodate icon */
      />
    </div>
        </div>
      </div>

      {/* Large Screen Items */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="flex items-center space-x-2 whitespace-nowrap">
          <BookOpen size={20} />
          <span>My Learning</span>
        </button>
        <button className="flex items-center space-x-2">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </button>
        <button className="flex items-center space-x-2">
          <User size={20} />
          <span>Profile</span>
        </button>
      </div>

      {/* Small Screen Expand Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-40 p-2 flex flex-col space-y-2 z-999 md:hidden">
          <button className="flex items-center space-x-2">
            <BookOpen size={20} />
            <span>My Learning</span>
          </button>
          <button className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </button>
          <button className="flex items-center space-x-2">
            <User size={20} />
            <span>Profile</span>
          </button>
          <button className="flex items-center space-x-2 text-red-600">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
