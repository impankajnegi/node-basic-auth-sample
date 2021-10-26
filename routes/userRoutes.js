const { basicAuth } = require('../middlewares/basicauth')

const router = require('express').Router()

// router.use((err, req, res, next)=>{
//     if(err){
//         throw new Error('Error in request')
//     }

//     //TODO
//     console.log('Router lvele middleware execeuted..')

//     next()
// })


router.use(basicAuth)


router.get('/user', (req, res)=>{
    console.log('Get:/user');

    res.status(200).json({'name':'pankaj'})

})




module.exports.userRoutes = router