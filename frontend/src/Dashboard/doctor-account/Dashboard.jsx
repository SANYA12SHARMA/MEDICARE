import {useState} from 'react';
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error';
import useFetchData from '../../hooks/useFetchData'
import { BASE_URL } from "../../config";
import Tabs from './Tabs';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './../../pages/Doctors/DoctorAbout';
import Profile from './Profile';

const Dashboard = () => {

  const {data, loading, error} = useFetchData(`${BASE_URL}/doctors/profile/me`);

  const [tab, setTab] = useState('appointments');
  return( <section>
    <div className="max-w-[1170px] px-5 mx-auto">
      {loading && !error && <Loader/>}
      {error && !loading && <Error/>}

      {
        !loading && !error &&(
           <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab}/>
            
          </div>
      )}
    </div>
  </section>
  );
};

export default Dashboard