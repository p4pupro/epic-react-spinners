import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { FingerPrintSpinner, Ring } from './style';

export const FingerPrint = (props: Spinner) => {
  const { color, size, animationDuration } = props;

  const ringsNum: number = 9;
  const containerPadding: number = 2;

  const outerRingSize = (): number => {
    const len = size ? parseInt(size) : defaulValues.sizeNumeric; 
    return len - containerPadding * 2;
  }

  const spinnerStyle = (): object => {
    return {
      height: `${size || defaulValues.size}px`,
      width: `${size || defaulValues.size}px`,
      padding: `${containerPadding}px`
    };
  }

  const ringStyle = (): object => {
    return {
      borderTopColor: color || defaulValues.color,
      animationDuration: `${animationDuration || defaulValues.animationDuration}ms`
    };
  }

  const ringsStyles = () => {
    const ringStyles = [];
    const ringBase = outerRingSize() / (ringsNum);
    const ringInc = ringBase;

    for (let i = 1; i <= ringsNum; i++) {
      ringStyles.push({
        ...ringStyle(),
        animationDelay: `${i * 50}ms`,
        height: `${ringBase + (i + 1) * ringInc}px`,
        width: `${ringBase + (i + 1) * ringInc}px`,
      });
    }
    return ringStyles;
  }


  return (
    <FingerPrintSpinner style={spinnerStyle()}>
        {
            ringsStyles().map((style, i: number) => {
                return(
                    <Ring key={i} style={style} />
                ) 
            })
        }
    </FingerPrintSpinner>
  ); 
}