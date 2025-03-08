import {Link} from 'react-router-dom'
import '../../style/Footer.css'

function Footer() {
    return (
        <footer>
            <nav className='navFooter'>
                <div className='navContainer'>
                    <Link to='MentionsLegales' className='footerLink'>Mentions legales</Link>
                </div>
                <div>
                    <Link to='/PolitiqueDeConfidentialite' className='footerLink'>Politique de confidentialite</Link>
                </div>
            </nav>
            <div>
                <p className='footerLink copyright'><i className='fa-regular fa-copyright'></i>&nbsp; 2025 JMRwebcraft <i>&nbsp;&nbsp;&nbsp;&nbsp;</i> tous droits reserves</p>
            </div>
        </footer>
    )
}
export default Footer