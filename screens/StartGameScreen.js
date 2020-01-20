import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard ,Alert} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberSelected from '../components/NumberSelected'
export default StartGameScreen = () => {
    const [enteredNumber, setEnteredNumber] = useState('')
    const [confirmedNumber,setConfirmNumber] = useState()
    const [confirmed,setConfirmed] = useState(false)
    const onEnterNumber = (number) => {
        let setNumber = number.replace(/[^0-9]+/g, "")
        setEnteredNumber(setNumber)

    }
    const onReset = () => {
        setEnteredNumber('')
        setConfirmed(false)
    }
    const onConfirm = () => {
        console.log(enteredNumber)
        if( !enteredNumber || parseInt(enteredNumber) === 0 || parseInt(enteredNumber )> 99){
            setConfirmed(false)
            return Alert.alert('Error','You have to enter a valid number from 0 to 99',[{text:'OK', onPress: () => console.log('Cancel Pressed!')}])
        }
        else {
            setConfirmed(true)
            setConfirmNumber(parseInt(enteredNumber))
            setEnteredNumber('')
            

        }

    }
    useEffect(() => {
        console.log('Do something after counter has changed', confirmedNumber);
     }, [confirmedNumber]);
    let confirmMsg;
    if(confirmed){
    confirmMsg = <Card  style={{marginVertical:20}}>
            <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                <Text>You selected number</Text>
                <NumberSelected>{confirmedNumber}</NumberSelected>
                <Button title="Start the game"/>
            </View>
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={{ fontSize: 20, marginVertical: 20 }}>Start game screen</Text>
                <Card style={styles.inputContainer}>
                    <Text style={{ marginVertical: 20 }}>Select a number</Text>
                    <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={2} onChangeText={onEnterNumber} value={enteredNumber} />
                    <View style={styles.buttons}>
                        <View><Button title="Reset" onPress={onReset}/></View>
                        <View><Button title="Confirm" onPress={onConfirm} /></View>
                        

                    </View>
                   
                </Card>
                {confirmMsg}
            </View>
            
        </TouchableWithoutFeedback>


    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        paddingRight: 10,
        width: 50,
        textAlign: 'center'
    }
})