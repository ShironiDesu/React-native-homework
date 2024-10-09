import { View, Text, Button } from "react-native-web";

export const About = ({ route, navigation }) => {
  return (
    <View>
      <Text>{route.params.name}</Text>
      <Text>{route.params.desc}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}></Button>
    </View>
  );
};
