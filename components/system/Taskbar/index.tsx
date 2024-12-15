import { memo, useState } from "react";
import Clock from "components/system/Taskbar/Clock";
import StyledTaskbar from "components/system/Taskbar/StyledTaskbar";
import { CLOCK_CANVAS_BASE_WIDTH } from "utils/constants";

const Taskbar: FC = () => {
  const [clockWidth, setClockWidth] = useState(CLOCK_CANVAS_BASE_WIDTH);

  return (
    <StyledTaskbar>
      <Clock setClockWidth={setClockWidth} width={clockWidth} />
    </StyledTaskbar>
  );
};

export default memo(Taskbar);