import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image, Button, ScrollView} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import LinksScreen from "./LinksScreen";

class GetMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }
    componentDidMount() {
        return fetch('http://15.165.91.254:3000/sample-market')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    console.log("callback Get Market");
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
                            <View style={{flex: 2, margin: 10}}>
                                <Text
                                    style={{fontSize: 20}}
                                    onPress={() => this.props.navigation.navigate('MarketDetail')}
                                >{item.name} </Text>
                                <Text style={{fontSize: 10}}>{item.description}</Text>
                            </View>
                        </View>}
                />
            </View>
        );
    }
}

class MarketDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }
    componentDidMount() {
        return fetch('http://15.165.91.254:3000/sample-seller')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    console.log("callback Get Market");
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let heartPic = {
            uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png'
        };
        return (
            <ScrollView style={{flex: 1}}>
                <MarketDetailHeader/>
                <MarketDetailDescription/>
                <Text style={{fontSize: 20, margin: 10}}>Participant Seller <Text style={{color: 'blue'}}>join</Text></Text>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
                            <View style={{flex: 2, margin: 10}}>
                                <Text style={{fontSize: 20}}>{item.name} </Text>
                                <Text style={{fontSize: 10}}>{item.description}</Text>
                            </View>
                            <Image source={heartPic} style={{width: 30, height:30, margin: 10}}/>
                        </View>}
                />
            </ScrollView>
        );
    }
}

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

const RootStack = createStackNavigator(
    {
        MarketList: GetMarket,
        MarketDetail: MarketDetail,
    },
    {
        initialRouteName: 'MarketList',
    },
);

const AppContainer = createAppContainer(RootStack);

export default class Market extends Component {
    render() {
        return <AppContainer/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
