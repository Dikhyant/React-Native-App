import React from "react";
import { View , StyleSheet , Text } from "react-native";

const M_Button = (props) => (
    <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        borderRadius: 20
    },
    buttonText: {
        fontSize: 10,
        color: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})
export default M_Button;