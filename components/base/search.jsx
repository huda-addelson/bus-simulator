import { View, Text } from "react-native";
import React from "react";

const Search = ({
  leftIcon,
  rightIcon,
  placeholder,
  otherStyles,
  textStyles,
}) => {
  return (
    <View
      className={`w-full border-[1px] border-gray-300 h-[50px] rounded-xl flex-row items-center relative justify-center focus:border-sky-600 ${otherStyles}`}>
      <View className="absoulte left-2">{leftIcon}</View>
      <TextInput
        className={`flex-1 px-4 text-sm ${textStyles}`}
        placeholder={placeholder}
      />
      <View className="absoulte right-3">{rightIcon}</View>
    </View>
  );
};

export default Search;
