import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IPlusIconProps {
  fill?: string;
}

const PlusIcon: FC<IPlusIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={30} height={30} fill="none" {...props}>
      <Path stroke="#8E949A" strokeLinecap="round" d="M15 7.5v15M22.5 15h-15" />
    </Svg>
  );
};

export default PlusIcon;
