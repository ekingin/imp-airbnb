import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;
  
  .tab-item {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${ props => props.theme.headerAlpha ? "#fff" : "#222" };
    font-size: 16px;

    .item-txt {
      &.active {
        font-weight: 700;
      }
    }
  }
`