const User= require("../Models/user");

async function handleGetAllUser(req,res){
    const allDBusers=await User.find({});
    
    return res.json(allDBusers);
}

async function getUserById(req,res){
    const user=await User.fundById(req.params.id);
    if (!user) return res.status(404).json({msg:error})
    return res.json(user);
}

async function updateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName:"Changed"})
    return res.json({status:succes});
}

async function deleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:succes});

}

async function createNewUser(req,res){
    const Body= req.body;
    if(!Body|| !Body.id|| !Body.first_name|| !Body.last_name|| !Body.email|| !Body.gender || !Body.jobTitle){
        return res.status(400).json({msg:"Wrong request"})
    }
    const result= await User.create({
        id:Body.id,
        firstName:Body.first_name,
        lastName:Body.last_name,
        email: Body.email,
        gender: Body.gender,
        jobTitle: Body.job_title

    })
    console.log(result);
    return res.status(201).json({msg:"Sucess" ,id: result});
}

module.exports= {
    handleGetAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
    createNewUser,

};
