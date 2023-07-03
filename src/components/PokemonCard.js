import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";
import { FavoritesContext } from "../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";

export default function PokemonCard(props) {
  const { addPokemon, removePokemon } = useContext(FavoritesContext)

  const { pokemon } = props;
  const navigation = useNavigation();
  const [icon, setIcon] = useState("heart-outline");

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  const addFavorites = () => { //Agregar un elemento a favoritos
    pokemon.favorite = !pokemon.favorite
    pokemon.favorite ? (setIcon("heart"), pokemon.favorite = true, addPokemon(pokemon)) : (setIcon("heart-outline"), removePokemon(pokemon));
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Ionicons name={icon} style={styles.icon} size={22} color={"white"} onPress={() => addFavorites()} />
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  icon: {
    position: "absolute",
    bottom: 20,
    paddingLeft: "7%",
  },
});
