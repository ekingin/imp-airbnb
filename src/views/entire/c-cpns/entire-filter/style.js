import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  z-index: 9;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #fff;

  .filter-condition {
    padding: 20px 15px;
    display: flex;

    .condition-item {
      line-height: 18px;
      font-size: 14px;
      padding: 6px 12px;
      color: #222;
      background-color: #FFF;
      border: 1px solid #eee;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background-color: ${ props => props.theme.color.secondary };
        color: #FFF;
        border-color: ${ props => props.theme.color.secondary };
      }
    }
  }
`