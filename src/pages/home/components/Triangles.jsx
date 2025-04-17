import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const size = 50;

function getVariants(delay = 0.3){
    return {
        start: {opacity: 0},
        finish: {opacity: 1, transition: {duration: 0.5, ease: 'easeOut', delay: delay}}
    }
}

function UpTriangle({ top, right, animDelay }) {

    const patternRef = useRef(null);
    const isInView = useInView(patternRef)
    const patternControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            patternControls.start('finish');
        } else {
            patternControls.start('start');
        }
    }, [isInView, patternControls]);

    return (
        <motion.div
            ref={patternRef} 
            className={`w-0 h-0 absolute`}
            style={{ 
                top: top, 
                right: right, 
                borderLeft: `${size/2}px solid transparent`, 
                borderRight: `${size/2}px solid transparent`, 
                borderBottom: `${size}px solid ${getColor()}` 
            }}
            variants={getVariants(animDelay)}
            initial="start"
            animate={patternControls}
        >
        </motion.div>
    )
}

function DownTriangle({ top, right, animDelay }) {

    const patternRef = useRef(null);
    const isInView = useInView(patternRef)
    const patternControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            patternControls.start('finish');
        } else {
            patternControls.start('start');
        }
    }, [isInView, patternControls]);

    return (
        <motion.div 
            className={`w-0 h-0 absolute`}
            ref={patternRef}
            style={{ 
                top: top, 
                right: right,
                borderLeft: `${size/2}px solid transparent`,
                borderRight: `${size/2}px solid transparent`,
                borderTop: `${size}px solid ${getColor()}` 
            }}
            variants={getVariants(animDelay)}
            initial="start"
            animate={patternControls}
        >
        </motion.div>
    )
}

function EvenRow({ top, animDelay }){
    return(
        <>
            <UpTriangle top={top} right={`${size/2}px`} animDelay={animDelay}/>
            <DownTriangle top={top} right="0" animDelay={animDelay + 0.1}/>
        </>
    )
}

function OddRow({ top, animDelay }){
    return(
        <>
            <DownTriangle top={top} right={`${size/2}px`} animDelay={animDelay}/>
            <UpTriangle top={top} right="0" animDelay={animDelay + 0.1}/>
        </>
    )
}

function Pattern(){
    const [documentHeight, setDocumentHeight] = useState(0);
  
    useEffect(() => {
      const body = document.body;
      const html = document.documentElement;
      
      const height = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
      );
      
      setDocumentHeight(height);
    }, []);

    const numOfRows = Math.ceil(documentHeight/size);
    const numOfRowsOnHero = Math.floor(window.innerHeight/size)
    
    return(
        <>
            {Array.from({ length: numOfRows }).map((_, i) => 
                i % 2 === 0 
                ? <EvenRow key={i} top={`${i * size}px`} animDelay={ i < numOfRowsOnHero ? 0.05  : 0.1 } /> 
                : <OddRow key={i} top={`${i * size}px`} animDelay={ i < numOfRowsOnHero ? 0.05  : 0.1 } />
            )}
        </>
    )
}

function getColor(){
    const colorChoice = Math.floor(Math.random() * 4)
    switch(colorChoice){
        case 0:
            return '#F5F1E6'
        case 1:
            return '#EBA3A4'
        case 2:
            return '#CC968A'
        case 3:
            return '#B08A7D'
        default:
            return '#665740'
    }
}

export default function Triangles(){
    return (
        <div className="pattern-container absolute top-0 left-0 w-full h-full z-1">
            <Pattern />
        </div>
    )
}