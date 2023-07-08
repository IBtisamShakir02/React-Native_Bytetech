//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

// create a component
const ListScreen = () => {
  const theme = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
      <Text style={styles.txt}>ListScreen</Text>
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
export default ListScreen;
