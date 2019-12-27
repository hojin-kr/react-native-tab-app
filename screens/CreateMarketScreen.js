import React, { Component } from 'react';
import {View, Text, TextInput, Button} from 'react-native'

export default class CreateMarket extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
        };
    }
  render() {
    return (
        <View style={{padding: 10}}>
            <Text style={{fontSize: 30, marginTop: 50, marginBottom: 20, fontWeight: '700'}}>Create Market</Text>
            <Text style={{fontSize: 20}}>market name</Text>
            <TextInput style={{height: 30, fontSize: 20, marginBottom: 10, marginTop: 10}} placeholder="name" onChangeText={(name) => this.setState({name})} value={this.state.name}/>
            <Text style={{fontSize: 20 }}>description</Text>
            <TextInput style={{height: 30, fontSize: 20, marginBottom: 10, marginTop: 10}} placeholder="description" onChangeText={(description) => this.setState({description})} value={this.state.description}/>
            <Text>{this.state.name}{this.state.description}</Text>
            <Button
                onPress={() => {
                    alert('Sending for Create Market!');
                }}
                title="Sending"
            />
        </View>
    );
  }
}