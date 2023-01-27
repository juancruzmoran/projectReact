module.exports = {
    list : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'lista de tareas'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en TASKS-LIST!'
            })
        }
    },
    store : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Tarea guardada!'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en TASKS-STORE!'
            })
        }
    },
    detail : async(req,res) => {
        try {
            return res.status(200).json({
                ok : true,
                msg : 'Detalle de la tarea'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en TASKS-DETAIL!'
            })
        }
    },
    update : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Tarea actualiza'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en TASKS-UPDATE!'
            })
        }
    },
    remove : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Tarea eliminada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en TASKS-REMOVE!'
            })
        }
    },
    changeState : async(req,res) => {
        try {
            return res.status(201).json({
                ok : true,
                msg : 'Tarea completada'
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || 'Upss .. hubo un error en CHANGE-STATE!'
            })
        }
    },
}