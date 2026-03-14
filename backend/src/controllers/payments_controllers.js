import Payment from '../models/payment.js'

export const get_all_payment_list = async (req, res) => {
    try {
        const payments = await Payment.find().populate("booking").sort({ createdAt:-1 });

        res.status(201).json(payments);

    } catch (error) {
        console.error("Loi khi goi danh sach thanh toan", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const create_payment = async (req, res) => {
    try {
        const { amount, payment_method, booking, transaction_id } = req.body;

        if(!amount || !payment_method|| !booking) {
            return res.status(400).json({
                message: "Vui long dien day du thong tin !"
            })
        }

        const new_payment = new Payment({
            amount,
            payment_method,
            booking,
            transaction_id,
            payment_status: "pending"
        });

        const saved_payment = await new_payment.save();

        res.status(201).json({
            message: "tao phuong thuc thanh toan thanh cong",
            new_payment: saved_payment
        });
    } catch (error) {
        console.error("Loi khi tao phuong thuc thanh toan", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const update_payment = async (req, res) => {
    try {
        const { id } = req.params;
        const{ amount, payment_method, transaction_id } = req.body;

        const payment = await Payment.findByIdAndUpdate(
            id,
            { amount, payment_method, transaction_id },
            { new: true }
        );

        if(!payment){
            return res.status(404).json({
                message: "hinh thuc thanh toan nay khong ton tai"
            });
        }
        res.status(200).json(payment);
        

    } catch (error) {
        console.error("Loi khi", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}

export const get_payment_by_booking = async (req, res) => {
    try {

        const { booking_id } = req.params;

        const payment = await Payment
            .findOne({ booking: booking_id })
            .populate("booking");

        if (!payment) {
            return res.status(404).json({
                message: "Payment not found"
            });
        }

        res.status(200).json(payment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}

export const delete_payment = async (req, res) => {
    try {
        const delete_payment = await Payment.findByIdAndDelete(req.params.id);
        if (!delete_payment) {
            res.status(400).json({
                message: "payment nay khong ton tai"
            })
        }
    
        res.status(201).json({
            message: "Xoa payment thanh cong",
            data: delete_payment
        })
    } catch (error) {
        console.error("Loi khi xoa payment", error);
        res.status(500).json({
            message: "Loi he thong"
        })
    }
}