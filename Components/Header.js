import React from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon_antDesign from 'react-native-vector-icons/AntDesign';
import { View , StyleSheet , Dimensions , TextInput , Text } from 'react-native';

const { height , width } = Dimensions.get('window');

const Header = (props)=>(
    <View style={styles.background} >

        <View style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginBottom: 10,
            alignItems: 'center'
            }}>
            <Icon_antDesign name="arrowleft" size={25} style={{
                flex: 1,
                marginTop: 3
                }} />
            <Text style={[styles.heading , {
                flex: 10,
                
            }]} >Exclusives</Text>
        </View>

        <View style={{
            flexDirection: 'row',
            width: width - 30,
            height: 40,
            //paddingBottom: 10,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 10
        }}>
            <Icon_antDesign name="search1" size={20} style={{
                flex: 1,
                paddingLeft: 5
            }} />
            <TextInput style={styles.textInput} selectionColor={'#000'} placeholder={'Search'}  />
        </View>
    </View>
)

const styles = StyleSheet.create({
    background: {
        width: width,
        //height: 100,
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center'
    },
    textInput: {
        flex: 10,
        //height: 40,
        //marginHorizontal: 20,
        //marginVertical: 5,
        //borderWidth: 1,
        //borderRadius: 10,
        borderColor: "#009"
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    }
})
export default Header;