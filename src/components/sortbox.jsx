import { useState } from 'react'
import colours from '../constants/colours'
import SortBoxRow from './sortboxRow'
import sortTypes from '../constants/sortTypes'

const styles = {
  container: {
    color: colours.darkBlue,
    display: 'flex',
    height: 150,
    width: 250,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
}

const SortBox = () => {
  const [selected, setSelected] = useState(sortTypes.alphabetically)

  const handleClick = (sortType) => {
    setSelected(sortType)
  }
  return (
    <div style={styles.container}>
      <SortBoxRow text="sort" boldText="alphabetically" onClick={handleClick} sortType={sortTypes.alphabetically} isSelected={selected == sortTypes.alphabetically} hasBorder />
      <SortBoxRow text="sort by" boldText="price" onClick={handleClick} sortType={sortTypes.price} isSelected={selected == sortTypes.price} hasBorder />
      <SortBoxRow text="sort by" boldText="star rating" onClick={handleClick} sortType={sortTypes.rating} isSelected={selected == sortTypes.rating} />
    </div >
  )
}
export default SortBox
