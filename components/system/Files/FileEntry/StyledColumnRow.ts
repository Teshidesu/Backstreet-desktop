import styled from "styled-components";

const StyledColumnRow = styled.div`
  display: flex;
  font-family: "MS Sans Serif", sans-serif;
  font-size: 12px;
  height: ${({ theme }) => theme.sizes.fileManager.detailsRowHeight};
  margin-left: 2px;
  place-items: center;
  background-color: #c0c0c0; /* Simulating a light gray background, common in Windows 90s UI */
  border: 2px solid #808080; /* Adding border similar to window elements */
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Slight 3D shadow for depth */
  padding: 0 5px;
  
  div {
    color: rgb(0, 0, 0); /* Default text color in Windows 90s */
    overflow: hidden;
    padding-right: ${({ theme }) =>
      theme.sizes.fileManager.detailsEndPadding}px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "MS Sans Serif", sans-serif;

    &:last-child {
      margin-right: -${({ theme }) =>
          theme.sizes.fileManager.detailsEndPadding / 2}px;
      padding-right: ${({ theme }) =>
        theme.sizes.fileManager.detailsEndPadding - 4}px;
      text-align: right;
    }

    &:hover {
      background-color: #00b0f0; /* Light blue hover effect similar to Windows 95 hover */
      color: white;
      cursor: pointer;
    }
  }

  &:hover {
    background-color: #e5e5e5; /* Slightly darker background when hovering the whole row */
  }
`;

export default StyledColumnRow;
