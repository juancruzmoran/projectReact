module.exports = {
    register : async (req,res) => {
        try {

            const {name,email,password} = req.body

            if([name,email,password].includes("")){
                let error = new Error("Todos los campos son obligatorios!");
                error.status = 400;
                throw error
            }

            return res.status(201).json({
                ok : true,
                msg : 'Usuario registrado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en LOGIN!'
            })
        }
        
    },
    login : async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Usuario logeado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error!'
            })
        }
        
    },
    checked : async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Usuario checkeado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en CHECKED!'
            })
        }
        
    },
    sendToken : async (req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Token enviado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en SEND-TOKEN!'
            })
        }
        
    },
    verifyToken : async (req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Token verificado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en VERIFY-TOKEN!'
            })
        }
        
    },
    changePassword : async (req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Password actualizada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en CHANGE-PASSWORD!'
            })
        }
        
    },
}