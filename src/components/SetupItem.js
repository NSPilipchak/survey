import React from "react";

const QuestionsItem = ({item, setOptions, options = [] }) => {

  const handleSelectOptions = () => {
    options.find(opt => opt === item.parameter)
      ? setOptions(options.filter(opt => opt !== item.parameter))
      : setOptions([...options, item.parameter]);
  };

  return (
    <section className="main">
      <div>
        {item.label}
        <input
          type={item.type}
          name={item.parameter}
          onChange={handleSelectOptions}
          checked={options.find(opt => opt === item.parameter)}
        />
      </div>
    </section>
  );
};

export default QuestionsItem;