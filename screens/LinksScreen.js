import React, { Component } from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

class MarketDetailHeader extends Component {
  render () {
    let pic = {
      uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd74c34f23a198ed395694f/190d7c56cadb2b09f63c90242fbf6aa3/image.png'
    };
    return (
        <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
          <Image source={pic} style={{width: 150, height: 150, flex: 1}}/>
          <View style={{flex: 1, margin: 10, justifyContent: 'space-around'}}>
            <Text style={{fontSize: 20}}>Market Name</Text>
            <Text sytle={{fontSize: 10}}>19 November 12</Text>
            <Text sytle={{fontSize: 10}}>#tag1 #tag2</Text>
          </View>
        </View>
    );
  }
}

class MarketDetailDescription extends Component {
  render() {
    return (
        <View style={{flex: 1, margin: 10}}>
          <Text style={{fontSize: 20}}>Description</Text>
          <Text style={{fontSize: 16}}>more information</Text>
        </View>
    );
  }
}

class MarketDetailParticipantSeller extends Component {
  render() {
    let pic = {
      uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd74c34f23a198ed395694f/190d7c56cadb2b09f63c90242fbf6aa3/image.png'
    };
    let heartPic = {
      uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png'
    };
    return (
        <View style={{flex: 1, flexDirection: 'row', margin: 10, alignItems: 'center'}}>
          <Image source={pic} style={{width: 80, height: 80, flex: 1}}/>
          <View style={{flex: 2, margin: 10}}>
            <Text style={{fontSize: 20}}>Market Name</Text>
            <Text sytle={{fontSize: 10}}>19 November 12</Text>
            <Text sytle={{fontSize: 10}}>#tag1 #tag2</Text>
          </View>
          <Image source={heartPic} style={{width: 30, height:30}}/>
        </View>
    );
  }
}

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <MarketDetailHeader/>
      <MarketDetailDescription/>
      <Text style={{fontSize: 20, margin: 10}}>Participant Seller <Text style={{color: 'blue'}}>join</Text></Text>
      <MarketDetailParticipantSeller/>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
