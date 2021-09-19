import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView, 
  View,
  Image,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  
  Button
} from 'react-native';
import moment, { RFC_2822 } from 'moment';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';
import RNDateFormat from 'react-native-date-format';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
const image=require('../images/debitCard.png');


const CardInformation= ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Expdate, setExpdate] = useState('09/22')
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
 
  const handleConfirm = (date) => {
    let dat=date.toString();
    console.warn("A date has been picked: ", dat);
    let d=moment(dat).format('MM/yy');

    setExpdate(d);
    hideDatePicker();
  };
    
  return (
     <SafeAreaView style={{flex:1,backgroundColor: 'white',flex: 1 , width:deviceWidth,height:deviceHeight}}>
 <View style={{  width:'100%',height:deviceHeight*0.08, paddingHorizontal:13, flexDirection:'column'}}>
   
   <View style={{ width:'100%', paddingHorizontal:5,justifyContent:'center', height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
   
   <View style={{justifyContent:'center', height:'100%',}}>
   <TouchableOpacity
   style={{alignSelf:'flex-start'}}
    onPress={() => {
                       navigation.goBack();
                   }}
   >
   <Image style={{width:24,height:24, alignSelf:'flex-start',}} source={require('../images/Buttons_Back.png')} />
   </TouchableOpacity>
   
   </View>
   <View style={{justifyContent:'center', width:'90%',height:'100%', }}>
   <Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:18,fontWeight:'bold'}}>Card Information</Text>
   </View>
   
   <View style={{justifyContent:'center', height:'100%',}}>
   <TouchableOpacity
   style={{alignSelf:'flex-end'}}
    onPress={() => {
      navigation.navigate('CardImage');

                   }}
   >
<Image style={{width:25,height:25, alignSelf:'flex-end', }} source={require('../images/Buttons_Close.png')} />
   </TouchableOpacity>
   
   </View>
   
   
   
   </View>
 
 
   <View style={{justifyContent:'center', marginTop:-5, flexDirection:'row'}}>
           <Image style={{width:11,height:11, alignSelf:'center',resizeMode:'contain'}} source={require('../images/Icons_DataProtection.png')} />
         <Text style={{color:'#715DFF',fontSize:10,fontWeight:'bold', marginLeft:2}}>Data Protection</Text>
       </View>
   
            </View>
    

{/* <View style={{  width:'100%',height:deviceHeight*0.085, flexDirection:'column'}}>

<View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
<View style={{justifyContent:'center',width:'100%', height:'100%',position:'absolute'}}>
<TouchableOpacity
   style={{alignSelf:'flex-start'}}

 onPress={() => {
  navigation.goBack();
                }}
>
<Image style={{width:25,height:25, alignSelf:'flex-start',marginLeft:10,}} source={require('../images/Buttons_Back.png')} />
</TouchableOpacity>

</View>
<View style={{justifyContent:'center',width:'100%',height:'100%', position:'absolute'}}>
<Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:20,fontWeight:'bold'}}>Card Information</Text>
</View>

<View style={{justifyContent:'center',width:'100%', height:'100%',position:'absolute'}}>
<TouchableOpacity
 onPress={() => {
                    navigation.navigate('CardImage');
                }}
>
<Image style={{width:25,height:25, alignSelf:'flex-end',marginRight:10, }} source={require('../images/Buttons_Close.png')} />
</TouchableOpacity>

</View>



</View>
 <View style={{justifyContent:'center', marginTop:-5, flexDirection:'row'}}>
           <Image style={{width:11,height:11, alignSelf:'center',resizeMode:'contain'}} source={require('../images/Icons_DataProtection.png')} />
         <Text style={{color:'#715DFF',fontSize:10,fontWeight:'bold', marginLeft:2}}>Data Protection</Text>
       </View>
         </View>
       */}
       <ScrollView>
      {/* <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="Card Information" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
       */}
      {/* <View style={{top:20}}>
           <TouchableOpacity>
         <View style={{display:'flex',alignSelf:'center',flexDirection:'row'}}>
           <View >
           <Icon  name="lock" size={20} color="#715DFF" />
           </View>
         <Text style={{color:'#715DFF'}}>Data Protection</Text>
       </View>
         </TouchableOpacity>
         </View> */}


         <View style={{left:20,top:30}}>
             <Text style={{marginBottom:5,marginLeft:8, fontWeight:'bold',fontSize:14,color:'#4D7099'}}>Card Number<Text style={{color:'red'}}>*</Text></Text>
           
             <TextInput  
                    style={{width:'90%',height: Platform.OS === 'ios' ? 35 : 30, color:'black', fontSize:14,paddingVertical:2, borderWidth:0.6,borderRadius:20,paddingHorizontal:15,}}  
                    placeholder="1249 2011 1041 4241"  
                    placeholderTextColor='black'

                     
                /> 
                </View>
                <View style={{left:20,top:30}}>
             <Text style={{fontWeight:'bold',marginLeft:1,marginBottom:5, fontSize:14,marginTop:5, paddingHorizontal:10, color:'#4D7099'}}>Expiration Date<Text style={{color:'red'}}>*</Text></Text>
           
           
           <TouchableOpacity
                               style={{paddingHorizontal:10, paddingVertical:5, width:'90%',justifyContent:'center', borderWidth:0.5,borderRadius:20,height:Platform.OS === 'ios' ? 35 : 30, fontSize: 14}}  
                               onPress={showDatePicker}

           >
<Text style={{color:'black',fontSize:14, paddingHorizontal:7}}>{Expdate}</Text>

           </TouchableOpacity>
             {/* <TextInput  
            //  onPress={()=> }
            onPress={showDatePicker}
                    style={{width:'90%', borderWidth:1,borderRadius:20, fontSize: 16}}  
                    placeholder="09/22"  
                     
                />  */}
                 <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
                </View>

                <View style={{left:20,top:30}}>
             <Text style={{fontWeight:'bold',marginBottom:5, marginLeft:8, fontSize:14,marginTop:5, color:'#4D7099'}}>CCV<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{width:'90%',height:Platform.OS === 'ios' ? 35 : 30, color:'black', fontSize:14,paddingVertical:2, borderWidth:0.6,borderRadius:20,paddingHorizontal:15,}}  
                    placeholder="041"  
                    placeholderTextColor='black'

                     
                /> 
                </View>

                <View>
                <View style={{marginTop:40,marginBottom:10, left:40}}>
         </View>
         {/* <View style={{top:0,backgroundColor:'#715DFF',left:20, height:40,width:'85%',borderRadius:20,}}>
     <TouchableOpacity
      onPress={() => {
              navigation.navigate('CardInformationFirst');
            }}
      style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white'}}>Add Payment Method</Text>
         
     </TouchableOpacity>
     </View> */}
     </View>
     </ScrollView>
     <View>
                <TouchableOpacity style={{marginTop:40,marginBottom:10, }}>
         <Text style={{alignSelf:'center', color:'#4D7099',fontSize:10,}}><Text style={{fontWeight:'bold'}}>Read</Text> <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Privacy Policy </Text><Text> and </Text><Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Terms & Conditions</Text> </Text>
         </TouchableOpacity>
         <View style={{marginTop:10,backgroundColor:'#715DFF',left:20, height:Platform.OS === 'ios' ? 35 : 35,width:'90%',borderRadius:20,}}>
     <TouchableOpacity
      onPress={() => {
              navigation.navigate('CardInformationFirst');
            }}
      style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white',fontWeight:'bold'}}>Add Payment Method</Text>
         
     </TouchableOpacity>
     </View>
     </View>
     
       
     <BottomTabs/>
    </SafeAreaView>
  );
};
export default CardInformation;
