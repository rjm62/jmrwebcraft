import '../../style/Prestations.css';
import {useContext, useEffect, useState} from 'react';
import {DataContext} from '../../utils/Context/DataContext';

function Prestations() {
    const {pageChoosen, setPageChoosen} = useContext(DataContext)
    const {animation, setAnimation} = useContext(DataContext)
    const {seenAnimation, setSeenAnimation} = useContext(DataContext)

    useEffect(() => {
        setPageChoosen("prestations")
        setSeenAnimation(true)
    }, [pageChoosen]) 

    return (
        <article className='grid'>
            <div className='title flexboxOne'>
                <h1>VOTRE SITE VITRINE SUR MESURE</h1>
            </div>
            <div className='steps flexboxOne'>
                <h2>EN 4 ETAPES</h2>
            </div>
            <div className= {animation===true ? 'flexboxTwo stepOne' :'flexboxTwo stepOne noAnimation'}>
                <h3>1: ANALYSE</h3>
                <p>FAITES NOUS PART DE VOS BESOINS ET DE VOS ENVIES </p>
            </div>
            <div className= {animation===true ?'flexboxTwo stepTwo': 'flexboxTwo stepTwo noAnimation'} >
                <h3>2: MAQUETTE</h3>
                <p>NOUS VOUS PROPOSONS PLUSIEURS MAQUETTES PERSONNALISEES </p>
                
            </div>
            <div className= {animation===true? 'flexboxTwo stepThree' : 'flexboxTwo stepThree noAnimation'} >
            <h3>3: REALISATION</h3>
            <p>NOUS CONCEVONS VOTRE SITE SUR MESURE </p>
                
            </div>
            <div className={animation===true ? 'flexboxTwo stepFour' : 'flexboxTwo stepFour noAnimation' }>
                <h3>4: MISE EN LIGNE</h3>
                <p>NOUS GERONS LA MISE EN LIGNE ET LA MAINTENANCE </p>
            </div>
        </article>
    )
}

export default Prestations