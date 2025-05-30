import User  from "../models/users.model.js"
import bcrypt from "bcrypt"
import crypto from "crypto"





const userRegister = async (req,res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message: "user already exists"
            })
        }


        // password hashing

        const pass = req.body.password = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: pass,
        })

        if(!user){
            return res.status(400).json({
                message: "user not registered"
            });
        };

        // create token
        const token = crypto.randomBytes(64).toString("hex");
        user.verificationToken = token;
        await user.save();

       
   

        res.status(201).json({
            message: "user registered successfully",
            success:true,
        })
    }
    catch(error){
    
        res.status(400).json({
            message: 'user not registered',
            error,
            success:false

        })
    }
}



export {userRegister}