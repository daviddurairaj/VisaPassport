import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Headercomponent from "../components/Headercomponent";
import MapView from "react-native-maps";
import OurFooterComponent from "../components/OurFooterComponent";

function Map(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.textInputRow}>
          <TextInput
            placeholder="MAP"
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
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        customMapStyle={[
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              }
            ]
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f5f5"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#dadada"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#c9c9c9"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          }
        ]}
        style={styles.mapView}
      ></MapView>
      <View style={styles.group2}>
        <OurFooterComponent
          style={styles.ourFooterComponent}
        ></OurFooterComponent>
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
