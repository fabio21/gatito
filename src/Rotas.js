import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Servicos from './telas/Servicos';
import Carrinho from './telas/Carrinho';

import { cores } from './estilos';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: cores.roxo,
        tabBarInactiveTintColor: cores.claro,
        tabBarActiveBackgroundColor: cores.roxo,
        tabBarInactiveBackgroundColor: cores.laranja,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          width: '100%',
          flex: 1,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 21,
          marginTop: -35,
          paddingTop: 20,
          backgroundColor: cores.laranja
        },
        tabBarStyle: [{
          display: "flex",
         // position: 'absolute',
          height: 70,
        }, null
        ]
      })}
    >
      <Tab.Screen
        name="Serviços"
        component={Servicos}
        options={
          {
            tabBarLabel: 'Serviços',
            tabBarIcon: ({ color }) => (<></>)
          }
        } />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={
          {
            tabBarLabel: 'Carrinho',
            tabBarIcon: ({ color }) => (<></>)
          }
        } />
    </Tab.Navigator>
  </NavigationContainer>
}