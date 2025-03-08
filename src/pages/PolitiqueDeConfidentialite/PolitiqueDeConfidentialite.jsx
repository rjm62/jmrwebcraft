import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import Contact from '../Contact/Contact'
import  '../../style/PolitiqueDeConfidentialite.css'

function PolitiqueDeConfidentialite() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const [isContactAllowed, setIsContactAllowed] = useState(false)
    const [display, setDisplay] = useState("OFF")

    useEffect(() => {
        isContactOpen && isContactAllowed === true ? setDisplay("ON") : setDisplay("OFF")
        setIsContactAllowed(true)
    }, [contactButton]) 

    return (
        <section className='politiqueDeConfidentialiteContainer'>
            <div className='scroller'>
                <h2>POLITIQUE DE CONFIDENTIALITE</h2>
                <p className='center'>Date de dernière mise à jour: 11 février 2025</p>
                <p></p>
                <h4>ARTICLE 1 : COLLECTE DE VOS INFORMATIONS</h4>
                <p>Nous recueillons des informations uniquement lorsque vous remplissez 
                notre formulaire de contact.</p>
                <p>Nous récoltons les informations suivantes: Nom, Prénom, statut, adresse mail, et message.</p>
                <p></p>
                <h4>ARTICLE 2 : UTILISATION DE VOS INFORMATIONS</h4>
                <p>Toutes les informations que nous récupérons via le formulaire de contact servent
                uniquement à vous contacter et à répondre à votre demande.</p> 
                <p></p>
                <h4>ARTICLE 3 : CONFIDENTIALITE DE VOS DONNEES </h4>
                <p>Nous sommes les seuls propriétaires des informations recueillies sur notre site.
                Vos infos personnelles ne seront pas vendues, échangées, transférées ou
                données à une autre société pour n'importe quel raison, sans votre
                consentement.</p>
                <p></p>
                <h4>ARTICLE 4 : DIVULGATION A DES TIERS</h4>
                <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles 
                identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance
                qui nous aident à exploiter notre site web ou à mener nos affaires, tant que
                ces parties conviennent de garder ces informations confidentielles.</p>
                <p></p>
                <h4>ARTICLE 5 : PROTECTION DE VOS INFORMATIONS</h4>
                <p>Nous mettons en oeuvre une variété de mesures pour préserver la sécurité de vos    
                informations personnelles. Nous utilisons un cryptage à la pointe de la 
                technologie pour protéger les informations sensibles transmises en ligne.
                Notre site internet possède bien entendu un certificat SSL (Secure Socket Layer)</p>
                <p>Nous protégeons également vos informations hors ligne. Seul les membres qui ont 
                un besoin d'effectuer un travail spécifique (par exemple vous joindre), ont 
                accés aux informations personnelles identifiables. Les ordinateurs et serveurs 
                utilisés pour stocker des informations personnelles identifiables sont conservés 
                dans un environnement sécurisé par notre hébergeur.</p>
                <h4>ARTICLE 6 : COPIE OU SUPPRESSION DE VOS INFORMATIONS</h4>
                <p>Nous stockons les données transmises via notre formulaire de contact.</p>
                <p>Cependant, vous avez la possibilité de nous contacter par e.mail ou par 
                téléphone pour nous demander la suppression de vos données personnelles que 
                nous stockons.</p>
                <p></p>
                <h4>ARTICLE 7 : ENVOI DE NEWSLETTERS</h4>
                <p>Nous n'envoyons pas de newsletter</p>
                <p></p>
                <h4>ARTICLE 8 : POLITIQUE DE L'HEBERGEUR</h4>
                <p>Notre hébergeur posséde sa propre politique de confidentialité concernant 
                    l'utilisation de vos données que vous pouvez consulter en tout temps sur 
                    leur site https://www.o2switch.fr/du-rgpd.pdf</p>
                    <p></p>
                    <h4>ARTICLE 9 : CONSENTEMENT A NOTRE POLITIQUE</h4>
                    <p> En utilisant notre site, vous consentez à notre politique de confidentialité 
                        et que celle-ci puisse être modifiée en tout temps par l'éditeur.</p>
            </div>
            {display=="ON" ? <Contact />: ("")}
        </section>
    )
}

export default PolitiqueDeConfidentialite