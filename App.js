import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Pressable } from 'react-native';
import react, { useState } from 'react';

export default function App() {
  const [visivel,setVisivel]=useState(true)
  return (

    <View style={Styles.container}>

      {/* Modal */}
      
      
      <View>
            <Modal visible={visivel} animationType='fade' transparent={false} >
                <View style={Styles.modalS}>
                  <View style={Styles.modalC}>
                      <Text>A Temperatura do ambiente é </Text>
                  </View>
                  <View style={Styles.modalC}>
                      <Pressable  style={Styles.modalBtn} onPress={()=>setVisivel(!visivel)}>
                          <Text style={Styles.modalBtnT}>Fechar</Text>
                      </Pressable>
                  </View>
                </View>
            </Modal>
      </View>

      <Text>teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalS:{
    margin:20,
    padding:20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalC:{
    margin:10,
    padding:10,
  },
  modalBtn:{
      borderWidth:1,
      borderColor:'#45f',
      borderRadius:10
  },
  modalBtnT:{
    padding:10,
    margin:2,
    color:'#45f',
  }
});
