import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native'

const GameOver= (props)=>{
    return <View style= {styles.screen}>
               <Text>Game is Over</Text>
               <Text>Number of Rounds:{props.roundNumber} </Text>
               <Text>Number Was: {props.userNumber}</Text>
               <Button title="Restart" onPress={props.onRestart}></Button>
            </View>
}

const styles = StyleSheet.create({
   screen:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
   }
})

export default GameOver;