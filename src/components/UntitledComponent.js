import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Header style={styles.header}></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 89,
    width: 375
  }
});

export default UntitledComponent;
