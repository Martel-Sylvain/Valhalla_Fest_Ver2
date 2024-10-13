import VideoIntro from '../../assets/videos/Intro_trailer.mp4'

const Video = () => {
    return (
        <div className='w-[75vw] mt-[0.5rem] md:mt-[1rem] lg:-[mt-2rem] xl:mt-[3rem]'>
            <video className='w-full rounded-xl' autoPlay muted loop>
                <source src={VideoIntro} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video