import React, { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screens1 from "./src/screens/Screens1";
import Screens2 from "./src/screens/Screens2";
import Screens3 from "./src/screens/Screens3";
import CustomHeader from "./src/components/CustomHeader";

const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState('Screens1');

  useEffect(() => {
    AsyncStorage.getItem('formData').then(data => {
      if (data) {
        setInitialRoute('Screens3');
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Screens1"
          component={Screens1}
          options={{ header: () => <CustomHeader title='Form Registrasi - Data Diri' /> }}
        />
        <Stack.Screen
          name="Screens2"
          component={Screens2}
          options={{ header: () => <CustomHeader title='Form Registrasi - Photo' /> }}
        />
        <Stack.Screen
          name="Screens3"
          component={Screens3}
          options={{ header: () => <CustomHeader title='Form Registrasi - Konfirmasi' /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
