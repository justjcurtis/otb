import StarIcon from '../assets/star.svg?react'
const styles = {
  star: {
    height: 15,
    width: 15,
    fill: '#fedd06',
    color: '#fedd06',
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
