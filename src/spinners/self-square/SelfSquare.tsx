import { Spinner } from '../../utils/interfaces/Spinner';
import { SquareSpinner, Squares } from './style';
export const SelfSquare = (props: Spinner) => {
  const squaresNum: number = 9;
  const { color, size, animationDuration } = props;

  const squaresStyles = (): []  => {
    const squareStyles = [] as  any;
    const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2];
    const duration = animationDuration ? parseInt(animationDuration) : 6;
    const delayModifier = duration * 0.05;
    for (let i = 0; i < squaresNum; i++) {
      squareStyles.push({
        animationDelay: `${delayModifier * delaysMultipliers[i]}ms`,
        ...squareStyles
      });
    }
    return squareStyles;
  }


  return (
    <SquareSpinner style={{ height: size, width: size }}>
        {
            squaresStyles().map((_: any, i: React.Key | null | undefined) => {
                return <Squares key={i} style={{ color: color }} itemProp={animationDuration} />
            })
        }
    </SquareSpinner>
  );
}