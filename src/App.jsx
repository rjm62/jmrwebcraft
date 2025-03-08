import { BrowserRouter as Router, Route,Routes,Navigate } from "react-router-dom";
import {DataContextProvider} from './utils/Context/DataContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Realisations from './pages/Realisations/Realisations';
import Prestations from './pages/Prestations/Prestations';
import Contact from './pages/Contact/Contact';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';
import PolitiqueDeConfidentialite from './pages/PolitiqueDeConfidentialite/PolitiqueDeConfidentialite';
import './App.css';

function App() {
    return(
        <main className="globalContainer">
           <Router>
                <DataContextProvider>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Realisations />} />
                            <Route path="/Prestations" element={<Prestations />} />
                            <Route path="/Contact" element={<Contact />} />
                            <Route path="/MentionsLegales" element={<MentionsLegales />} />
                            <Route path="/PolitiqueDeConfidentialite" element={<PolitiqueDeConfidentialite />} />
                        </Routes>
                    <Footer />
                </DataContextProvider>
            </Router> 
        </main>

    )
}

export default App;