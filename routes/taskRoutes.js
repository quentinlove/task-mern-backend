const express = require('express');
const router = express.Router();
const { getTasks,setTasks,deleteTask,updateTask } = require('../controllers/taskController');
const { set } = require('mongoose');
const {protect} = require('../middleware/authMiddleware')

router.get('/',protect, getTasks)
router.post('/',protect, setTasks)
router.put('/:id',protect, updateTask)
router.delete('/:id',protect, deleteTask)

module.exports= router;