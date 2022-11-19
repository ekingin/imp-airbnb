import ekRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return ekRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}
