/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types';
import clock from '../../../assets/images/clock.png'
import fire from '../../../assets/images/fire.png'

const Recipe = ({ recipe, handleCookButton }) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = recipe


    return (
        <div className='p-6 border-[1px] border-[#28282833] rounded-xl flex flex-col'>
            <div className='flex-grow'>
                <div className='flex justify-center'>
                    <img className='rounded-xl' src={recipe_image} alt="" />
                </div>
                <div className='border-b-[1px] border-[#2828281A] mt-6 pb-4'>
                    <h1 className='text-[#282828] text-xl font-semibold leading-6'> {recipe_name}</h1>
                    <p className='text-[#878787] font-fira leading-7 mt-4'>{short_description}</p>
                </div>
                <div className='mt-6 pb-4 border-b-[1px] border-[#2828281A]'>
                    <h1 className='text-[#282828] text-lg font-medium leading-6'>Ingredients: {ingredients.length}</h1>
                    <div className='mt-6 text-lg font-fira text-[#878787] leading-8'>
                        {
                            ingredients.map((ingredient, idx) => <li> key={idx} {ingredient} </li>)
                        }
                    </div>
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <div className='flex items-center gap-2'>
                        <img src={clock} alt="" />
                        <p className='text-[#282828CC] font-fira leading-5'>{preparing_time}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={fire} alt="" />
                        <p className='text-[#282828CC] font-fira leading-5'>{calories}</p>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <button onClick={() => handleCookButton(recipe)} className='text-lg font-medium bg-[#0BE58A] py-3 px-6 rounded-full'>Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCookButton: PropTypes.func
}
export default Recipe;