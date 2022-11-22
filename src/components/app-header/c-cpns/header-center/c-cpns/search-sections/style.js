import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
  border: 1px solid #ccc;
  width: 848px;
  background-color: #fff;

  .search-icon {
    position: absolute;
    right: 8px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme.color.primary };
  }

  .condition-item {
    flex: 1;
    height: 66px;
    padding: 0 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 12px;
      font-weight: 800;
    }
    .desc {
      color: #a1a1a1;
    }
    &:hover {
      background-color: #ccc;
      border-radius: 33px;
    }
  }
  &:last-child {
    position: relative;
    right: -1px;
  }
  .divider {
    border-right: 1px solid #eee;
    height: 40px;
  }
`