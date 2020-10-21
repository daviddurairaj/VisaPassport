import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Header(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(69,220,149,1)"
  }
});

export default Header;
