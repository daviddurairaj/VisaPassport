import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

function CountryBadge(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 156.67 154.37" style={styles.ellipse}>
          <Ellipse
            strokeWidth={0}
            fill="rgba(23,34,116,1)"
            cx={78}
            cy={77}
            rx={78}
            ry={77}
          ></Ellipse>
        </Svg>
        <Icon name="ios-flag" style={styles.icon}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    width: 157,
    height: 154,
    position: "absolute",
    left: 0,
    top: 0
  },
  icon: {
    top: 9,
    left: 66,
    position: "absolute",
    color: "rgba(252,183,10,1)",
    fontSize: 40
  },
  ellipseStack: {
    width: 157,
    height: 154
  }
});

export default CountryBadge;
