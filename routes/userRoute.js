const userController=require("../controllers/userController")
const authController=require("../controllers/authController")
const express=require("express")
const router=express.Router();
router.
route('/')
.get(authController.authenticateToken,userController.getAllUsers)
.post(userController.registerUser)
router.
route('/:id')
.get(authController.authenticateToken,userController.getOneUser)
.put(authController.authenticateToken,userController.updateUser)
.delete(authController.authenticateToken,userController.deleteUser)

router.post('/login', authController.login);

module.exports=router;


