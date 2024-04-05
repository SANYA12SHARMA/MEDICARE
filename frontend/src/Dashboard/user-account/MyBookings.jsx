import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading";
import Error from '../../components/Error/Error';

const MyBookings = () => {
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  return (
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}
      {!loading && !error && (
        <table className='mt-10 w-full text-left text-sm text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>Name</th>
              <th scope='col' className='px-6 py-3'>Email</th>
              <th scope='col' className='px-6 py-3'>Price</th>
              <th scope='col' className='px-6 py-3'>Photo</th> {/* Added photo column */}
            </tr>
          </thead>
          <tbody>
            {appointments?.map(item => (
              <tr key={item._id}>
              <td className='text-normal text-gray-500 px-6 py-4'>{item.name}</td>
                <td className='text-normal text-gray-500 px-6 py-4'>{item.email}</td>
                <td className='px-6 py-4'>{item.ticketPrice}</td>
                <td className='px-6 py-4'>
                  <img src={item.photo} alt={item.name} className='w-12 h-12 rounded-full' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!loading && !error && appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">You did not book any doctor yet!</h2>
      )}
    </div>
  );
};

export default MyBookings;