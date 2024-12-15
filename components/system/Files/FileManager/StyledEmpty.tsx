import styled from "styled-components";

const StyledEmpty = styled.div`
  position: absolute;
  width: 100%;
  background: #c0c0c0; /* Light gray background typical for 90s Windows */
  border: 2px solid #000080; /* Classic blue border */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Slight shadow effect */
  border-radius: 5px; /* Slightly rounded corners for a more authentic feel */
  font-family: 'Tahoma', sans-serif; /* Default system font */
  padding: 20px;

  &::before {
    color: #000080; /* Blue text typical of the era */
    content: "This folder is empty.";
    display: flex;
    font-size: 14px; /* Slightly bigger text for readability */
    font-weight: bold; /* Bold to make it stand out more */
    justify-content: center;
    letter-spacing: 1px; /* Adjusted letter spacing for a more authentic look */
    padding-top: 14px;
    text-align: center;
    text-transform: uppercase; /* Adds an uppercase effect like old UIs */
  }

  /* Title bar style */
  &::after {
    content: "Program Manager";
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    background-color: #000080; /* Blue title bar */
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

export default StyledEmpty;
