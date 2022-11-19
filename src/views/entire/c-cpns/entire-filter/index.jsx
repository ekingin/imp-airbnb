import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {

  const [ selectedConditions, setSelectedConditions ] = useState([])

  const conditionClick = (item) => {
    const tempArray = [...selectedConditions]
    if (tempArray.includes(item)) {
      const removeIndex = tempArray.findIndex(fillterItem => fillterItem === item)
      tempArray.splice(removeIndex, 1)
    } else {
      tempArray.push(item)
    }
    setSelectedConditions(tempArray)
  }

  return (
    <FilterWrapper>
      <div className='filter-condition'>
        {
          filterData.map(item => (
            <div 
              className={ classNames("condition-item", { active: selectedConditions.includes(item) }) }
              key={ item }
              onClick={ e => conditionClick(item) }
            >
              { item }
            </div>
          ))
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter