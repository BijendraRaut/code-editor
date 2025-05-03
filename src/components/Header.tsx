import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, User, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import Badge from './ui/Badge';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, currentUser, logout } = useAuth();
  const location = useLocation();
  
  const isAdminPage = location.pathname.startsWith('/admin');
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-emerald-600 text-2xl font-bold">FreshMart</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isAdminPage ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Shop
                </Link>
                <Link to="/cart" className="relative text-gray-700 hover:text-emerald-600">
                  <ShoppingCart size={24} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-emerald-600 text-white text-xs rounded-full">
                      {totalItems}
                    </span>
                  )}
                </Link>
                {isAuthenticated ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600">
                      <User size={20} />
                      <span>{currentUser?.email}</span>
                    </button>
                    <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {currentUser?.isAdmin && (
                        <Link 
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <button 
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link 
                    to="/admin/login" 
                    className="text-gray-700 hover:text-emerald-600 font-medium"
                  >
                    Sign In
                  </Link>
                )}
              </>
            ) : (
              isAuthenticated && (
                <div className="flex items-center space-x-4">
                  <Badge variant="primary">Admin</Badge>
                  <button 
                    onClick={logout} 
                    className="text-gray-700 hover:text-red-600"
                  >
                    Sign Out
                  </button>
                  <Link to="/" className="text-gray-700 hover:text-emerald-600">
                    View Store
                  </Link>
                </div>
              )
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isAdminPage ? (
              <>
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Shop
                </Link>
                <Link 
                  to="/cart" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Cart ({totalItems})
                </Link>
                {isAuthenticated ? (
                  <>
                    {currentUser?.isAdmin && (
                      <Link 
                        to="/admin"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                        onClick={() => setMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <button 
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                    >
                      Sign Out ({currentUser?.email})
                    </button>
                  </>
                ) : (
                  <Link 
                    to="/admin/login" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </>
            ) : (
              isAuthenticated && (
                <>
                  <div className="px-3 py-2 text-gray-700 font-medium">
                    <Badge variant="primary">Admin</Badge>
                    <span className="ml-2">{currentUser?.email}</span>
                  </div>
                  <Link 
                    to="/" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    View Store
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;