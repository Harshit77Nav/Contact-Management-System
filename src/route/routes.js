const router = require("express").Router();
const Cmodel = require("../model/contact");

router.post("/v1/contacts", async(req,res)=>{
    const {firstName, lastName, email, phone} = req.body;
    if(!firstName){
        return res.json({
            error: "Missing required field(s): firstName"
        })
    } else if(!lastName){
        return res.json({
            error: "Missing required field(s): lastName"
        })
    } else if(!email){
        return res.json({
            error: "Missing required field(s): email"
        })
    } else if(!phone){
        return res.json({
            error: "Missing required field(s): Phone number"
        })
    }

    try {
        const user = await Cmodel.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone
        })
        res.status(201).json({
            user
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.get("/v1/contacts", async(req,res)=>{
    try {
        const user = await Cmodel.find();
        res.json({
            user
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.get("/v1/contacts/:id", async(req,res)=>{
    const id = req.params.id;
    try {
        const user = await Cmodel.find({_id:id})
        res.json({
            user
        })
    } catch (error) {
        res.status(404).json({
            error: "There is no contact with that id"
        })
    }
})

router.delete("/v1/contacts/:id", async(req,res)=>{
    const id = req.params.id;
    try {
        const user = await Cmodel.deleteOne({_id:id})
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(204)
    }
})

router.put("/v1/contacts/:id", async (req,res)=>{
    const {firstName, lastName, email, phone} = req.body;
    const id = req.params.id;
    try {   
        const user = await Cmodel.updateOne({_id:id},{
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone
        })
        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({
            error:"There is no contact with that id"
        })
    }
})

router.patch("/v1/contacts/:id", async(req,res)=>{
    const {firstName, lastName, email, phone} = req.body;
    const id = req.params.id;
    try {
        const user = await Cmodel.updateOne({_id:id},{
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone
        })
        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({
            error:"There is no contact with that id"
        })
    }
})


module.exports = router;