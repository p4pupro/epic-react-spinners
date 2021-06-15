import styled, { keyframes } from 'styled-components';


const squareSpinnerAnimation = keyframes`
    50% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(180deg);
    }
`

const squareSpinnerAnimation1 = keyframes`
    50% {
        transform: translate(150%,150%) scale(2,2);
    }
`
const squareSpinnerAnimation2 = keyframes`
    50% {
        transform: translate(-150%,150%) scale(2,2);
    }
`
const squareSpinnerAnimation3 = keyframes`
    50% {
        transform: translate(-150%,-150%) scale(2,2);
    }
`
const squareSpinnerAnimation4 = keyframes`
    50% {
        transform: translate(150%,-150%) scale(2,2);
    }
`

const SquareSpinner = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    animation-name: ${squareSpinnerAnimation};
    animation-duration: ${props => props.style?.animationDuration}ms;
    animation-iteration-count: infinite;
    transform: rotate(0deg);
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
`

const Squares = styled.div`
    height: calc(65px * 0.25 / 1.3);
    width: calc(65px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    border: calc(65px * 0.04 / 1.3) solid ${props => props.style?.color};
    position: absolute;
    animation-duration: ${props => props.style?.animationDuration}ms;
    animation-iteration-count: infinite;

    &:nth-child(1) {
        animation-name: ${squareSpinnerAnimation1};   
    }
    &:nth-child(2) {
        animation-name: ${squareSpinnerAnimation2}; 
    }
    &:nth-child(3) {
        animation-name: ${squareSpinnerAnimation3};  
    }
    &:nth-child(4) {
        animation-name: ${squareSpinnerAnimation4};
    }
 
`

export { SquareSpinner, Squares };