import colours from '../constants/colours'
import AZIcon from '../assets/az.svg?react'
import PoundIcon from '../assets/pound.svg?react'
import StarIcon from '../assets/star.svg?react'
import sortTypes from '../constants/sortTypes'

const styles = {
  bold: {
    fontWeight: 'bold'
  },
  row: {
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    flex: 1,
    height: 50,
    alignItems: 'center',
    backgroundColor: colours.white,
    cursor: 'pointer',
  },
  border: {
    borderBottom: `1px solid ${colours.darkBlue}`
  },
  selected: {
    backgroundColor: colours.darkBlue,
    color: colours.white,
  },
  icon: {
    height: 25,
    width: 25,
    marginLeft: 'auto',
    color: '#AAA'
  }
}
const SortBoxRow = ({ text, boldText, isSelected, onClick, sortType, hasBorder }) => {
  return (
    <div onClick={() => onClick(sortType)} style={{ ...styles.row, ...hasBorder ? styles.border : {}, ...isSelected ? styles.selected : {} }} >
      <p>{text} <span style={styles.bold}>{boldText}</span></p>
      {sortType == sortTypes.alphabetically && <AZIcon style={{ ...styles.icon, ...isSelected ? { color: "white" } : {} }} />}
      {sortType == sortTypes.price && <PoundIcon style={{ ...styles.icon, ...isSelected ? { color: "white" } : {} }} />}
      {sortType == sortTypes.rating && <StarIcon style={{ ...styles.icon, ...isSelected ? { color: "white" } : {} }} />}
    </div>
  )
}

export default SortBoxRow
