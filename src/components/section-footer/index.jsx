import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()
  const navigateToMore = () => {
    navigate('/entire')
  }

  return (
    <FooterWrapper name={ name } onClick={ navigateToMore }>
      <span className='text'>{ text }</span>
      <IconRightArrow />
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter