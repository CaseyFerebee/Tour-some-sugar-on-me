import { getBands } from "./database.js"



let bandList = getBands()

export const bands = () => {
    let html = "<ul>"
   

    for (const band of bandList) {
       html += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
 }

    html += "</ul>"

   return html
}


