import styled from "styled-components";

const StyledOpenWith = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Microsoft Sans Serif", Arial, sans-serif;

  div {
    height: calc(100% - 56px - 80px);
    overflow-y: scroll;
    background-color: rgb(192, 192, 192);
    border: 2px solid rgb(128, 128, 128);
    box-shadow: inset -1px -1px 0px rgb(255, 255, 255), inset 1px 1px 0px rgb(64, 64, 64);
  }

  h2,
  h4 {
    font-weight: normal;
    color: rgb(0, 0, 0);
    margin: 0;
  }

  h2 {
    font-size: 14px;
    height: 56px;
    padding: 16px 24px;
    background-color: rgb(192, 192, 192);
    border-bottom: 2px solid rgb(128, 128, 128);
    box-shadow: inset -1px -1px 0px rgb(255, 255, 255), inset 1px 1px 0px rgb(64, 64, 64);
  }

  h4 {
    padding: 8px 24px;
  }

  nav {
    background-color: rgb(192, 192, 192);
    height: 80px;
    width: 100%;
    border-top: 2px solid rgb(128, 128, 128);
    box-shadow: inset -1px -1px 0px rgb(255, 255, 255), inset 1px 1px 0px rgb(64, 64, 64);

    button {
      background-color: rgb(192, 192, 192);
      color: rgb(0, 0, 0);
      font-size: 13px;
      font-weight: bold;
      height: 32px;
      margin: 24px;
      position: absolute;
      right: 0;
      width: 200px;
      border: 2px solid rgb(128, 128, 128);
      box-shadow: -1px -1px 0px rgb(255, 255, 255), 1px 1px 0px rgb(64, 64, 64);

      &:hover {
        background-color: rgb(224, 224, 224);
      }

      &:active {
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
      }
    }
  }
`;

export default StyledOpenWith;