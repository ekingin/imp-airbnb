import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding: 15px 20px;
  position: relative;
  margin-top: 152px;
  
  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
  .room-list-cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`