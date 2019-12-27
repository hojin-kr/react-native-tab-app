import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, Image, Button} from 'react-native';

export class GetMarket extends Component {
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
                <Button title="Go to screen"/>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) =>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: 80, height: 80, flex: 1, margin: 10,}}/>
                            <View style={{flex: 2, margin: 10}}>
                                <Text style={{fontSize: 20}}>{item.name}</Text>
                                <Text sytle={{fontSize: 10}}>{item.description}</Text>
                            </View>
                        </View>}
                />
            </View>
        );
    }
}

export default function NewScreen() {
    return (
        <GetMarket/>
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
