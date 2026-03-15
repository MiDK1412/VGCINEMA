
const rows = ["A", "B", "C", "D", "E", "F"];
const cols = 8;

const bookedSeats = ["A3", "B4", "C6"]; 
const vipRows = ["E", "F"];

const SeatSelector = ({selectedSeats, setSelectedSeats }) => {

    const toggleSeat = (seat) => {
        if (bookedSeats.includes(seat)) return;

        if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
        setSelectedSeats([...selectedSeats, seat]);
        }
    };

    return(
        <div className="bg-gray-900 p-10 rounded-xl max-w-3xl mx-auto">

          {/* Screen */}
          <div className="bg-gray-700 text-center py-2 rounded mb-10">
            SCREEN
          </div>

          {/* Seats */}
          <div className="flex flex-col gap-4">

            {rows.map((row) => (
              <div key={row} className="flex items-center gap-3 justify-center">

                {/* Row label */}
                <span className="w-6 text-gray-400 font-bold">
                  {row}
                </span>

                {Array.from({ length: cols }, (_, i) => {
                  const seat = `${row}${i + 1}`;
                  const isBooked = bookedSeats.includes(seat);
                  const isSelected = selectedSeats.includes(seat);
                  const isVIP = vipRows.includes(row);

                  return (
                    <div key={seat} className="relative">

                      {/* tạo lối đi giữa */}
                      {i === 4 && <div className="w-6" />}

                      <button
                        onClick={() => toggleSeat(seat)}
                        disabled={isBooked}
                        className={`
                        w-10 h-10 rounded text-sm
                        ${
                          isBooked
                            ? "bg-gray-500 cursor-not-allowed"
                            : isSelected
                            ? "bg-red-600"
                            : isVIP
                            ? "bg-yellow-600 hover:bg-yellow-500"
                            : "bg-gray-700 hover:bg-gray-500"
                        }
                        `}
                      >
                        {i + 1}
                      </button>

                    </div>
                  );
                })}
              </div>
            ))}

          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-8 justify-center text-sm">

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-700 rounded"></div>
              Normal
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-600 rounded"></div>
              VIP
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              Selected
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              Booked
            </div>

          </div>

          {/* Selected */}
          <div className="mt-8 flex justify-between items-center">

            <p>
              Selected:{" "}
              <span className="text-red-400">
                {selectedSeats.join(", ") || "None"}
              </span>
            </p>

          </div>

        </div>
    );
}

export default SeatSelector;