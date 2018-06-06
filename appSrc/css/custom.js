import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
 
    MainContainer :{
     flex:1,
     alignItems: 'center',
     marginTop: (Platform.OS == 'ios') ? 20 : 0
    },

    ButtonContainer :{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0
       },
     
    Alert_Main_View:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor : "#2471A3", 
      height: 200 ,
      width: '90%',
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius:7,
    },

    Alert_header:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#2471A3", 
        height: 100 ,
        width: '100%',
        borderWidth: 1,
        borderColor: '#fff',
      },
      Text_Header:{
        fontSize: 25, 
        color: "#fff",
        textAlign: 'center',
        padding: 10,
      },

    Alert_Title:{
      fontSize: 25, 
      color: "#fff",
      textAlign: 'center',
      padding: 10,
      height: '28%'
    },
    
    Alert_Message:{
        fontSize: 20, 
        color: "#fff",
        textAlign: 'center',
        padding: 10,
        height: '40%'
      },
    
    buttonStyle: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
       
    TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 18,
        marginTop: -5,
    }
     
    });