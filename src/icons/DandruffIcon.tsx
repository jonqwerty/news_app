import * as React from 'react';
import {FC} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface IDandruffIconProps {
  fill?: string;
}

const DandruffIcon: FC<IDandruffIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Circle cx={11} cy={11} r={6} stroke="#8E949A" />
      <Path stroke="#8E949A" strokeLinecap="round" d="m20 20-3-3" />
    </Svg>
  );
};

export default DandruffIcon;
