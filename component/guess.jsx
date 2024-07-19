import React, { useState } from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';

const guess = () => {

    const [number, setNumber] = useState(0)
    const [score, setScore] = useState(0)
    let fix=Math.floor(Math.random()*100)
   const result = () => {
    if (fix>number) {
        setScore(score+1)
    }
    else{
        setScore(score-1)
    }
   }
   const loss=()=>{
    if (fix<number) {
        setScore(score+1)
    }
    else{
        setScore(score-1)
    }
   }

   const reset=()=>{
         setScore(0)
   }

    const randomNumber = () => {
        let num = Math.floor(Math.random() * 100) + 1
        setNumber(num)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess Number</Text>
      <Text style={{marginTop:20,textAlign:'center',fontSize:20,fontWeight:'bold'}}>Computer Generated:{fix}</Text>
      <Text></Text>
        <Text style={styles.num}>{number}</Text>
        <Button title='Generate a numnber' onPress={randomNumber}/>
        <View style={styles.btn}>
            <Button title='Greater than' onPress={result}/>
            <Button title='less than' onPress={loss}/>
        </View>
        <Text style={{marginTop:20,textAlign:'center',fontSize:20,fontWeight:'bold'}}>
            Score: {score}
        </Text>
        <Button title='Reset Score' style={{ marginTop:10}} onPress={reset}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    container:{
        marginTop:50,        
    },
    num:{
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btn:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap:10,
        marginTop:20
    }
})

export default guess
