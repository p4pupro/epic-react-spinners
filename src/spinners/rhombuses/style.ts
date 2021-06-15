import styled, { keyframes } from 'styled-components';


const rhombusesSpinnerAnimation = keyframes`
    0% {
        transform: translateX(0) rotate(45deg) scale(0);
    }
    50% {
        transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
        transform: translateX(-466%) rotate(45deg) scale(0);
    }
`

const RhombusesSpinner = styled.div`
    width: calc(15px * 4);
    height: 15px;
    position: relative;
`

const Rhombus = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    background: ${props => props.style?.background};
    left: calc(15px * 4);
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation-name: ${rhombusesSpinnerAnimation};
    animation-duration: ${props => props.style?.animationDuration}ms;
    animation-delay: ${props => props.style?.animationDelay}ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    
  
    &:nth-child(1) {
        animation-delay: calc(2500ms * 1 / -1.5);
    }
    &:nth-child(2) {
        animation-delay: calc(2500ms * 2 / -1.5);
    }
    &:nth-child(3) {
        animation-delay: calc(2500ms * 3 / -1.5);
    }  
`
 

export { Rhombus, RhombusesSpinner };