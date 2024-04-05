import { useEffect, useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { authContext } from '../../context/AuthContext.jsx';
import { BiMenu } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { dispatch, user, role, token } = useContext(authContext);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/home");
  };

  // useRef to access DOM elements
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // Array of navigation links
  const navLinks = [
    { path: "/home", display: 'Home' },
    { path: "/doctors", display: 'Find a Doctor' },
    { path: "/services", display: 'Services' },
    { path: "/contact", display: 'Contact' },
    // Conditional rendering based on user authentication and role
    { path: token && user ? (role === 'doctor' ? "/doctors/profile/me" : "/users/profile/me") : "/login", display: 'Profile' }
  ];
  

  // Function to handle sticky header
  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  // useEffect to handle sticky header and remove event listener on unmount
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  // Function to toggle menu visibility
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <img src={logo} alt=""/>
          {/* Navigation Menu */}
          <div className='navigation' ref={menuRef}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {/* Mapping through navLinks array to render navigation links */}
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    activeClassName='text-primaryColor text-[16px] font-[600]' 
                    className='text-textColor text-[16px] font-[500] hover:text-primaryColor'
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Navigation Right */}
          <div className='flex items-center gap-4'>
            {/* Menu Icon */}
            <span className='md:invisible' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
            {/* Conditional rendering of login/logout button */}
            {token && user ? (
              <div>
                <button
                  onClick={handleLogout}
                  className="bg-primaryColor px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to='/login'>
                <button className='bg-primaryColor px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
