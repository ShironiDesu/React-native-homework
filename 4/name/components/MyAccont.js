import React from "react";
import { StyleSheet } from "react-native";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
} from "react-native-web";
export default function MyAccount({ route }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <Text style={styles.label}>
        Name: <Text style={styles.value}>{user.name}</Text>
      </Text>
      <Text style={styles.label}>
        Email: <Text style={styles.value}>{user.email}</Text>
      </Text>
      <Text style={styles.label}>
        Phone: <Text style={styles.value}>{user.phone}</Text>
      </Text>
      <Text style={styles.label}>
        Address:{" "}
        <Text
          style={styles.value}
        >{`${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zip}`}</Text>
      </Text>
      <Text style={styles.label}>
        Age: <Text style={styles.value}>{user.otherInfo.age}</Text>
      </Text>
      <Text style={styles.label}>
        Occupation:{" "}
        <Text style={styles.value}>{user.otherInfo.occupation}</Text>
      </Text>
    </View>
  );
}

// Стили для компонента
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  value: {
    fontWeight: "normal",
  },
});
