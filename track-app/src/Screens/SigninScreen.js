import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const Signin = () => {
  const { state, authenticate, clearErrorMessage } = useContext(AuthContext);
  const { errorMessage } = state;

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        onSubmit={authenticate}
        apiRoute="/signin"
        errorMessage={errorMessage}
        headerText="Signin for Tracker"
        submitButtonText="Signin"
      />
      <NavLink routeName="Signup" text="Do not have account? Signup instead." />
    </View>
  );
};

Signin.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default Signin;
