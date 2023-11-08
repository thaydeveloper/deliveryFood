import { StyleSheet, Text, StatusBar } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69d" barStyle="light-content" />
      <Routes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
