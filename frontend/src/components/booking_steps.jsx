const steps = [
  "Select Seats",
  "Payment",
  "Confirmation"
];

const BookingSteps = ({ currentStep }) => {

  return (
    <div className="w-full flex items-center justify-center mb-10">

      {steps.map((step, index) => {

        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (

          <div key={step} className="flex items-center">

            {/* Step Circle */}
            <div
              className={`
                w-10 h-10 flex items-center justify-center rounded-full font-bold
                ${
                  isCompleted
                    ? "bg-green-500"
                    : isActive
                    ? "bg-red-600"
                    : "bg-gray-700"
                }
              `}
            >
              {stepNumber}
            </div>

            {/* Step Label */}
            <span className="ml-3 mr-6 text-sm">
              {step}
            </span>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  w-20 h-1 mr-6
                  ${
                    currentStep > stepNumber
                      ? "bg-green-500"
                      : "bg-gray-700"
                  }
                `}
              />
            )}

          </div>
        );
      })}

    </div>
  );
};

export default BookingSteps;