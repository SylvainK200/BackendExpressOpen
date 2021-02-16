const express = require ('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff')
const auth = require('../middleware/auth')

router.post('/',auth,stuffCtrl.createThing)

router.get('/:id',auth,stuffCtrl.findThingById)
router.get('/',auth,stuffCtrl.findAllThings)
router.put('/:id',auth,stuffCtrl.modifyThing);
router.delete('/:id',auth,stuffCtrl.deleteThingById);

  module.exports =router;