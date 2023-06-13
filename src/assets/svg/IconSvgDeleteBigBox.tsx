import React, { SVGProps } from "react";
import Svg, { Path } from "react-native-svg";

const IconSvgDeleteBigBox: React.FC<SVGProps<any>> = (props) => {
  return (
    <Svg width={26} {...props} height={26} viewBox="0 0  26 26" fill="none">
      <Path
        d="M24.7 5.20143H18.2V3.03058C18.1695 2.19841 17.8103 1.41227 17.201 0.844514C16.5918 0.276757 15.7823 -0.0262952 14.95 0.00179185H11.05C10.2177 -0.0262952 9.40818 0.276757 8.79896 0.844514C8.18973 1.41227 7.8305 2.19841 7.8 3.03058V5.20143H1.3C0.955218 5.20143 0.624558 5.33839 0.380761 5.58217C0.136964 5.82595 0 6.15659 0 6.50134C0 6.8461 0.136964 7.17674 0.380761 7.42052C0.624558 7.6643 0.955218 7.80125 1.3 7.80125H2.6V22.1003C2.6 23.1345 3.01089 24.1265 3.74228 24.8578C4.47368 25.5891 5.46566 26 6.5 26H19.5C20.5343 26 21.5263 25.5891 22.2577 24.8578C22.9891 24.1265 23.4 23.1345 23.4 22.1003V7.80125H24.7C25.0448 7.80125 25.3754 7.6643 25.6192 7.42052C25.863 7.17674 26 6.8461 26 6.50134C26 6.15659 25.863 5.82595 25.6192 5.58217C25.3754 5.33839 25.0448 5.20143 24.7 5.20143ZM10.4 3.03058C10.4 2.8226 10.673 2.60161 11.05 2.60161H14.95C15.327 2.60161 15.6 2.8226 15.6 3.03058V5.20143H10.4V3.03058Z"
        fill="red"
      />
    </Svg>
  );
};
export default IconSvgDeleteBigBox;
