import styled, { keyframes } from 'styled-components';


const selfSquareSpinnerAnimation = keyframes`
    0% {
        opacity: 0;
    }
    5% {
        opacity: 1;
        top: 0;
    }
    50.9% {
        opacity: 1;
        top: 0;
    }
    55.9% {
        opacity: 0;
        top: inherit;
    }
`

const SquareSpinner = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    top: ${props => props.style?.top}px;
`

const Squares = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    top: ${props => props.style?.top};
    margin-right: ${props => props.style?.marginRight};
    margin-top: ${props => props.style?.marginTop};
    background: ${props => props.style?.background};
    float: left;
    position:relative;
    opacity: 0;
    animation: ${selfSquareSpinnerAnimation};  
    animation-duration: ${props => props.style?.animationDuration}ms;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.style?.animationDelay}; 

    &:nth-child(1) {
        animation-delay: ${props => props.style?.animationDelay};  
    }
    &:nth-child(2) {
        animation-delay: ${props => props.style?.animationDelay}; 
    }
    &:nth-child(3) {
        animation-delay: ${props => props.style?.animationDelay};  
    }
    &:nth-child(4) {
        animation-delay: ${props => props.style?.animationDelay};
    }
    &:nth-child(5) {
        animation-delay: ${props => props.style?.animationDelay};
    }
    &:nth-child(6) {
        animation-delay: ${props => props.style?.animationDelay};
    }
    &:nth-child(7) {
        animation-delay: ${props => props.style?.animationDelay};
    }
    &:nth-child(8) {
        animation-delay: ${props => props.style?.animationDelay};
    }
    &:nth-child(9) {
        animation-delay: ${props => props.style?.animationDelay};
    }
    &:clear {
        clear: ${props => props.style?.clear};
    }
`


  
  

export { SquareSpinner, Squares };