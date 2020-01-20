import React from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard ,Alert} from 'react-native'

export default NumberSelected = (props) => {
    console.log(props.children)
    return (
        <View style={styles.container} >
            <Text>{props.children}</Text>
        </View>
            
  
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth:2,
        borderColor:'grey',
        padding:5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        marginVertical:10,
        width:'80%'
    }
})