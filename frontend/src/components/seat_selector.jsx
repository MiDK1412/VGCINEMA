import { useBooking } from "../contexts/booking_context";

const rows = "ABCDEFGHIJKLM".split("");
const reversedRows = [...rows].reverse();
const cols = 8;

const bookedSeats = ["A3", "B4", "C6"]; 
const vipRows = ["E", "F"];

const SeatSelector = () => {

    const { selectedSeats, setSelectedSeats } = useBooking();

    const toggleSeat = (seat) => {
        if (bookedSeats.includes(seat)) return;

        if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
        setSelectedSeats([...selectedSeats, seat]);
        }
    };

    return(
         <div>
            {reversedRows.map(row => (
              <div key={row} className="flex items-center gap-2 mb-2">

                <span className="w-4 text-gray-500 text-center">{row}</span>

                <div className="flex gap-2 justify-center flex-1">
                    {[...Array(16)].map((_, i) => {
                      const seat = `${row}${16-i}`;
                      const isBooked = bookedSeats.includes(seat);
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button
                          key={seat}
                          onClick={() => toggleSeat(seat)}
                          disabled={isBooked}
                          className={`w-6 h-6 text-xs border rounded
                          ${
                              isBooked
                              ? "bg-gray-500 text-white cursor-not-allowed"
                              : isSelected
                              ? "bg-red-600 text-white"
                              : "bg-white"
                          }`}
                        >
                          {16-i}
                        </button>
                      );
                    })}
                </div>
                
                  <span className="w-4 text-gray-500 text-center">{row}</span>
              </div>
            ))}

            <div className="text-center mt-6 text-gray-400">
              Màn hình
            </div>

            <div className="h-1 bg-red-600 mt-2"></div>

             {/* Legend */}
          <div className="flex gap-6 mt-8 justify-center text-sm">

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded border"></div>
              Ghế trống
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              Ghế đang chọn
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              Ghế đã bán
            </div>

          </div>
          </div>
    );
}

export default SeatSelector;