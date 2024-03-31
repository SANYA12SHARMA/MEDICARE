import {useEffect,useRef,useContext} from 'react';
import logo from '../../assets/images/logo.png';
import {NavLink,Link} from 'react-router-dom';
import { authContext} from '../../context/AuthContext.jsx';
import {BiMenu} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { path: "/home", display: 'Home' },
  { path: "/doctors", display: 'Find a Doctor' },
  { path: "/services", display: 'Services' },
  { path: "/contact", display: 'Contact' },
  { path: localStorage.getItem('role') === 'doctor' ? "/doctors/profile/me" : "/users/profile/me", display: 'Profile' }
];

const Header = () => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/home"); // Corrected this line
  };

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

 
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <img src={logo} alt=""/>
          {/* =============Menu============ */}
          <div className='navigation' ref={menuRef}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link) => (
                <li key={link.path}> {/* Added key prop for each list item */}
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
          {/* =============nav right============ */}
          <div className='flex items-center gap-4'>
            <span className='md:invisible' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
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
