import { colors } from "@/theme";
import React from "react";
import Svg, { Path } from "react-native-svg";

const CalendarBg: React.FC = () => {
  return (
    <>
      <Svg width="414" height="462" viewBox="0 0 414 462" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-29 0C-29.5523 0 -30 0.447706 -30 0.999991V336.632C-30 405.871 26.1291 462 95.3679 462C141.347 462 181.698 431.245 223.198 411.451C238.59 404.109 255.815 400 273.999 400C292.315 400 309.659 404.169 325.137 411.612C366.367 431.438 406.509 462 452.258 462C521.151 462 577 406.151 577 337.258V1C577 0.447715 576.552 0 576 0H-29Z"
          fill={colors.mainColor}
        />
      </Svg>
    </>
  );
};
export default CalendarBg;
