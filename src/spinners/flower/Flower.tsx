import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { FlowerSpinner, DotsContainer, SmallerDots, BiggerDots } from './style';

export const Flower = (props: Spinner) => {
  const { color, size, animationDuration } = props;

  return (
    <FlowerSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size }}>
        <DotsContainer style={{ height: size || defaulValues.size, width: size || defaulValues.size }}> 
            <BiggerDots style={{ background: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }}>
                <SmallerDots style={{ background: color || defaulValues.color, animationDuration: animationDuration || defaulValues.animationDuration }}/>
            </BiggerDots>
        </DotsContainer>
    </FlowerSpinner>
  );
}