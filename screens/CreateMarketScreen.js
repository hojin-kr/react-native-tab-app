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
        function createMarket(name, description) {
            fetch('http://15.165.91.254:3000/create', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": name,
                    "date": "2019-12-12",
                    "description": description,
                    "imageSrc": "https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png",
                    "favorite": "fff",
                    "host" : "hostId"
                }),
            });
            alert("call create market");
        }
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
                    createMarket(this.state.name, this.state.description);
                }}
                title="Sending"
            />
        </View>
    );
  }
}