import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .MuiPaginationItem-page.Mui-selected {
    background-color: #222;
    color: #FFF;
  }
 
  .pagination-bottom {
    color: #222;
    margin: 15px 0 30px;
  }
  .page-tip {
    color: #717171;
  }
`