import React, { useContext, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const { restore } = useContext(AuthContext)

  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
  });

  return (
    <View>
      <Text style={styles.title}>Recupera tu contraseña</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <View style={styles.containnerButton}>
        <View style={styles.buttonRegister}>
          <Button
            title="Mandar Correo"
            color={"#008000"}
            onPress={() => restore(username)}
          />
        </View>
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.email}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    email: Yup.string().required("El email es obligatorio"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#7fff00",
    marginTop: 20,
  },
  containnerButton: {
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonRegister: {
    width: "95%",
  },
});
