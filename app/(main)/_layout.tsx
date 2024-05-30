import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@global/theme";
import { Text } from "react-native";

const MainLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.gray_cc,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          borderColor: theme.colors.white_ff,
          paddingTop: 12,
        },
        tabBarItemStyle: {
          height: 40,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? theme.colors.green_13 : color}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? theme.colors.green_13 : theme.colors.gray_cc,
                fontFamily: theme.fonts.regular,
                fontSize: 8,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default MainLayout;
