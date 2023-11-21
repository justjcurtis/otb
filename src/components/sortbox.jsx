import { useState } from 'react'
import colors from '../constants/colours'

const styles = {
  container: {
    color: colors.darkBlue,
    display: 'flex',
    height: 150,
    width: 250,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  bold: {
    fontWeight: 'bold'
  },
  row: {
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flex: 1,
    height: 50,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  border: {
    borderBottom: `1px solid ${colors.darkBlue}`
  },
  selected: {
    backgroundColor: colors.darkBlue,
    color: colors.white,
  }
}

const sortTypes = {
  alphabetically: 'alphabetically',
  price: 'price',
  rating: 'rating'
}


const SortBox = () => {
  const [selected, setSelected] = useState('alphabetically')

  const handleClick = (sortType) => {
    setSelected(sortType)
  }
  return (
    <div style={styles.container}>
      <div onClick={() => handleClick(sortTypes.alphabetically)} style={{ ...styles.row, ...styles.border, ...selected == sortTypes.alphabetically ? styles.selected : {} }}>
        <p>sort <span style={styles.bold}>alphabetically</span></p>
      </div>
      <div onClick={() => handleClick(sortTypes.price)} style={{ ...styles.row, ...styles.border, ...selected == sortTypes.price ? styles.selected : {} }}>
        <p>sort by <span style={styles.bold}>price</span></p>
      </div>
      <div onClick={() => handleClick(sortTypes.rating)} style={{ ...styles.row, ...selected == sortTypes.rating ? styles.selected : {} }}>
        <p>sort by <span style={styles.bold}>start rating</span></p>
      </div>
    </div >
  )
}
export default SortBox
