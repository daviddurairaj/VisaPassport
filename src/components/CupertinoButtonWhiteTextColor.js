import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWhiteTextColor(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>{props.button || "Button"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  button: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "roboto-500",
    lineHeight: 12
  }
});

export default CupertinoButtonWhiteTextColor;
