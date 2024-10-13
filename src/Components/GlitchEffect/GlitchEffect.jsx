import './glitchEffect.css';
import PropTypes from 'prop-types';

const GlitchEffect = ({ text }) => {
    return (
        <div className="relative rotate-[-4deg]">
            <h1 className="text-textGold font-fontTitle font-bold text-animation-1 text-[5vw]">{text}</h1>
            <h1 className="text-textWhite font-fontTitle font-bold text-animation-2 absolute top-0 left-0 text-[5vw]">{text}</h1>
            <h1 className="text-textYellow font-fontTitle font-bold text-animation-3 absolute top-0 left-0 text-[5vw]">{text}</h1>
        </div>
    );
}

// Validation des props
GlitchEffect.propTypes = {
    text: PropTypes.string.isRequired,
};

export default GlitchEffect;