import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CurvePath = ({
  height = 60,
  width = 75,
  color = 'white',
  ...props
}) => {
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...props}>
      <Path
        d="M75.2 0v61H0V0
       c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33
       c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1
       h-.1z"
        fill={color}>
      </Path>
    </Svg>
  );
};

export default CurvePath;
