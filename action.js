const fs = require('fs')

// console.dir(process.env)

function getEventData () { fs.readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8') }

console.log(`Event data: ${JSON.stringify(getEventData())}`)
