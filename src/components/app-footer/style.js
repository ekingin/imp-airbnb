import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 1080px;
  height: 316px;
  padding: 48px 24px;
  margin: 0 auto;
  .service {
    display: flex;

    .link-group {
      display: flex;
      flex-direction: column;
      padding: 0 8px;
      flex: 1;

      .group-name {
        color: rgb(72, 72, 72);
        font-weight: 800;
      }

      .link-item {
        color: #767676;
        font-weight: 600;
      }
    }
  }
  .statement {
    padding-top: 20px;
    margin-top: 20px;
    margin-left: 8px;
    border-top: 1px solid #eee;

    color: #767676;
    font-weight: 600;
  }
  
  
`