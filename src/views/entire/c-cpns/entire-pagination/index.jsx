import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { fetchEntireRoomList } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {
  console.log("paginiation render");

  const { currentPage, totalCount, roomList } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList
  }), shallowEqual)

  // 计算
  const startIndex = currentPage * 20 + 1
  const endIndex = (currentPage + 1) * 20
  const totalPage = Math.ceil(totalCount / 20)

  const dispatch = useDispatch()
  const pageChange = (event, page) => {
    window.scrollTo(0, 0)
    dispatch(fetchEntireRoomList(page -1)) 
  }

  return (
    <PaginationWrapper>
      { 
        !!roomList.length && (
          <>
            <Pagination count={ totalPage } onChange={pageChange } />
            <div className='pagination-bottom'>第 { startIndex } - { endIndex } 个房源，共超过 { totalCount } 个</div>
            <div className='page-tip'>包含额外附加费用及适用税费。</div>
          </>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination