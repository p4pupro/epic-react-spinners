
import { Spinner } from '../../utils/interfaces/Spinner';
import { RhombusesSpinner, Rhombus } from './style';

export const Rhombuses = (props: Spinner) => {
  const rhombusesNum : number = 3;
  const { color, size, animationDuration } = props;

  const spinnerStyle = (): number => {
    const len = size ? parseInt(size) : 110;
    return len * 4;
  }

  const rhombusStyle = (): object  => {
    return {
      height: `${size}px`,
      width: `${size}px`,
      background: color,
      animationDuration: `${animationDuration}`,
      left: `${size ? parseInt(size) * 4 : 15 * 4}px`
    };
  }

  const rhombusesStyles = (): [] => {
    const rhombuseStyles = [] as any;
    const duration = animationDuration ? parseFloat(animationDuration) : 1200;
    const delay = (-duration * 1000) / 1.5;
    for (let i = 1; i <= rhombusesNum; i++) {
      const style = Object.assign({
        animationDelay: `${i * delay}ms`
      }, rhombusStyle());
      rhombuseStyles.push(style);
    }
    return rhombuseStyles;
  }


  return (
    <RhombusesSpinner style={{ height: spinnerStyle() / 4, width: spinnerStyle() }}>
        {
            rhombusesStyles().map((style: any, i: number) => {
              return (
                  <Rhombus
                    key={i} 
                    style={{ 
                        background: color, 
                        animationDelay: style.animationDelay,
                        animationDuration: style.animationDuration,
                        left: style.left, 
                        height: spinnerStyle() / 4,
                        width: spinnerStyle() / 4
                    }} /> 
              )
            })
        }
    </RhombusesSpinner>
  );
}