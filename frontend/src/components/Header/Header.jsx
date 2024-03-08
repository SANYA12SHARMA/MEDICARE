import {useEffect,useRef,useContext} from 'react';
import logo from '../../assets/images/logo.png';
import {NavLink,Link} from 'react-router-dom';
import { authContext} from '../../context/AuthContext.jsx';
import {BiMenu} from 'react-icons/bi';
const navLinks = [
  { path: "/home", display: 'Home' },
  { path: "/doctors", display: 'Find a Doctor' },
  { path: "/services", display: 'Services' },
  { path: "/contact", display: 'Contact' }
];

const Header = () => {

  const headerRef = useRef(null);
  const menuRef  = useRef(null);
  const {user,role,token} = useContext(authContext);
  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header');
      }else{
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll',handleStickyHeader);
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
  return (
    <header className='header flex items-center' ref={headerRef}>
    <div className='container'>
    <div className='flex items-center justify-between'>
    <img src={logo} alt=""/>
    {/* =============Menu============ */}
    <div className='navigation' ref={menuRef} >
    <ul className='menu flex items-center gap-[2.7rem]'>
    {
      navLinks.map((link)=>(
        <li>
          <NavLink to={link.path}
          className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] font-[600]' : 'text-textColor text-[16px]  font-[500] hover:text-primaryColor'}
          >
          {link.display}
          </NavLink>
        </li>
      ))
    }
    </ul>

    </div>
    {/* =============nav right============ */}
    <div className='flex items-center gap-4'>
    {
      token && user ? 
      (<div>
      <Link to={`${role==='doctor' ? '/doctors/profile/me':'/users/profile/me'}`}></Link>
      </div>)
      :
      (
        <Link to='/login'>
      <button className='bg-primaryColor px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
        Login
      </button>
      </Link>
      )
    }


   

      <span className='md:invisible' onClick={toggleMenu}>
      <BiMenu className='w-6 h-6 cursor-pointer'/>
      </span>
    </div>

    </div>

    

    </div>
    </header>
  )
}

export default Header
