//import liraries
import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useTheme} from 'react-native-paper';

// create a component
const ListScreen = () => {
  const theme = useTheme();

const [myUserData, setMyUserData] = useState();

  const getUserData= async () => {
    try{
      const response = await fetch(
       "https://hisocars.techinnsoft.com/api/Booking/get-hot-offer" 
      )
      const myData = await response.json();
      setMyUserData(myData);
      console.log(myData)
    } catch (error)
    {
      console.log(error)
    }
  };
  useEffect(()=>{
    getUserData();
  }, []);
  
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.secondary}]}>
      <FlatList data={myUserData}
      renderItem={({item})=>{
        return <View style={{marginTop:40}}>
          <Text style={styles.txt}>Name: {item.userName}</Text>
          <Text style={styles.txt}>Brand Name: {item.brandName}</Text>
          <Text style={styles.txt}>Car Name: {item.carName}</Text>
        </View>
      }}
      />
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
    marginTop:10
  },
});

//make this component available to the app
export default ListScreen;
