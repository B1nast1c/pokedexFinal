import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from "react-native";
import { useFormik } from "formik";
import { AuthContext } from "../../context/AuthContext";



export default function LoginForm() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { register } = useContext(AuthContext)

  const formik = useFormik({
    validateOnChange: false, //Para que solo parezca al presiona le boton
  });

  return (
    <View>
      <Text style={styles.title}>Crear Usuario</Text>

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
        secureTextEntry={true} //punto en lugar de puntos
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={firstname}
        onChangeText={text => setFirstname(text)}

      />
      <TextInput
        placeholder="Apellido"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={lastname}
        onChangeText={text => setLastName(text)}

      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={email}
        onChangeText={text => setEmail(text)}

      />

      <View style={styles.containnerButton}>
        <View style={styles.buttonRegister}>
          <Button
            title="Registrarme"
            color={"#008000"}
            onPress={() => register(username, password)}
          />
        </View>
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{formik.errors.firstname}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 10,
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
  hiper: {
    textAlign: "right",
    color: "#00008b",
    marginRight: 50,
  },
  containnerButton: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonRegister: {
    width: "95%",
  },
});
