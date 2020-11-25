import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'
import GameStart from './Components/Screen/startGame'
import GameSreen from './Components/Screen/GameScreen'
import GameOver from './Components/Screen/GameOver'
export default function App() {
  const [userNumber,setUserNumber]= useState();
  const [guessRounds,setGuessRounds]= useState(0)


  const configureNewGameHandler = ()=>{
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHnadler = (num)=>{
    setUserNumber(num);
   // setGuessRounds(0)
  }
   
  const gameOver= numOfRounds=>{
    setGuessRounds(numOfRounds);
  }
  let content= <GameStart gameStart={startGameHnadler} ></GameStart>
  if(userNumber && guessRounds <= 0) content=  <GameSreen userChoice= {userNumber} OnGameOver= {gameOver}/>
  else if(guessRounds>0){ content = <GameOver roundNumber={guessRounds} userNumber={userNumber} onRestart ={configureNewGameHandler}/>}
  return (
    <View style= {styles.screen}>
        <Header title= 'Guess a Number'></Header>
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }
});
