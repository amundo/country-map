let mapResponse = await fetch('./world-map.svg')
let xml = await mapResponse.text()
let dom = new DOMParser().parseFromString(xml, 'image/svg+xml')
let ids = new Set()

let dbResponse = await fetch('countries.json') 
let countries = await dbResponse.json()

window.countries = countries

let checkMapIds = () => {
  for(let [countryCode, value] of Object.entries(countries)) {
    // console.table({key,value})
    let found = dom.getElementById(countryCode.toLowerCase())
    // console.log(found? 'found' : 'not found', countryCode)
    if(!found) {
      // console.log('not found', countryCode)
      console.table( countryCode, countries[countryCode].names)
    }
  }
}

export {checkMapIds}