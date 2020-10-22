import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Headercomponent from "../components/Headercomponent";
import MapView from "react-native-maps";
import OurFooterComponent from "../components/OurFooterComponent";

function Map(props) {
  return (
      <Image
          source={require("../assets/images/map.jpg")}        
        ></Image>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 69,
    height: 17,
    flexDirection: "row",
    marginTop: 66,
    marginLeft: 285
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 59,
    width: 153,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "rgba(237,237,237,1)"
  },
  headercomponent: {
    width: 69,
    height: 17,
    marginLeft: 20,
    marginTop: 21
  },
  textInputRow: {
    height: 59,
    flexDirection: "row",
    flex: 1,
    marginLeft: -173,
    marginTop: -21
  },
  mapView: {
    height: 629,
    width: 375,
    marginTop: 23
  },
  group2: {
    width: 375,
    height: 49
  },
  ourFooterComponent: {
    width: 375,
    height: 49
  }
});

export default Map;
