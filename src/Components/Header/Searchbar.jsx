import Select from 'react-select';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'New York', label: 'New York' },
  { value: 'Las Vegas', label: 'Las Vegas' },
  { value: 'Rome', label: 'Rome' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
  { value: 'Dubai', label: 'Dubai' },
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Venice', label: 'Venice' },
  { value: 'Milan', label: 'Milan' },
  { value: 'Naples', label: 'Naples' },
  { value: 'Budapest', label: 'Budapest' },
  { value: 'Edinburg', label: 'Edinburg' },
  { value: 'Florence', label: 'Florence' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    fontSize: '14px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const Searchbar = ({ style, history, selectedCity }) => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    changeUrl(selectedOption.value);
  };

  const changeUrl = url => {
    let path = url.replace(/ /g, "-").toLowerCase();
    navigate(`/cities/${path}`);
  };

  return (
    <Select
      styles={style}
      placeholder={selectedCity ? selectedCity : "Select City"}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className="city-select-dropdown"
    />
  );
};

export default Searchbar;
