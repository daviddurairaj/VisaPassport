import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

function LockedAward(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 153.49 154.37" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(155,155,155,1)"
            cx={77}
            cy={77}
            rx={77}
            ry={77}
          ></Ellipse>
        </Svg>
        <Icon name="lock" style={styles.icon3}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  ellipse: {
    top: 0,
    left: 0,
    width: 153,
    height: 154,
    position: "absolute"
  },
  icon3: {
    top: 7,
    left: 64,
    position: "absolute",
    color: "rgba(252,183,10,1)",
    fontSize: 40
  },
  ellipseStack: {
    width: 153,
    height: 154
  }
});

export default LockedAward;
