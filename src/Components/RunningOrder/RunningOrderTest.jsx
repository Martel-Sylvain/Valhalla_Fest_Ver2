import { useEffect, useState } from 'react';

const RunningOrderTest = () => {
    const [groupes, setGroupes] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Requête vers l'API PHP pour récupérer les groupes et leurs jours de passage
        fetch('http://localhost/Valhalla_Fest_ver2/api/getGroupData.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(data => {
                setMessage(data.message); // Mettre à jour le message de connexion
                setGroupes(data.groupes); // Accéder aux groupes via la clé "groupes"
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
    }, []);

    return (
        <div>
            <h1 className='text-textWhite text-13xl'>Running Order</h1>
            <p>{message}</p>
            <ul className='text-textWhite text-xl'>
                {groupes.map((groupe, index) => (
                    <li key={index} className='text-textWhite text-xl'>
                        {groupe.nom_groupe} - {groupe.jour}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RunningOrderTest;

