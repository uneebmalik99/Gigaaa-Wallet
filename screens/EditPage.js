import React, { useRef,useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Modal,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Checkbox, } from 'react-native-paper';
import {Value} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';
import { showAlert, closeAlert } from "react-native-customisable-alert";
import RBSheet from "react-native-raw-bottom-sheet";
import { useEffect } from "react";

const image = require('../images/tebbankaccount.png');

const Lockimage = require('../images/Icons_DataProtection.png');

const EditPage = ({navigation,route}) => {
  const{editdata} = route.params;

  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  const [bg, setbg] = useState(false)
  const [yesno, setyesno] = useState(false)
  const [yesnodata , setyesnodata] = useState(false)
const [data, setdata] = useState(editdata)
const [cardname, setcardname] = useState(data.CardName)
const [cardnumber, setcardnumber] = useState(data.account)
const [cardbill, setcardbill] = useState('Via garibaldi 12,20159 Milano M')


const refRBSheet = useRef();









  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1,height:deviceHeight,width:deviceWidth}}>
    
    
    <Modal
          transparent={true}
          animationType={'none'}
          visible={yesno}
          onRequestClose={() => {
            console.log('close modal');
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingVertical: 10,
              height:deviceHeight,
              backgroundColor:'#0006',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '80%',
                flexDirection: 'column',
                shadowColor: 'red',
              }}>
    
              <View
                style={{
                  
                  width: '100%',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  height:108,
                }}>

{data.nickname === 'BNL' ||data.nickname === 'TEB' || data.nickname === 'Bitcoin Wallet' ||data.nickname === 'gigaaa Shares' || data.nickname === 'gigaaa Nuts'  ? <Text  style={{
                    paddingHorizontal: 5,
                    fontSize: 16,
                    marginTop:8,
                    paddingVertical:1,
                    textAlign: 'center',
                    color: 'grey',
                  }}>Are you Sure You want to Clear Details of  {data.CardName} </Text> :   <Text
                  style={{
                    paddingHorizontal: 5,
                    fontSize: 16,
                    marginTop:8,
                    textAlign: 'center',
                    color: 'grey',
                  }}>
                  {' '}

                  

                  Are you sure want to delete {data.CardName}?
                </Text> }
             
           <View
           
           style={{flexDirection:'row',justifyContent:'center',width:'100%', marginTop:10}}>



           <TouchableOpacity
                  onPress={() => {setcardname('');setcardnumber(''); setcardbill(''); setyesno(false)}}

                  style={{
                    alignSelf: 'center',
                    width:'50%',
                    marginTop:10,
                    borderTopWidth:0.4,
                    borderRightWidth:0.4,

                    paddingVertical: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 15,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {' '}
                    Yes{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setyesno(false)}
                  style={{
                    width:'50%',
                    borderTopWidth:0.4,
                    marginTop:10,

                    alignSelf: 'center',
                    paddingVertical: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 15,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    {' '}
                    No{' '}
                  </Text>
                </TouchableOpacity>
             
           </View>
           
           
              </View>

              

              {/* <View
                style={{
                  paddingVertical: 10,
                  width: '100%',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  height: 50,
                  flexDirection:'row',
                }}>
                <TouchableOpacity
                  // onPress={() => this.setState({error: false})}
                  style={{
                    borderRadius: 10,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 13,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' '}
                    CLOSE{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => this.setState({error: false})}
                  style={{
                    borderRadius: 10,
                    marginLeft:10,
                    alignSelf: 'center',
                    backgroundColor: 'red',
                    paddingVertical: 4,
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      fontSize: 13,
                      textAlign: 'center',
                      color: 'white',
                    }}>
                    {' '}
                    CLOSE{' '}
                  </Text>
                </TouchableOpacity>
             
              </View> */}
           
            </View>
          </View>
        </Modal>

    <Modal
          transparent={true}
          animationType={'none'}
          visible={bg}
          onRequestClose={() => {
            console.log('close modal');
          }}>
          <View
            style={{
              flex: 1,
              width:deviceWidth,
              justifyContent:'flex-end',
              paddingVertical: 40,
              height:deviceHeight,
              backgroundColor: '#0006',
              flexDirection: 'column',
              alignItems:'baseline',
              paddingHorizontal:15,
            }}>
     



                <TouchableOpacity
                  onPress={() => {setbg(false),setyesno(true)}}
                  style={{
                    borderRadius: 10,
                    width:"100%",
                    height:60,
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    alignItems:"center",
                    justifyContent:'center',
                    paddingHorizontal: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: 'center',
                      color: 'red',
                    }}>
                    
                    Delete Card
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setbg(false)}
                  style={{
                    borderRadius: 10,
                    width:"100%",
                    height:60,
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    alignItems:"center",
                    justifyContent:'center',
                    paddingHorizontal: 4,
                    marginTop:10,
                    
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: 'center',
                      color: '#1082ff',
                    }}>
                    
                    Cancel
                  </Text>
                </TouchableOpacity>
          
          
          </View>
        </Modal>
        
        <View style={{  width:'100%',height:deviceHeight*0.08,paddingHorizontal:13, flexDirection:'column'}}>
   
   <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>

   




   <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
     
   <TouchableOpacity
   style={{alignSelf:'flex-start',}}
    onPress={() => {
                       navigation.goBack();
                   }}
   >
   <Image style={{width:24,height:24, alignSelf:'flex-start',}} source={require('../images/Buttons_Back.png')} />
   </TouchableOpacity>
   
   </View>


   <View style={{justifyContent:'center',width:'60%',height:'100%', }}>
   <Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:20,fontWeight:'bold'}}>{data.nickname}</Text>
   </View>
   
   <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
   <TouchableOpacity
   style={{alignSelf:'flex-end'}}
    onPress={() => {
      setbg(true)
                   }}
   >
   <Image style={{width:26,height:26, alignSelf:'flex-end', }} source={require('../images/Buttons_Options.png')} />
   </TouchableOpacity>
   
   </View>
   
   
   
   </View>
   
            </View>
     
            <ScrollView style={{paddingHorizontal:15, backgroundColor:'white'}}>
    
            <View style={{paddingHorizontal:40, alignSelf:'center', marginTop:0,width:'100%'}}>
          <ImageBackground    imageStyle={{ borderRadius: 10,  resizeMode: 'contain'}}
 source={data.image} style={{ height: 185,  width: '100%', }}>

 <View  style={{padding:10, height:'100%',width:'100%'}}>
          
             <View style={{paddingVertical:12, }}>
              <Text style={{color: 'white',fontWeight:'bold',marginTop:2, fontSize: 13}}>{data.CardName}</Text>
              <Text style={{color: 'white', fontSize: 10}}>{data.account}</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  paddingTop:15,
                  fontWeight:'bold',
                  textAlign: 'right',
                  paddingHorizontal:2,
                  bottom: 50,
                }}>
                {data.amount}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  textAlign: 'right',
                  paddingHorizontal:2,
                  bottom: 50,
                }}>
                {data.currency}
              </Text>
            </View>


          {data.shares !== '' ? <View style={{top:-10}}>
              <Text style={{color: 'white', fontWeight:'bold',fontSize: 17}}>
              {data.E_amount}
              
              </Text>
              <Text style={{color: 'white', fontSize: 13}}>{data.E_currency}</Text>
              <Text style={{color: 'white', fontSize: 10}}>{data.shares}</Text> 

          </View> : <View >
              <Text style={{color: 'white', fontWeight:'bold',fontSize: 17}}>
              {data.E_amount}
              
              </Text>
              <Text style={{color: 'white', fontSize: 10}}>{data.E_currency}</Text>

          </View>}


            </View>
          </ImageBackground>
     
     
        </View>

        <View style={{marginTop:10, justifyContent:'center', flexDirection:'row'}}>
           <Image style={{width:12,height:12,resizeMode:'contain', alignSelf:'center',}} source={require('../images/Icons_DataProtection.png')} />
         <Text style={{color:'#715DFF',fontSize:12, fontWeight:'bold', marginLeft:2}}>Data Protection</Text>
       </View>
        
         <View style={{ paddingHorizontal:5, alignSelf: 'center', width: '100%', marginTop:15, borderRadius: 20, }}>
        
         


           <Text style={{ fontWeight: 'bold', fontSize: 14,marginLeft:8, marginBottom:5, marginTop: 5, color: '#4D7099' }}>Card Name <Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput

              style={{ width: '100%', paddingHorizontal: 15,height:Platform.OS === 'ios' ? 35 : 30, borderWidth: 0.5,  borderRadius: 20, fontSize: 14, paddingVertical:5 }}
              // placeholder={data.CardName}
              placeholderTextColor='black'
              value={cardname}
              onChangeText={
                (value) => setcardname(value)
              }
            />

<View style={{ display: 'flex', marginTop:2, flexDirection: 'row' }}>
            <Checkbox
              color='#715dff'

              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);

              }}
            />

            <Text style={{alignSelf:'center', textAlignVertical:'center'}}>Mark as my default payment method </Text>
          </View>




          <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft:8,marginBottom:5, marginTop: 5, color: '#4D7099' }}>Card Number<Text style={{ color: 'red' }}>*</Text></Text>
            <TextInput
              style={{ width: '100%', paddingVertical:5,paddingHorizontal: 15,height:Platform.OS === 'ios' ? 35 : 30, borderWidth: .5, borderRadius: 20, fontSize: 14 }}
              // placeholder={data.account}
              placeholderTextColor='black'
              value={cardnumber}
              onChangeText={
                (value) => setcardnumber(value)
              }
            />
          <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft:8,marginBottom:5, marginTop: 5, color: '#4D7099' }}>Billing Address<Text style={{ color: 'red' }}>*</Text></Text>





          <View style={{  flexDirection: 'row' }}>
            <Checkbox

           
              status={checkedd ? 'checked' : 'unchecked'}

              color='#715dff'
              
              onPress={() => {
                setCheckedd(!checkedd);
              }}
            />

            <Text style={{ alignSelf:'center', textAlignVertical:'center'}}>Use my billing address from my profile </Text>
          </View>



          <TextInput
              style={{ width: '100%', paddingVertical:5,paddingHorizontal: 15,height:Platform.OS === 'ios' ? 35 : 30, borderWidth: .5, borderRadius: 20, fontSize: 14 }}
              // placeholder="Via garibaldi 12,20159 Milano MI"
              placeholderTextColor='black'
              value={cardbill}

              onChangeText={
                (value) => setcardbill(value)
              }
            />
         
          
        


        
            <TouchableOpacity  >
         <Text style={{alignSelf:'flex-start', marginTop:10, marginLeft:5, color:'#4D7099',fontSize:10.5,}}><Text style={{fontWeight:'bold'}}>Read</Text> <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Privacy Policy </Text><Text> and </Text><Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Terms & Conditions</Text> </Text>
         </TouchableOpacity>


         <View style={{marginTop:40,backgroundColor:'#715DFF', height:Platform.OS === 'ios' ? 35 : 35,width:'100%',borderRadius:20,}}>
     <TouchableOpacity
      onPress={() => {
              navigation.navigate('CardImage');
            }}
      style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white',fontWeight:'bold'}}>Save</Text>
         
     </TouchableOpacity>
     </View>






      


         <Text></Text>
         
         <Text></Text>

         <Text></Text>

         <Text></Text>

<Text></Text>


         
           {/* <FlatList
                         contentContainerStyle={{ paddingBottom: 50}}
                         contentInsetAdjustmentBehavior="automatic"
                      data={data}
                     renderItem={renderlist}
                     keyExtractor={(item,index) => index.toString()}
                    
 
                     
 
                  /> */}
         
         
         
         
         
         
         </View>
      
      
       </ScrollView>
 
      <BottomTabs/>
    </SafeAreaView>
  );
};

export default EditPage;
