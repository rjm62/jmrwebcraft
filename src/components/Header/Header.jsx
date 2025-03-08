import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useContext} from 'react';
import currentScreenWidth from '../../currentScreenWidth'
import {DataContext} from '../../utils/Context/DataContext';
import '../../style/Header.css'
import logo from '../../assets/img/logo.png'

function Header() {
    const [realisationsChoosen, setRealisationsChoosen] = useState("headerLink line")
    const [prestationsChoosen, setPrestationsChoosen] = useState("headerLink ")
    const [contactChoosen, setContactChoosen] = useState("headerLink")
    const {pageChoosen, setPageChoosen} = useContext(DataContext)
    const {animation, setAnimation} = useContext(DataContext)
    const {seenAnimation, setSeenAnimation} = useContext(DataContext)
    const mobile = currentScreenWidth()
    const [mobileNav, setMobileNav] = useState(false)
    const [iconType, setIconType] = useState("fa fa-bars")
    const [iconStyle, setIconStyle] = useState('iconContainer')

    useEffect(() => {
       switch (pageChoosen) {
        case "realisations" :
            setRealisationsChoosen("headerLink lineOn")
            setPrestationsChoosen("headerLink lineOff")
            setContactChoosen("headerLink lineOff")
            seenAnimation===true ? setAnimation(false) : ""
            return;

        case "prestations" :
            setRealisationsChoosen("headerLink lineOff")
            setPrestationsChoosen("headerLink lineOn")
            setContactChoosen("headerLink lineOff")
            return;

        case "contact" :
            setRealisationsChoosen("headerLink lineOff")
            setPrestationsChoosen("headerLink lineOff")
            setContactChoosen("headerLink lineOn")
            seenAnimation===true ? setAnimation(false) : ""
            return;

        default :
            return;
       }
    }, [pageChoosen]) 

    const changingStyle = () => {
        if (iconStyle=='iconContainer') {
            setIconStyle('iconContainer mouse')
        }
        else {
            setIconStyle('iconContainer') 
        }
    }

    const openingClosingHamburger = (event => {
        event.preventDefault()
        setMobileNav(!mobileNav)
        if(iconType=="fa fa-bars") {
            setIconType("fa-solid fa-xmark")
        }
        else {
            setIconType("fa fa-bars")
        }
    })

    const closingHamburger = (event) => {
        event.preventDefault()
        setMobileNav(!mobileNav)
        setIconType("fa fa-bars")
    }

    
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='logo jmrwebcraft' />
            </div>
            {mobile >=750 ? (
            <nav className='classicNav'> 
                <Link to='/' className= {realisationsChoosen}>REALISATIONS </Link>
                <Link to='/Prestations' className= {prestationsChoosen}>PRESTATIONS</Link>
                <Link to='/Contact' className= {contactChoosen}>CONTACT</Link>
            </nav>) : (
            <div className='hamburgerContainer'>
                <div className={iconStyle} onMouseEnter={changingStyle} onMouseLeave={changingStyle}>
                    <i className={iconType} onClick={openingClosingHamburger}></i>
                </div>
                {mobileNav===true ? (
                <nav className='hamburgerNav'  onClick={(e) => closingHamburger(e)}> 
                    <Link to='/' className='headerMobileLink'>REALISATIONS </Link>
                    <Link to='/Prestations' className='headerMobileLink'>PRESTATIONS</Link>
                    <Link to='/Contact' className='headerMobileLink'>CONTACT</Link>
                </nav>) : ('')}
            </div> )}
        </header>
    )
}

export default Header