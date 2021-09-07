const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res
        .status(200)
        .json({ message: 'Hello From The Server Side', app: 'kenafly' })
})


const port = 8000;
app.listen(port, () => {
    console.log(`App Starter on port ${port}`)
})