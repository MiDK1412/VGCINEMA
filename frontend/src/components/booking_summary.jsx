const BookingSummary = ({ selectedSeats }) => {

  const price = 8;
  const total = selectedSeats.length * price;

  return (
    <div className="bg-gray-900 p-6 rounded-xl ">

      <img
        src="https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
        className="rounded-lg mb-4 h-100"
      />

      <h2 className="text-2xl font-bold mb-2">
        Doctor Strange
      </h2>

      <p className="text-gray-400">Room: 3</p>
      <p className="text-gray-400">Time: 19:30</p>
      <p className="text-gray-400 mb-4">Date: Sat 22 June</p>

      <hr className="border-gray-700 mb-4" />

      <p>
        Seats:
        <span className="text-red-400 ml-2">
          {selectedSeats.join(", ") || "None"}
        </span>
      </p>

      <p className="mt-2">
        Price / seat: ${price}
      </p>

      <p className="text-xl font-bold mt-4">
        Total: ${total}
      </p>

      <button className="mt-6 w-full bg-red-600 py-3 rounded-xl hover:bg-red-500">
        Confirm Booking
      </button>

    </div>
  );
};

export default BookingSummary;