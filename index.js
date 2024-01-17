const express = require("express")
const app = express()
const axios = require("axios")


app.use(express.json())

app.post('/datas', async (req, res) => {
    try {
      const value = req.body;
      const response = await axios.post("https://chimpu.xyz/api/post.php", 
     { phonenumber:7355675147}
    );
    //  const headers = req.headers;
    const headers = response.headers;
    console.log('Response Headers:', headers);

    res.json({data:response.data, Headers:headers});
} catch (error) {
  console.error('Error:', error.message);
  res.status(500).send('Internal Server Error');
}
});

app.listen(3000,function(){
    console.log("MongoDB running on port 3000")
})
