import { Spinner } from '../../utils/interfaces/Spinner';
import { FlowerSpinner, DotsContainer, SmallerDots, BiggerDots } from './style';

export const Flower = (props: Spinner) => {
  const { color, size, animationDuration } = props;

  const dotsContainerStyle = (): object =>{
    const len = size ? size : '70'
    return {
        width: `${len}px`,
        height: `${len}px`,
      };
  }

  const smallerDotStyle = (): object => {
    const durantion = animationDuration ? parseInt(animationDuration) * 1000 : '2000'
    return {
      background: color,
      animationDuration: `${durantion}ms`,
    };
  }

  const biggerDotStyle = (): object => {
      const durantion = animationDuration ? parseInt(animationDuration) * 1000 : '2000'
    return {
      background: color,
      animationDuration: `${durantion}ms`,
    };
  }


  return (
    <FlowerSpinner style={dotsContainerStyle()}>
        <DotsContainer> 
            <BiggerDots style={biggerDotStyle()}>
                <SmallerDots style={smallerDotStyle()}/>
            </BiggerDots>
        </DotsContainer>
    </FlowerSpinner>
  );
}