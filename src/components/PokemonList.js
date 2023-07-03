import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  TextInput,
  Text,
  Button,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const {
    pokemons,
    loadPokemons,
    isNext,
    filterData,
    setFilterData,
    valor,
    load,
  } = props;

  const laodMore = () => {
    loadPokemons();
  };

  const [search, setSearch] = useState("");
  const [poke, setPoke] = useState(false);

  useEffect(() => { }, [search]);

  const searchFilter = (text) => {
    setSearch(text);
    if (text) {
      setFilterData(pokemons);
    }
  };

  const searchFilterDone = () => {
    if (search) {
      const newData = filterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilterData(newData);
      setSearch("");
      if (Object.keys(newData).length == 0) {
        setPoke(true);
      } else {
        setPoke(false);
      }
      console.log(`aqui ${Object.keys(newData).length}`);
    } else {
      setFilterData(pokemons);
      setSearch(search);
    }
  };

  const searchFilterName = () => {
    const list = pokemons.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    setFilterData(list);
  };

  const Reload = () => {
    const list = pokemons.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    setFilterData(list);
  };

  return (

    <SafeAreaView>
      {valor && (
        <View style={styles.search}>
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Buscar..."
            onChangeText={(text) => searchFilter(text)}
          />
          <View style={styles.buttons}>
            <Button title="Buscar" color="#1e90ff" onPress={searchFilterDone} />
            <Button title="Ver Todos" color="#1e90ff" onPress={Reload} />
          </View>


        </View>
      )}
      <View style={styles.ordenar}>
        <Text style={styles.orden}>
          Ordenar por:
        </Text>
        <Button title="Nombre" color="#1e90ff" onPress={searchFilterName} />
      </View>

      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext && laodMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <View>
            {poke && (
              <View style={styles.aviso}>
                <Text style={styles.alertaText}>
                  No encontramos Pokemons con ese nombre
                </Text>
              </View>
            )}
            {!load && (
              <View style={styles.alerta}>
                <Image
                  source={require('.././assets/pickachu.gif')}
                  style={styles.pika}
                />
                <Text style={styles.alertaText}>Cargando...</Text>

                <ActivityIndicator
                  size="large"
                  style={styles.spinner}
                  color="#6b57ff"
                />
              </View>
            )}
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
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
    paddingHorizontal: 10,
    height: 40,
    margin: 15,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    width: "50%",
  },
  orden: {
    flex: 1,
    textAlign: "right",
    color: "#ffffff",
  },
  search: {
    flexDirection: "row",
    height: "10%",
    width: "100%",
    justifyContent: "space-evenly",
    backgroundColor: "#141414",
    alignItems: "center",
  },
  ordenar: {
    backgroundColor: "#141414",
    paddingBottom: 15,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 15
  },
  pika: {
    width: 75,
    height: 75
  },
  aviso: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    paddingRight: 18
  }
});
