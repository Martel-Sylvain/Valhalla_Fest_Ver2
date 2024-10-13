import backgroundImage from "../assets/Images/Backgrounds/Texture_1.png"
import MainImage from "../Components/MainImage/MainImage"
import Countdown from "../Components/Countdown/Countdown"
import SeparationLine from "../Components/SeparationLine/SeparationLine"
import Video from "../Components/Video/Video"


const Home = () => {
    return (
        <div className='h-full flex flex-col items-center bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>

            <MainImage />

            <Countdown />

            <SeparationLine />

            <Video />

            <SeparationLine />
        </div>

    )
}

export default Home