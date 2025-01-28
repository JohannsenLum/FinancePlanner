const ToggleButton = ({ showSavingsLine, setShowSavingsLine }) => {
    return (
      <button
        onClick={() => setShowSavingsLine(!showSavingsLine)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showSavingsLine ? "Hide Savings Line" : "Show Savings Line"}
      </button>
    );
  };
  
  export default ToggleButton;