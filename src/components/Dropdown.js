import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
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
    setShowDropdownMenu(false);
    onSelectOption(e);
  };

  return (
    <View style={globalStyles.width40}>
      <Pressable
        onPress={handlePressDropdown}
        style={globalStyles.dropdownContainer}>
        <Text style={globalStyles.dropdownPlaceholderText}>
          {selectedOption}
        </Text>
        <Image
          source={require('../assets/images/chevron.png')}
          style={
            showDropdownMenu
              ? globalStyles.chevronIconUp
              : globalStyles.chevronIconDown
          }
        />
      </Pressable>
      {showDropdownMenu ? (
        <View style={globalStyles.dropdownMenuContainer}>
          {listOptions.map(e => (
            <TouchableWithoutFeedback
              key={e}
              style={globalStyles.dropdownOption}
              onPress={() => handleSelectOption(e)}>
              <Text style={globalStyles.dropdownText}>{e}</Text>
            </TouchableWithoutFeedback>
          ))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Dropdown;
