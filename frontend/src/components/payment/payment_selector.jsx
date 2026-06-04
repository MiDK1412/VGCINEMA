import { useEffect, useState } from "react";
import { useBooking } from "../../contexts/booking_context";
import axios from "axios"

const PaymentSelector = () => {

    const [paymentMethods, setPaymentMethods] = useState([]);
    const [selected, setSelected] = useState("onepay");

    useEffect(() => {
        const fetchMethods = async () => {
            try {
            const res = await axios.get(
                "http://localhost:5001/api/payment/methods"
            );

            setPaymentMethods(res.data);
            } catch (error) {
            console.log(error);
            }
        };

        fetchMethods();
    }, []);

    return(
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl front-semibold mb-6">
                Phương thức thanh toán
            </h2>
            <div className="space-y-6">
                {paymentMethods.map((method) => (
                <label
                    key={method.id}
                    className={`flex items-center gap-5 cursor-pointer p-3 rounded-xl transition-all border
                    ${
                        selected === method.id
                        ? "border-orange-400 bg-orange-50"
                        : "border-transparent hover:bg-gray-50"
                    }
                    `}
                    >
                    {/* Radio */}
                    <input
                    type="radio"
                    checked={selected === method.id}
                    onChange={() => setSelected(method.id)}
                    className="w-5 h-5 accent-red-500"
                    />

                    {/* Logo */}
                    <img
                    src={method.logo}
                    alt={method.name}
                    className="w-12 h-12 object-contain"
                    />

                    {/* Text */}
                    <div>
                    <p className="text-[18px] text-gray-800">
                        {method.description}
                    </p>
                    </div>
                </label>
                ))}
            </div>
        </div>
    )
}

export default PaymentSelector;