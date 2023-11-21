import colours from '../constants/colours'

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const styles = {
  bookingButton: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: colours.yellow,
    borderRadius: 5,
    color: colours.darkBlue,
    fontWeight: 'bold',
    padding: 10,
    lineHeight: 1.2,
    cursor: 'pointer',
    marginTop: 20,
  },
  price: {
    fontSize: 24,
  }
}

const BookingButton = ({ price, onClick }) => {
  return (
    <div onClick={onClick} style={styles.bookingButton}>
      <p>Book now</p>
      <p style={styles.price}>£{formatPrice(price)}</p>
    </div>
  );
}

export default BookingButton;
