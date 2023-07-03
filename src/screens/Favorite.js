import React from "react";
import {
  SafeAreaView, StyleSheet,
  FlatList,
  Platform,
  View
} from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Favorite() {
  const { pokemons } = useContext(FavoritesContext)

  return (
    <SafeAreaView>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    marginTop: Platform.OS === "android" ? 30 : 0,
    marginTop: Platform.OS === "web" ? 20 : 0,
  },
  list: {
    marginBottom: 100,
  },
  alerta: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  alertaText: {
    fontSize: 17,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
  textInputStyle: {
    height: 40,
    margin: 12,
    marginLeft: 0,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: "60%",
  },
  pika: {
    width: 50,
    height: 50
  },
  search: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 0,
    height: 40,
    width: "100%",
    justifyContent: "space-evenly",
  },

  aviso: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

