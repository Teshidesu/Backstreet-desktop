import styled from "styled-components";
import StyledButton from "components/system/Dialogs/StyledButton";

const StyledRun = styled.div`
  background-color: #c0c0c0; /* Windows 95-like background */
  border: 2px solid #000080; /* Darker border color */
  font-family: 'MS Sans Serif', 'Arial', sans-serif;
  font-size: 12px;
  width: 300px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  color: black;

  figure {
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    background-color: #f1f1f1; /* Light gray background */
    border-bottom: 2px solid #000080;

    figcaption {
      line-height: 16px;
      margin-bottom: 4px;
      font-weight: bold;
    }

    img {
      height: 32px;
      margin-right: 10px;
      width: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    padding: 5px 10px;

    label {
      margin-top: 5px;
      font-size: 12px;
    }

    div {
      position: relative;
      width: 100%;
      margin-top: 5px;

      input,
      select {
        border: 1px solid #808080;
        font-family: 'MS Sans Serif', 'Arial', sans-serif;
        font-size: 12px;
        height: 20px;
        margin-right: 5px;
        padding-left: 5px;
        width: 100%;
        background-color: #ffffff;
        color: black;
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1); /* 3D inset effect */
        transition: border 0.2s ease;
      }

      select {
        background-color: #ffffff;
        width: calc(100% - 16px);
        padding-right: 5px;
      }

      input {
        margin-right: 16px;

        &:focus {
          border-color: #000080;
          outline: none;
        }
      }
    }
  }

  nav {
    background-color: #d0d0d0; /* Slightly darker background */
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    border-top: 2px solid #000080;

    ${StyledButton} {
      height: 22px;
      padding: 0 10px;
      margin-top: 5px;
      background-color: #e1e1e1;
      border: 1px solid #808080;
      border-radius: 2px;
      color: black;
      font-size: 12px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
      cursor: pointer;

      &:hover {
        background-color: #d1d1d1;
      }

      &:active {
        background-color: #b1b1b1;
      }

      &:first-child {
        margin-right: 10px;
      }
    }
  }
`;

export default StyledRun;
