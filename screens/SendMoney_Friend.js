import React, { useState } from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button,
    SafeAreaView
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/AntDesign';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';


const SendMoney_Friend = ({ navigation }) => {

    return (
        <SafeAreaView style={{ backgroundColor:'white', flex: 1,height:deviceHeight,width:deviceWidth }}>
    <View style={{  width:'100%',height:deviceHeight*0.10, paddingHorizontal:15, flexDirection:'column'}}>

<View style={{ width:'100%', paddingHorizontal:5,  height:deviceHeight*0.07,marginTop:5,justifyContent:'center', flexDirection:'row'}}>

<View style={{justifyContent:'center',height:'100%',}}>
<TouchableOpacity
style={{alignSelf:'flex-start'}}
 onPress={() => {
                    navigation.navigate('AddFriends_Card');
                }}
>
<Image style={{width:26,height:26, alignSelf:'flex-start',}} source={require('../images/Buttons_Back.png')} />
</TouchableOpacity>

</View>

<View style={{justifyContent:'center',width:'90%', height:'100%', }}>
<Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:21,fontWeight:'bold'}}>Send Money</Text>
</View>

<View style={{justifyContent:'center', height:'100%',}}>
<TouchableOpacity
style={{alignSelf:'flex-end'}}
 onPress={() => {
                    navigation.navigate('CardImage');
                }}
>
<Image style={{width:26,height:26, alignSelf:'flex-end', }} source={require('../images/Buttons_Close.png')} />
</TouchableOpacity>

</View>



</View>
 <View style={{marginTop:-5, justifyContent:'center', flexDirection:'row'}}>
           <Image style={{width:11,height:11,resizeMode:'contain', alignSelf:'center',}} source={require('../images/Icons_DataProtection.png')} />
         <Text style={{color:'#715DFF',fontSize:11, fontWeight:'bold', marginLeft:2}}>Data Protection</Text>
       </View>
         </View>
  
           
           
           
           








           
           
           
           
           
           
           
            {/* <Appbar.Header style={{ backgroundColor: 'white' }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('AddFriends_Card');
                }}><Appbar.BackAction style={{ color: 'black', }} /></TouchableOpacity>
                <Appbar.Content style={{ alignItems: 'center' }} title="Send Money" />
                <View style={{ display: 'flex', flexDirection: 'row', right: 10 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('CardImage');
                    }}>
                        <View >
                            <Icon name="cross" size={30} color="black" />
                        </View>
                    </TouchableOpacity>

                </View>

            </Appbar.Header> */}
            {/* <View style={{backgroundColor:'white', top: 10, paddingHorizontal:15, alignSelf: 'center' }}>
                <TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View >
                            <Iconn name="lock" size={20} color="#715DFF" />
                        </View>
                        <Text style={{ color: '#715DFF' }}>Data Protection</Text>
                    </View>
                </TouchableOpacity>
            </View> */}

            <View style={{backgroundColor:'white', paddingHorizontal:15, display: 'flex', }}>
                <View style={{ marginLeft:10, top: 2 }}>
                    <Text style={{fontWeight:'bold', fontSize: 12 ,color:'#4d7099'}}>
                        Recipient
                </Text>
                </View>
                <View style={{ display: 'flex', top: 10,paddingHorizontal:10,  flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                            style={{borderRadius: 400/ 2, width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                    <View style={{ height: '100%', width: '60%', left: 30 }}>
                        <Text style={{fontSize:15}} >
                            Kelly Cruz 
                    </Text>
                    <Text style={{fontSize:13,color:'#4d7099'}} >
                         star_kellyJ
                    </Text>
                    </View>
                </View>
                <View style={{ top: 30, marginTop:0, paddingHorizontal:7 }}>
                    <Text style={{marginLeft:8, fontSize: 14,marginBottom:5, fontWeight:'bold', color:'#4d7099'}}>
                        User ID<Text style={{color:'red',marginBottom:5, fontSize:10,}}>*</Text></Text>
                   

                        <TextInput  
                    style={{width:'100%',height:Platform.OS === 'ios' ? 35 : 30,  color:'black',  fontSize:14,paddingVertical:2,borderColor:'grey', borderWidth:0.3,borderRadius:20,paddingHorizontal:15,}}  
                    placeholder="223"
                    placeholderTextColor='black'
                    onChangeText={
                            (value) => setcardname(value)

                        }
                     
                /> 
                   
                

                    <Text style={{marginTop:10, marginBottom:5,marginLeft:8, fontSize: 14,fontWeight:'bold', color:'#4d7099' }}>
                        Amount
                        <Text style={{color:'red',fontSize:13}}>*</Text></Text>
              
                    <View style={{   flexDirection: 'row', width:'100%',  }}>
                        
                        
                    <TextInput  
                    style={{width:'25%',height:Platform.OS === 'ios' ? 35 : 30,  color:'black',borderColor:'grey',  fontSize:14,paddingVertical:2, borderWidth:0.3,borderRadius:20,paddingHorizontal:10,}}  
                    placeholderTextColor='black'
                    placeholder="EUR"
                            onChangeText={
                                (value) => setcardname(value)

                            }
                     
                /> 
                        
                        <View style={{width:'2%'}}></View>
                        
{/*                         
                        <TextInput

                            style={{ width: '20%', paddingHorizontal: 10, right: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 20, fontSize: 10 }}
                            placeholder="EUR"
                            onChangeText={
                                (value) => setcardname(value)

                            }

                        /> */}


                        <TextInput  
                    style={{width:'73%', height:Platform.OS === 'ios' ? 35 : 30, color:'black',borderColor:'grey',  fontSize:14,paddingVertical:2, borderWidth:0.3,borderRadius:20,paddingHorizontal:10,}}  
                    placeholderTextColor='black'
                    placeholder="120,00"
                            onChangeText={
                                (value) => setcardname(value)

                            }
                     
                /> 
                        {/* <TextInput

                            style={{ width: '70%', paddingHorizontal: 10, right: 20, alignSelf: 'center', borderWidth: 1, borderRadius: 20, fontSize: 10 }}
                            placeholder="120,00"
                            onChangeText={
                                (value) => setcardname(value)

                            }

                        /> */}
                    </View>
                </View>
            </View>
            <View style={{ top: 150 ,marginHorizontal:20,  }}>
                <TouchableOpacity style={{ justifyContent:'center',  marginTop: 40, marginBottom: 10, }}>
                <Text style={{alignSelf:'center', color:'#4D7099',fontSize:10,}}><Text style={{fontWeight:'bold'}}>Read</Text> <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Privacy Policy </Text><Text> and </Text><Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Terms & Conditions</Text> </Text>
                </TouchableOpacity>
                <View style={{ top: 0, backgroundColor: '#715DFF',marginTop:15, height: 35, width: '100%', borderRadius: 20, }}>
                    <TouchableOpacity

                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ color: 'white' }}>Send</Text>

                    </TouchableOpacity>
                </View>
            </View>
            <BottomTabs />
        </SafeAreaView>
    );
};
export default SendMoney_Friend;
