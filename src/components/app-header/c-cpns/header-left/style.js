import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  .icon-logo {
    display: flex;
    align-items: center;
    width: 102px;
    height: 80px;
    color: ${ props => props.theme.color.primary };
    cursor: pointer;
  }
`