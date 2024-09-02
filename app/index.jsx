import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack } from "expo-router";
import Search from "../components/base/search";

const App = () => {
  return (
    <SafeAreaView className="px-3 h-full my-5">
      <Search
        rightIcon={<FontAwesome5 name="search" size={20} color="gray" />}
        leftIcon={<FontAwesome name="user-circle" size={24} color="blue" />}
      />
      <ScrollView horizontal={true}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          odit molestias quibusdam quidem temporibus animi cumque dolorum
          officia accusamus, eum aspernatur saepe totam quisquam libero eos
          autem atque itaque eius asperiores consequuntur ad! Quos ea aliquam a
          eum cumque tenetur distinctio maiores soluta modi tempore, numquam
          recusandae saepe ducimus nesciunt amet sint, sunt, voluptatem autem
          quibusdam accusantium nisi doloribus quod beatae. Esse expedita
          recusandae enim nihil dolore voluptas rem, ad, modi perspiciatis totam
          voluptate laudantium impedit placeat quam, eaque labore?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
