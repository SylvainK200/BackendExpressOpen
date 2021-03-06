const express = require('express');

const app = express();
const userRoutes = require('./routes/user');
/* app.use((req,res,next) => {
    console.log("Requete recue");
    next();
})

app.use((req,res,next)=>{
    res.status(201);
    next();
})
app.use((req,res,next)=>{
    res.json({message: "votre requete a ete bien recu"});
    next();
})

app.use((req,res)=>{
    console.log ('Reponse envoyee avec succes');
}) */
// connexion a mongodb en ligne sur le cluster


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stuffRoutes = require('./routes/stuff'); 
app.use(bodyParser.json())
mongoose.connect('mongodb+srv://kouemo_mongodb:pP9PXtuEeunGFe3@cluster0.iqowh.mongodb.net/testOpenclassroom?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Connexion reussie a mongoDB'))
.catch(()=>console.log ('Connexion echoue a mongodb'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
/* 
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  }); */


app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);
module.exports = app;