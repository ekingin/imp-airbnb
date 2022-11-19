import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${ props => props.itemWidth };
  padding: 0 8px 12px;
  flex-shrink: 0;

  .inner {
    width: 100%;
    color: #484848;
    .cover {
      position: relative;
      padding-top: 66.66%;
      margin-bottom: 10px;
      border-radius: 3px;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        object-fit: cover;
      }
    }
    .desc {
      color: ${ props => props.verifyTextColor };
      font-size: 12px;
      height: 20px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;

      /* 超出两行显示... */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .score {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      .reviews-count {
        margin-left: 4px;
      }
    }
  }
`