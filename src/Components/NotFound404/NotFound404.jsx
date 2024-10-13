import './notFound404.css';
import PropTypes from 'prop-types';

const NotFound404 = ({ text }) => {
    return (
        <div className="relative">
            <h1 className="text-glitchR font-fontTitle font-bold text-animation-1 text-8xl md:text-11xl lg:text-14xl">{text}</h1>
            <h1 className="text-glitchG font-fontTitle font-bold text-animation-2 absolute top-0 left-0 text-8xl md:text-11xl lg:text-14xl">{text}</h1>
            <h1 className="text-glitchW font-fontTitle font-bold text-animation-3 absolute top-0 left-0 text-8xl md:text-11xl lg:text-14xl">{text}</h1>
        </div>
    );
}

NotFound404.propTypes = {
    text: PropTypes.string.isRequired,
};

export default NotFound404;