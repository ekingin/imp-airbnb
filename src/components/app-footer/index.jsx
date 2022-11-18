import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='service'>
        {
          footerData.map(linkGroup => (
            <div className='link-group' key={ linkGroup.name }>
              <h3 className='group-name'>{ linkGroup.name }</h3>
              {
                linkGroup.list.map(link => <div className='link-item' key={ link } >{ link }</div>)
              }
            </div>
          ))
        }
      </div>
      <div className='statement'>
        © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301
      </div>
    </FooterWrapper>
  )
})

export default AppFooter