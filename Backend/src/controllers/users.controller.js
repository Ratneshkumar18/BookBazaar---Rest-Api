import bcrypt from "bcrypt"



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
    }
}