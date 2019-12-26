import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text, Image} from 'react-native';

class MarketList extends Component {
  render () {
    let pic = {
      uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd74c34f23a198ed395694f/190d7c56cadb2b09f63c90242fbf6aa3/image.png'
    };
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={pic} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
          <View style={{flex: 2, margin: 10}}>
            <Text style={{fontSize: 20}}>Market Name</Text>
            <Text sytle={{fontSize: 10}}>19 November 12</Text>
            <Text sytle={{fontSize: 10}}>#tag1 #tag2</Text>
          </View>
        </View>
    );
  }
}

export default function NewScreen() {
  return (
      <View style={styles.container}>
        <FlatList
            data={[
              {
                key: 'Devin',
                marketName: "test"
              },              {
                key: 'Devin1',
                marketName: "test"
              },              {
                key: 'Devin2',
                marketName: "test"
              },              {
                key: 'Dev3in',
                marketName: "test"
              },
              {
                key: 'Dev4in',
                marketName: "test"
              },
              {
                key: 'De5vin',
                marketName: "test"
              },
              {
                key: 'Dev6in',
                marketName: "test"
              },
              {
                key: 'Dev7in',
                marketName: "test"
              },
              {
                key: 'Dev2in',
                marketName: "test"
              }
            ]}
            renderItem={({item}) => <MarketList/>}
        />
      </View>
  );
}

NewScreen.navigationOptions = {
  title: 'Market',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
