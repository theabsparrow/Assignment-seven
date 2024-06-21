import search from '../../assets/images/Vector.png'
import person from '../../assets/images/person.png'
const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-[#150B2B] text-[32px] font-bold leading-10'>Recipe Calories</h1>
            <div className='space-x-6 text-[#150B2BB2] leading-5'>
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center bg-[#150B2B0D] rounded-3xl py-3 px-6 space-x-2'>
                    <img src={search} alt="" />
                    <input className='outline-none bg-transparent' type="text" />
                </div>
                <div>
                    <button className='bg-[#0BE58A] p-3 rounded-full'><img src={person} alt=""/></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;