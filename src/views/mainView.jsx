import { useState } from 'react';
import sortTypes from '../constants/sortTypes';
import bookinfo from '../constants/bookingInfo'
import bookingSort from '../utils/bookingSort';
import SortBox from '../components/sortbox';
import BookingCard from '../components/bookingCard';

const styles = {
  container: {
    display: 'flex',
    padding: 60,
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
  const [{ sortType, isReversed }, setSort] = useState({
    sortType: sortTypes.alphabetically,
    isReversed: false,
  })
  const sortedBookings = bookinfo.sort(bookingSort[sortType])
  if (isReversed) sortedBookings.reverse()
  return (
    <div style={styles.container}>
      <div style={styles.sortBoxContainer}>
        <SortBox
          sortType={sortType}
          isReversed={isReversed}
          setSort={setSort}
        />
      </div>
      <div style={styles.cardContainer}>
        {sortedBookings.map((booking, i) => (
          <div style={styles.card} key={i}>
            <BookingCard booking={booking} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainView;
