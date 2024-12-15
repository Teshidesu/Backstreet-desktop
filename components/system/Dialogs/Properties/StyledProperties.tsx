import styled from "styled-components";
import directory from "contexts/process/directory";

const leftPadding = 6;
const rightPadding = 8;
const linePadding = 12;
const nameWidth = 74;
const tableToTBodyOffset = 6;

const cellWidth =
  ((directory.Properties.defaultSize?.width as number) || 0) -
  leftPadding -
  rightPadding -
  tableToTBodyOffset -
  linePadding * 2 -
  nameWidth;

const StyledProperties = styled.div`
  font-family: 'MS Sans Serif', Tahoma, sans-serif;
  background-color: #c0c0c0;
  border: 2px solid #000080;
  padding: 5px 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);

  table.general {
    background-color: #ffffff;
    border: 2px solid #000080;
    height: calc(100% - 36px - 28px);
    padding-top: 14px;
    width: 100%;
    font-size: 12px;

    tbody {
      display: flex;
      flex-direction: column;
      gap: 10px;

      tr {
        display: flex;
        padding: 0 ${linePadding}px;
        align-items: center;
        justify-content: flex-start;

        &.header {
          margin-bottom: -4px;
          margin-top: -2px;
          padding: 0 10px;
          background-color: #000080;
          color: white;
          font-weight: bold;
        }
      }

      th {
        font-weight: bold;
        text-align: left;
        width: ${nameWidth}px;
        padding: 2px 5px;
        background-color: #f0f0f0;
        border: 1px solid #d0d0d0;

        picture:nth-child(2) {
          position: absolute;
          top: -2px;
        }
      }

      td {
        cursor: text;
        display: flex;
        max-width: ${cellWidth}px;
        overflow: auto;
        user-select: text;
        white-space: nowrap;
        width: calc(100% - 70px);
        padding: 3px;
        background-color: #f0f0f0;
        border: 1px solid #d0d0d0;

        &.spacer {
          border-bottom: 1px solid rgb(160, 160, 160);
          display: block;
          max-width: unset;
          width: 100%;
        }

        input {
          border: 1px solid rgb(122, 122, 122);
          font-size: 12px;
          height: 23px;
          padding: 3px;
          width: 100%;
          background-color: #ffffff;
        }

        img {
          margin-right: 7px;
        }
      }
    }
  }

  nav {
    &.tabs {
      display: flex;
      height: 28px;
      padding-top: 7px;
      position: relative;
      z-index: 1;

      button {
        background-color: #ffffff;
        border: 2px solid #000080;
        border-bottom-width: 0;
        display: flex;
        font-size: 12px;
        height: 21px;
        letter-spacing: -0.25px;
        line-height: 16px;
        padding: 2px 6px;
        place-content: center;
        width: auto;
        z-index: 2;

        &.inactive {
          background-color: #e0e0e0;
          border-bottom: 2px solid #000080;
          height: 19px;
          left: -1px;
          position: relative;
          top: 2px;
          z-index: 1;

          &:first-child {
            left: 2px;
          }

          &:hover {
            background-color: #c0c0c0;
          }
        }
      }
    }

    &.buttons {
      display: flex;
      gap: 8px;
      height: 35px;
      margin-right: -1px;
      place-content: flex-end;
      place-items: center;

      button {
        background-color: #ffffff;
        border: 2px solid #000080;
        height: 21px;
        line-height: 19px;
        font-size: 12px;
        padding: 3px 6px;
        cursor: pointer;

        &:hover {
          background-color: #c0c0c0;
        }

        &:active {
          background-color: #a0a0a0;
        }
      }
    }
  }
`;

export default StyledProperties;
