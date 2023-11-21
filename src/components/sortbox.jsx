import colours from '../constants/colours'
import SortBoxRow from './sortboxRow'
import sortTypes from '../constants/sortTypes'

const styles = {
  container: {
    color: colours.darkBlue,
    display: 'flex',
    height: 150,
    width: 250,
    flexDirection: 'column',
  },
}

const SortBox = ({ sortType, isReversed, setSort }) => {
  const handleSortTypeClick = (nextSortType) => {
    if (nextSortType == sortType) {
      setSort({ sortType, isReversed: !isReversed })
      return
    }
    setSort({ sortType: nextSortType, isReversed: false })
  }
  return (
    <div style={styles.container}>
      <SortBoxRow
        text="sort"
        boldText="alphabetically"
        onClick={handleSortTypeClick}
        sortType={sortTypes.alphabetically}
        isSelected={sortType == sortTypes.alphabetically}
        hasBorder />
      <SortBoxRow
        text="sort 
        by"
        boldText="price"
        onClick={handleSortTypeClick}
        sortType={sortTypes.price}
        isSelected={sortType == sortTypes.price}
        hasBorder />
      <SortBoxRow
        text="sort 
        by"
        boldText="star 
        rating"
        onClick={handleSortTypeClick}
        sortType={sortTypes.rating}
        isSelected={sortType == sortTypes.rating} />
    </div >
  )
}
export default SortBox
