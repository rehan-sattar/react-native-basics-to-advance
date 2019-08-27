import React from "react"
import {View, StyleSheet} from "react-native";

import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Spacer center>
                <Text h3>Sign up for Tracker</Text>
            </Spacer>
            <Input label="Email"/>
            <Spacer/>
            <Input label="Password"/>
            <Spacer>
                <Button title="Sign up"/>
            </Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen
