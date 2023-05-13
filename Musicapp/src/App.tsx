import React  from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import music_data from './Music_data.json'
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
import { useState } from 'react';


function App() {

  const [list,setList] = useState(music_data)
  const renderSong = ({item}) => <SongCard song = {item}/>;
  const separator = () => <View style = {styles.separator}/>  
  const handleChange = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    })
    setList(filteredList)
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <SearchBar onsearch={handleChange}/>
          <FlatList 
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={separator}
          />
      </View>
    </SafeAreaView>
  );
}


 const styles = StyleSheet.create({
  container: {
     flex:1
   },
   separator : {
    borderWidth:1,
    borderColor:'black'
   }
 })

export default App;
