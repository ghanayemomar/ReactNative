import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your Course goal!"/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List Of Goals ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding:50,
  }
});
