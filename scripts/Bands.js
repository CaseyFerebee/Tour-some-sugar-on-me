import { getBands, getBookings, getVenues } from "./database.js"

let bandList = getBands()
let theVenues = getVenues()
let theBookings = getBookings()

//function to find the venues
const findVenues = (booking, theVenues) => {
    let bookingVenue = null

    for (const venue of theVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}


const findMessage = (bandId) => {
    const matchingVenue = [];

    for (const booking of theBookings) {
        if (booking.bandId === bandId) {
            const venue = findVenues(booking, theVenues);
            matchingVenue.push(venue.name);
        }
    }

    if (matchingVenue.length === 0) {
        return 'No bands are playing at this venue.';
    } else {
        return `The following bands are playing at this venue: ${matchingVenue.join(', ')}.`;
    }
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "band") {
            const bandId = parseInt(itemClicked.dataset.id)

            for (const band of bandList) {
                if (band.id === bandId) {

                    const theAlert = findMessage(bandId)

                    window.alert(` ${theAlert}  `)
                }
            }
        }
    }
)



export const bands = () => {
    let html = "<ul>"


    for (const band of bandList) {
        html += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}


