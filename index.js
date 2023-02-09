
const express = require('express');
const app = express();
const cors = require('cors');
const {connection} = require("./db/connection")

app.use(cors());
app.use(express.json());

app.get('/notes', (req, res) => {
    const sql = "SELECT * FROM notebook";
    connection.query(sql, function (err, result) {
      if (err) return result.json(err);
      return res.json(result);
    })
})


app.post('/notes', (req, res) => {
  const sql = "INSERT INTO notebook (title, description, date) VALUES (?,?,?)";
  const values = [req.body.title, req.body.description, req.body.date];

  connection.query(sql, values, (err, result) => {
    if(err) return res.json(err);
    return res.json('notes has been created successfully!');
  })
})

app.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const sql = "DELETE FROM notebook WHERE id =?";
  connection.query(sql, noteId, (err, result) => {
    if(err) return res.json(err);
    return res.json('notes has been deleted successfully');
  })
})




  
app.listen(5050, () => {
    console.log('Server is running on port 5050 !');
})