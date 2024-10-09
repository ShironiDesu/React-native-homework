import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
} from "react-native-web";

export const Main = ({ navigation }) => {
  let [myAccout, setMyAccount] = useState([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001",
      },
      otherInfo: {
        age: 30,
        occupation: "Software Engineer",
      },
    },
  ]);
  let [myBank, setMyBank] = useState({ money: 0 });

  const handleClickNavigationMyAccount = () => {
    navigation.navigate("MyAccount", { user: myAccout[0] });
  };
  const handleClickNavigationMyBank = () => {
    navigation.navigate("BankAccount", money);
  };
  return (
    <View>
      <Button
        title="Ваш Аккаунт"
        onPress={handleClickNavigationMyAccount}
      ></Button>
      <Button title="Ваш счет" onPress={handleClickNavigationMyBank}></Button>
    </View>
  );
};
