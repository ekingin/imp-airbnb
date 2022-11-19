import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  position: relative;

  .controler {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    z-index: 10;
    border-radius: 50%;
    background-color: #FFF;
    color: #222;
    box-shadow: 0 1px 2px rgba(0,0,0,.18);
    top: 50%;
    &.left {
      left: 0;
      transform: translate(calc(-50% + ${ props => props.leftCtlOffset }), -50%);
    }
    &.right {
      right: 0;
      transform: translate(calc(50% + ${ props => props.rightCtlOffset }), -50%);
    }
  }

  .scroll {
    overflow-x: hidden;
    .scroll-content {
      display: flex;

      transition: transform 300ms ease;
    }
  }
  
`