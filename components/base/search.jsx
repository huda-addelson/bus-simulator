import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Search = ({
  leftIcon,
  rightIcon,
  placeholder,
  otherStyles,
  textStyles,
  handlePressLeftIcon,
  handlePressRightIcon,
}) => {
  return (
    <View
      className={`w-full border-[1px] border-gray-300 h-[50px] rounded-xl flex-row items-center relative justify-center focus:border-secondary ${otherStyles}`}>
      <TouchableOpacity onPress={handlePressLeftIcon}>
        <View className="absoulte left-2">{leftIcon}</View>
      </TouchableOpacity>
      <TextInput
        className={`flex-1 px-4 text-sm ${textStyles}`}
        placeholder={placeholder}
      />
      <TouchableOpacity onPress={handlePressRightIcon}>
        <View className="absoulte right-3 cursor-pointer">{rightIcon}</View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
