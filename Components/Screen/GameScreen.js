import React,{useState,useRef,useEffect} from 'react';
import {View,Text,StyleSheet,Button,Alert} from 'react-native'
import NumberContainer from '../NumberContainer';
import Card from '../card';

const generateRandom = (min,max,exclude)=>{
    min = Math.ceil(min);
    max= Math.floor(max);
    const rndNo = Math.floor(Math.random()*(max-min)) +min;
    if(rndNo=== exclude){
       return generateRandom(min,max,exclude);
    }
    else{
        return rndNo;
    }
}
const Screen= (props)=>{
   const [currentGuess,setCurrentGuess] = useState(generateRandom(1,100,props.userChoice));
   const [rounds,setRounds]= useState(0)

   const currentLow= useRef(1);
   const currentHigh= useRef(100);

   const {OnGameOver,userChoice} = props;
   useEffect(()=>{
       if(currentGuess=== userChoice){
           OnGameOver(rounds)
       }
   },[currentGuess,OnGameOver,userChoice])

   const nextGuessHandler =direction=>{
    if(direction ==='lower' && currentGuess < props.userChoice
     || direction ==='greater' && currentGuess > props.userChoice){
      Alert.alert('Dont Lie!','You Know this is wrong...',[{text:'Sorry!',style:'cancel'}])
      return;
    }
    if(direction === 'lower'){
        currentHigh.current= currentGuess;
    }else{
        currentLow.current= currentGuess;
    }
   const nextGuess= generateRandom(currentLow.current,currentHigh.current,currentGuess);
   setCurrentGuess(nextGuess);

   setRounds(currentRound => currentRound+1)
  }
   return (
       <View style = {styles.screen}>
           <Text>Opponent's Guess</Text>
           <NumberContainer>{currentGuess}</NumberContainer>
           <Card style = {styles.buttonContainer}>
                <Button title="Lower" onPress= {()=>nextGuessHandler('lower') }/>
                <Button title="Greater" onPress= {nextGuessHandler.bind(this,'greater')}></Button>
           </Card>
       </View>
   )
}

const styles = StyleSheet.create({
   screen:{
       flex:1,
       padding: 10,
       alignItems: 'center',
   },
   buttonContainer:{
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginTop: 20,
       width: 300,
       maxWidth: '80%'
   }
})

export default Screen;