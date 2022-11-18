import styled from "styled-components";

export const CenterWrapper = styled.div`
  min-width: 348px;
  padding: 0 24px;

  .search-bar {
    display: flex;
    align-items: center;
    width: 300px;
    height: 44px;
    border: 1px solid #DDD;
    border-radius: 40px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    ${ props => props.theme.mixin.boxShadow }

    .search-label {
      width: 251px;
      padding: 16px;
      color: #222;
      font-weight: 600;
    }
    .search-icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${ props => props.theme.color.primary };
      color: #fff;
    }
  }
  
`