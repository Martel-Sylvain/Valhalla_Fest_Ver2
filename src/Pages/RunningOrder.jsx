import backgroundImage from "../assets/Images/Backgrounds/Texture_1.png"
import RunningOrderTest from "../Components/RunningOrder/RunningOrderTest";


const RunningOrder = () => {
    return (
        <div className='h-full flex flex-col items-center bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>

            <RunningOrderTest />
        </div>
    )
}

export default RunningOrder;