import styled from "styled-components";

export const PictruesWrapper = styled.div`
  display: flex;
  height: 300px;
  position: relative;

  /* 当选中的item hover时，其他item添加蒙版 */
  &:hover {
    .cover {
      opacity: 1 !important;
    }
    .item:hover .cover {
      opacity: 0 !important;
    }
  } 

  > .left {
    width: 50%;
    height: 100%;
    .item {
      height: 100%;
      width: 100%;
    }
  }

  > .right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 50%;
    }
  }

  .item {
    position: relative;
    padding: 1px;
    background-color: #222;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      img {
        transform: scale(1.08);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0,0,0,.3);
      opacity: 0;
      transition: opacity 200ms ease;
    }
  }
  .more-btn {
    position: absolute;
    right: 20px;
    bottom: 20px;

    padding: 6px 15px;
    border: 1px solid #222;
    border-radius: 5px;
    background-color: #fff;
    
    &:hover {
      cursor: pointer;
    }
  }

  
`