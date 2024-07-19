import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const guess = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess NUmber</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'blue',
    },
    container:{
        marginTop:50
    }
})

export default guess
