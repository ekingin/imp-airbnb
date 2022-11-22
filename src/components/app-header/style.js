import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  /* AppHeader可在某些页面固定顶部 */
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    background-color: ${ props => props.theme.headerAlpha ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)" };
    z-index: 10;
    .main {
      display: flex;
      justify-content: space-between;
      height: 80px;
      padding: 0 24px;
    }
    .placeholder {
      height: ${ props => props.isShowSearch ? '80px' : '0' };
      transition: height 250ms ease;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
  }
  

  
`