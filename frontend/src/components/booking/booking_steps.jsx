const steps = [
  "Chọn phim / Rạp / Suất",
  "Chọn ghế",
  "Thanh toán",
  "Xác nhận"
];

const BookingSteps = ({ currentStep }) => {

  return (
   <div className="border-b border-gray-200 mb-8 flex justify-center">

      <div className="flex gap-8 text-sm font-medium">

        {steps.map((step, index) => {

          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;

          const isDone = stepNumber < currentStep

          return (
            <div
              key={step}
              className={`pb-3 cursor-pointer
                ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    :isDone
                    ? "text-red-400 border-b-2 border-red-400"
                    : "text-gray-400"
                }
              `}
            >
              {step}
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default BookingSteps;