import styled, { keyframes } from 'styled-components';


const trinitySpinnerAnimation1 = keyframes`
    0% {
        transform: rotateZ(20deg) rotateY(0deg);
    }
    100% {
        transform: rotateZ(100deg) rotateY(360deg);
  }
`
const trinitySpinnerAnimation2 = keyframes`
    0% {
        transform: rotateZ(100deg) rotateX(0deg);
    }
    100% {
        transform: rotateZ(0deg) rotateX(360deg);
    }
`
const trinitySpinnerAnimation3 = keyframes`
    0% {
        transform: rotateZ(100deg) rotateX(-360deg);
    }
    100% {
        transform: rotateZ(-360deg) rotateX(360deg);
    }
`

const TrinitySpinner = styled.div`
    padding: 3px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: hidden;
    box-sizing: border-box;
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
`

const TrinityCircle = styled.div`
    position:absolute;
    display:block;
    border-radius:50%;
    border: 3px solid ${props => props.style?.color};
    opacity: 1;

    &:nth-child(1) {
        height: 60px;
        width: 60px;
        border-width: 3px;
        animation: ${trinitySpinnerAnimation1} infinite;
        animation-duration: ${props => props.itemProp}s;
        animation-timing-function: linear; 
    }
    &:nth-child(2) {
        height: calc(60px * 0.65);
        width: calc(60px * 0.65);
        animation: ${trinitySpinnerAnimation2} infinite;
        border-width: 2px;
        animation-duration: ${props => props.itemProp}s;
        animation-timing-function: linear;
    }
    &:nth-child(3) {
        height: calc(60px * 0.1);
        width: calc(60px * 0.1);
        animation: ${trinitySpinnerAnimation3} infinite;
        border-width: 1px;
        animation-duration: ${props => props.itemProp}s;
        animation-timing-function: linear;
    }
 
`

export { TrinitySpinner, TrinityCircle };