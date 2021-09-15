import React from 'react';
import { StyleSheet, View , Image , ImageBackground , Text , Pressable , Button} from 'react-native';
import { Card , Title} from "react-native-paper";

const width = 150;

const MiniProductCard = (props) => (
        <View style={[styles.card , styles.dropShadow]}>
            <Image style={styles.image} source={props.image} resizeMode='contain'  />
            <Text style={styles.cardText}>{props.title}</Text>
            <View style={{flexDirection: 'row' , padding: 10}} >
                <View style={{flex: 2}}></View>
            </View>
        </View>
)

const styles = StyleSheet.create({
    card: {
        borderRadius:  10,
        overflow: 'hidden',
        width: width,
        alignItems: 'center',
        backgroundColor: "#fff",
        marginVertical: 10,
        marginHorizontal: 10
    },
    image: {
        width: width + 1000,
        height: 200,
        
    },
    dropShadow: {
        elevation: 10,
        shadowOpacity: 0.5,
        shadowColor: '#000'
    },
    cardText: {
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center' , 
        width: width , 
        //paddingLeft: 5 , 
        paddingTop: 20,
        //borderWidth: 1
    },
    cardButton: {
        borderRadius: 100
    }
})

export default MiniProductCard;