import React, { useState, createContext } from "react";
import { auth } from "../../firebase-login";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext()

const messageRegister = () => {
  alert("El usuario ha sido creado con éxito <3")
}

const badMessage = () => {
  alert("UPS! El usuario no puede ser registrado, revise sus datos una vez más")
}

const messageLogin = () => {
  alert("Se ha logueado con éxito! :D")
}

const messageLogout = () => {
  alert("Se ha cerrado la sesión")
}

const messagePassword = () => {
  alert("Se ha cambiado la  contraseña")
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const navigation = useNavigation();

  const login = (username, password) => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then(
        credentials => {
          messageLogin()
          navigation.navigate("Mi cuenta")
          const user = credentials.user
          setCurrentUser(user)
          //console.log("LOGGED CON EL EMAIL:", user.email)
        }
      )
      .catch(err => console.error(err))
  };

  const logout = () => {
    auth.signOut()
      .then(
        () => {
          setCurrentUser(null)
          messageLogout()
          navigation.navigate("Pokedex")
        }
      )
      .catch(
        err => console.error(err)
      )
  };

  const register = (username, password) => {
    auth
      .createUserWithEmailAndPassword(username, password)
      .then(
        credentials => {
          const user = credentials.user
          messageRegister()
          console.log("EMAIL:", user.email)
        }
      )
      .catch(err => {
        badMessage()
        console.error(err)
      })
  };

  const restore = (username) => {
    auth
      .sendPasswordResetEmail(username)
      .then(() => {
        messagePassword()
        navigation.navigate("Pokedex")
      }
      )
      .catch(err => console.error(err))
  };


  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register, restore }}>
      {children}
    </AuthContext.Provider>
  );
}
