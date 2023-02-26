const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abcedfg.js')
}, 1000);