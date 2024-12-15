import styled from "styled-components";
import { StyledSelectionComponent } from "components/system/Files/FileManager/Selection/StyledSelection";
import { type StyledFileManagerProps } from "components/system/Files/Views";
import ScrollBars from "styles/common/ScrollBars";

const StyledFileManager = styled.ol<StyledFileManagerProps>`
  ${({ $scrollable }) => ($scrollable ? ScrollBars() : undefined)};
  
  /* Basic Windows 90s style */
  font-family: "MS Sans Serif", sans-serif;
  background-color: #c0c0c0; /* Classic Windows 95/98 gray */
  border: 2px solid #000080; /* Navy blue border */
  padding: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  /* Add the 3D border effect to simulate the Windows 90s window */
  border-radius: 5px;
  background: linear-gradient(to bottom, #ffffff 0%, #a0a0a0 100%);
  -webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  /* Adjusting the content area */
  contain: strict;
  overflow: ${({ $isEmptyFolder, $scrollable }) =>
    !$isEmptyFolder && $scrollable ? undefined : "hidden"};
  pointer-events: ${({ $selecting }) => ($selecting ? "auto" : undefined)};
  scrollbar-gutter: auto;

  /* File icons and selection */
  picture:not(:first-of-type) {
    position: absolute;
  }

  ${StyledSelectionComponent} {
    top: 0;
    background-color: #d0d0d0; /* Light gray background for selection */
    border: 1px solid #808080; /* Gray border for selection */
    padding: 2px;
  }

  /* Optional: Additional retro button styling */
  button {
    background-color: #f0f0f0;
    border: 2px solid #000080;
    color: #000080;
    font-family: "MS Sans Serif", sans-serif;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.4);
  }

  button:hover {
    background-color: #c0c0c0;
  }
`;

export default StyledFileManager;
