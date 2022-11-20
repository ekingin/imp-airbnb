import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${ props => props.itemWidth };
  padding: 0 8px 12px;
  flex-shrink: 0;

  .inner {
    width: 100%;
    color: #484848;

    .slider {
      position: relative;

      .indicator {
        position: absolute;
        z-index: 99;
        bottom: 10px;
        left: 0;
        right: 0;
        width: 35%;
        margin: 0 auto;

        .dot-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14.29%; /** 100% / 7 */

          .dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #FFF;

          }
          .dot.active {
            width: 8px;
            height: 8px;
          }
          .dot.active-sibing-two {
            width: 6px;
            height: 6px;
          }
        }
      }

      .controler {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
        display: flex;
        justify-content: space-between;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          color: #FFF;
          & > * {
            flex: 1;
          }
        }
        .left:hover {
          background-image: linear-gradient(to left, transparent 0%, rgba(0,0,0,0.25) 100%);
        }
        .right:hover {
          background-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.25) 100%);
        }
      }

    }
    .cover {
      position: relative;
      padding-top: 66.66%;
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
      margin-top: 10px;
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