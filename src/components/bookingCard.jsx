import { useState } from 'react';
import colours from '../constants/colours';
import Stars from './stars';
import BookingButton from './bookingButton';
import ChevronIcon from '../assets/chevron.svg?react';

const styles = {
  container: {
    display: 'flex',
    width: 800,
    flexDirection: 'column',
  },
  card: {
    height: 270,
    display: 'flex',
    backgroundColor: colours.white,
  },
  img: {
    flex: 1,
  },
  info: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: colours.darkBlue,
    fontSize: 16,
  },
  location: {
    color: colours.lightGrey,
    fontWeight: '500',
    fontSize: 13,
  },
  infotext: {
    lineHeight: 1.3,
    fontWeight: '300',
    fontSize: 12,
    marginBottom: 4,
  },
  bold: {
    fontWeight: '600'
  },
  detailsHandle: {
    display: 'flex',
    height: 30,
    marginTop: -30,
    backgroundColor: colours.white,
    width: 170,
    color: colours.darkBlue,
    fontSize: 13,
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 20,
  },
  chevron: {
    height: 12,
    width: 12,
    transition: 'transform 0.2s',
    transform: 'rotate(180deg)',
  },
  details: {
    height: 100,
    backgroundColor: colours.white,
    width: '100%',
    color: colours.darkBlue,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
    transition: 'height 0.2s',
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    paddingTop: 5,
    paddingLeft: 20,
    transition: 'opacity 0.2s',
  },
  detailsText: {
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 1.3,
    fontWeight: '400',
    fontSize: 13,
    marginBottom: 4,
    transition: 'opacity 0.2s',
    color: colours.darkGrey,
  },
}

const getAttendees = (attendees) => {
  const adults = attendees.adults &&
    attendees.adults > 0 ?
    [attendees.adults, attendees.adults == 1 ? 'Adult' : 'Adults'] : []


  const children = attendees.children &&
    attendees.children > 0 ?
    [attendees.children, attendees.children == 1 ? 'Child' : 'Children'] : []

  const infants = attendees.infants &&
    attendees.infants > 0 ?
    [attendees.infants, attendees.infants == 1 ? 'Infant' : 'Infants'] : []

  return (
    <p style={styles.infotext}>
      {adults && <><span style={styles.bold}>{adults[0]} </span>{adults[1]}, </>}
      {children && <><span style={styles.bold}>{children[0]} </span>{children[1]}, </>}
      {infants && <><span style={styles.bold}>{infants[0]} </span>{infants[1]}</>}
    </p>
  )
}

const BookingCard = ({ booking }) => {
  const [moreOrLess, setMoreOrLess] = useState('more')
  const handleClick = () => {
    setMoreOrLess(moreOrLess == 'more' ? 'less' : 'more')
  }
  const isSelected = moreOrLess == 'less'
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
            <span style={styles.bold}>
              {booking.checkIn}
            </span> for <span style={styles.bold}>
              {booking.lengthOfStay}
            </span>
          </p>
          <p style={styles.infotext}>
            departing from
            <span style={styles.bold}> {booking.departureAirport}</span>
          </p>
          <BookingButton price={booking.price} />
        </div>
      </div>
      <div onClick={handleClick} style={styles.detailsHandle}>
        <p><span style={styles.bold}>
          Read {moreOrLess}
        </span> about this hotel</p>
        <ChevronIcon
          style={{
            ...styles.chevron,
            ...isSelected ? { transform: 'rotate(270deg)' } : {}
          }} />
      </div>
      <div style={{ ...styles.details, ...{ height: isSelected ? 90 : 0 } }}>
        <p style={{
          ...styles.detailsTitle,
          ...{ opacity: isSelected ? 1 : 0 }
        }}>Overview</p>
        <p style={{
          ...styles.detailsText,
          ...{ opacity: isSelected ? 1 : 0 }
        }}>{booking.overview}</p>
      </div>
    </div >
  )
}

export default BookingCard;
