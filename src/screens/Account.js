import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Headercomponent from "../components/Headercomponent";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import OurFooterComponent from "../components/OurFooterComponent";

function Account(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 600.87 597.4" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(23,34,116,1)"
            cx={300}
            cy={299}
            rx={300}
            ry={299}
          ></Ellipse>
        </Svg>
        <View style={styles.group}>
          <View style={styles.textInputRow}>
            <TextInput
              placeholder="ACCOUNT"
              placeholderTextColor="rgba(23,34,116,1)"
              style={styles.textInput}
            ></TextInput>
            <Headercomponent style={styles.headercomponent}></Headercomponent>
          </View>
        </View>
        <Image
          source={require("../assets/images/steve1.jpeg")}
          resizeMode="contain"
          style={styles.accountpic}
        ></Image>
        <TextInput
          placeholder="steve@email.com"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput2}
        ></TextInput>
        <View style={styles.rect}>
          <View style={styles.group2}>
            <CupertinoButtonWarning
              caption="Button"
              caption="Personal Info"
              style={styles.cupertinoButtonWarning}
            ></CupertinoButtonWarning>
            <CupertinoButtonWarning
              caption="Security"
              style={styles.cupertinoButtonWarning3}
            ></CupertinoButtonWarning>
            <CupertinoButtonWarning
              caption="Settings"
              style={styles.cupertinoButtonWarning4}
            ></CupertinoButtonWarning>
            <CupertinoButtonWarning
              caption="Help"
              style={styles.cupertinoButtonWarning5}
            ></CupertinoButtonWarning>
            <CupertinoButtonWarning
              caption="Sign Out"
              style={styles.cupertinoButtonWarning6}
            ></CupertinoButtonWarning>
          </View>
        </View>
      </View>
      <OurFooterComponent
        style={styles.ourFooterComponent}
      ></OurFooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 601,
    height: 597,
    position: "absolute"
  },
  group: {
    top: 0,
    left: 337,
    width: 69,
    height: 17,
    position: "absolute",
    flexDirection: "row"
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 49,
    width: 120,
    fontSize: 24,
    backgroundColor: "rgba(237,237,237,1)"
  },
  headercomponent: {
    width: 69,
    height: 17,
    backgroundColor: "rgba(237,237,237,1)",
    marginLeft: 37,
    marginTop: 16
  },
  textInputRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginLeft: -157,
    marginTop: -16
  },
  accountpic: {
    top: 82,
    left: 104,
    width: 97,
    height: 90,
    position: "absolute",
    transform: [
      {
        rotate: "1.00deg"
      }
    ],
    borderRadius: 100
  },
  textInput2: {
    top: 114,
    left: 223,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "rgba(255,255,255,1)",
    height: 28,
    width: 183,
    fontSize: 20,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(252,183,10,1)",
    borderRadius: 36
  },
  rect: {
    top: 216,
    left: 52,
    width: 375,
    height: 453,
    position: "absolute",
    backgroundColor: "rgba(23,34,116,1)"
  },
  group2: {
    width: 326,
    height: 297,
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 28
  },
  cupertinoButtonWarning: {
    height: 45,
    width: 325,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 63
  },
  cupertinoButtonWarning3: {
    height: 45,
    width: 325,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 57
  },
  cupertinoButtonWarning4: {
    height: 45,
    width: 325,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 78
  },
  cupertinoButtonWarning5: {
    height: 45,
    width: 325,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 79
  },
  cupertinoButtonWarning6: {
    height: 45,
    width: 325,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 68
  },
  ellipseStack: {
    width: 601,
    height: 669,
    marginTop: 66,
    marginLeft: -52
  },
  ourFooterComponent: {
    width: 375,
    height: 49
  }
});

export default Account;
