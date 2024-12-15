import styled from "styled-components";

const StyledColumns = styled.span`
  background-color: rgb(32, 32, 32);
  display: block;
  margin-bottom: 6px;
  margin-right: ${({ theme }) => theme.sizes.fileManager.detailsStartPadding}px;
  position: sticky;
  top: 0;
  width: fit-content;
  z-index: 1;

  /* Adding Windows 90s gradient background */
  background: linear-gradient(
    180deg,
    rgb(64, 64, 64) 0%,
    rgb(48, 48, 48) 100%
  );
  border: 2px solid rgb(144, 144, 144);
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  ol {
    display: flex;
    height: ${({ theme }) => theme.sizes.fileManager.columnHeight};

    li {
      color: rgb(222, 222, 222);
      display: flex;
      font-size: 12px;
      padding-left: 6px;
      place-items: center;
      position: relative;
      font-family: 'MS Sans Serif', sans-serif; /* Classic 90s Windows font */

      /* Adding 3D effect to text */
      text-shadow: 1px 1px 0 rgb(0, 0, 0), -1px -1px 0 rgb(255, 255, 255);

      > svg {
        fill: rgb(149, 149, 149);
        left: calc(50% - 4px);
        position: absolute;
        top: 0;
        transition: none !important;
        width: 7px;

        &[style^="transform"] {
          top: -1px;
        }
      }

      .name {
        overflow: hidden;
        position: relative;
        text-overflow: ellipsis;
        top: -1px;
        white-space: nowrap;
      }

      .resize {
        border-left: 1px solid rgb(99, 99, 99);
        cursor: col-resize;
        height: 25px;
        padding-left: ${({ theme }) =>
          theme.sizes.fileManager.columnResizeWidth}px;
        position: absolute;
        right: -${({ theme }) => theme.sizes.fileManager.columnResizeWidth}px;
        z-index: 1;
      }

      &:hover {
        background-color: rgb(67, 67, 67);
        border-left: 2px inset rgb(144, 144, 144);

        .resize {
          border-left: none;
        }
      }

      &:active {
        background-color: rgb(131, 131, 131);
      }

      &:first-child {
        padding-left: 17px;
      }
    }
  }
`;

export default StyledColumns;
