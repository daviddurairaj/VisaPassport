import React, { Component } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";
import Headercomponent from "../components/Headercomponent";
import OurFooterComponent from "../components/OurFooterComponent";
import CountryBadge from "../components/CountryBadge";
import AwardBadge from "../components/AwardBadge";
import LockedAward from "../components/LockedAward";

function Passport(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.textInputRow}>
          <TextInput
            placeholder="PASSPORT"
            placeholderTextColor="rgba(23,34,116,1)"
            style={styles.textInput}
          ></TextInput>
          <Headercomponent
            rect="rgba(241,240,240,1)"
            rect="rgba(237,237,237,1)"
            style={styles.headercomponent}
          ></Headercomponent>
        </View>
      </View>
      <OurFooterComponent
        style={styles.ourFooterComponent}
      ></OurFooterComponent>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <TextInput
            placeholder="Countries"
            placeholderTextColor="rgba(23,34,116,1)"
            style={styles.textInput2}
          ></TextInput>
          <View style={styles.group2Row}>
            <View style={styles.group2}>
              <View style={styles.countryBadgeStack}>
                <CountryBadge style={styles.countryBadge}></CountryBadge>
                <TextInput
                  placeholder="Visited Spain"
                  placeholderTextColor="rgba(252,183,10,1)"
                  style={styles.textInput4}
                ></TextInput>
              </View>
            </View>
            <View style={styles.group3}>
              <View style={styles.countryBadge2Stack}>
                <CountryBadge style={styles.countryBadge2}></CountryBadge>
                <TextInput
                  placeholder="Visited Italy"
                  placeholderTextColor="rgba(252,183,10,1)"
                  style={styles.textInput5}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.group5}>
            <View style={styles.countryBadge3Stack}>
              <CountryBadge style={styles.countryBadge3}></CountryBadge>
              <TextInput
                placeholder="Visited France"
                placeholderTextColor="rgba(252,183,10,1)"
                style={styles.textInput7}
              ></TextInput>
            </View>
          </View>
          <View style={styles.textInput3Stack}>
            <TextInput
              placeholder="Awards"
              placeholderTextColor="rgba(23,34,116,1)"
              style={styles.textInput3}
            ></TextInput>
            <View style={styles.group4}>
              <View style={styles.awardBadgeStack}>
                <AwardBadge style={styles.awardBadge}></AwardBadge>
                <TextInput
                  placeholder="Visited one country"
                  placeholderTextColor="rgba(245,226,71,1)"
                  style={styles.textInput6}
                ></TextInput>
              </View>
            </View>
            <View style={styles.group6}>
              <View style={styles.awardBadge1Stack}>
                <AwardBadge style={styles.awardBadge1}></AwardBadge>
                <TextInput
                  placeholder="Visited three countries"
                  placeholderTextColor="rgba(245,226,71,1)"
                  style={styles.textInput8}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.group7Row}>
            <View style={styles.group7}>
              <View style={styles.lockedAwardStack}>
                <LockedAward style={styles.lockedAward}></LockedAward>
                <TextInput
                  placeholder="Visited five countries"
                  placeholderTextColor="rgba(252,183,10,1)"
                  style={styles.textInput9}
                ></TextInput>
              </View>
            </View>
            <View style={styles.group8}>
              <View style={styles.lockedAward2Stack}>
                <LockedAward style={styles.lockedAward2}></LockedAward>
                <TextInput
                  placeholder="Visited two continents"
                  placeholderTextColor="rgba(252,183,10,1)"
                  style={styles.textInput10}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.group9Row}>
            <View style={styles.group9}>
              <View style={styles.lockedAward3Stack}>
                <LockedAward style={styles.lockedAward3}></LockedAward>
                <TextInput
                  placeholder="Purchase in airport"
                  placeholderTextColor="rgba(252,183,10,1)"
                  style={styles.textInput11}
                ></TextInput>
              </View>
            </View>
            <View style={styles.group10}>
              <View style={styles.lockedAward4Stack}>
                <LockedAward style={styles.lockedAward4}></LockedAward>
                <TextInput
                  placeholder="Gave travel notice"
                  placeholderTextColor="rgba(252,183,10,1)"
                  style={styles.textInput12}
                ></TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
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
    height: 58,
    width: 157,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "rgba(237,237,237,1)"
  },
  headercomponent: {
    width: 69,
    height: 17,
    marginLeft: 19,
    marginTop: 20
  },
  textInputRow: {
    height: 58,
    flexDirection: "row",
    flex: 1,
    marginLeft: -176,
    marginTop: -20
  },
  ourFooterComponent: {
    width: 375,
    height: 49,
    marginTop: 652
  },
  scrollArea: {
    width: 375,
    height: 628,
    backgroundColor: "rgba(230,230,230,1)",
    marginTop: -677
  },
  scrollArea_contentContainerStyle: {
    height: 1021,
    width: 375
  },
  textInput2: {
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 190,
    textAlign: "center",
    fontSize: 20,
    alignSelf: "center"
  },
  group2: {
    width: 157,
    height: 154
  },
  countryBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 154,
    width: 157
  },
  textInput4: {
    top: 42,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 24,
    left: 0
  },
  countryBadgeStack: {
    width: 157,
    height: 154
  },
  group3: {
    width: 157,
    height: 154,
    marginLeft: 40
  },
  countryBadge2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 157,
    height: 154
  },
  textInput5: {
    top: 42,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 24,
    left: 0
  },
  countryBadge2Stack: {
    width: 157,
    height: 154
  },
  group2Row: {
    height: 154,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 11,
    marginRight: 10
  },
  group5: {
    width: 157,
    height: 154,
    marginTop: 38,
    marginLeft: 14
  },
  countryBadge3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 157,
    height: 154
  },
  textInput7: {
    top: 42,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 24,
    left: 0
  },
  countryBadge3Stack: {
    width: 157,
    height: 154
  },
  textInput3: {
    top: 0,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 190,
    textAlign: "center",
    fontSize: 20,
    left: 82
  },
  group4: {
    top: 63,
    left: 0,
    width: 157,
    height: 154,
    position: "absolute"
  },
  awardBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 154,
    width: 157
  },
  textInput6: {
    top: 51,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 16,
    left: 0
  },
  awardBadgeStack: {
    width: 157,
    height: 154
  },
  group6: {
    top: 63,
    left: 200,
    width: 157,
    height: 154,
    position: "absolute"
  },
  awardBadge1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 154,
    width: 157
  },
  textInput8: {
    top: 51,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 16,
    left: 0
  },
  awardBadge1Stack: {
    width: 157,
    height: 154
  },
  textInput3Stack: {
    width: 357,
    height: 217,
    marginTop: 10,
    marginLeft: 11
  },
  group7: {
    width: 153,
    height: 154
  },
  lockedAward: {
    position: "absolute",
    top: 0,
    left: 2,
    height: 154,
    width: 153
  },
  textInput9: {
    top: 47,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 16,
    left: 0
  },
  lockedAwardStack: {
    width: 157,
    height: 154,
    marginLeft: -2
  },
  group8: {
    width: 153,
    height: 154,
    marginLeft: 41
  },
  lockedAward2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 154,
    width: 153
  },
  textInput10: {
    top: 51,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 14,
    left: 0
  },
  lockedAward2Stack: {
    width: 157,
    height: 154
  },
  group7Row: {
    height: 154,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 12,
    marginRight: 16
  },
  group9: {
    width: 153,
    height: 154
  },
  lockedAward3: {
    position: "absolute",
    top: 0,
    left: 2,
    height: 154,
    width: 153
  },
  textInput11: {
    top: 47,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 16,
    left: 0
  },
  lockedAward3Stack: {
    width: 157,
    height: 154,
    marginLeft: -2
  },
  group10: {
    width: 153,
    height: 154,
    marginLeft: 37
  },
  lockedAward4: {
    position: "absolute",
    top: 0,
    left: 2,
    height: 154,
    width: 153
  },
  textInput12: {
    top: 47,
    position: "absolute",
    fontFamily: "actor-regular",
    color: "#121212",
    height: 70,
    width: 157,
    textAlign: "center",
    fontSize: 16,
    left: 0
  },
  lockedAward4Stack: {
    width: 157,
    height: 154,
    marginLeft: -2
  },
  group9Row: {
    height: 154,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 16,
    marginRight: 16
  }
});

export default Passport;
