const ShowTime = ({movie}) => {
  return (
    <div className="mt-10">

      <h2 className="font-semibold text-lg border-l-4 border-blue-500 pl-3 mb-5">
        Lịch Chiếu
      </h2>

      <div className="flex gap-3 mb-5">

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          Hôm Nay
        </button>

        <button className="border px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          Thứ Ba
        </button>

        <button className="border px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          Thứ Tư
        </button>

      </div>

      <h3 className="font-semibold mb-4">
        Galaxy CineX - Hanoi Centre
      </h3>

      <div className="flex flex-wrap gap-3">

        <button className="border px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          10:30
        </button>

        <button className="border px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          15:00
        </button>

        <button className="border px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          19:30
        </button>

      </div>

    </div>
  );
};

export default ShowTime;