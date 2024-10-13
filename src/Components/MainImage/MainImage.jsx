import MainLogo from '../../assets/Images/Logos/Main_Logo_1.png'
import GlitchEffect from '../GlitchEffect/GlitchEffect'

const MainImage = () => {
    return (
        <div className='justify center items-align w-[70%] mt-[5rem]'>
            <div className='relative w-full h-auto'>
                <img src={MainLogo} alt="Valhalla Fest Logo" />
                <div className='absolute bottom-[-1%] right-[2%]'>
                    <GlitchEffect text='2025' />
                </div>
            </div>
        </div>
    )
}

export default MainImage