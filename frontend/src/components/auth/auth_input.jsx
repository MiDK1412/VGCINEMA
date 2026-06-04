const AuthInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoFocus,
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg border focus:outline-none transition
          ${error ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-red-500"}
        `}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default AuthInput;