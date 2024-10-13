import { useState, useEffect } from "react";

// Création de la fonction Countdown
// Utilisation de useState pour déclarer une variable timeLeft initialisée à un objet avec des valeurs toutes à 0.
// setTimeLeft est la fonction permettant de mettre timeLeft à jour
// const [state, setState] = useState(initialState)
const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });


    // on calcule ici le temps restant avant l'évènement (25/02/2025)
    // on définie les constantes de temps en ms
    const calculateTimeLeft = () => {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        const eventDate = new Date('2025-02-25').getTime();// evenDate est l'heure de l'évènement en ms depuis le 1/01/1970
        const now = new Date().getTime();// now est l'heure actuelle en ms
        const distance = eventDate - now;// on fait la différence et on obtient le temps en ms restant avant l'évnènement


        // si distance < 0 : la date est passée, on retourne null
        // sinon on retourne un objet contenant le nombre de jours/heures/minutes/secondes
        if (distance < 0) {
            return null;
        } else {
            return {
                // pour trouver le nombre de jours on divise le temps restant (distance) par le nombre de ms dans un jour, Math.floor fait un arrondi à l'entier inférieur
                days: Math.floor(distance / day),
                // idem pour la suite, mais on utilise Modulo (%) pour obtenir ce qui reste de la division et ne constitue pas des jours entiers, idem on divise par le nombre de ms dans une heure
                hours: Math.floor((distance % day) / hour),
                minutes: Math.floor((distance % hour) / minute),
                seconds: Math.floor((distance % minute) / second)
            };
        }
    };


    // Utilisation de useEffect qui permet d'effectuer
    // useEffect(() => { //effet return() => //nettoyage}; }, [dependencies]);
    // La fonction passée à useEffect est exécutée après chaque rendu du composant.
    // Le tableau dependencies est une liste des variables d'état ou des props que l'effet dépend. L'effet sera exécuté de nouveau si une des dépendances change.


    // on définie timer qui va utiliser setInterval qui appelle calculateTimeLeft toutes les 1000ms (=1seconde) et va mettre à jour timeLeft avec setTimeLeft
    // à chaque fois on "nettoie" avec clearInterval pour gérer le démontage du composant que l'on vient de monter (puisque ça va changer à chauqe secondes, on en a plus besoin ensuite)
    // le [] vide assure que l'effet ne s'execute qu'une seule fois
    // setInterval = fonction JS avec un délai ici de 1000ms
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);



    // ce que l'on obtient
    // si timeLeft est null, l'évènement est passé, on affiche Let's Go!!
    if (!timeLeft) {
        return (
            <div className="w-[75vw] font-fontTitle text-center text-[4vw] text-whiteV">
                <h2 id="countdownTitle">Let&apos;s Go!!</h2>
            </div>
        );
    }

    // sinon on va retourner le countdown
    // on va chercher chaque valeur avec {timeLeft.xxx}
    return (
        <div className="w-[75vw] font-fontTitle text-center text-[4vw] text-textWhite mt-[0.5rem] md:mt-[1rem] lg:-[mt-2rem] xl:mt-[3rem]">
            <h2 className='font-fontTitle'>Opens in :</h2>
            <div className='mt-[0.5rem]'>
                <ul className="flex justify-around text-[2vw]">
                    <li className="flex flex-col items-center">
                        <span className="block text-[4vw]">{timeLeft.days}</span>Days
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="block text-[4vw]">{timeLeft.hours}</span>Hours
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="block text-[4vw]">{timeLeft.minutes}</span>Minutes
                    </li>
                    <li className="flex flex-col items-center">
                        <span className="block text-[4vw]">{timeLeft.seconds}</span>Seconds
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Countdown;

