import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const StyledTaskbar = styled.nav`
  /* Classic Windows 80s-90s solid color background */
  background-color: rgb(192, 192, 192); /* Windows 95 blue */

  /* White text for clarity */
  color: grey;

  /* Taskbar positioned at the bottom */
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${TASKBAR_HEIGHT}px;
  width: 100vw;

  /* Minimal, classic box shadow for depth */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  /* Sharp border on top, reminiscent of early Windows UI */
  border-top: 2px solid #ffffff;

  /* Retro system font */
  font-family: 'MS Sans Serif', sans-serif;

  /* Centering and spacing elements in the taskbar */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  /* Ensure all icons or buttons are aligned properly */
  z-index: 100000;
`;

export default StyledTaskbar;
