import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  .icon-logo {
    display: flex;
    align-items: center;
    width: 102px;
    height: 100%;
    color: ${ props => props.theme.headerAlpha ? "#fff" :props.theme.color.primary };
    cursor: pointer;
  }
`