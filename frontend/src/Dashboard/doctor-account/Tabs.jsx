import { useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tab, setTab }) => {
    const {dispatch} = useContext(authContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/login"); // Corrected this line
    };

    return (
        <div>
            <span className="lg:hidden">
                <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
            <div className="hidden lg:flex flex-col p-[30px] shadow-panelShadow items-center h-max rounded-md">
            <button
    className={`${
        tab === 'overview'
            ? 'bg-indigo-100 text-primaryColor'
            : 'bg-transparent text-headingColor'
    } w-full btn mt-0 rounded-md`}
    onClick={() => setTab('overview')}
>
    Overview
</button>

                <button
                    className={`${
                        tab === 'appointments'
                            ? 'bg-indigo-100 text-primaryColor'
                            : 'bg-transparent text-headingColor'
                    } w-full btn mt-0 rounded-md`}
                    onClick={() => setTab('appointments')}
                >
                    Appointments
                </button>
                <button
                    className={`${
                        tab === 'settings'
                            ? 'bg-indigo-100 text-primaryColor'
                            : 'bg-transparent text-headingColor'
                    } w-full btn mt-0 rounded-md`}
                    onClick={() => setTab('settings')}
                >
                    Profile
                </button>
                <div className="w-full mt-[100px]">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white mb-4"
                    >
                        Logout
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Tabs;
