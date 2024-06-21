/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import Cooking from './cooking/Cooking';

const Cookings = ({ cookings, handlePreparing, removeHandle}) => {


    return (
        <div>
            <div className="border-b-[1px] border-[#28282833] pb-4 px-[72px] w-[25vw] mb-6 mx-auto">
                <h1 className="text-[#282828] font-font-lexend text-[24px] font-semibold leading-7">Want to cook: <span>{cookings.length}</span></h1>
            </div>
            <div className='mb-6 px-4'>
                <thead>
                    <tr className='p-5 text-[#878787] font-medium font-fira leading-4'>
                        <th className='px-9'>Name</th>
                        <th className='px-12'>Time</th>
                        <th className='px-2'>Calories</th>
                        <th className='px-9'></th>
                    </tr>
                </thead>
            </div>
            <div>
                {
                    cookings.map(cooking => <Cooking
                        key={cooking.recipe_id}
                        handlePreparing={handlePreparing}
                        removeHandle={removeHandle}
                        cooking={cooking}
                    ></Cooking>)
                }
            </div>
        </div>
    );
};
Cookings.propTypes = {
    cookings: PropTypes.array
    // handlePreparing: PropTypes.func
}
export default Cookings;