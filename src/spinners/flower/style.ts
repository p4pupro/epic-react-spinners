import styled, { keyframes } from 'styled-components';


const flowerBiggerDotSpinnerAnimation = keyframes`
    0%, 100% {
        box-shadow: rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0;
    }
    50% {
        transform: rotate(180deg);
    }
    25%, 75% {
        box-shadow: rgb(97, 218, 251) 26px 0 0,
        rgb(97, 218, 251) -26px 0 0,
        rgb(97, 218, 251) 0 26px 0,
        rgb(97, 218, 251) 0 -26px 0,
        rgb(97, 218, 251) 19px -19px 0,
        rgb(97, 218, 251) 19px 19px 0,
        rgb(97, 218, 251) -19px -19px 0,
        rgb(97, 218, 251) -19px 19px 0;
    }
    100% {
        transform: rotate(360deg);
        box-shadow: rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0;
    }
`

const flowerSmallerDotSpinnerAnimation = keyframes`
    0%, 100% {
        box-shadow: rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0;
    }
    25%, 75% {
        box-shadow: rgb(97, 218, 251) 14px 0 0,
        rgb(97, 218, 251) -14px 0 0,
        rgb(97, 218, 251) 0 14px 0,
        rgb(97, 218, 251) 0 -14px 0,
        rgb(97, 218, 251) 10px -10px 0,
        rgb(97, 218, 251) 10px 10px 0,
        rgb(97, 218, 251) -10px -10px 0,
        rgb(97, 218, 251) -10px 10px 0;
    }
    100% {
        box-shadow: rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0,
        rgb(97, 218, 251) 0 0 0;
    }
`

const FlowerSpinner = styled.div`
    height: ${props => props.style?.height}px;
    width: ${props => props.style?.width}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &: * {
        box-sizing: border-box;
    } 
`

const DotsContainer = styled.div`
    height: calc(70px / 7);
    width: calc(70px / 7);
`

const SmallerDots = styled.div`
    background: ${props => props.style?.background};
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation-name: ${flowerSmallerDotSpinnerAnimation};
    animation-duration: ${props => props.style?.animationDuration};
    animation-iteration-count: infinite;  
`

const BiggerDots = styled.div` 
    background: ${props => props.style?.background};
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    animation-name: ${flowerBiggerDotSpinnerAnimation};
    animation-duration: ${props => props.style?.animationDuration};
    animation-iteration-count: infinite; 
`

export { FlowerSpinner, DotsContainer, SmallerDots, BiggerDots };