import styled, { keyframes } from 'styled-components';


const electronSpinnerAnimation1 = keyframes`
    0%  {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
`
const electronSpinnerAnimation2 = keyframes`
    0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
`
const electronSpinnerAnimation3 = keyframes`
    0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
`

const ElectronSpinner = styled.div`
    border-radius: 50%;
    perspective: 800px;
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
`

const ElectronLine = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &:nth-child(1) {
        left: 0;
        top: 0;
        animation: ${electronSpinnerAnimation1} infinite;
        border-bottom: 3px solid ${props => props.style?.color};
        animation-duration: ${props => props.itemProp}s;
        animation-timing-function: linear;
        
    }
    &:nth-child(2) {
        right: 0;
        top: 0;
        animation: ${electronSpinnerAnimation2} infinite;
        border-right: 3px solid ${props => props.style?.color};
        animation-duration: ${props => props.itemProp}s;
        animation-timing-function: linear; 
    }
    &:nth-child(3) {
        right: 0;
        bottom: 0;
        animation: ${electronSpinnerAnimation3} infinite;
        border-right: 3px solid ${props => props.style?.color};
        animation-duration: ${props => props.itemProp}s;
        animation-timing-function: linear; 
    }
 
`

export { ElectronSpinner, ElectronLine };