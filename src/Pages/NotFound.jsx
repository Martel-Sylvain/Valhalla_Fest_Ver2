import { Link } from "react-router-dom";
import NotFound404 from "../Components/NotFound404/NotFound404"

const NotFound = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-bgBlack'>
            <div>
                <NotFound404 text='404' />
            </div>
            <h1 className='text-textWhite text-lg md:text-xl lg:text-2xl mt-4'>Sorry... this page doesn&apos;t exist</h1>
            <Link to='/' className='text-textYellow text-lg md:text-xl lg:text-2xl mt-4'>
                Back to Homepage
            </Link>
        </div>
    );
};


export default NotFound