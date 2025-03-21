const SelectFont = ({ setSelectedFont }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    let fontClass = "";
    switch (selectedValue) {
      case "mono":
        fontClass = "font-inconsolata";
        break;
      case "sans-serif":
        fontClass = "font-lora";
        break;
      case "serif":
        fontClass = "font-inter";
        break;
      default:
        fontClass = "font-inconsolata";
    }
    setSelectedFont(fontClass);
  };

  return (
    <select onChange={handleChange} className="sm:text-xl text-base">
      <option value="mono">Mono</option>
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
    </select>
  );
};

export default SelectFont;
