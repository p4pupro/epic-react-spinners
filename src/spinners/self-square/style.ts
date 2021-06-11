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
    top: calc( -10px * 2 / 3);
`

const Squares = styled.div`
    height: 18px;
    width: 18px;
    top: calc( -10px * 2 / 3);
    margin-right: calc(10px / 3);
    margin-top: calc(10px / 3);
    background: ${props => props.style?.color};
    float: left;
    position:relative;
    opacity: 0;
    animation: ${selfSquareSpinnerAnimation};  
    animation-duration: ${props => props.itemProp ? props.itemProp : '1.4'}s;
    animation-iteration-count: infinite;

    &:nth-child(1) {
        animation-delay: calc(300ms * 6);  
    }
    &:nth-child(2) {
        animation-delay: calc(300ms * 7); 
    }
    &:nth-child(3) {
        animation-delay: calc(300ms * 8);  
    }
    &:nth-child(4) {
        animation-delay: calc(300ms * 3);
    }
    &:nth-child(5) {
        animation-delay: calc(300ms * 4);
    }
    &:nth-child(6) {
        animation-delay: calc(300ms * 5);
    }
    &:nth-child(7) {
        animation-delay: calc(300ms * 0);
    }
    &:nth-child(8) {
        animation-delay: calc(300ms * 1);
    }
    &:nth-child(9) {
        animation-delay: calc(300ms * 2);
    }
    ${props => props.key};
    &:clear {
        clear: both;
    }
`


  
  

export { SquareSpinner, Squares };