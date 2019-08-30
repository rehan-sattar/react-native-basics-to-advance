import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <View style={styles.container}>
        <Text h3>Account Screen</Text>
        <Spacer>
          <Button title="Signout" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center"
  }
});

export default AccountScreen;
