/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';


const Cooking = ({ cooking, handlePreparing,}) => {
    const {recipe_name, preparing_time, calories,} = cooking;

    return (
        <div className='bg-[#28282808] p-4'>
            <table>
                <tbody>
                    <tr className='p-6 text-[#878787] font-medium font-fira leading-4'>
                        <td className='px-9'>{recipe_name}</td>
                        <td className='px-7'><span>{preparing_time}</span> min</td>
                        <td className='px-7'><span>{calories}</span> calories</td>
                        <td className='px-7'><button onClick={()=>handlePreparing(cooking,preparing_time,calories)} className='text-lg text-black font-medium font-lexend bg-[#0BE58A] py-[6px] px-4 rounded-full'>Preparing</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object
    // handlePreparing: PropTypes.func

}
export default Cooking;