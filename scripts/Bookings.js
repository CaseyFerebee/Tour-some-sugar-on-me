import { getBands, getBookings, getVenues } from "./database.js"


const bands = getBands()
const venues = getVenues()
const bookings = getBookings()



const findBands = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band.name
        }
    }

    return bookingBand
}


const findVenue = (booking, allVenue) => {
    let bookingVenue = null

    for (const venue of allVenue) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue.name
        }
    }

    return bookingVenue
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "booking") {
            const bandId = itemClicked.dataset.bandid

            for (const band of bands) {
                if ( band.id === parseInt(bandId)) {


                    window.alert(` ${band.name} \n ${band.genre} \n formed in ${band.formed} \n ${band.numMembers} band members `)
                }
            }
        }
    }
)

export const booking = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const theVenue = findVenue(booking, venues)
        const theBand = findBands(booking, bands)

        html += `<li data-type="booking" data-bandid="${booking.bandId}">${theBand} are playing ${theVenue} on ${new Date(booking.bookingDate).toLocaleDateString()}</li>`

    }

    html += "</ul>"

    return html
}


