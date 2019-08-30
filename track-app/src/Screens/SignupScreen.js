import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, authenticate, clearErrorMessage } = useContext(AuthContext);
  const { errorMessage } = state;

  /**
   * @component <NavigationEvents />
   * @description triggers events while screen changes.
   * @events
   * - onWillFocus  : When starts the transition
   * - onDidFoduc  : When successfully ends transition.
   * - onWillBlur : When the back transition starts (moving away).
   * - onDidblue : When the back transition is completed.
   */

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        onSubmit={authenticate}
        apiRoute="/signup"
        errorMessage={errorMessage}
        headerText="Sign up for Tracker"
        submitButtonText="Signup"
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Signin instead "
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  }
});

export default SignupScreen;
