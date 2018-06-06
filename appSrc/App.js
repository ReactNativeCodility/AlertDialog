
import React, { Component } from 'react';
import {
  ToastAndroid, Text, Modal, Button, 
  TouchableOpacity, Alert, StyleSheet, View
} from 'react-native';
import custom from './css/custom';
import AlertDialog from './Utils/AlertDialog';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {Alert_Visibility: false};
  }

  showAlertDialog(){
    this.setState({Alert_Visibility: true});
  }

  showToast(){
    ToastAndroid.show('Cancel Clicked !', ToastAndroid.SHORT);    
  }

  render() {
    return (
      <View style={custom.MainContainer}>
 
        <View style={custom.Alert_header}>
              <Text style={custom.Text_Header}>Android Codility</Text>
        </View>

        <Modal
          visible={this.state.Alert_Visibility}
          transparent={false}
          animationType={"fade"}
          onRequestClose={ () => { this.showAlertDialog(!this.state.Alert_Visibility)} } >
           
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={custom.Alert_Main_View}>
                    <Text style={custom.Alert_Title}>Custom Alert Dialog Title.</Text>

                    <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} />

                    <Text style={custom.Alert_Message}> Alert Dialog Message. </Text>

                    <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />

                    <View style={{flexDirection: 'row', height: '30%'}}>

                        <TouchableOpacity 
                            style={custom.buttonStyle}
                            onPress={() => {
                              this.setState({Alert_Visibility:false});
                            }}
                            activeOpacity={0.7} 
                        >
                            <Text style={custom.TextStyle}> OK </Text>
                        </TouchableOpacity>

                        <View style={{ width: 1, height: '100%', backgroundColor: '#fff'}} />

                        <TouchableOpacity
                            style={custom.buttonStyle} 
                            onPress={() => {
                            this.showToast();
                            this.setState({Alert_Visibility: false});
                          }}
                            activeOpacity={0.7} 
                        >
                            <Text style={custom.TextStyle}> CANCEL </Text>                
                        </TouchableOpacity>

                    </View>             
                </View>
            </View>
        </Modal>
            <View style={custom.ButtonContainer}>                 
                <Button color="#2471A3" onPress={() => { this.showAlertDialog(true) }} title="Show Custom Alert Dialog" />
                <View style={{ width: '100%', height: '1%'}} />
                <Button color="#2471A3" onPress={() => { new AlertDialog.defaultAlert() }} title="Show Normal Alert Dialog" />      
            </View>
      </View>
    );
  }
}
