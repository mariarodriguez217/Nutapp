const {Router}=require('express');
const router =Router();
router.get('/app/empleado', (req,res)=>{
res.status(200).json({mensaje:`funciona get`});
});
router.post('/app/empleado',(req,res)=>{
    res.status(201).json({mensaje:`funciona post`});
});
router.delete('/app/empleado',(req,res)=>{
    res.status(200).json({mensaje:`funciona delete`});
});
module.exports = router;