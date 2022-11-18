import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  
  .text {
    font-size: 17px;
    font-weight: 700;
    line-height: 22px;
    padding-right: 5px;
    color: ${ props => props.name ? props.theme.color.secondary : "#222" };

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`