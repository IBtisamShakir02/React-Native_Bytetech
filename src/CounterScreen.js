//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSelector,useDispatch} from 'react-redux';
import { addition, substraction } from './store/action';

// create a component
const CounterScreen = (props) => {
  const data= useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
    <View><Text style={styles.txt}>{data} </Text></View>
    <View style={{flexDirection:'row'}}>
      <Button title='Increment' onPress={()=>dispatch(addition())} ></Button>
      <Button title='Decrement' onPress={()=>dispatch(substraction())}></Button>
    </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: 'black',
  },
});

//make this component available to the app
export default CounterScreen;
