import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { SquareSpinner, Squares } from './style';

export const Square = (props: Spinner) => {
  const squaresNum: number = 4;
  const { color, size, animationDuration } = props;

  const squaresStyles = () => {
    const squareStyles = [] as  any;
    for (let i = 1; i <= squaresNum; i++) {
        squareStyles.push({...squareStyles});
    }
    return squareStyles;
  }
  

  return (
    <SquareSpinner style={{ height: size, width: size }}>
        {
            squaresStyles().map((_: any, i: React.Key | null | undefined) => {
                return <Squares key={i} style={{ color: color, animationDuration: animationDuration || defaulValues.animationDuration }}  />
            })
        }
    </SquareSpinner>
  );
}