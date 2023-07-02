// download.js

let response = await fetch('https://upload.wikimedia.org/wikipedia/commons/4/4d/BlankMap-World.svg')

let xml = await response.text()

await Deno.writeTextFile('world-map.svg', xml)

await Deno.copyFile('../country_io/countries.json', 'countries.json')