import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default Cart = props => {
    return (
    <View style={{...styles.card,...props.style}}>{props.children}</View>
    )
}
const styles = StyleSheet.create({
    card : {
        shadowOffset:{
            width:0,
            height:2
        },
        backgroundColor:'white',
        shadowOpacity:0.2,
        shadowColor:'black',
        shadowRadius: 6,
        padding:4,
        borderRadius:4
    }
})