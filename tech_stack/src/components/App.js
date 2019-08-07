import React, { Component } from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Header } from "./common/Header";
import reducers from "../reducers";
import LibraryList from "./LibarayList";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Tech Stack Application" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
