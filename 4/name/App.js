import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Navigate from "./navigate";

export default function App() {
  return <Navigate></Navigate>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
