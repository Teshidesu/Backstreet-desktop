import styled from "styled-components";

const StyledDesktop = styled.main`
  background-color: transparent; /* Windows 95 background color */
  contain: strict;
  height: 100%;
  inset: 0;
  overflow: hidden;
  overscroll-behavior: none;
  position: fixed;
  width: 100vw;
  font-family: "MS Sans Serif", sans-serif; /* Windows 95 font */

  /* Desktop Icons Area */
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
  }

  #loading-status {
    background-color: #f0f0f0; /* Light grey background for a window */
    border: 2px solid #000080; /* Dark blue border, Windows 95 style */
    border-radius: 3px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    color: black;
    font-weight: bold;
    font-size: 14px;
    left: 50%;
    padding: 10px 15px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    text-align: center;
    width: auto;
    z-index: 1000;
  }

  /* Windows-style canvas with a gradient border */
  > canvas {
    background-color: #008080; /* Dark teal background */
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    border: 4px solid #000080; /* Blue border around the screen */
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
  }
`;

export default StyledDesktop;
