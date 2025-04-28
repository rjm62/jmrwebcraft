import Carrousel from '../../components/Carrousel/Carrousel'
import '../../style/Realisations.css'
import {useContext, useEffect} from 'react';
import {DataContext} from '../../utils/Context/DataContext';

function Realisations() {
  const {pageChoosen, setPageChoosen} = useContext(DataContext)
  const {animation, setAnimation} = useContext(DataContext)
  const {seenAnimation, setSeenAnimation} = useContext(DataContext)

  useEffect(() => {
    setPageChoosen("realisations")
    if(seenAnimation==true) {
      setAnimation(false)
    }
    }, [pageChoosen]) 

    return(
      <article className='realisationsContainer'>
        <Carrousel />
      </article>
    )
}

export default Realisations
