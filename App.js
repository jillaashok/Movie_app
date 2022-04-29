import React from "react";
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { playing, star } from "./src/components/Icon";
import NowPlaying from "./src/Screen/NowPlaying";
import TopRated from "./src/Screen/TopRated";
import { size, colors } from "./src/components/Utils"

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function DashboardNavigation() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: { backgroundColor: colors.indian_yellow } }}   >
        <Tab.Screen name="NowPlaying" component={NowPlaying}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('NowPlaying', { screen: 'NowPlaying' })
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ paddingTop: size.small }}>
                <Image source={playing} style={{ height: size.xx_medium, width: size.x_medium, alignSelf: 'center', tintColor: focused ? colors.black : colors.grey }}
                  resizeMode='contain'
                />
                <View>
                  <Text style={{ textAlign: 'center', color: focused ? colors.black : colors.grey, fontSize: size.xxx_tiny }}>{"Now Playing"}</Text>
                </View>
              </View>
            )
          }}
        />
        <Tab.Screen name="TopRated" component={TopRated}
          listeners={({ navigation }) => ({
            tabPress: e => {
              e.preventDefault();
              navigation.navigate('TopRated', { screen: 'TopRated' })
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ paddingTop: size.small }}>
                <Image source={star} style={{ height: size.xx_medium, width: size.x_medium, alignSelf: 'center', tintColor: focused ? colors.black : colors.grey }}
                  resizeMode='contain'
                />
                <View>
                  <Text style={{ textAlign: 'center', color: focused ? colors.black : colors.grey, fontSize: size.xxx_tiny }}>{"Top Rated"}</Text>
                </View>
              </View>
            )
          }}
        />
      </Tab.Navigator>

    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashboardNavigation" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="DashboardNavigation" component={DashboardNavigation} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}