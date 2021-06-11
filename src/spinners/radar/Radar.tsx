
import { Spinner } from '../../utils/interfaces/Spinner';
import { RadarSpinner, CircleSpinner, CircleInner, CircleInnerContainer } from './style';
export const Radar = (props: Spinner) => {
  const circlesNum : number = 4;
  const { color, size, animationDuration } = props;

  const borderWidth = (): number => {
    const len = size ? parseInt(size) : 110;
    return len * 5 / 110;
  }
  const circlesStyles = (): [] => {
    const circleStyles = [] as any;
    const duration = animationDuration ? parseInt(animationDuration) : 2;
    const delay = duration * 0.15;
    for (let i = 0; i < circlesNum; i++) {
        circleStyles.push(Object.assign({
        padding: `${borderWidth() * 2 * i}px`,
        animationDelay: `${i === circlesNum - 1 ? 0 : delay}ms`
      }, circleStyles));
    }
    return circleStyles;
  }
 


  return (
    <RadarSpinner style={{ height: size, width: size }}>
        {
            circlesStyles().map((style: any, i: React.Key | null | undefined) => {
              return (
                  <CircleSpinner  key={i} style={{ padding: style.padding, animationDelay: style.animationDelay  }}> 
                    <CircleInnerContainer key={i} style={{ borderWidth: borderWidth() }} >
                        <CircleInner  key={i} style={{ color: color, borderWidth: borderWidth() }} itemProp={animationDuration} />
                    </CircleInnerContainer>
                  </CircleSpinner>
              )
            })
        }
    </RadarSpinner>
  );
}