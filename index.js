const express = require("express"),
      app     = express();
      
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

app.listen(process.env.PORT, process.env.IP)