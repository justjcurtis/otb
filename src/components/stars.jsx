import StarIcon from '../assets/star.svg?react'
import colours from '../constants/colours'

const styles = {
  star: {
    height: 15,
    width: 15,
    fill: colours.yellow,
    color: colours.yellow,
    marginTop: 5,
    marginBottom: 5,
  }
}
const Stars = ({ starRating }) => {
  return (
    <>
      {
        new Array(starRating).fill(0).map((_, i) => (
          <StarIcon key={i} style={styles.star} />
        ))
      }
    </>
  )
}

export default Stars
