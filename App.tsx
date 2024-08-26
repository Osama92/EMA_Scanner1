
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import {CameraView, Camera} from  'expo-camera'




 function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [label, setLabel] = useState('')

 


  var obj = []
    //label: []
 

 //var json = 'blow'


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // obj.push(data)
    //  var json = obj
    //   if (label.includes(json)) {
    //     alert('Label Already scanned. Proceed to next label.')
    //   } else {
    //     setLabel(label + '\n' +  json )
    //   }
      
    console.log(label)
    Alert.alert(label)
  };



  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }



  return (

    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
         
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned &&  
      <View style={{flexDirection:'column', width:'100%', height:90,marginBottom:20, justifyContent:'space-between'}}>
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
        
        </View>
        }
    
    </View>
  );
}
export default App