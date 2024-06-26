import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import faqImg from '../assets/images/faq-img.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
import featureImg from '../assets/images/feature-img.png';
import FaqList from '../components/Faq/FaqList';
const Home = () => {
  return (
    <>
        <section>
            <div className='container'>
                <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                    <div className='lg:w-[570px]'>
                        <h1 className='text-[36px] leading-[50px] text-headingColor font-[800] md:text-[60px]'>We help patients live a healthy , longer life.</h1>
                        <p className='text_para'>Our team of dedicated professionals works tirelessly to provide personalized care and support, fostering a community where everyone can thrive and enjoy a healthier, happier life.</p>
                        <Link to='/doctors'><button className='btn'> Request an Appointment</button></Link>
                    </div>
                    <div className='flex gap-[30px] justify-end'>
                        <div><img className='w-full' src={heroImg01} alt='' /></div>
                        <div className='mt-[30px]'>
                            <img className='w-full mb-[30px]' src={heroImg02} alt='' />
                            <img className='w-full' src={heroImg03} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='lg:w-[470px] mx-auto'>
                    <h2 className='heading text-center'>Providing the best medical services</h2>
                    <p className='text_para text-center'>World-class care for everyone, our health system offers unmatched expert health care.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap:5 lg:gap-[30px] mt-[30px]'>
                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'><img src={icon01}/></div>
                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                        
                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                    <div className='py-[30px] px-5'>
                        <div className='flex items-center justify-center'><img src={icon02}/></div>
                        <div className='mt-[30px]'>
                            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book an Appointment</h2>
                   
                            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor'>
                                <BsArrowRight className='group-hover:text-white w-6 h-5' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* =======Services Section======== */}
        <section>
            <div className='container'>
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center'> Our medical services</h2>
                
                </div>
                <ServiceList />
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='flex items-center justify-between flex-col lg:flex-row'>
                    <div className='xl:w-[670px]'>
                        <h2 className='heading'>Book Appointment <br /> anytime.</h2>
                        <ul>
                            <li className='text_para'>1.Schedule the appointment directly.</li>
                            <li className='text_para'>2.Search for your physician here and contact their office.</li>
                            <li className='text_para'>3.View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
                        </ul>
                    </div>
                    <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
                        <img src={featureImg} className='w-3/4' alt='' />
                        <div className='w-[150px] lg:w-[240px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[6px] lg:gap-3'>
                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>Tue, 24</p>
                                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>10:00AM</p>
                                </div>                 
                            </div>
                            <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>Consultation</div>
                            <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                                <img src={avatarIcon} alt=''/>
                                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>WayneCollins</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='xl:w-[470px] mx-auto'>
                    <h2 className='heading text-center'> Our great doctors</h2>
                    <p className='text_para text-center'>World class care for everyone, our health system offers unmatched,expert health care.</p>
                </div>
                <DoctorList />
            </div>
        </section>
        {/* ====== faq section ========= */}
        <section>
            <div className='container'>
                <div className='flex justify-between gap-[50px] lg:gap-0'>
                    <div className='w-1/2 hidden md:block'><img src={faqImg} alt=''/></div>
                    <div className='w-full md:w-1/2'><h2 className='heading'>Most ques asked by our beloved patients</h2>
                    <FaqList />
                    </div>
                </div>
            </div>
        </section>     
    </>
  )
}
export default Home
