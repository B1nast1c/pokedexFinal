import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase-login";
import UserData from "./UserData";
import { AuthContext } from "../../context/AuthContext";


export default function LoginForm() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { currentUser, login } = useContext(AuthContext)

  useEffect(() => { //El listener básicamente de comunica con el Firebase, y verifica cuando de ha logueadoy cuando no
    const listener = auth.onAuthStateChanged(
      user => {
        if (user) {
          navigation.navigate("Pokedex")
        }
      }
    )
    return listener
  }, [])

  const formik = useFormik({
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false
  });

  return (
    <>
      {
        currentUser === null
          ? (
            <View>
              <Text style={styles.title}>Iniciar sesión</Text>
              <TextInput
                placeholder="Nombre de usuario"
                style={styles.input}
                autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
                value={username}
                onChangeText={text => setUsername(text)}
              />
              <TextInput
                placeholder="Contraseña"
                style={styles.input}
                autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
                secureTextEntry={true} //Esconde la contraseña
                value={password}
                onChangeText={text => setPassword(text)}
              />

              <Text
                style={styles.hiper}
                onPress={() => navigation.navigate("Recovery")}
              >
                Recuperar contraseña
              </Text>
              <Text
                style={styles.hiper}
                onPress={() => navigation.navigate("Register")}
              >
                Registrarse
              </Text>

              <View style={styles.containnerButton}>
                <View style={styles.buttonLogin}>
                  <Button
                    title="Entrar"
                    color={"#008000"}
                    onPress={() => login(username, password)}
                  />
                </View>
              </View>

              <Text style={styles.error}>{formik.errors.username}</Text>
              <Text style={styles.error}>{formik.errors.password}</Text>

              <Text style={styles.error}>{error}</Text>
            </View>
          )
          : <UserData />
      }
    </>
  );
}


function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
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
    color: "#f00",
    marginTop: 20,
  },
  containnerButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonLogin: {
    width: "95%",
    marginTop: 10
  },
  hiper: {
    textAlign: "right",
    color: "#00008b",
    marginRight: 10,
    textDecorationLine: 'underline',
    fontSize: 15,
    marginBottom: 5
  },
});
