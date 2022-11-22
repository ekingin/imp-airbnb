import styled from "styled-components";

export const CenterWrapper = styled.div`
  min-width: 348px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tabs-wrap {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
  .bar-exit {
    opacity: 0;
  }

  .tabs-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
  .tabs-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }
  .tabs-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  } 
  .tabs-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  } 
`