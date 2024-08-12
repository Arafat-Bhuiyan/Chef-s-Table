import BannerImg from '../../assets/img/close-up-person-cooking.jpg'

const Banner = () => {
    return (
        <div>
            <div className='px-10 relative'>
                <img className='rounded-3xl object-cover w-full h-[600px]' src={BannerImg} alt="" />
                <div class="absolute top-0 w-[93.5%] h-[600px] bg-gray-800 opacity-70 px-10 rounded-3xl"></div>

                <div className='flex flex-col gap-8 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-4xl font-bold text-white'>Discover an exceptional cooking <br /> class tailored for you!</h3>
                    <p className='text-sm font-normal text-gray-100'>The cooking classes offered by CSCA aim to provide a distinctive experience that combines education, enjoyment, and delectable cuisine. Under the guidance of our skilled Chef Instructors.</p>
                    <div className='flex justify-center gap-5'>
                        <button className='bg-emerald-500 hover:bg-slate-50 rounded-full px-6 py-3 text-black font-semibold'>
                            Explore Now
                        </button>
                        <button className='border border-white hover:border-0 hover:bg-slate-800 rounded-full px-6 py-3 text-white font-semibold'>
                            Our Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;