import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Inputs() {
  return (
    <View>
      <TextInput
        secureTextEntry={true}
        style={styles.inputs}
        placeholder={placeholderInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
