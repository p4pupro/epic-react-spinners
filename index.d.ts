import * as React from 'react';

export interface EpicReactSnippersProps extends React.Props<EpicReactSnippers> {
  color: string;
  size: string;
  animationDuration: string;
}

declare class EpicReactSnippers extends React.Component<EpicReactSnippersProps, any> {
}

declare module 'epic-react-snippers' {
}

export default EpicReactSnippers;