import convertTime from "../../utils/convertTime.js";
import {BASE_URL,token} from './../../config.js';
import {toast} from 'react-toastify';
const SidePanel = ({doctorId,ticketPrice,timeSlots}) => {
  const bookingHandler = async() => {
    try{
      // Retrieve user object from local storage
      let user;
      try {
        const userString = localStorage.getItem('user');
        if (!userString) {
          throw new Error('User data not found in local storage');
        }
        user = JSON.parse(userString);
        if (!user || !user._id) {
          throw new Error('User ID not found in user data');
        }
      } catch (error) {
        console.error('Error retrieving or parsing user data:', error);
        // Handle the error appropriately, such as showing a message to the user
        // or redirecting them to a login page if necessary
        toast.error('User ID not found. Please log in.');
        // Redirect to login page or handle as needed
        return;
      }
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}/${user._id}`,{
        method:'post',
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const data = await res.json();
      if(!res.ok){
        throw new Error(data.message + 'Please try again');
      }
      if(data.session && data.session.url){
        window.location.href = data.session.url;
      }
    }catch(err){
      toast.error(err.message);
    }
  }
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text_para mt-0 font-semibold'>Ticket Price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
            {ticketPrice} BDT
        </span>
      </div>
      <div className='mt-[30px]'>
        <p className='text_para mt-0 font-semibold text-headingColor'>
            Available Time Slots
        </p>
        <ul className='mt-3'>
        {timeSlots?.map((item,index)=>(   
          <li key={index} className='flex items-center justify-between mb-2'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>
                    {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p>
            </li>))}
        </ul>
      </div>
      <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>Book an Appointment</button>
    </div>
  )
}

export default SidePanel;
