import { Link, NavLink } from 'react-router-dom';
import hamburger from '../../assets/Images/Hamburger.svg';
import hamburgerY from '../../assets/Images/HamburgerY.svg';
import cross from '../../assets/Images/Cross.svg';
import crossY from '../../assets/Images/CrossY.svg';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Fonction pour gérer l'état du menu burger
    const toggleMenu = () => {
        // Déclencher l'état temporaire "isClicked" pour montrer l'icône en surbrillance
        setIsClicked(true);
        // Revenir à l'état par défaut après 150 ms
        setTimeout(() => {
            setIsClicked(false);
            setIsOpen(!isOpen);
        }, 150);
    };

    // Pour l'apparition de la ligne sous la Navbar lors du scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={`bg-bgGold fixed p-4 top-0 w-full z-100 ${isScrolled ? 'border-b-2 border-textWhite' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-textWhite text-2xl font-bold">
                    <Link to="/">Valhalla Fest</Link>
                </div>

                {/* hamburger menu */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <img
                        src={
                            isClicked
                                ? (isOpen ? crossY : hamburgerY) // Affiche l'icône temporaire lors du clic
                                : (isOpen ? cross : hamburger)   // Affiche l'icône normale
                        }
                        alt="Hamburger Menu"
                        className="w-8 h-8 cursor-pointer"
                    />
                </div>

                {/* navlinks */}
                <ul className={`${isOpen ? 'block' : 'hidden'
                    } absolute top-16 left-0 w-full bg-bgGold p-4 font-fontTitle md:bg-transparent md:static md:flex md:w-auto md:items-center md:p-0 md:gap-4`}
                >
                    <li>
                        <NavLink
                            to="/LineUp"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-textYellow"
                                    : "text-textWhite hover:text-textYellow block md:inline"
                            }
                        >
                            LineUp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/RunningOrder"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-textYellow"
                                    : "text-textWhite hover:text-textYellow block md:inline"
                            }
                        >
                            Running Order
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Tickets"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-textYellow"
                                    : "text-textWhite hover:text-textYellow block md:inline"
                            }
                        >
                            Tickets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Infos"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-textYellow"
                                    : "text-textWhite hover:text-textYellow block md:inline"
                            }
                        >
                            Infos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;