import React, { Component } from "react";
import { StyleSheet, View, TextInput, ScrollView, ActivityIndicator } from "react-native";
import Headercomponent from "../components/Headercomponent";
import OurFooterComponent from "../components/OurFooterComponent";
import MaterialIconTextbox2 from "../components/MaterialIconTextbox2";
import CupertinoButtonWhiteTextColor3 from "../components/CupertinoButtonWhiteTextColor3";

const API = "/hello"

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      newsList: []
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  async fetchData() {
    const response = await fetch('http://127.0.0.1:5000/api');
    const data = await response.json();
    this.setState({newsList: data});
  }
  render() {
    if(this.state.newsList.resource) {
      var transactions = this.state.newsList.resource.transactions
      console.log(transactions[0].merchantAddress.city)
      console.log(transactions[1].merchantAddress.city)
      console.log(transactions[2].merchantAddress.city)
      console.log(transactions[3].merchantAddress.city)
      return (
        <View style={styles.container}>
          <View style={styles.textInput2Row}>
            <TextInput
              placeholder="CARD"
              placeholderTextColor="rgba(23,34,116,1)"
              style={styles.textInput2}
            ></TextInput>
            <View style={styles.group}>
              <Headercomponent style={styles.headercomponent}></Headercomponent>
            </View>
          </View>
          <OurFooterComponent
            style={styles.ourFooterComponent}
          ></OurFooterComponent>
          <View style={styles.scrollArea}>
            <ScrollView
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.group2}>
                <View style={styles.rect}>
                  <TextInput
                    placeholder="Create a Notification of Travel"
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.textInput}
                  ></TextInput>
                  <MaterialIconTextbox2
                    inputStyle="Label"
                    iconStyleName="calendar"
                    inputStyle="Location"
                    iconStyle="map"
                    style={styles.materialIconTextbox2}
                  ></MaterialIconTextbox2>
                  <MaterialIconTextbox2
                    inputStyle="Label"
                    inputStyle="Dates"
                    style={styles.materialIconTextbox22}
                  ></MaterialIconTextbox2>
                  <CupertinoButtonWhiteTextColor3
                    caption="Button"
                    caption="SUBMIT"
                    style={styles.cupertinoButtonWhiteTextColor3}
                  ></CupertinoButtonWhiteTextColor3>
                </View>
              </View>
              <View style={styles.group3Stack}>
                <View style={styles.group3}>
                  <View style={styles.rect2}>
                    <TextInput
                      placeholder="Card History"
                      placeholderTextColor="rgba(23,34,116,1)"
                      style={styles.textInput3}
                    ></TextInput>
                  </View>
                </View>
                <View style={styles.rect3}>
                  <TextInput
                    placeholder="10/01/2020     Purchase $12.14 in Nice, France"
                    placeholderTextColor="rgba(23,34,116,1)"
                    style={styles.textInput4}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.rect4}>
                <TextInput
                  placeholder="10/04/2020     Purchase $17.38 in Madrid, Spain"
                  placeholderTextColor="rgba(23,34,116,1)"
                  style={styles.textInput5}
                ></TextInput>
              </View>
              <View style={styles.rect5}>
                <TextInput
                  placeholder="10/06/2020     Purchase $19.97 in Rome, Italy"
                  placeholderTextColor="rgba(23,34,116,1)"
                  style={styles.textInput6}
                ></TextInput>
              </View>
              {/* <View style={styles.rect5}>
                <TextInput
                    placeholder={this.state.newsList.data[0].email}
                    placeholderTextColor="rgba(23,34,116,1)"
                    style={styles.textInput6}
                  ></TextInput>
              </View> */}
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return(
        <View>
          <ActivityIndicator/>
        </View>
      );
    }
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 90,
    fontSize: 24,
    backgroundColor: "rgba(237,237,237,1)",
    textAlign: "center"
  },
  group: {
    width: 69,
    height: 17,
    marginLeft: 53,
    marginTop: 17
  },
  headercomponent: {
    width: 69,
    height: 17
  },
  textInput2Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 142,
    marginRight: 21
  },
  ourFooterComponent: {
    width: 375,
    height: 49,
    marginTop: 637
  },
  scrollArea: {
    width: 375,
    height: 628,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -678
  },
  scrollArea_contentContainerStyle: {
    height: 628,
    width: 375
  },
  group2: {
    width: 375,
    height: 297
  },
  rect: {
    width: 375,
    height: 297,
    backgroundColor: "rgba(23,34,116,1)"
  },
  textInput: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 61,
    width: 317,
    textAlign: "center",
    fontSize: 22,
    borderRadius: 32,
    marginTop: 19,
    marginLeft: 29
  },
  materialIconTextbox2: {
    height: 43,
    width: 337,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 36,
    marginTop: 25,
    marginLeft: 19
  },
  materialIconTextbox22: {
    height: 43,
    width: 337,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 36,
    marginTop: 23,
    marginLeft: 19
  },
  cupertinoButtonWhiteTextColor3: {
    height: 44,
    width: 100,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 31,
    marginTop: 23,
    marginLeft: 138
  },
  group3: {
    top: 0,
    left: 23,
    width: 317,
    height: 61,
    position: "absolute"
  },
  rect2: {
    width: 375,
    height: 1588,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: -22,
    marginLeft: -29
  },
  textInput3: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 61,
    width: 317,
    textAlign: "center",
    fontSize: 22,
    borderRadius: 32,
    marginTop: 9,
    marginLeft: 29
  },
  rect3: {
    top: 54,
    left: 0,
    width: 362,
    height: 72,
    position: "absolute",
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 11
  },
  textInput4: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 61,
    width: 317,
    textAlign: "left",
    fontSize: 16,
    borderRadius: 32,
    marginTop: 6,
    marginLeft: 23
  },
  group3Stack: {
    width: 362,
    height: 126,
    marginTop: 28,
    marginLeft: 6
  },
  rect4: {
    width: 362,
    height: 72,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 11,
    marginTop: 13,
    marginLeft: 6
  },
  textInput5: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 61,
    width: 317,
    textAlign: "left",
    fontSize: 16,
    borderRadius: 32,
    marginTop: 5,
    marginLeft: 23
  },
  rect5: {
    width: 362,
    height: 72,
    backgroundColor: "rgba(252,183,10,1)",
    borderRadius: 11,
    marginTop: 13,
    marginLeft: 6
  },
  textInput6: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 61,
    width: 317,
    textAlign: "left",
    fontSize: 16,
    borderRadius: 32,
    marginTop: 6,
    marginLeft: 23
  }
});