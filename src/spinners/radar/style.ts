import styled, { keyframes } from 'styled-components';


const radarSquareSpinnerAnimation = keyframes`
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(0deg);
    }
`

const RadarSpinner = styled.div`
    height: ${props => props.style?.height};
    width: ${props => props.style?.width};
`

const CircleSpinner = styled.div`
    height: ${props => props.style?.height};
    width: ${props => props.style?.width};
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation-name: ${radarSquareSpinnerAnimation};
    animation-duration: ${props => props.style?.animationDuration};
    animation-iteration-count: infinite;
    padding: ${props => props.style?.padding};
    animation-delay: ${props => props.style?.animationDelay};
    
    &:nth-child(1) {
        padding: calc(60px * 5 * 2 * 0 / 110);
        animation-delay: 300ms;
    }
    &:nth-child(2) {
        padding: calc(60px * 5 * 2 * 1 / 110);
        animation-delay: 300ms;
    }
    &:nth-child(3) {
        padding: calc(60px * 5 * 2 * 2 / 110);
        animation-delay: 300ms;
    }
    &:nth-child(4) {
        padding: calc(60px * 5 * 2 * 3 / 110);
        animation-delay: 0ms;
    }
`

const CircleInnerContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: calc(60px * 5 / 110) solid transparent; 
    border-width: ${props => props.style?.borderWidth}px; 
`

const CircleInner = styled.div`
    border-left-color: ${props => props.style?.borderLeftColor};
    border-right-color: ${props => props.style?.borderRightColor};
    border-width: ${props => props.style?.borderWidth}px;
`
 
  

export { RadarSpinner, CircleSpinner, CircleInner, CircleInnerContainer };