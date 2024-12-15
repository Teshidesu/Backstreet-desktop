import styled from "styled-components";

type StyledOpenWithListProps = {
  $hideBorder?: boolean;
};

const StyledOpenWithList = styled.ul<StyledOpenWithListProps>`
  border-top: 1px solid rgb(128, 128, 128);
  padding-bottom: 9px;
  position: relative;
  width: 100%;
  background-color: rgb(192, 192, 192);

  &::before {
    border-top: ${({ $hideBorder }) =>
      `1px solid ${$hideBorder ? "transparent" : "rgb(128, 128, 128)"}`};
    content: "";
    height: 1px;
    left: 17px;
    position: absolute;
    top: -1px;
    width: calc(100% - 34px);
  }

  li {
    &:active {
      scale: 1;
    }

    &:first-child {
      margin-top: 2px;
    }

    &:hover {
      background-color: rgb(224, 224, 224);
    }

    figure {
      color: rgb(0, 0, 0);
      display: flex;
      padding: 0 23px;
      align-items: center;

      figcaption {
        font-size: 13px;
        padding: 0 12px;
      }

      picture {
        background-color: rgb(0, 0, 128);
        display: flex;
        height: 40px;
        justify-content: center;
        align-items: center;
        width: 40px;
        border: 2px solid rgb(128, 128, 128);
        box-shadow: inset -1px -1px 0px rgb(255, 255, 255), inset 1px 1px 0px rgb(64, 64, 64);
      }
    }

    &.selected {
      background-color: rgb(0, 0, 128);

      figcaption {
        color: rgb(255, 255, 255);
      }
    }

    padding: 5px 0;
  }
`;

export default StyledOpenWithList;