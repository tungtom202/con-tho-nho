import { Button, View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Buttonn } from "../Buttonn";

const Home = () => {
  return (
    <ImageBackground source={require("../img/anhmobile.jpg")} resizeMode="cover" style={{ width: '100%', height: '100%', justifyContent: 'center', flex: '1' }}>
      <View>
        <Text style={{ color: '#fff', textAlign: 'center' }}> hello my friends loc xoay</Text>
      </View>
    </ImageBackground>

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
export default Home;