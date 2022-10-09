import * as React from "react";
import { Button, View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Buttonn } from "./components/Buttonn";
import Home from "./components/homemana/home";

import { useState } from "react"

function HomeScreen({ navigation }) {

  const [account, setAccount] = useState("")
  const [passWord, setPassword] = useState("")
  const handleClick = () => {
    if (account && passWord) {
      return navigation.navigate("Home")
    }
    else {
      Alert.alert("Yêu cầu nhập thông tin!!!")
    }
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput onChangeText={setAccount} value={account} placeholder="UserName" style={styles.input} />
      <TextInput onChangeText={setPassword} value={passWord} placeholder="PassWord" style={styles.input} />
      {/* <Buttonn
        Login
        onPress={() => navigation.navigate("home")}
      /> */}
      <Buttonn callback={handleClick}>Login</Buttonn>
      <Text style={{ padding: 10 }}
        onPress={() => navigation.navigate("Register")}>
        Register
      </Text>
      <Text style={{ padding: 10 }}
        onPress={() => navigation.navigate("ForgotPassword")}>
        Forget password?
      </Text>
    </View>
  );
}
function HomePanes() {
  return <Home />
}
function Register() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <TextInput placeholder="PassWord" style={styles.input} />
      <Buttonn>Register</Buttonn>

    </View>
  );
}
function ForgotPassword() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <Buttonn>Get passWord</Buttonn>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={HomePanes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 0,
    paddingLeft: 50,
    borderRadius: 20,
    backgroundColor: "white",
  },
  btn: {
    width: "70%",
  },
  textt: {
    fontSize: 30
  }
});

export default App;