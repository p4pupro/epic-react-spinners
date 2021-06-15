
import { Spinner } from '../../utils/interfaces/Spinner';
import { defaulValues } from '../../utils/index';
import { RadarSpinner, CircleSpinner, CircleInner, CircleInnerContainer } from './style';

export const Radar = (props: Spinner) => {
  const circlesNum : number = 4;
  const { color, size, animationDuration } = props;

  const borderWidth = (): number => {
    const len = size ? parseInt(size) : defaulValues.sizeNumeric;
    return len * 5 / 110;
  }

  const circlesStyles = (): [] => {
    const circleStyles = [] as any;
    const duration = animationDuration ? parseFloat(animationDuration) : defaulValues.animationDurationNumeric;
    const delay = duration * 0.15;
    for (let i = 0; i < circlesNum; i++) {
        circleStyles.push(Object.assign({
          padding: `${borderWidth() * 2 * i}px`,
          animationDelay: `${i === circlesNum - 1 ? 0 : delay}ms`,
          animationDuration: animationDuration || defaulValues.animationDuration
        }));
    }
    return circleStyles;
  }


  return (
    <RadarSpinner style={{ height: size || defaulValues.size, width: size || defaulValues.size }}>
        {
            circlesStyles().map((style: any, i: number) => {
              return (
                  <CircleSpinner key={i} style={{ 
                    padding: style.padding, 
                    animationDelay: style.animationDelay,
                    animationDuration: style.animationDuration,
                    }}> 
                    <CircleInnerContainer style={{ borderWidth: borderWidth() }} >
                        <CircleInner style={{ 
                          borderLeftColor: color || defaulValues.color, 
                          borderRightColor: color || defaulValues.color, 
                          borderWidth: borderWidth() 
                          }} />
                    </CircleInnerContainer>
                  </CircleSpinner>
              )
            })
        }
    </RadarSpinner>
  );
}