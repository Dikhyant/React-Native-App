import React from 'react';
import { StyleSheet, View , Image , ImageBackground , Text , Pressable , Button} from 'react-native';
import M_Button from './Button';

import { navigate } from '../Functions/AppNavigators/AppNavigator';

const width = 300;

const M_Card = (props) => (
        <Pressable onPress = {
            ()=>{
                navigate("Item Page", {
                    //params
                    image: props.image,
                    text: props.text,
                    details: props.details
                })
            }
        }>
            <View style={[styles.card , styles.dropShadow]}>
                <ImageBackground style={styles.image} source={props.image} resizeMode='contain'  />
                <Text style={styles.cardText}>{props.text}</Text>
                <View style={{flexDirection: 'row' , padding: 10, paddingTop: 15}} >
                    <View style={{flex: 1}}></View>
                    <M_Button title={'See more'} />
                </View>
            </View>
        </Pressable>
)

const styles = StyleSheet.create({
    card: {
        borderRadius:  20,
        overflow: 'hidden',
        width: width,
        alignItems: 'center',
        backgroundColor: "#fff",
        marginVertical: 10
    },
    image: {
        position: 'relative',
        right: -10,
        width: width + 500,
        height: 300,
        //borderWidth: 1,
        borderRadius: 20
    },
    dropShadow: {
        elevation: 10,
        shadowOpacity: 0.5,
        shadowColor: '#000'
    },
    cardText: {
        fontWeight: 'bold',
        textAlign: 'left' , 
        width: width , 
        paddingLeft: 10 , 
        paddingTop: 10,
        paddingRight: 50,
        //borderWidth: 1
    },
    cardButton: {
        borderRadius: 100
    }
})

export default M_Card;