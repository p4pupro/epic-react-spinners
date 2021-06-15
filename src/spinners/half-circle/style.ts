import styled, { keyframes } from 'styled-components';


const halfCicleSpinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

const HalfCircleSpinner = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    border-radius: 100%;
    position: relative;
    &: * {
        box-sizing: border-box;
    } 
`

const Circle1 = styled.div`
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(70px / 10) solid transparent;
    border-width: ${props => props.style?.borderWidth}px;
    border-top-color: ${props => props.style?.borderTopColor};
    animation-name: ${halfCicleSpinnerAnimation};
    animation-duration:${props => props.style?.animationDuration}ms;
    animation-iteration-count: infinite;  
`

const Circle2 = styled.div`
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(70px / 10) solid transparent;
    border-width: ${props => props.style?.borderWidth}px;
    border-bottom-color: ${props => props.style?.borderBottomColor};
    animation-name: ${halfCicleSpinnerAnimation};
    animation-duration:${props => props.style?.animationDuration}ms;
    animation-iteration-count: infinite;
    animation-direction: alternate; 
`

export { HalfCircleSpinner, Circle1, Circle2 };