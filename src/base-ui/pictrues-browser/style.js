import styled from "styled-components"

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.8);
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .close-btn {
      padding: 20px;
    }
  }
  
  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    .controler {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      /* align-items: center; */

      .btn {
        height: 100%;
        width: 83px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
      }
    }
    .pictures {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        user-select: none;
      }

      /* 图片切换动画类 */
      .fade-enter {
        opacity: 0;
        transform: translate(${ props => props.isNext ? "100%" : "-100%" });
      }
      .fade-enter-active {
        opacity: 1;
        transform: translate(0);
        transition: all 200ms ease;
      }
      .fade-exit {
        opacity: 1;
      }
      .fade-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    height: 100px;
    width: 105vh;
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.showPreview ? 'center' : 'flex-end' };
    margin: 0 auto 20px;

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      padding-bottom: 3px;

      .show-list-btn {
        cursor: pointer;
      }
    }
    .preview-list {
      width: 100%;
      overflow: hidden;
      height: ${ props => props.showPreview ? "67px" : "0" };
      transition: all 200ms ease;

      .pic-item {
        background-color: rgba(0,0,0,.8);
        width: 100px;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          object-fit: cover;
          opacity: 0.5;
        }
        &.active {
          img {
            opacity: 1;
          }
        }
      }
     
    }
    
  }

`