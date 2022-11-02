const userController=require("../controller/user.controller");
const multer  = require('multer');
const path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../images')   
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

const Routes=(app)=>{
    app.get('/user',userController.createUser);
    app.post('/user/create',upload.single("image"),userController.createUser)
}

module.exports=Routes