
import backgroundImage from "../assets/Background/Texture_1.png"

const Home = () => {
    return (
        <div className='h-screen flex items-center justify-center flex-col bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            Home
        </div>

    )
}

export default Home