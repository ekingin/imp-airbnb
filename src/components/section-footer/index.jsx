import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconRightArrow from '@/assets/svg/icon-right-arrow'

const SectionFooter = memo((props) => {
  const { name } = props

  let text = ''
  if (name) {
    text = `查看更多${ name }房源`
  } else {
    text = '查看更多'
  }

  return (
    <FooterWrapper name={ name }>
      <span className='text'>{ text }</span>
      <IconRightArrow />
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter