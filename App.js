import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView , Dimensions } from 'react-native';
import Card from "./Components/Card";
import MiniCard from './Components/MiniCard';
import Header from './Components/Header';
import ItemPage from './Components/ItemPage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef } from './Functions/AppNavigators/AppNavigator';

import { dataList as cardDataList } from './Assets/Data/CardData';
import { dataList as miniCardDataList } from './Assets/Data/MiniCardData';

const { height , width } = Dimensions.get('window');

class Home extends React.Component {

   render() {

      //For list of cards on main page
      const Cards = cardDataList.map( (data) => {
         return (
            <Card
               key = {data.id}
               image = {data.image}
               text = {data.text}
               details = {data.details}
             />
         )
      } ) 

      //For list of mini cards
      const MiniCards = miniCardDataList.map( (data) => {
         return (
            <MiniCard
               title = {data.title}
               image = {data.image}
             />
         )
      } )

      return (
            <View style={styles.container} >
               <Header />
               <ScrollView contentContainerStyle={styles.scrollView} >
                  {/*Adding blank space*/}
                  <View style={{
                     height: 20
                  }}></View>
                  <Text style={styles.subHeading}>Explore by category</Text>

                  <ScrollView horizontal={true} contentContainerStyle={{
                     marginLeft: 20
                  }}>

                     {MiniCards /* list of mini cards */}

                  </ScrollView>

                  {/*Adding blank space*/}
                  <View style={{
                     height: 20
                  }}></View>

                  <Text style={styles.subHeading}>Featured</Text>

                  
                  {Cards /*list of cards*/}

               </ScrollView>
            </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      //alignItems: 'center',
      //justifyContent: "center"
   },
   scrollView: {
      alignItems: 'center'
   },
   subHeading: {
      alignSelf: 'flex-start',
      marginLeft: 30,
      fontWeight: 'bold'
   }
});

const Stack = createNativeStackNavigator();

class App extends React.Component{
   render(){
      return (
         <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{
               headerShown: false
            }} initialRouteName="Home">
               <Stack.Screen name="Home" component={Home} />
               <Stack.Screen name="Item Page" component={ItemPage} />
            </Stack.Navigator>
         </NavigationContainer>
      )
   }
}

export default App;