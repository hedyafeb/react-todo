const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js')
// const isLoggedIn = require('../middlewares/isLoggedIn')
 

router.post('/', taskController.addNew) 
router.get('/', taskController.readAll)
router.get('/pending', taskController.readAllPending)
router.get('/done', taskController.readAllDone)
router.patch('/:taskID', taskController.update)
router.patch('/:taskID/done', taskController.markAsDone)
router.delete('/:taskID', taskController.delete)

 
module.exports = router
 