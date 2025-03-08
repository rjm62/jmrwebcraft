import {useState} from 'react'
import {useContext} from 'react';
import currentScreenWidth from '../../currentScreenWidth'
import {DataContext} from '../../utils/Context/DataContext';
import {slides} from "../../data/carrouselData.json"
import '../../style/Carrousel.css'

function Carrousel() {
    // const {selection, setSelection} = useContext(DataContext);
    const [selection, setSelection] = useState(0);
    const [selectionNumber, setSelectionNumber] = useState(1);
    const mobile = currentScreenWidth();
    const nextArray = ["slideParameters", "slideParameters slide0To1", "slideParameters slide1To2", "slideParameters slide2To3"]
    const previousArray = ["slideParameters slide1To0", "slideParameters slide2To1", "slideParameters slide3To2"]
    const [slide, setSlide] = useState(nextArray[0])
    const [leftChevron, setLeftChevron] = useState("")
    const [rightChevron, setRightChevron] = useState("fa-solid fa-chevron-right")
    const [startX, setStartX] = useState(0)

    const previous = (e) => {
        e.preventDefault()
        if(selection>0) { 
            setSlide(previousArray[selection-1]);
            setSelection(selection-1);
            setRightChevron("fa-solid fa-chevron-right")
        if(selection===1) {
            setLeftChevron("")
        }
        }
    }

    const next = (e) => {
        e.preventDefault()
        if(selection<slides.length-1) { 
            setSlide(nextArray[selection+1])
            setSelection(selection+1) 
            setLeftChevron("fa-solid fa-chevron-left")
        }
        if(selection===slides.length-2) {
            setRightChevron("")
        }
    }

    const handleTouchStart=(event) => {
        setStartX(event.touches[0].clientX)
        console.log('Touch coordinates:', startX);
        // event.preventDefault();
    }

    const handleTouchEnd=(event) => {
        const endX = event.changedTouches[0].clientX
        console.log('Touch coordinates:', endX);
        event.preventDefault();
        const diff = endX - startX;
        console.log(diff)
        if(selection<slides.length-1 & diff<0) { 
            setSlide(nextArray[selection+1])
            setSelection(selection+1) 
            setLeftChevron("fa-solid fa-chevron-left")
        }
        if(selection===slides.length-2) {
            setRightChevron("")
        }

        if(selection>0 & diff>0) { 
            setSlide(previousArray[selection-1]);
            setSelection(selection-1);
            setRightChevron("fa-solid fa-chevron-right")
        if(selection===1) {
            setLeftChevron("")
        }
        }
    }

    return (
        <div className='carrousel'>
            <div className='carrouselImages'>
                <div className='desktopChevron'>
                    <i onClick={(e) => previous(e)} className= {leftChevron}></i>
                </div>  
                <div className='imageContainer'>     
                    <div className={slide} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {slides.map((slide) => {
                            return (
                                <picture key={slide.id} >
                                     <img src={slide.src} alt= {slide.alt} />
                                </picture>
                        )})}
                    </div> 
                </div>
                <div className='desktopChevron'>
                    <i onClick={(e) => next(e)} className={rightChevron}></i>
                </div> 
            </div>
            <div className='indicators'>
                <div className="mobileChevron">
                    <i onClick={(e) =>previous(e)}  className= {leftChevron}></i>
                </div>  
                {slides.map((_,id) => {
                    return (
                        <div className={selection=== id ? 'indicatorButton' : 'indicatorButton BlackColor'} key={id} onClick={() => setSelection(id)}></div>
                        )
                 })}
                <div className="mobileChevron">
                    <i onClick={next} className={rightChevron}></i>  
                </div>  
            </div>
        </div>    
        )  
    }  
    
 export default Carrousel;
