import bookinfo from '../constants/bookingInfo'
import SortBox from '../components/sortbox';
import BookingCard from '../components/bookingCard';

const styles = {
  container: {
    display: 'flex',
    padding: 30,
  },
  sortBoxContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    marginBottom: 20,
  }
}
const MainView = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sortBoxContainer}>
        <SortBox />
      </div>
      <div style={styles.cardContainer}>
        {bookinfo.map((booking, i) => (
          <div style={styles.card} key={i}>
            <BookingCard booking={booking} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainView;
