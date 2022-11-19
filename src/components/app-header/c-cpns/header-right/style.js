import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80px;

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
    .btn {
      display: inline-block;
      padding: 12px;
      font-weight: 600;
      color: #222;
    }
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 42px;
    width: 77px;

    border: 1px solid #eee;
    border-radius: 21px;

    ${ props => props.theme.mixin.boxShadow }

    .icon-avatar {
      margin-left: 10px;
    }

    .select-menu-panel {
      position: fixed;
      top: 72px;
      right: 24px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      border-radius: 10px;
     
      background-color: #fff;
      color: #222;
      width: 240px;
      padding: 8px 0;

      .top, .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        .item {
          width: 100%;
          height: 40px;
          line-height: 40px;
          padding: 0 15px;
          &:hover {
            background-color: #f0f0f0;
          }
        }
        .sign-up {
          font-weight: 600;
        }
      }
      .divider-line {
        margin: 8px 0;
        border-bottom: 1px solid #DDD;
      }
    }
  }
`