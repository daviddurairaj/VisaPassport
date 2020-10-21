import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import OurFooterComponent from "../components/OurFooterComponent";
import Headercomponent from "../components/Headercomponent";

function Landing(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <TextInput
          placeholder="Hello, traveler!"
          placeholderTextColor="rgba(23,34,116,1)"
          style={styles.textInput3}
        ></TextInput>
        <View style={styles.textInput4Stack}>
          <TextInput
            placeholder="Your latest activity:"
            placeholderTextColor="rgba(23,34,116,1)"
            style={styles.textInput4}
          ></TextInput>
          <View style={styles.group3}>
            <View style={styles.rect3}>
              <SimpleLineIconsIcon
                name="badge"
                style={styles.icon3}
              ></SimpleLineIconsIcon>
              <TextInput
                placeholder="You earned your 3 Countries badge. Nice!"
                placeholderTextColor="rgba(255,255,255,1)"
                numberOfLines={2}
                multiline={false}
                style={styles.textInput5}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.rect4}>
            <EntypoIcon name="aircraft" style={styles.icon2}></EntypoIcon>
            <TextInput
              placeholder="You traveled to Spain."
              placeholderTextColor="rgba(255,255,255,1)"
              numberOfLines={2}
              multiline={false}
              style={styles.textInput6}
            ></TextInput>
          </View>
        </View>
        <OurFooterComponent
          style={styles.ourFooterComponent}
        ></OurFooterComponent>
      </View>
      <Headercomponent
        rect="rgba(241,240,240,1)"
        rect="rgba(237,237,237,1)"
        button="Login"
        style={styles.headercomponent}
      ></Headercomponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect2: {
    width: 375,
    height: 680,
    backgroundColor: "rgba(252,183,10,1)",
    marginTop: 100
  },
  textInput3: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 71,
    width: 375,
    textAlign: "center",
    fontSize: 22,
    marginTop: 78
  },
  textInput4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 71,
    width: 375,
    textAlign: "center",
    fontSize: 22
  },
  group3: {
    left: 14,
    width: 348,
    height: 176,
    position: "absolute",
    top: 69
  },
  rect3: {
    width: 348,
    height: 176,
    backgroundColor: "rgba(23,34,116,1)",
    borderRadius: 11,
    marginLeft: -3
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 45,
    width: 40,
    marginTop: 31,
    marginLeft: 154
  },
  textInput5: {
    fontFamily: "actor-regular",
    color: "#121212",
    height: 65,
    width: 321,
    textAlign: "center",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 13
  },
  textInput4Stack: {
    width: 375,
    height: 245
  },
  group4: {
    width: 348,
    height: 176,
    marginTop: 19,
    marginLeft: 14
  },
  rect4: {
    width: 348,
    height: 176,
    backgroundColor: "rgba(23,34,116,1)",
    borderRadius: 11
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 42,
    marginLeft: 154
  },
  textInput6: {
    fontFamily: "actor-regular",
    color: "#121212",
    height: 65,
    width: 321,
    textAlign: "center",
    fontSize: 18,
    marginTop: 2,
    marginLeft: 13
  },
  ourFooterComponent: {
    height: 49,
    width: 375,
    marginTop: 42
  },
  headercomponent: {
    height: 17,
    width: 69,
    marginTop: -715,
    marginLeft: 285
  }
});

export default Landing;
