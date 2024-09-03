import { View, Text, Image, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

const ForYou = () => {
  return (
    <View className="space-y-2">
      <View>
        <Text className="font-ibold text-xl mb-2">Best Mod</Text>
        <Image
          source={{ uri: "https://picsum.photos/500/300" }}
          className="w-full h-56 rounded-xl"
          resizeMode="cover"
        />
        <View className="py-1">
          <View className="flex-row justify-between items-center">
            <Text className="font-ibold text-base">Blusukan Off Road</Text>
            <Text className="bg-red-600 text-white text-xs px-2 py-[2px] rounded-lg font-isemibold">
              Top Populer
            </Text>
          </View>
          <View className="items-center py-[2px] flex-row space-x-2">
            <Text className="text-xs text-gray-600">By Aliyan G.M.P</Text>
            <View className="flex-row items-center space-x-1">
              <AntDesign name="file1" size={10} color="black" />
              <Text className="text-xs text-gray-600">66.01 MB</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <AntDesign name="hearto" size={10} color="black" />
              <Text className="text-xs text-gray-600">22.2k</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Entypo name="download" size={10} color="black" />
              <Text className="text-xs text-gray-600">226.2k</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="">
        <Text className="font-ibold text-xl mb-2">Latest Mod</Text>
        <View className="pb-10">
          <CardItem
            title="Daihatsu Grandmax"
            tag="Mobil"
            time="15 jam yang lalu"
            download="186"
            size="28.1 MB"
            image="https://picsum.photos/500/300"
          />
          <CardItem
            title="Daihatsu Grandmax"
            tag="Mobil"
            time="15 jam yang lalu"
            download="186"
            size="28.1 MB"
            image="https://picsum.photos/500/300"
          />
        </View>
      </View>
    </View>
  );
};

const CardItem = ({ image, tag, time, download, size, title }) => {
  return (
    <View className="my-2">
      <Image
        source={{ uri: image }}
        className="w-full h-56 rounded-xl"
        resizeMode="cover"
      />
      <View className="flex-row justify-between items-center">
        <Text className="font-ibold text-base">{title}</Text>
        <Text className="bg-red-600 text-white text-xs px-2 py-[2px] rounded-lg font-isemibold">
          {tag}
        </Text>
      </View>
    </View>
  );
};

export default ForYou;
