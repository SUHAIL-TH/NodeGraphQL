const userModel =require("./model/user")


const resolver={
    Query:{
        getAllUsers:async()=>{
            let data= await userModel.find()
            return data
        }
    },
    Mutation:{
        createUser:async(_, arg)=>{
            let {name,age}=arg
            const newuser=new userModel({name,age})
            let newuserdata=await newuser.save()
            return newuserdata

        }
    }
}

module.exports=resolver