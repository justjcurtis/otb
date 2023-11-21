import colours from '../constants/colours';
import Stars from './stars';
import BookingButton from './bookingButton';

const styles = {
  container: {
    display: 'flex',
    width: 700,
    flexDirection: 'column',
  },
  card: {
    height: 270,
    display: 'flex',
    backgroundColor: 'white',
  },
  img: {
    flex: 1,
  },
  info: {
    flex: 1,
    padding: 15,
  },
  title: {
    color: colours.darkBlue,
    fontSize: 16,
  },
  location: {
    color: '#A2A2A2',
    fontWeight: '500',
    fontSize: 13,
  },
  infotext: {
    lineHeight: 1.3,
    fontWeight: '300',
    fontSize: 12,
    marginBottom: 4
  },
  bold: {
    fontWeight: '600'
  },
}

const getAttendees = (attendees) => {
  const adults = attendees.adults && attendees.adults > 0 ? [attendees.adults, 'Adults'] : false
  const children = attendees.children && attendees.children > 0 ? [attendees.children, 'children'] : false
  const infants = attendees.infants && attendees.infants > 0 ? [attendees.infants, 'infants'] : false
  return (
    <p style={styles.infotext}>
      {adults && <><span style={styles.bold}>{adults[0]} </span>{adults[1]}, </>}
      {children && <><span style={styles.bold}>{children[0]} </span>{children[1]}, </>}
      {infants && <><span style={styles.bold}>{infants[0]} </span>{infants[1]}</>}
    </p>
  )
}

const BookingCard = ({ booking }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img style={styles.img} src={booking.image} />
        <div style={styles.info}>
          <h2 style={styles.title}>{booking.title}</h2>
          <p style={styles.location}>{booking.location}</p>
          <Stars starRating={booking.starRating} />
          {getAttendees(booking.attendees)}
          <p style={styles.infotext}>
            <span style={styles.bold}>{booking.checkIn}</span> for <span style={styles.bold}>{booking.lengthOfStay}</span>
          </p>
          <p style={styles.infotext}>
            departing from <span style={styles.bold}>{booking.departureAirport}</span>
          </p>
          <BookingButton price={booking.price} />
        </div>
      </div>
    </div >
  )
}

export default BookingCard;
