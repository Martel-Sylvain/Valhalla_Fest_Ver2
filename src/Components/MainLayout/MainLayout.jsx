//ON PEUT S'EN SERVIR POUR INCLURE UN FOOTER PAR EX

import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar'

//on utilise la prop children dans cette fonction
const MainLayout = ({ children }) => {

    return (
        <>

            <Navbar />
            {/* rendra les élément encapsulés dans MainLayout */}
            {children}
        </>
    );
};
// Validation des props
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;