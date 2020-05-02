let mongoose = require('mongoose')
let express = require('express')
let router = express.Router();

//import pharmacy
let pharmacySchema = require('../Models/Pharmacy');

//add pharmacy
router.route('/addpharmacy').post((req,res,next)=>{
    pharmacySchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})

//view pharmacy
router.route('/').get((req,res)=>{
    pharmacySchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//get single details
router.route('/editpharmacy/:id').get((req,res)=>{
    pharmacySchema.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

// Update 
router.route('/updatepharmacy/:id').put((req, res, next) => {
    pharmacySchema.findOneAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Updated successfully !')
      }
    })
  })
  
  // Delete 
  router.route('/deletepharmacy/:id').delete((req, res, next) => {
    pharmacySchema.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = router;