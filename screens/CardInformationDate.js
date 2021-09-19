import React, {useState} from 'react';
import {
  
  StyleSheet,
  ScrollView, 
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Platform,
  Button,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Appbar } from 'react-native-paper';

const CardInformationDate= ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
    
  return (
     <SafeAreaView style={{flex:1}}>
       <ScrollView>
       <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="Card Information" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
      <View style={{top:10,alignSelf:'center'}}>
           <TouchableOpacity>
         <View style={{display:'flex',flexDirection:'row'}}>
           <View >
           <Icon  name="lock" size={20} color="#715DFF" />
           </View>
         <Text style={{color:'#715DFF'}}>Data Protection</Text>
       </View>
         </TouchableOpacity>
         </View>
         <View style={{left:20,top:10}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Card Number<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="1249 2011 1041 4241"  
                     
                /> 
                </View>
                <View style={{left:20,top:10}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Expiration Date<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="09/22"  
                     
                /> 
                </View>
                <View style={{left:20,top:10}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>CCV<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="041"  
                     
                /> 
                </View>
                <View style={{top:10,width:'80%',alignSelf:'center',}}>
        <Button style={{borderRadius:10}} onPress={showDatepicker} title="date picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CardInformationDate;
