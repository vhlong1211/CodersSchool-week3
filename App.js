import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Button from './Component/Button.js';
import ChoiceCard from './Component/ChoiceCard.js';
const CHOICES = [
  {
    name: 'rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];
// let onPress = userChoice => {
//   console.log('userChoice', userChoice);
// }
//let total=this.state.tieCount+this.state.winCount+this.state.loseCount;
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gamePrompt: 'Choose your weapon!',
      userChoice: {},
      computerChoice: {},
      winCount:0,
      loseCount:0,
      tieCount:0
      
    }
  }
  // countEverything=()=>{
  //   const [result, compChoice] = this.getRoundOutcome(playerChoice);
  // }
  randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];
  getRoundOutcome = userChoice => {
    const computerChoice = this.randomComputerChoice().name;
    
    let result;
  
    if (userChoice === 'rock') {
      result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
  };
   setGamePrompt=(kq)=>{
     this.setState({
       gamePrompt:kq
     })
   };
   getResultColor = () => {
    if (this.state.gamePrompt === 'Victory!') return 'green';
    if (this.state.gamePrompt === 'Defeat!') return 'red';
    return null;
  };
   onPress = playerChoice => {
    const [result, compChoice] = this.getRoundOutcome(playerChoice);
  
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);
    let winCount=this.state.winCount;
    let loseCount=this.state.loseCount;
    let tieCount=this.state.tieCount;
    if(result==='Victory!'){
      this.setState({
        winCount:winCount+1
      })
    }else if(result==='Defeat!'){
      this.setState({
        loseCount:loseCount+1
      })
    }else{
      this.setState({
        tieCount:tieCount+1
      })
    }
     
    this.setGamePrompt(result);
    this.setState({
      userChoice: newUserChoice,
      computerChoice: newComputerChoice
    })
  };
  //totalGames=this.state.winCount+this.state.tieCount+this.state.loseCount;
  render() {
    let getResultColor=this.getResultColor;
     return (
      <View style={styles.container}>
        <Text style={{fontSize:35,color:getResultColor()}}>{this.state.gamePrompt}</Text>
        <View style={styles.choicesContainer}>
          <ChoiceCard player="Player" choice={this.state.userChoice}></ChoiceCard>
          <Text style={{ color: '#250902' }}>vs</Text>
          <ChoiceCard player="Computer" choice={this.state.computerChoice}></ChoiceCard>
        </View>
        {
          CHOICES.map(choice => {
            return <Button key={choice.name} name={choice.name} onPress={this.onPress} />;
          })
        }
        <Text style={{fontSize:15,fontWeight:'bold',marginTop:5}}>Win games:{this.state.winCount}/Lose Game:{this.state.loseCount}/Tie Games:{this.state.tieCount}</Text>
        <Text style={{fontSize:15,fontWeight:'bold',marginTop:5}}>Total games:{this.state.winCount+this.state.tieCount+this.state.loseCount}</Text>
      </View>
     )
  }
}
//let total=this.state.tieCount+this.state.winCount+this.state.loseCount;
 export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  }
});
//export {styles};