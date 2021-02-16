const Thing = require('../models/Thing')
exports.createThing = (req,res,next)=>{
    delete req.body._id  
    const thing = new Thing(
          {
              ...req.body
        }
      );
    thing.save()
    .then(()=>res.status(201).json({message : " objet enregistree"}))
    .catch(error => res.status(400).json(error));
  };

exports.findThingById = (req,res,next)=>{
    Thing.findOne({_id: req.params.id})
    .then(thing => res.status(200).json(thing))
    .catch(error=>res.status(400).json({error}));
  };

  exports.findAllThings =(req,res,next)=>{
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error=>res.status(400).json(error))

}

exports.modifyThing =  (req,res,next)=>{
    Thing.updateOne({_id:req.params.id},{...req.body,_id:req.params.id })
    .then(()=>res.status(200).json({message : "objet modifie"}))
    .catch(error => res.status(400).json({error}))
};

exports.deleteThingById =  (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };