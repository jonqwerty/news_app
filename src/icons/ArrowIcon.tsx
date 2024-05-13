import * as React from 'react';
import {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

interface IArrowIconProps {
  fill?: string;
}

const ArrowIcon: FC<IArrowIconProps> = ({fill, ...props}) => {
  return (
    <Svg width={30} height={30} fill="none" {...props}>
      <Path
        fill="#8E949A"
        d="m6.25 15-.354-.354-.353.354.353.354L6.25 15Zm15 .5a.5.5 0 0 0 0-1v1ZM10.896 9.646l-5 5 .708.708 5-5-.708-.708Zm-5 5.708 5 5 .708-.708-5-5-.708.708Zm.354.146h15v-1h-15v1Z"
      />
    </Svg>
  );
};

export default ArrowIcon;
