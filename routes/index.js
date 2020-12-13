const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');
const userController = require('../controllers/userController');
//-------------------people specific routes
//get all people in db
router.get("/people", peopleController.getPeople);
//get people by id
router.get("/people/:id", peopleController.getPerson);
//create a person and add it to db
router.post("/people", peopleController.createPerson);
//update a specific person in db
router.put("/people/:id", peopleController.updatePerson);
//delete a specific person in db
router.delete("/people/:id", peopleController.deletePerson);
//--------------------login/register routes
router.post("/register", userController.register);

router.post("/login", userController.authenticate);

module.exports = router;