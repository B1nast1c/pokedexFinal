import React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";
import BerryNavigation from "./BerryNavigation";
import Navigation from "./Navigation";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: "100%",
        },
        headerTintColor: "#E8E8E8",
        headerStyle: {
          height: 80,
          backgroundColor: "#b22222"
        },

      }}
    >

      <Drawer.Screen name="Pokemones" component={Navigation} />
      <Drawer.Screen name="Items" component={BerryNavigation} />

    </Drawer.Navigator>
  );
}
