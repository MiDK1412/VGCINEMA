import { useBooking } from "../../contexts/booking_context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth_context";

const BookingSummary = () => {
  const { account, openAuth } = useAuth();
  const { booking, total, setBookingInfo } = useBooking();
  const { movie, hall, date, time, seats } = booking;
  const navigate = useNavigate();

  const get_day_name = (date) => new Date(date).toLocaleDateString("vi-VN", { weekday: "long" });
  const get_date = new Date(date).toLocaleDateString("vi-VN");

  const handleContinue = () => {
    if (!account) {
      openAuth(); // 👉 mở modal thay vì redirect
      return;
    }
    if (!booking.expiredAt){
      setBookingInfo({
        expiredAt:
        Date.now() + 6 * 60 * 1000
      });
    }
    navigate("/payment");
  };
  
  if (!movie) {
    return (

      <div className="bg-white p-6 rounded-lg">

        <p className="text-gray-500">
          Đang tải thông tin vé...
        </p>

      </div>

    );
  }

  return (
    <div className="bg-white p-6 rounded-lg sticky top-5 self-start">

      <img
        src= {movie.poster}
        className="rounded mb-4 h-90 w-80"
      />

      <h2 className="text-lg font-semibold">
        {movie.title}
      </h2>

      <p className=" font-semibold"> {hall}</p>
      <p className="text-sm text-gray-500 mb-4 mt-1">
        Suất: {time} - {get_day_name(date)}, {get_date}
      </p>

      {
        seats.length > 0 && (
          <>
            <hr className="my-6 border-t-2 border-dashed border-gray-300" />
            <div className="flex justify-between">
              <span> {seats.length}x Ghế đơn </span>
              <span> {total.toLocaleString()} đ </span>
            </div>
            <p className="text-sm text-gray-600">
              Ghế: {seats.join(", ")}
            </p>
          </>
        )
      }
    
      <hr className="my-6 border-t-2 border-dashed border-gray-300" />

      <div className="flex justify-between font-semibold mt-4">
        <span>Tổng cộng</span>
        <span className="text-red-600">
          {total.toLocaleString()} đ
        </span>
      </div>

      <div className="flex justify-between mt-6">

        <button className="text-red-600">
          Quay lại
        </button>

        <button
         onClick={handleContinue}
         className="btn-primary px-6 py-2">
          Tiếp tục
        </button>

      </div>

    </div>
  );
};

export default BookingSummary;