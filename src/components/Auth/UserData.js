import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { auth } from "../../../firebase-login";
import { AuthContext } from "../../context/AuthContext";

export default function UserData() {
  const { logout } = useContext(AuthContext)

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenid@, </Text>
        <Text
          style={styles.title}
        >{`${auth.currentUser?.email}`}</Text>
        <Text
          style={styles.title}
        >¿Listo para coleccionar más pokemones? ඞ</Text>
      </View>

      <Button
        title="Cerrar Sesión"
        color="#6b57ff"
        onPress={logout}
        style={styles.btnLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: '75%',
    display: "flex",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
  },
  btnLogout: {
    paddingTop: 20,
    fontSize: 15
  },
});
