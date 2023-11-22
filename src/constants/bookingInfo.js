import hotel1 from '../assets/hotel-image-1.png'
import hotel2 from '../assets/hotel-image-2.png'
import hotel3 from '../assets/hotel-image-3.png'

const bookingInfo = [
    {
        id: 'ebc1e2e0-6b9e-11e9-a923-1681be663d3e',
        title: 'Iberostar Grand Salome',
        image: hotel1,
        starRating: 5,
        location: 'Costa Adeje, Tenerife',
        attendees: {
            adults: 2,
            children: 2,
            infants: 1
        },
        checkIn: '3rd July 2019',
        lengthOfStay: '7 days',
        departureAirport: 'East Midlands',
        price: '1136.50',
        overview: 'The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Ocean. It is situated between the Gold del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.'
    },
    {
        id: 'ecc1e2e0-6b9e-11e9-a923-1681be663d3e',
        title: 'Aguamarina Golf Hotel',
        image: hotel2,
        starRating: 4,
        location: 'Costa Adeje, Tenerife',
        attendees: {
            adults: 2,
            children: 1,
        },
        checkIn: '27th May 2019',
        lengthOfStay: '7 days',
        departureAirport: 'Liverpool',
        price: '696.80',
        overview: 'The Aguamarina Golf Hotel is located in the Golf del Sur resort, just 150m from the sea and 1km from the marina. The hotel is surrounded by a golf course and is a great choice for families and couples looking for a relaxing holiday in Tenerife.'
    },
    {
        id: 'edc1e2e0-6b9e-11e9-a923-1681be663d',
        title: 'Las Piramides Resort',
        image: hotel3,
        starRating: 3,
        location: 'Costa Adeje, Tenerife',
        attendees: {
            adults: 2,
            children: 2,
        },
        checkIn: '3rd July 2019',
        lengthOfStay: '7 days',
        departureAirport: 'Manchester',
        price: '499.99',
        overview: 'The Las Piramides Resort is located in the heart of Playa de las Americas, just 300m from the beach. The hotel is a great choice for families and couples looking for a relaxing holiday in Tenerife.'
    }
]

export default bookingInfo;
