 import { StyleSheet, Text, View,Image } from 'react-native';
 import React from 'react'; 
 import {styles} from '../App.js';
 
 export default class ChoiceCard extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
         let uri=this.props.choice.uri;
         let name=this.props.choice.name;
         return(
            <View style={styles.choiceContainer}>
                     <Text style={styles.choiceDescription}>{this.props.player}</Text>
                     <Image source={{uri }} resizeMode="contain" style={styles.choiceImage} />
                     <Text style={styles.choiceCardTitle}>{name && name.charAt(0).toUpperCase() + name.slice(1)}</Text>
            </View>
         )
     }
 }
// export const ChoiceCard = ({ player, choice: { uri, name } }) => {
//     //const title = name && name.charAt(0).toUpperCase() + name.slice(1);
  
//     return (
//       <View style={styles.choiceContainer}>
//         <Text style={styles.choiceDescription}>{player}</Text>
//         <Image source={{ uri }} resizeMode="contain" style={styles.choiceImage} />
//         <Text style={styles.choiceCardTitle}>{title}</Text>
//       </View>
//     );
//   };