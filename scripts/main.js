import { bands } from "./Bands.js"
import {venue} from "./Venues.js"
import { booking } from "./Bookings.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour some sugar on me</h1>

<article class="orders">
    <h2>Bookings</h2>
    ${booking()}
</article>

<article class="details">
    <section class="detail--column list details__Venues">
        <h2>Venues</h2>
        ${venue()}
    </section>
    <section class="detail--column list details__Bands">
        <h2>Bands</h2>
        ${bands()}
    </section>
    
</article>


`

mainContainer.innerHTML = applicationHTML