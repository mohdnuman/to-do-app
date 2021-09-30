const express=require("express");
const router=express.Router();

module.exports=router;

const homeController=require('../controllers/home_controller.js');
router.get('/',homeController.home);
router.post('/add-task',homeController.add);
router.get('/delete-task',homeController.delete);