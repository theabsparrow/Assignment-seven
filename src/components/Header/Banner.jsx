import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='mt-12 relative'>
            <img src={banner} alt="" />
            <div className='absolute bottom-[120px] left-[90px]'>
                <h1 className='text-[52px] text-white font-bold leading-[66px] text-center w-[60vw] mx-auto'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-white text-lg leading-7 text-center mx-auto w-[70vw] mt-6 opacity-70'>cooking is a passion and we are very much professional. we have worlds best cook to make the best dishes for you. any type of food can be served by our cook. so order now to taste our delicious food</p>
                <div className='mt-10 flex justify-center items-center gap-8'>
                    <button className='bg-[#0BE58A] text-xl py-5 px-7 rounded-full leading-6 font-semibold'>Explore Now</button>
                    <button className='bg-transparent border-white border-[1px] text-xl py-5 px-7 rounded-full leading-6 font-semibold text-white'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;