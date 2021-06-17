import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { SquareSpinner, Squares } from './style';
import { Clear } from '../../utils/types/Clear';
export const SelfSquare = (props: Spinner) => {
  const squaresNum: number = 9;
  const { color, size, animationDuration } = props;
  const squareSize = (): number => {
    const len = size ? parseInt(size) : defaulValues.sizeNumeric;
    return len / 4;
  }

  const initialTopPosition = (): number => {
    return -squareSize() * 2 / 3;
  }
  const squareStyle = (): object => {
    return {
      height: squareSize(),
      width: squareSize(),
      top: initialTopPosition(),
      marginRight: squareSize() / 3,
      marginTop: squareSize() / 3,
      animationDuration: animationDuration || defaulValues.animationDuration,
      background: color || defaulValues.color
    };
  }

  const squaresStyles = (): []  => {
    const squareStyles = [] as  any;
    const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2];
    const duration = animationDuration ? parseInt(animationDuration) : defaulValues.animationDurationNumeric;
    const delayModifier = duration * 0.05;
    for (let i = 0; i < squaresNum; i++) {
      squareStyles.push({
        animationDelay: `${delayModifier * delaysMultipliers[i]}ms`,
        ...squareStyle()
      });
    }
    return squareStyles;
  }
  const mod = (num: React.Key | null | undefined): Clear => {
    let clear: Clear = 'inherit';
    if (num) {
      const numb = num.toString();
      clear = parseInt(numb) % 3 === 0 ? 'both' : 'inherit';
    }
    return clear;  
  }

  return (
    <SquareSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size, top: initialTopPosition() }}>
        {
            squaresStyles().map((style: any, i: React.Key | null | undefined) => {
                return <Squares key={i} style={{ 
                  background: color || defaulValues.color, 
                  animationDuration: style.animationDuration, 
                  animationDelay: style.animationDelay,
                  height: style.height,
                  width: style.width,
                  top: style.top,
                  marginRight: style.marginRight,
                  marginTop: style.marginTop,
                  clear: mod(i) 
                }} />
            })
        }
    </SquareSpinner>
  );
}