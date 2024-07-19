import React, { useState } from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';

const guess = () => {

    const [number, setNumber] = useState(0)

    const randomNumber = () => {
        let num = Math.floor(Math.random() * 100) + 1
        setNumber(num)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess Number</Text>
        <Text style={styles.num}>{number}</Text>
        <Button title='Generate a numnber' onPress={randomNumber}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 20
    },
    container:{
        marginTop:50,
        
        
    },
    num:{
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'

    }
})

export default guess
