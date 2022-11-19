import styled from "styled-components";

export const LongforWrapper = styled.div`
  width: ${ props => props.itemWidth };
  flex-shrink: 0;
  overflow: hidden;

  .inner {
    position: relative;
    padding: 0 8px;
  }

  .cover {
    img {
      width: 100%;
    }
  }
  .cover-bg {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
  }

  .room-info {
    position: absolute;
    bottom: 20px;
    left: 8px;
    right: 8px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    
    .info-item {
      text-align: center;
      color: #FFF;
      overflow-wrap: break-word;
    }
    .city-name {
      font-size: 18px;
      font-weight: 800;
    }
    .room-average-price {
      font-size: 14px;
      font-weight: 600;
    }
  }
`