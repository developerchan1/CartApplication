import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import globalStyles from '../decorations/globalStyles';

const Dropdown = ({
  listOptions = ['Highest Price', 'Lowest Price', 'Name'],
  onSelectOption,
  selectedOption = 'Default',
  showDropdownMenu,
  setShowDropdownMenu,
}) => {
  const handlePressDropdown = () => setShowDropdownMenu(!showDropdownMenu);

  const handleSelectOption = e => {
    console.log(e);
    setShowDropdownMenu(false);
    onSelectOption(e);
  };

  return (
    <View style={globalStyles.width40}>
      <Pressable
        onPress={handlePressDropdown}
        style={globalStyles.dropdownContainer}>
        <Text>{selectedOption}</Text>
        {/* <Image /> */}
      </Pressable>
      {showDropdownMenu ? (
        <View style={globalStyles.dropdownMenuContainer}>
          {listOptions.map(e => (
            <Pressable
              key={e}
              style={globalStyles.dropdownOption}
              onPress={() => handleSelectOption(e)}>
              <Text style={globalStyles.dropdownText}>{e}</Text>
            </Pressable>
          ))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Dropdown;
