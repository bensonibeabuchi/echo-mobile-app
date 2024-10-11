import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Nigeria', value: 'ng' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'Canada', value: 'ca' },
  { label: 'China', value: 'cn' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Italy', value: 'it' },
  { label: 'Japan', value: 'jp' },
  { label: 'South Africa', value: 'za' },
  { label: 'Sweden', value: 'se' },
  { label: 'Ukraine', value: 'ua' },
];

const placeholderText = {
  label: 'Select a country...',
  value: null,
  color: '#9EA0A4',
};

export default function CountryDropdown({ onValueChange }) {
  const [tempCountry, setTempCountry] = useState('us');

  const handleDonePress = () => {
    if (onValueChange) {
      onValueChange(tempCountry);
    }
  };

  return (
    <View className="p-4">
      <Text className="text-base">Select a Country:</Text>
      <RNPickerSelect
        onValueChange={(value) => {
          setTempCountry(value);
          if (Platform.OS === 'android' && onValueChange) {
            onValueChange(value);
          }
        }}
        items={countries}
        placeholder={placeholderText}
        value={tempCountry}
        style={pickerSelectStyles}
        onDonePress={handleDonePress}
      />
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});
