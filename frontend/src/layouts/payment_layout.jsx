import BookingSummary from "../components/booking/booking_summary";
import BookingSteps from "../components/booking/booking_steps";
import PaymentSelector from "../components/payment/payment_selector"
import CountdownTimer from "../components/booking/countdown_timer";
const PaymentLayout = () => {
    return(
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-10 py-10">
                <BookingSteps currentStep={3} />

                <div className="grid grid-cols-3 gap-6 items-start">
                    <div className="col-span-2 bg-white rounded p-6">
                        <PaymentSelector/>
                    </div>
                    <div className="space-y-4 sticky top-5">
                        <CountdownTimer/>
                        <BookingSummary/>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}

export default PaymentLayout;