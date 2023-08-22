const express = require('express')
const app = express()

// async function main() {

//     app.listen(3001, () => {
//         liveServer.start({
//             port: 3000,
//             logLevel: 0,
//             root: './public'
//         })
//     })
// }

// main()

app.use(express.static('public'));

const port = 3000;

app.listen(port, () => {
    console.log('Im alive on port 3000')
})