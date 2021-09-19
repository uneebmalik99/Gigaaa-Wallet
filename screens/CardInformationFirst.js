import React, { useState } from 'react';
import {
  SafeAreaw,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
  SafeAreaView
} from 'react-native';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';
import { Checkbox } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';



const CardInformationFirst = ({ navigation }) => {

  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [cardname, setcardname] = useState('');
  const [billingAddress, setbillingAddress] = useState('');
  const [cardholder, setcardholder] = useState('');
  const [validate, setvalidate] = useState('')

  
  const checkTextInput = () => {
    //Check for the CardName TextInput

    
    if (cardname == "") {
      alert('Please Enter Card Name');
      return;
    }
    //Check for the cheked
    if (checked == "") {
      alert('Please make sure checked');
      return;
    }
    //Check for the chekedd
    if (checkedd == "") {
      alert('Please make sure checked');
      return;
    }
    //Check for the billingadress
    if (billingAddress == "") {
      alert('Please Enter Billing Adress');
      return;
    }
    //Check for the cardholder
    if (cardholder == "") {
      alert('Please Enter Card Holder');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    navigation.navigate('CardImage')
  };
  return (
    <View style={{height:deviceHeight,width:deviceWidth }}>
    <SafeAreaView style={{ flex: 1, }}>
    <View style={{  width:'100%',height:deviceHeight*0.08, paddingHorizontal:13, flexDirection:'column'}}>
   
  


<View style={{ width:'100%',justifyContent:'center', paddingHorizontal:5, height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>

<View style={{width:'6%' , }}>

</View>
<View style={{justifyContent:'center',width:'90%',height:'100%', }}>
<Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:20,fontWeight:'bold'}}>Card Information</Text>
</View>

<View style={{justifyContent:'center', height:'100%',}}>
<TouchableOpacity
 onPress={() => {
                    navigation.navigate('CardImage');
                }}
>
<Image style={{width:25,height:25, alignSelf:'flex-end', }} source={require('../images/Buttons_Close.png')} />
</TouchableOpacity>

</View>




</View>








 <View style={{justifyContent:'center',marginTop:-5, flexDirection:'row'}}>
           <Image style={{width:11,height:11, alignSelf:'center', resizeMode:'contain'}} source={require('../images/Icons_DataProtection.png')} />
         <Text style={{color:'#715DFF',fontSize:10,fontWeight:'bold', marginLeft:2}}>Data Protection</Text>
       </View>
         </View>
      
      <ScrollView>

        {/* <Appbar.Header style={{ backgroundColor: 'white' }}>
          <Appbar.BackAction onPress={() => {
            navigation.navigate('CardInformation');
          }} />
          <Appbar.Content style={{ alignItems: 'center' }} title="Card Information" />
          <TouchableOpacity>
            <Appbar.Action icon="dots-vertical" />
          </TouchableOpacity>

        </Appbar.Header> */}
        {/* <View style={{ top: 10, alignSelf: 'center' }}>
          <TouchableOpacity>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View >
                <Icon name="lock" size={20} color="#715DFF" />
              </View>
              <Text style={{ color: '#715DFF' }}>Data Protection</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <View style={{ left: 20, top: 30 }}>
          <View><Text style={{ fontWeight: 'bold', fontSize: 14,marginLeft:8, marginBottom:5, marginTop: 5, color: '#4D7099' }}>Card Name <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput

              style={{ width: '90%', paddingHorizontal: 15, borderWidth: 0.5, height:Platform.OS === 'ios' ? 35 : 30, borderRadius: 20, fontSize: 14, paddingVertical:2 }}
              placeholder="gigaaa smart card"
              placeholderTextColor='black'
              onChangeText={
                (value) => setcardname(value)
              }
            />
          </View>
          <View style={{ display: 'flex',marginTop:2, flexDirection: 'row' }}>
            <Checkbox
            
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);

              }}
            />

            <Text style={{alignSelf:'center', textAlignVertical:'center',}}>Mark as my default payment method </Text>
          </View>


          <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft:8, marginTop: 5, color: '#4D7099' }}>Billing Address<Text style={{ color: 'red' }}>*</Text></Text>
          <View style={{ display: 'flex',marginBottom:2, flexDirection: 'row' }}>
            <Checkbox
              status={checkedd ? 'checked' : 'unchecked'}
              
              onPress={() => {
                setCheckedd(!checkedd);
              }}
            />

            <Text style={{alignSelf:'center',  textAlignVertical:'center'}}>Use my billing address from my profile </Text>
          </View>
          <View>
            <TextInput
              style={{ width: '90%', paddingVertical:2,paddingHorizontal: 15, borderWidth: .5,height:Platform.OS === 'ios' ? 35 : 30, borderRadius: 20, fontSize: 14 }}
              placeholder="Via garibaldi 12,20159 Milano MI"
              placeholderTextColor='black'
              onChangeText={
                (value) => setbillingAddress(value)
              }
            />
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft:8, marginTop: 5,marginBottom:5, color: '#4D7099' }}>Card Holder<Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              style={{ marginBottom: 50, width: '90%', paddingHorizontal: 15, borderWidth: 0.5,height:Platform.OS === 'ios' ? 35 : 30, borderRadius: 20, fontSize: 14,paddingVertical:2 }}
              placeholder="John Doe"
              placeholderTextColor='black'
              onChangeText={
               
                (value) => setcardholder(value)
              }

            />
          </View>
        </View>
        
        


      </ScrollView>
     
      <View>
                
         <View style={{marginTop:10,backgroundColor:'#715DFF',left:20, height:Platform.OS === 'ios' ? 35 : 35,width:'90%',borderRadius:20,}}>
     <TouchableOpacity
         onPress={
              checkTextInput}
      style={{height:'100%',width:'100%',alignItems:'center',  justifyContent:'center'}}>
   
   
         <Text style={{color:'white',fontWeight:'bold'}}>Next</Text>
         
     </TouchableOpacity>
     </View>
     </View>
      <BottomTabs />
    </SafeAreaView>
    </View>
  );
};
export default CardInformationFirst;
