import styled, { keyframes } from 'styled-components';


const atomSpinnerAnimation1 = keyframes`
    100% {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
`
const atomSpinnerAnimation2 = keyframes`
    100% {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
`
const atomSpinnerAnimation3 = keyframes`
    100% {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
`

const AtomSpinner = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    overflow: hidden;
    .atom-spinner * {
        box-sizing: border-box;
    }
`

const AtomSpinnerInner = styled.div`
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
`

const SpinnerCircle = styled.div`
    display: block;
    position: absolute;
    color: ${props => props.style?.color};
    font-size: calc(60px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SpinnerLine = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: ${props => props.style?.animationDuration}ms;
    border-left-width: calc(60px / 25);
    border-top-width: calc(60px / 25);
    border-left-color: ${props => props.style?.color};
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;
   
    &:nth-child(1) {
        animation: ${atomSpinnerAnimation1} infinite;
        animation-duration: ${props => props.style?.animationDuration}ms;
        animation-timing-function: linear;
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);  
    }
    &:nth-child(2) {
        animation: ${atomSpinnerAnimation2} infinite;
        animation-duration: ${props => props.style?.animationDuration}ms;
        animation-timing-function: linear;
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);  
    }
    &:nth-child(3) {
        animation: ${atomSpinnerAnimation3} infinite;
        animation-duration: ${props => props.style?.animationDuration}ms;
        animation-timing-function: linear;
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);  
    }
 
`

export { AtomSpinner, AtomSpinnerInner, SpinnerCircle, SpinnerLine };

  
