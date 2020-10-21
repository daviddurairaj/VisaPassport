import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoFooter1 from "./CupertinoFooter1";

function OurFooterComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CupertinoFooter1
        icon1Name="library-books"
        icon2Name="poll"
        iconName="av-timer"
        btn1Caption="Dashboard"
        btnWrapper1="Account"
        btn2Caption="Passport"
        icon1="passport"
        icon2="map"
        btn3Caption="Map"
        icon="account-circle"
        btn1Caption="Account"
        btnWrapper2="Passport"
        btnWrapper3="Map"
        btnWrapper4="Card"
        btn4Caption="Card"
        style={styles.ourFooter}
      ></CupertinoFooter1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  ourFooter: {
    height: 49,
    width: 375,
    backgroundColor: "rgba(237,237,237,1)",
    alignSelf: "center"
  }
});

export default OurFooterComponent;
