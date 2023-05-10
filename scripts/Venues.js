import { getBands, getBookings, getVenues } from "./database.js"

let theBands = getBands()
let theBookings = getBookings()
let theVenues = getVenues()
// function to find the bands
const findBands = (booking, theBands) => {
    let bookingBand = null

    for (const band of theBands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }

    return bookingBand
}


const findMessage = (click) => {
    const matchingBands = [];

    for (const booking of theBookings) {
        if (booking.venueId === click) {
            const band = findBands(booking, theBands);
            matchingBands.push(band.name);
        }
    }

    if (matchingBands.length === 0) {
        return 'No bands are playing at this venue.';
    } else {
        return `The following bands are playing at this venue: ${matchingBands.join(', ')}.`;
    }
}





document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venue") {
            const venueId = parseInt(itemClicked.dataset.id)

            for (const venue of theVenues) {
                if (venue.id === venueId) {

                    const theAlert = findMessage(venueId)

                    window.alert(` ${theAlert}  `)
                }
            }
        }
    }
)

export const venue = () => {
    let html = "<ul>"


    for (const venue of theVenues) {
        html += `<li data-type= "venue" data-id="${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}


