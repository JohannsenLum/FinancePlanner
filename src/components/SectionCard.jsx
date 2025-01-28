const SectionCard = ({ title, children }) => {
    return (
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <div className="space-y-4">{children}</div>
      </div>
    );
  };
  
  export default SectionCard;