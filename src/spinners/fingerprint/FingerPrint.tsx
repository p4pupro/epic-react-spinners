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

  const ringStyle = (): object => {
    return {
      borderTopColor: color || defaulValues.color,
      animationDuration: `${animationDuration || defaulValues.animationDuration}`
    };
  }

  const ringsStyles = () => {
    const ringStyles = [] as any;
    const ringBase = outerRingSize() / (ringsNum);
    const ringInc = ringBase;

    for (let i = 1; i <= ringsNum; i++) {
      ringStyles.push({
        ...ringStyle(),
        animationDelay: `${i * 50}`,
        height: `${ringBase + (i + 1) * ringInc}`,
        width: `${ringBase + (i + 1) * ringInc}`,
      });
    }
    return ringStyles;
  }


  return (
    <FingerPrintSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size, padding: containerPadding }}>
        {
            ringsStyles().map((style: any, i: number) => {
                return(
                    <Ring key={i} style={style} />
                ) 
            })
        }
    </FingerPrintSpinner>
  ); 
}