import {useState} from 'react';
import { Navigate } from 'react-router-dom'
import {useContext, useEffect} from 'react';
import {DataContext} from '../../utils/Context/DataContext'
import emailjs from '@emailjs/browser';
import '../../style/Contact.css'


function Contact() {
    const [isExit, setIsExit] = useState(false)
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [lastNameCheck, setLastNameCheck] = useState(10)
    const [lastNameError, setLastNameError] = useState("")
    const [emailCheck, setEmailCheck] = useState(20)
    const [emailError, setEmailError] = useState("")
    const [isThanks, setIsThanks] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const {pageChoosen, setPageChoosen} = useContext(DataContext)
    const {animation, setAnimation} = useContext(DataContext)
    const {seenAnimation, setSeenAnimation} = useContext(DataContext)

    const [sendMessage, setSendMessage] = useState("En cours de traitement...")
    const serviceId = 'service_weovn6l'
    const templateId = 'template_r83a4wj'
    const publicKey = 'f_T0i6277U3oApjio'

    const templateParams = {
        from_name: firstName +' '+ lastName ,
        from_email: email,
        to_name: 'Monsieur Rochoy',
        message :message,
    }

    useEffect(() => {
            setPageChoosen("contact")
            if(seenAnimation==true) {
                setAnimation(false)
              }
        }, [pageChoosen]) 
        
    
    const contactPageClose = (event) => {
        event.preventDefault()
        setIsExit(true)
    }

    const lastNameChangeAndCheck =(event) => {
        event.preventDefault()
        setLastName(event.target.value)
        if(event.target.value.length>2) {
            setLastNameCheck(0);
            setLastNameError("");
        }
        else {
            setLastNameCheck(10);
        }
    }

    const emailChangeAndCheck = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
        let regEmail=new RegExp("^[a-z0-9\.\-_]+[a-z0-9]*@[a-z0-9]{2,}\.[a-z\.\-_]+[a-z\-_]{2,}$", "i")
        var check =(regEmail.test(event.target.value))
        if(check=== true) {
            setEmailCheck(0);
            setEmailError("");
        }
        else {
            setEmailCheck(20)
        }
    }

    const send = (event) => {
        event.preventDefault()

    const resultCheck = lastNameCheck + emailCheck

        switch (resultCheck) {
            case 0 :
                setLastNameError("")
                setEmailError( "")
                setIsThanks(true)

                console.log(lastName);
                console.log(firstName);
                console.log(email);
                console.log(message);

                emailjs.send(serviceId, templateId, templateParams, publicKey)
                     .then(
                       (response) => {
                         console.log('SUCCESS!', response);
                         setSendMessage("Nous avons receptionne votre message, vous allez recevoir un email de confirmation.");
                         setSpinner(false)
                       },
                       (error) => {
                         console.log('FAILED...', error.text);
                         setSendMessage("Désolé un problème dans l'envoi est survenu, veuillez réessayer ou envoyer un mail à: jmrwebcraft@gmail.com");
                         setSpinner(false)
                       },
                     );
                return;

            case 10 :
                setLastNameError("veuillez entrer votre nom")
                setEmailError( "")
                return;

            case 20 :
                setLastNameError("")
                setEmailError( "l'adresse mail n'est pas conforme")
                return;

                case 30 :
                    setLastNameError("veuillez entrer votre nom")
                    setEmailError( "l'adresse mail n'est pas conforme")
    
                    return;
    
                default :
                    return;
            } 
        } 

    return (
        <section>
            {isExit ? <Navigate to='/' /> :
            isThanks===false ?
            <div className='pageContainer'>
                <div className='contactContainer'>
                    <div className='exit' onClick={contactPageClose}>
                        <i className='fa-solid fa-xmark'></i>
                    </div>
                    <form className='form' onSubmit={(e) => send(e)}>
                        <div className='field marginTopChange'>
                            <label htmlFor='lastName'>NOM</label>
                            <input type='text' id='lastName' name='lastName' onChange= {lastNameChangeAndCheck} />
                        </div>
                        <span className='error' > &nbsp;{lastNameError}</span>
                        <div className='field'>
                            <label htmlFor='firstName'> PRENOM</label>
                            <input type='text' id='firstName' name='firstName' onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <span className='error' > &nbsp;</span>
                        <div className='field'>
                            <label htmlFor='mail' >ADRESSE EMAIL</label>
                            <input type='text' id='mail' name='mail' onChange= {emailChangeAndCheck}/>
                        </div>
                        <span className='error'>&nbsp;{emailError}</span>
                        <div className='messageField'>
                            <label htmlFor='message'>VOTRE PROJET</label>
                            <textarea name='message'onChange={(e) =>setMessage(e.target.value)} />
                        </div>
                        <button>ENVOYER</button>
                    </form>            
                </div>
            </div> : (<div className='thankYou'>
                 <div className='exitContainer' onClick={contactPageClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='messageContainer'>
                    <p>{sendMessage}</p>
                    {spinner ===true ? <div className='spinnerContainer'>
                        <div className='spinner'> </div>
                    </div> : ""}
                </div>
            </div>)}
        </section> 
    )
}
export default Contact