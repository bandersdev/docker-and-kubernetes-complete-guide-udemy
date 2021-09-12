const express = require('express');

const app = express();

// define the response to the root
app.get('/', (req, res) => {
    res.send('How are you doing?');
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
});