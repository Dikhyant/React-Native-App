import React from 'react';
import { View , Text ,Image , StyleSheet , ScrollView } from "react-native"
import Icon_antDesign from 'react-native-vector-icons/AntDesign';

import MiniProductCard from "./MiniProductCard";

const ItemPage = ({ route , navigation }) =>{
    const image = route.params.image;
    const coverText = route.params.text;
    const coverDetails = route.params.details;
    return (
        <View style={styles.container} >
            <ScrollView>
                <View style={styles.cover}>
                    <Image style={styles.coverImage} source={image} resizeMode='cover' />
                    <Text style={styles.coverText}>{coverText}</Text>
                    <Text style={styles.coverDetails}>{coverDetails}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: "center",
                    marginTop: 10
                }}>
                    <Text style={{
                        flex: 1,
                        fontWeight: 'bold',
                        //borderWidth: 1,
                        textAlign: 'center',
                        paddingLeft: 10
                    }}>Products</Text>

                    {/*Adding blank space*/}
                  <View style={{
                     flex: 2
                  }}></View>

                    <M_Button />
                </View>

                <ScrollView horizontal={true} contentContainerStyle={{
                    paddingLeft: 10
                }}>  
                    <MiniProductCard title={'React Native'}  image={require('../Assets/Images/react-native.png')} />
                    <MiniProductCard title={'Flutter'}  image={require('../Assets/Images/flutter.png')} />
                </ScrollView>
            </ScrollView>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(200,200,200,1)"
    },
    cover: {
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        //borderWidth: 5,
        backgroundColor: "#fff",
        paddingBottom: 30,
        //elevation: 5
    },
    coverImage: {
        width: 500,
        height: 270
    },
    coverText: {
        fontSize: 15,
        fontWeight: 'bold',
        // borderWidth: 1,
        marginTop: 30
    },
    coverDetails: {
        fontSize: 12,
        paddingHorizontal: 20,
        marginTop: 15,
        color: "rgba(100,100,100,1)",
        fontWeight: 'bold'
        //borderWidth: 1
    }
})

const M_Button = ()=>{
    return (
        <View style={{
            flex: 1,
            height: 30,
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginRight: 20,
            borderRadius: 20,
            alignItems: 'center',
            
        }}>
            <Text style={{
                flex: 4,
                textAlign: 'center',
                color: "red"
            }}>View all</Text>
            <Icon_antDesign name="right"  color={"red"} style={{
                flex: 1
            }} />
        </View>
    )
}

export default ItemPage;