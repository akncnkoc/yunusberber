import { colors } from "@/theme";
import React from "react";
import { Path, Svg } from "react-native-svg";

const ChevronLeftSvg = () => {
  return (
    <Svg width="15" height="22" viewBox="0 0 15 22" fill="none">
      <Path
        d="M8.86365 19.7727C9.99332 20.9023 11.8249 20.9023 12.9546 19.7727V19.7727C14.0842 18.643 14.0842 16.8114 12.9545 15.6818L8.18183 10.9091L12.9545 6.13634C14.0842 5.00666 14.0842 3.17511 12.9545 2.04544V2.04544C11.8249 0.915766 9.99332 0.915766 8.86365 2.04544L2.05619 8.85289C0.92061 9.98848 0.920609 11.8296 2.05619 12.9652L8.86365 19.7727Z"
        fill={colors.mainColor}
      />
    </Svg>
  );
};

export default ChevronLeftSvg;
