/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Preparing from './preparing/Preparing';
import GrandTotal from './Grandtotal/GrandTotal';

const Preparings = ({ preparings, time,calories}) => {
    return (
        <div>
            <div>
                <div className="border-b-[1px] border-[#28282833] pb-4 px-[72px] w-[26vw] mt-6 mx-auto">
                    <h1 className="text-[#282828] font-font-lexend text-[24px] font-semibold leading-7">Currently cooking: <span>{preparings.length}</span> </h1>
                </div>
                <div className='mb-6 mt-6 px-4'>
                    <thead>
                        <tr className='p-5 text-[#878787] font-medium font-fira leading-4'>
                            <th className='px-10'>Name</th>
                            <th className='px-[75px]'>Time</th>
                            <th className='px-2'>Calories</th>
                            <th className='px-7'></th>
                        </tr>
                    </thead>
                </div>
                <div>
                    {
                        preparings.map((preparing, index) => <Preparing key={index} preparing={preparing}></Preparing>)
                    }
                </div>
            </div>
            <div>
                    <GrandTotal time={time} calories={calories}></GrandTotal>
            </div>
        </div>
    );
};
Preparings.propTypes = {
    preparingss: PropTypes.object
}
export default Preparings;