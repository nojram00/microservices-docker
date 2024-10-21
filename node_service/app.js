const express = require('express');
const cors = require('cors')
const axios = require('axios')

const app = express();
const port = 8000;

app.use(cors());
app.get('/', (req, res) => {

    res.json({
        message : 'This response is running in Express/Node.js'
    })
});

app.get('/from-python', async (req, res) => {
    try {
        const response = await axios.get('http://python_service:5000/to-node')

        if (response.status == 200){
            res.json({
                message : response.data.message
            })
        }
        
    } catch (error) {
        res.json({
            message : 'Error!'
        })
    }
})

app.listen(port, () => {
    console.log(`This service is running on port ${port}`)
});