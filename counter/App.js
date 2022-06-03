import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Pressable } from "react-native";
//tekse 2ile çarp çiftse 1 arttır - olmasın
const App = () => {
  const [counter,setCounter]=useState(0)
  const[otherCounter,setOtherCounter]=useState(0)
  useEffect(()=>{
    setOtherCounter(counter*3)
  },[counter])
  
  const increaseCounter=()=>{
   
   if(otherCounter/1000<=1){
    if(counter%2==0){
      setCounter(counter +1)
    }
    else{
      setCounter(counter*2)
    
    }
   }
  }
  const decreaseCounter=()=>{
    if(counter>0)
    {
      if(counter%2==0){
        setCounter(counter/2)
      }
      else{
        setCounter(counter-1)
  
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={[styles.number,{color:'black'}]}>{counter}</Text>
        <Text style={styles.number}>{otherCounter}</Text>
      </View>
     

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={increaseCounter}style={styles.increaseButton}>
          <Text style={styles.buttonText}>ARTTIR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseCounter} style={styles.decreaseButton}>
          <Text style={styles.buttonText}>AZALT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"

  },
  number: {
    fontSize: 100,
    fontWeight: "bold",
    marginHorizontal:17,
  },
  numberContainer:{
    flexDirection:"row"
  },
  buttonContainer: {
    flexDirection:"row",
    borderWidth:1.5,
    borderRadius:10
  },
  increaseButton:{
    backgroundColor:"green",
    width:Dimensions.get("window").width/3,
    borderBottomStartRadius:10,
    borderTopStartRadius:10

  },
  decreaseButton:{
    backgroundColor:"red",
    width:Dimensions.get("window").width/3,
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  buttonText:{
    color:"white",
    textAlign:"center",
    margin:10
  }
})
export default App;

