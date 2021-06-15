import styled, { keyframes } from 'styled-components';


const fingerPrintSpinnerAnimation = keyframes`
    100% {
        transform: rotate( 360deg );
    }
`

const FingerPrintSpinner = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    padding: ${props => props.style?.padding}px;
    overflow: hidden;
    position: relative;
    &: * {
        box-sizing: border-box;
    } 
`

const Ring = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${props => props.style?.borderTopColor};
    animation-name: ${fingerPrintSpinnerAnimation};
    animation-duration: ${props => props.style?.animationDuration}ms;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.680, -0.750, 0.265, 1.750); 
    animation-fill-mode: forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    &:nth-child(1) {
        height: calc(${props => props.style?.height}px / 9 + 0 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 0 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 1);
    }
    &:nth-child(2) {
        height: calc(${props => props.style?.height}px / 9 + 1 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 1 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 2);
    }
    &:nth-child(3) {
        height: calc(${props => props.style?.height}px / 9 + 2 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 2 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 3);
    }
    &:nth-child(4) {
        height: calc(${props => props.style?.height}px / 9 + 3 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 3 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 4);
    }
    &:nth-child(5) {
        height: calc(${props => props.style?.height}px / 9 + 4 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 4 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 5);
    }
    &:nth-child(6) {
        height: calc(${props => props.style?.height}px / 9 + 5 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 5 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 6);
    }
    &:nth-child(7) {
        height: calc(${props => props.style?.height}px / 9 + 6 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 6 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 7);
    }
    &:nth-child(8) {
        height: calc(${props => props.style?.height}px / 9 + 7 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 7 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 8);
    }
    &:nth-child(9) {
        height: calc(${props => props.style?.height}px / 9 + 8 * ${props => props.style?.height}px / 9);
        width: calc(${props => props.style?.width}px / 9 + 8 * ${props => props.style?.width}px / 9);
        animation-delay: calc(50ms * 9);
    }
`


export { FingerPrintSpinner, Ring };