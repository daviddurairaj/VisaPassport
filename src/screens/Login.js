import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Ellipse } from "react-native-svg";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialIconTextbox1 from "../components/MaterialIconTextbox1";
import CupertinoButtonWhiteTextColor1 from "../components/CupertinoButtonWhiteTextColor1";

function Login(props) {
  return (
    <View style={styles.container}>
      <Icon name="cc-visa" style={styles.icon2}></Icon>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 672.59 649.79" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(252,183,10,1)"
            cx={336}
            cy={325}
            rx={336}
            ry={325}
          ></Ellipse>
        </Svg>
        <TextInput
          placeholder="WELCOME BACK"
          placeholderTextColor="rgba(23,34,116,1)"
          style={styles.textInput}
        ></TextInput>
        <MaterialIconTextbox
          iconStyleName="calendar"
          inputStyle="Label"
          iconStyle="rename-box"
          inputStyle="username"
          style={styles.materialIconTextbox13}
        ></MaterialIconTextbox>
        <MaterialIconTextbox1
          iconStyleName="calendar"
          inputStyle="Label"
          iconStyle="textbox-password"
          inputStyle="password"
          style={styles.materialIconTextbox1}
        ></MaterialIconTextbox1>
        <TextInput
          placeholder="LOG IN"
          placeholderTextColor="rgba(23,34,116,1)"
          style={styles.textInput2}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signup")}
          style={styles.button3}
        >
          <CupertinoButtonWhiteTextColor1
            button="SIGN UP"
            style={styles.cupertinoButtonWhiteTextColor12}
          ></CupertinoButtonWhiteTextColor1>
        </TouchableOpacity>
        <TextInput
          placeholder="NOT A MEMBER?"
          placeholderTextColor="rgba(23,34,116,1)"
          style={styles.textInput3}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Landing")}
          style={styles.button2}
        >
          <CupertinoButtonWhiteTextColor1
            button="LOG IN"
            style={styles.cupertinoButtonWhiteTextColor1}
          ></CupertinoButtonWhiteTextColor1>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  icon2: {
    color: "rgba(23,34,116,1)",
    fontSize: 40,
    marginTop: 75,
    marginLeft: 162
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 673,
    height: 650,
    position: "absolute"
  },
  textInput: {
    top: 24,
    left: 237,
    position: "absolute",
    fontFamily: "amaranth-700",
    color: "#121212",
    height: 73,
    width: 375,
    textAlign: "center",
    fontSize: 26
  },
  materialIconTextbox13: {
    height: 43,
    width: 333,
    position: "absolute",
    left: 258,
    top: 223,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(23,34,116,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  materialIconTextbox1: {
    height: 43,
    width: 339,
    position: "absolute",
    left: 258,
    top: 292,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 93,
    shadowColor: "rgba(23,34,116,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  textInput2: {
    top: 118,
    left: 237,
    position: "absolute",
    fontFamily: "amaranth-700",
    color: "#121212",
    height: 73,
    width: 375,
    textAlign: "center",
    fontSize: 22
  },
  button3: {
    top: 579,
    left: 440,
    width: 84,
    height: 28,
    position: "absolute"
  },
  cupertinoButtonWhiteTextColor12: {
    height: 28,
    width: 84,
    backgroundColor: "rgba(23,34,116,1)",
    borderRadius: 74
  },
  textInput3: {
    top: 571,
    left: 308,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 44,
    width: 132,
    textAlign: "center"
  },
  button2: {
    top: 395,
    left: 375,
    width: 100,
    height: 44,
    position: "absolute"
  },
  cupertinoButtonWhiteTextColor1: {
    height: 44,
    width: 100,
    backgroundColor: "rgba(23,34,116,1)",
    borderRadius: 74
  },
  ellipseStack: {
    width: 673,
    height: 650,
    marginTop: 25,
    marginLeft: -237
  }
});

export default Login;
