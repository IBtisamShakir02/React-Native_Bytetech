//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from 'react-native-paper';
// import CounterScreen from './CounterScreen';
import {Button} from 'react-native-paper';

// create a component
const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />
      <Text style={styles.txt}>HomeScreen</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('CounterScreen')}
        theme={{typescale: {labelLarge: {letterSpacing: 1}}}}>
        Counter
      </Button>
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
export default HomeScreen;
