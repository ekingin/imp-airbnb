import styled from "styled-components";

export const TabsWrapper = styled.div`
  padding: 16px 8px;
  margin: 0 -8px;

  .tabs-item {
    flex: 0 0 120px;
    height: 48px;
    line-height: 20px;
    text-align: center;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    border: 0.5px solid #D8D8D8;
    font-size: 17px;
    font-weight: 700;
    box-shadow: 0 1px 2px rgba(0,0,0,.15);

    white-space: nowrap;
    cursor: pointer;
    ${ props => props.theme.mixin.boxShadow }

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #FFF;
      background-color: ${ props => props.theme.color.secondary };
    }
  }
`