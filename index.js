const axios = require("axios")
const express = require("express")
const app = express()

app.get('/datas', async (req, res) => {
    try {
      const value = req.query.phonenumber;
      const response = await axios.post('https://chimpu.xyz/api/post.php', 
      { phonenumber:value}
      )
    const headers = response.headers;
    console.log(headers);
    res.status(200).send({data:response.data, Headers:headers});
} catch (error) {
  console.error('Error:', error.message);
  res.status(500).send('Internal Server Error');
}
});
app.listen(3000,function(){
    console.log("MongoDB running on port 3000")
})
