const SortColumnHead = ({ label }) => (
    <div className="button-group">
      <span>{label}</span>
      <img src="assets/arrow.png" alt={`Sort ${label.toLowerCase()}`} />
    </div>
  );

export default SortColumnHead