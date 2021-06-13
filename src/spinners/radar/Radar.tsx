
import { Spinner } from '../../utils/interfaces/Spinner';
import { RadarSpinner, CircleSpinner, CircleInner, CircleInnerContainer } from './style';

export const Radar = (props: Spinner) => {
  const circlesNum : number = 4;
  const { color, size, animationDuration } = props;

  const borderWidth = (): number => {
    const len = size ? parseInt(size) : 70;
    return len * 5 / 110;
  }
  const getSize = (): string => {
    const len = size ? size+'px' : '70px';
    return len;
  }

  const circleStyle = (): string => {
    const long = animationDuration ? parseFloat(animationDuration) : 1.2;
    const longInMs = long * 1000;
    const duration = longInMs.toString() || '1200';
    return duration;
  }

  const circlesStyles = (): [] => {
    const circleStyles = [] as any;
    const duration = animationDuration ? parseFloat(animationDuration) : 1200;
    const delay = duration * 1000 * 0.15;
    for (let i = 0; i < circlesNum; i++) {
        circleStyles.push(Object.assign({
          padding: `${borderWidth() * 2 * i}px`,
          animationDelay: `${i === circlesNum - 1 ? 0 : delay}ms`,
          animationDuration: `${circleStyle()}ms`
        }));
    }
    return circleStyles;
  }


  return (
    <RadarSpinner style={{ height: getSize(), width: getSize() }}>
        {
            circlesStyles().map((style: any, i: number) => {
              console.log(style)
              return (
                  <CircleSpinner key={i} style={{ 
                    padding: style.padding, 
                    animationDelay: style.animationDelay,
                    animationDuration: style.animationDuration,
                    }}> 
                    <CircleInnerContainer style={{ borderWidth: borderWidth() }} >
                        <CircleInner style={{ 
                          borderLeftColor: color, 
                          borderRightColor: color, 
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