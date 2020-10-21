import React, { Component } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Headercomponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.rect,
          {
            backgroundColor: props.rect || "rgba(237,237,237,1)"
          }
        ]}
      >
        <View style={styles.iconRow}>
          <Icon name="cc-visa" style={styles.icon}></Icon>
          <TextInput
            placeholder="HOME"
            placeholderTextColor="rgba(23,34,116,1)"
            style={styles.textInput2}
          ></TextInput>
          <TouchableOpacity
            onPress={() => console.log("Navigate to Login")}
            style={styles.button}
          >
            <TouchableOpacity /* Conditional navigation not supported at the moment */
              onPress={() => console.log("Navigate to Login")}
              style={styles.button}
            >
              <TextInput
                placeholder="SIGN OFF"
                placeholderTextColor="rgba(255,255,255,1)"
                style={styles.textInput}
              ></TextInput>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    width: 375,
    height: 69,
    flexDirection: "row",
    marginTop: -26,
    marginLeft: -285
  },
  icon: {
    color: "rgba(23,34,116,1)",
    fontSize: 40,
    height: 40,
    width: 51,
    marginTop: 1
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 147,
    textAlign: "center",
    fontSize: 24,
    marginLeft: 39
  },
  button: {
    width: 69,
    height: 32,
    backgroundColor: "rgba(23,34,116,1)",
    borderRadius: 19
  },
  textInput: {
    fontFamily: "actor-regular",
    color: "#121212",
    fontSize: 10,
    width: 43,
    height: 11,
    marginTop: 11,
    marginLeft: 13
  },
  iconRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 24,
    marginTop: 14
  }
});

export default Headercomponent;
