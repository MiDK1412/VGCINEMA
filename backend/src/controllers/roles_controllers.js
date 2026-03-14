import Role from '../models/role.js'

export const get_role_list = async (req, res) => {
    try {
        const roles = await Role.find();
    
        res.status(200).json(roles);
    } catch (error) {
        console.error("Loi khi goi danh sach role: ",error);
        res.status(500).json({
            message: "Loi he thong"
        });
    }


}

export const create_role = async (req, res) => {
    try {
        const { name } = req.body;
        if( !name ) {
            res.status(400).json({
                message: "Vui long dien day du thong tin! "
            })
        }
    
        const new_role = await Role.create({
            name
        });
        res.status(400).json(new_role);
    } catch (error) {
        console.error("Loi khi tao role: ",error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const update_role = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } =req.body;

        const updated_role = await Role.findByIdAndUpdate (
            id,
            { namne },
            { new: true }
        );

        res.status(200).json({
            message: "tao role thanh cong",
            data: updated_role
        });
    } catch (error) {
        console.error("Loi khi tao role: ",error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const delete_role = async (req, res) => {
    try {
        const delete_role = await Role.findByIdAndDelete(req.params.id);
        if (!delete_role) {
            res.status(400).json({
                message: "role nay khong ton tai"
            })
        }
    
        res.status(201).json({
            message: "Xoa role thanh cong",
            data: delete_role
        })
    } catch (error) {
        console.error("Loi khi xoa role: ", error);
        res.status(500).json({

            message: "Loi he thong"
        })
    }

}