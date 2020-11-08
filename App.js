import React, {useState} from 'react';
import {View, Alert, StyleSheet, FlatList} from 'react-native';
import uuidv4 from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [
        {text: 'Ok', onPress: () => {}},
      ]);
    } else {
      setItems((previousItems) => [
        {
          id: uuidv4(),
          text,
        },
        ...previousItems,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
