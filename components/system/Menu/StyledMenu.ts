import { m as motion } from "motion/react";
import styled from "styled-components";

type StyledMenuProps = {
  $isSubMenu: boolean;
  $x: number;
  $y: number;
};

const StyledMenu = styled(motion.nav).attrs<StyledMenuProps>(({ $x, $y }) => ({
  style: {
    transform: `translate(${$x}px, ${$y}px)`,
  },
}))<StyledMenuProps>`
  background: linear-gradient(180deg, #c0c0c0 0%, #606060 100%); /* Classic gradient with more contrast */
  border: 2px solid #000080; /* Navy blue border typical of early UIs */
  border-radius: 4px; /* Sharper, more blocky corners for the 80s-90s aesthetic */
  box-shadow: 
    2px 2px 5px rgba(0, 0, 0, 0.7), 
    -2px -2px 5px rgba(255, 255, 255, 0.3); /* Heavy drop shadow with light source effect */
  color: black; /* Black text for contrast */
  font-family: "MS Sans Serif", sans-serif; /* Retro Windows font */
  font-size: 12px;
  padding: 4px 2px;
  pointer-events: none;
  position: fixed;
  width: max-content;
  z-index: ${({ $isSubMenu }) => $isSubMenu && 1};

  ol {
    pointer-events: all;
    list-style-type: none; /* Remove default list bullets */
    
    li.disabled {
      color: rgb(110, 110, 110);
      pointer-events: none;
    }

    hr {
      background-color: #a0a0a0; /* Lighter gray divider, more consistent with old UIs */
      height: 1px;
      margin: 4px 8px;
    }

    li > div {
      display: flex;
      padding: 5px 8px;
      cursor: pointer;
      user-select: none;
      border: 1px inset #8a8a8a; /* 3D inset border to mimic button-like appearance */
      margin-bottom: 2px;

      &:hover,
      &.active {
        background-color: #c0c0c0; /* Lighter gray hover to simulate button effect */
        border-color: #000080; /* Blue border on hover for a button effect */
        box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.6), inset -1px -1px 2px rgba(0, 0, 0, 0.4); /* Button press effect */
      }

      figcaption {
        display: flex;
        height: 16px;
        line-height: 16px;
        margin-left: 32px;
        margin-right: 64px;
        place-items: center;
        position: relative;
        top: -1px;
        white-space: nowrap;
        width: max-content;

        &.primary {
          font-weight: bold; /* Bold primary items */
        }
      }

      picture {
        margin: 0 -24px 0 8px;
      }

      span {
        margin: -1px -24px 0 8px;
      }

      svg {
        fill: black; /* Black icons */
        height: 13px;
        margin-top: 1px;
        position: absolute;
        width: 13px;

        &.left {
          left: 8px;
        }

        &.right {
          right: 8px;
        }
      }

      .icon > svg {
        height: 15px;
        left: 10px;
        width: 15px;
      }
    }
  }
`;

export default StyledMenu;
