const express = require('express');
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000 

const Film = mongoose.model('Film', { 
  title: String,
  description: String,
  image_url: String,
  trailer: String
});


app.get("/", async (req, res) => {
  const films = await Film.find()
  return res.send(films)
})

app.delete("/:id", async(req, res) => {
  const film = await Film.findByIdAndRemove(req.params.id)
  return res.send(film)
})

app.put("/:id", async(req, res) => {
  const film = await Film.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url
  },  {
    new: true
  })

  return res.send(film)
})

app.post("/", async (req, res) => {
  const filme = new Filme({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url
  })

  await film.save()
  return res.send(film)
})

app.listen(port, () => {
  mongoose.connect('mongodb+srv://gabriell:zKXRormaMqhxRbpx@cluster0.z0f0ubd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  console.log("App running")
})