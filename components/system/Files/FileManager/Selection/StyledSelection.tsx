import styled, { createGlobalStyle } from "styled-components";

const NoGlobalPointerEvents = createGlobalStyle`
  body {
    pointer-events: none;
  }
`;

export const StyledSelectionComponent = styled.span`
  background-color: ${({ theme }) => theme.colors.selectionHighlightBackground || "#b3c0d1"};
  border: ${({ theme }) => `2px solid ${theme.colors.selectionHighlight || "#4e6e8e"}`};
  border-radius: 2px;
  position: absolute;
  z-index: 2;
  padding: 1px;
  font-family: 'MS Sans Serif', Tahoma, sans-serif;
  color: ${({ theme }) => theme.colors.text || "#000"};
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3), inset -1px -1px 3px rgba(255, 255, 255, 0.5);
`;

const StyledSelection: FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => (
  <>
    <NoGlobalPointerEvents />
    <StyledSelectionComponent {...props} />
  </>
);

export default StyledSelection;
