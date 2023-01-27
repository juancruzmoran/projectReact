module.exports = {
    list : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'lista de projectos'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en PROJECT-LIST!'
            })
        }
    },
    store : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Proyecto guardado!'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en STORE-PROJECT!'
            })
        }
    },
    detail : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Detalle del projectos'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en PROYECT-DETAIL!'
            })
        }
    },
    update : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Proyecto actualizado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en PROYECT-UPDATE!'
            })
        }
    },
    remove : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Proyecto eliminado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en PROYECT-REMOVE!'
            })
        }
    },
    addCollaborator : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Colaborador agregado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en COLLABORATOR-ADD!'
            })
        }
    },
   removeCollaborator : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Colaborador eliminado'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en COLLABORATOR-REMOVE!'
            })
        }
    },
    
    
}