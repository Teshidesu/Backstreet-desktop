import { m as motion } from "motion/react";
import styled from "styled-components";

type StyledWindowProps = {
  $backgroundColor?: string;
  $isForeground: boolean;
};

const StyledWindow = styled(motion.section)<StyledWindowProps>`
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.colors.window.background};
  box-shadow: ${({ $isForeground, theme }) =>
    $isForeground
      ? `2px 2px 5px ${theme.colors.window.shadow}`
      : `2px 2px 5px ${theme.colors.window.shadowInactive}`};
  contain: strict;
  height: 100%;
  outline: ${({ $isForeground, theme }) =>
    `2px solid ${
      $isForeground
        ? theme.colors.window.outline
        : theme.colors.window.outlineInactive
    }`};
  overflow: hidden;
  position: absolute;
  width: 100%;
  border-radius: 0; /* Remove rounded corners for that sharp retro look */
  border: 2px solid #000080; /* Classic Windows 95 blue border */

  /* Title Bar Style (Windows 95/90s Style) */
  header {
    background-color: #000080; /* Classic blue title bar */
    color: white;
    font-family: "MS Sans Serif", sans-serif;
    font-size: 14px;
    padding: 5px 10px;
    border-bottom: 2px solid #000080; /* Slight border to distinguish title */
    cursor: move; /* For the drag interaction feel */
  }

  /* Content Area */
  header + * {
    height: ${({ theme }) => `calc(100% - ${theme.sizes.titleBar.height}px)`};
    padding: 10px;
    background-color: #c0c0c0; /* Light gray content area */
    font-family: "MS Sans Serif", sans-serif;
    color: #000;
    font-size: 12px;
    overflow-y: auto; /* Scrollable content */
  }

  /* Add retro effects for foreground and inactive windows */
  ${({ $isForeground, theme }) =>
    $isForeground
      ? `
        background-color: #f0f0f0;
        box-shadow: 0 0 10px #000080;
      `
      : `
        background-color: #d3d3d3;
        box-shadow: 0 0 5px #808080;
      `}
`;

export default StyledWindow;
