import styled from "styled-components";

const StyledStatusBar = styled.footer`
  align-items: center;
  background-color: #2e2e2e; /* Dark gray background */
  color: #c0c0c0; /* Light gray text color */
  display: flex;
  font-size: 12px;
  font-weight: 400; /* Normal weight for a more authentic feel */
  height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
  padding: 0 4px;
  position: relative;
  white-space: nowrap;
  width: 100%;
  border-top: 2px solid #666666; /* Add a top border like the old Windows bars */

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 4px;

    &::after {
      border-right: 1px solid #c0c0c0; /* Light separator lines */
      content: "";
      height: 12px;
      margin-left: 12px;
      position: relative;
      top: 2px;
    }

    &.selected {
      padding-left: 7px;
      background-color: #3a3a3a; /* Slightly lighter gray for selected items */

      &::after {
        margin-left: 13px;
      }
    }
  }

  nav {
    display: flex;
    position: absolute;
    right: 4px;

    button {
      border: 1px solid #c0c0c0; /* Light gray border */
      display: flex;
      height: ${({ theme }) => theme.sizes.fileExplorer.statusBarHeight};
      place-content: center;
      place-items: center;
      width: 22px;
      background-color: #4e4e4e; /* Medium gray background */
      color: #c0c0c0;

      picture {
        position: relative;
        top: -1px;
      }

      &:hover {
        background-color: #5a5a5a; /* Slightly lighter gray when hovered */
        border: 1px solid #c0c0c0;
      }

      &.active {
        background-color: #606060; /* Darker gray when active */
        border: 1px solid #a0a0a0; /* Lighter border when active */

        picture {
          padding-left: 1px;
          top: 0;
        }
      }
    }
  }
`;

export default StyledStatusBar;
