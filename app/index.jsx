import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Search from "../components/base/search";
import { FlatList } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants/theme";
import ForYou from "../components/widget/home/ForYou";
import MostBus from "../components/widget/home/MostBus";
import Category from "../components/widget/home/Category";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("For You");
  console.log(activeCategory, "actiive");

  const router = useRouter();
  const items = [
    {
      title: "For You",
      url: "/foryou",
    },
    {
      title: "Most Populer",
      url: "/populer",
    },
    {
      title: "Most Favorite",
      url: "/favorite",
    },
    {
      title: "Category",
      url: "/category",
    },
    {
      title: "Creator",
      url: "/creator",
    },
  ];

  const renderContent = () => {
    switch (activeCategory) {
      case "For You":
        return <ForYou />;
      case "Most Populer":
      case "Most Favorite":
        return <MostBus type={activeCategory} />;
      case "Category":
      case "Creator":
        return <Category type={activeCategory} />;
      default:
        return <Text>No Content Available</Text>;
    }
  };
  return (
    <SafeAreaView className="px-3 h-full my-5">
      <Search
        rightIcon={<FontAwesome5 name="search" size={20} color="gray" />}
        leftIcon={<FontAwesome name="user-circle" size={24} color="blue" />}
        placeholder="Search Mood ..."
      />
      <View className="w-full my-4">
        <FlatList
          data={items}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setActiveCategory(item.title);
                }}
                className="rounded-md px-2"
                style={styles.tab(activeCategory, item.title)}>
                <Text
                  className="text-base font-ilight"
                  style={styles.tabText(activeCategory, item.title)}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ gap: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* Memuat komponen dinamis yang diberikan oleh activeCategory */}
      <ScrollView>{renderContent()}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tab: (active, item) => ({
    borderWidth: 1,
    borderColor: active === item ? COLORS.primary : COLORS.gray,
    backgroundColor: active === item ? COLORS.primary : COLORS.white,
  }),
  tabText: (active, item) => ({
    color: active === item ? COLORS.white : COLORS.gray,
  }),
});

export default App;
