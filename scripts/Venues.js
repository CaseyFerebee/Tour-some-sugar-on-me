import { getBands, getBookings, getVenues } from "./database.js"

let theBands = getBands()
let theVenues = getVenues()
let theBookings = getBookings()

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

 // function to find the venues
const findVenues= (booking, theVenues) => {
    let bookingVenue = null

    for (const venue of theVenues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}

 const findMessage = (venueId) => {
   
  let message = ``
    for (const booking of theBookings) {
        if (booking.venueId === venueId) {
        const band = findBands(booking, theBands)
        //const venue = findVenues(booking, theVenues)
            if(message !== "") {
                message += ', ';
            }
            message += band.name
        }
    }

    if(message === "") {
        return " No bands are playing at this venue";
    } else {
        return  `The following bands are playing at this venue: ${message}`
    }
}





document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "venue") {
            const venueId = parseInt(itemClicked.dataset.id)

            for (const venue of theVenues) {
                if ( venue.id === venueId) {

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

 
