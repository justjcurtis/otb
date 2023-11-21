import sortTypes from "../constants/sortTypes"
const bookingSort = {
    [sortTypes.alphabetically]: (a, b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
    },
    [sortTypes.price]: (a, b) => {
        const aPrice = parseFloat(a.price)
        const bPrice = parseFloat(b.price)
        if (aPrice < bPrice) return -1
        if (aPrice > bPrice) return 1
    },
    [sortTypes.rating]: (a, b) => {
        if (a.starRating < b.starRating) return 1
        if (a.starRating > b.starRating) return -1
    }
}
export default bookingSort
