import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';
import Iconn from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Feather';

const nutimg = require('../images/nutfinal.png');
const tebimg = require('../images/tebbankaccount.png');
const gimg = require('../images/Gfinal.png');
const bitcoinimg = require('../images/bitcoinfinal.png');
const BNLimg = require('../images/debitCard.png');

const CardImage = ({ navigation }) => {













  const [Data, setData] = useState([

    {
      CardName: 'BNL Prepaid Card',
      nickname: 'BNL',
      account: '***8520 05/21',
      amount: '2,93',
      currency: 'Euros',
      image: BNLimg,
      E_amount: '',
      E_currency: '',
      shares: '',
      value: '0',
      bgcolor: '#7063fe'
    },

    {
      CardName: 'Teb Euro Account',
      nickname: 'TEB',
      account: '016100000000003922',
      amount: '177,40',
      currency: 'Euros',
      image: tebimg,
      E_amount: '',
      E_currency: '',
      shares: '',
      value: '0',
      bgcolor: '#0b9d88'



    },
    {
      CardName: 'Bitcoin Wallet',
      nickname: 'Bitcoin Wallet',
      account: '[Public Address]',
      amount: '240',
      currency: 'Euros',
      image: bitcoinimg,
      E_amount: '0,019',
      E_currency: 'BTC',
      shares: '',
      value: '1',
      bgcolor: '#000000'


    },

    {
      CardName: 'gigaaa Shares',
      nickname: 'gigaaa Shares',
      account: 'gigaaa International S.A',
      amount: '20.000',
      currency: 'Euros',
      image: gimg,
      E_amount: '300.000',
      E_currency: 'Pieces',
      shares: '8.86 Euros /Share',
      value: '1',
      bgcolor: '#2a315a'


    },




    {
      CardName: 'gigaaa Nuts',
      nickname: 'gigaaa Nuts',
      account: 'UserID 222',
      amount: '85,50',
      currency: 'Euros',
      image: nutimg,
      E_amount: '85,50',
      E_currency: 'Nuts',
      shares: '',
      value: '0',
      bgcolor: ''

    },
  ]
  )






  const [Bitcoin, setBitcoin] = useState(
    {
      CardName: 'Bitcoin Wallet',
      nickname: 'Bitcoin Wallet',
      account: '[Public Address]',
      amount: '240',
      currency: 'Euros',
      image: bitcoinimg,
      E_amount: '0,019',
      E_currency: 'BTC',
      shares: '',
      value: '1'

    },
  )

  const [Gshare, setGshare] = useState(
    {
      CardName: 'gigaaa Shares',
      nickname: 'gigaaa Shares',
      account: 'gigaaa International S.A',
      amount: '20.000',
      currency: 'Euros',
      image: gimg,
      E_amount: '300.000',
      E_currency: 'Pieces',
      shares: '8.86 Euros /Share',
      value: '1'

    },
  )

  const [Teb, setTeb] = useState(
    {
      CardName: 'Teb Euro Account',
      nickname: 'TEB',
      account: '016100000000003922',
      amount: '177,40',
      currency: 'Euros',
      image: tebimg,
      E_amount: '',
      E_currency: '',
      shares: '',
      value: '0'


    },
  )

  const [BNL, setBNL] = useState(
    {
      CardName: 'BNL Prepaid Card',
      nickname: 'BNL',
      account: '***8520 05/21',
      amount: '2,93',
      currency: 'Euros',
      image: BNLimg,
      E_amount: '',
      E_currency: '',
      shares: '',
      value: '0'
    },
  )

  const [Nut, setNut] = useState(
    {
      CardName: 'gigaaa Nuts',
      nickname: 'gigaaa Nuts',
      account: 'UserID 222',
      amount: '85,50',
      currency: 'Euros',
      image: nutimg,
      E_amount: '85,50',
      E_currency: 'Nuts',
      shares: '',
      value: '0'
    },
  )



  const renderlist = ({ item, index }) => {




    if (index === 0) {
      return (<View style={{ borderTopWidth: 0.2, borderTopColor: '#CCD1D1', width: deviceWidth, height: 80, paddingHorizontal: 15, flexDirection: 'column', }}>



        <TouchableOpacity
          onPress={() => { navigation.navigate('CardDetails', { datadetails: item }) }}
          style={{
            borderTopRightRadius: 10, borderTopLeftRadius: 10,
            width: '100%', backgroundColor: '#7063fe', height: '100%'
          }}>
          <View style={{
            paddingVertical: 10,
            flexDirection: 'row', justifyContent: 'space-between',
            paddingHorizontal: 10
          }} >

            <View>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.CardName}</Text>
              <Text style={{ color: 'white', fontSize: 14 }}>{item.account}</Text>
            </View>
            <View>
              <Text style={{
                color: 'white',
                fontSize: 26,

                fontWeight: 'bold',
                paddingHorizontal: 5,
              }}>{item.amount}</Text>
              <Text style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'right',
                paddingHorizontal: 5,
              }}>{item.currency}</Text>
            </View>

          </View>
        </TouchableOpacity>

      </View>


      )
    } else if (index === Data.length - 1) {

      return (<View style={{ borderTopWidth: 0.2, borderTopColor: '#CCD1D1', width: deviceWidth, paddingHorizontal: 15, flexDirection: 'column', }}>



        <TouchableOpacity
          onPress={() => { navigation.navigate('CardDetails', { datadetails: item }) }}

          style={{
            backgroundColor: 'white',

            width: '100%',
          }}>
          <ImageBackground imageStyle={{ borderRadius: 10, resizeMode: 'cover' }}
            source={nutimg} style={{ height: 212, marginTop: -8, width: '100%', }}>

            <View style={{
              paddingVertical: 10,
              flexDirection: 'row', justifyContent: 'space-between',
              paddingHorizontal: 10
            }} >

              <View>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.CardName}</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>{item.account}</Text>
              </View>
              <View>
                <Text style={{
                  color: 'white',
                  fontSize: 26,

                  fontWeight: 'bold',
                  paddingHorizontal: 5,
                }}>{item.amount}</Text>
                <Text style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'right',
                  paddingHorizontal: 5,
                }}>{item.currency}</Text>
              </View>

            </View>
            {/* <View  style={{ paddingHorizontal:10, height:'100%',width:'100%'}}>
  <View style={{paddingVertical:10, }}>
 
               <Text style={{ color: 'white',fontWeight:'bold', fontSize: 16 }}>{item.CardName}</Text>
               <Text style={{ color: 'white', fontSize: 14 }}>{item.account}</Text>
               <Text style={{ color: 'white',
                   fontSize: 26,
                   marginTop:7,
                   fontWeight:'bold',
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>{item.amount}</Text>
               <Text style={{  color: 'white',
                   fontSize: 18,
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>{item.currency}</Text>
             </View>
             </View> */}


          </ImageBackground>





        </TouchableOpacity>
      </View>

      )
    } else {
      return (<View style={{ borderTopWidth: 0.2, borderTopColor: '#CCD1D1', width: deviceWidth, paddingHorizontal: 15, flexDirection: 'column', }}>



        <TouchableOpacity
          onPress={() => { navigation.navigate('CardDetails', { datadetails: item }) }}
          style={{
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginTop: -8,
            width: '100%', backgroundColor: item.bgcolor, height: 80
          }}>

          <View style={{
            paddingVertical: 10,
            flexDirection: 'row', justifyContent: 'space-between',
            paddingHorizontal: 10
          }} >

            <View>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.CardName}</Text>
              <Text style={{ color: 'white', fontSize: 14 }}>{item.account}</Text>
            </View>
            <View>
              <Text style={{
                color: 'white',
                fontSize: 26,

                fontWeight: 'bold',
                paddingHorizontal: 5,
              }}>{item.amount}</Text>
              <Text style={{
                color: 'white',
                fontSize: 18,
                textAlign: 'right',
                paddingHorizontal: 5,
              }}>{item.currency}</Text>
            </View>

          </View>
        </TouchableOpacity>
      </View>


      )

    }


  }


  return (
    // { ...Platform.OS === 'ios' ?   
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, height: deviceHeight, width: deviceWidth }}>

      <View style={{ backgroundColor: 'white', width: '100%', height: deviceHeight * 0.08, paddingHorizontal: 13, flexDirection: 'column' }}>

        <View style={{ width: '100%', height: deviceHeight * 0.07, marginTop: 5, flexDirection: 'row' }}>

          <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <TouchableOpacity
              style={{ alignSelf: 'flex-start' }}

            >
              <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
            </TouchableOpacity>

          </View>
          <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Wallet</Text>
          </View>

          <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end' }}
                onPress={() => {

                }}
              >
                <Image style={{ width: 22.5, height: 22.5, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/Buttons_Share.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end', marginLeft: 40 }}
                onPress={() => {
                  navigation.navigate('CardInformationScan');
                }}
              >
                <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/Menu_Add.png')} />
              </TouchableOpacity>
            </View>


          </View>



        </View>

      </View>

      <View style={{ backgroundColor: 'white', backgroundColor: 'white', width: '100%', height: deviceHeight * 0.04, marginTop: -5, paddingHorizontal: 17, flexDirection: 'column' }}>

        <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Image style={{ width: 12, height: 12, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/Icons_DataProtection.png')} />
            <Text style={{ color: '#715DFF', textAlign: 'center', textAlignVertical: 'center', alignSelf: 'center', fontSize: 12, fontWeight: 'bold', marginLeft: 2 }}>Data Protection</Text>
          </View>

          <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 14, color: '#4d7099', fontWeight: 'bold' }}>Cards</Text>
          </View>

          <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
              <Image style={{ width: 14, height: 14, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/Buttons_Show.png')} />
              <Text style={{ color: '#4d7099', textAlign: 'center', textAlignVertical: 'center', fontSize: 12, marginRight: 5, marginLeft: 4 }}>Show Info</Text>
            </View>

          </View>



        </View>





      </View>



      <TouchableOpacity
          onPress={() => {
            // navigation.openDrawer();
            // navigation.toggleDrawer();

            navigation.navigate('Mario');
          }}
        >
          <Text>
            Mario
         </Text>
        </TouchableOpacity>


       


        <TouchableOpacity
          onPress={() => {
            // navigation.openDrawer();
            // navigation.toggleDrawer();

            navigation.navigate('CreateGig');
          }}
        >
          <Text>
        CreateGig
         </Text>
        </TouchableOpacity>



        <TouchableOpacity
          onPress={() => {
            // navigation.openDrawer();
            // navigation.toggleDrawer();

            navigation.navigate('UserProfile');
          }}
        >
          <Text>
          UserProfile
         </Text>
        </TouchableOpacity>




      <FlatList
        contentContainerStyle={{ marginTop: 10, paddingBottom: 150 }}
        contentInsetAdjustmentBehavior="automatic"
        data={Data}
        renderItem={renderlist}
        keyExtractor={(item, index) => index.toString()}




      />

















      {/* <ScrollView
      >

        <View style={{ marginVertical: 5, marginTop:15, paddingHorizontal:10, height:deviceHeight, width: deviceWidth }}>



      <TouchableOpacity 
      onPress={()=> {navigation.navigate('CardDetails',{datadetails:BNL})}}
      style={{borderTopRightRadius:10,borderTopLeftRadius:10, 
       width:'100%', backgroundColor:'#7063fe', height:deviceHeight*0.12}}>
      <View style={{paddingVertical:10,paddingHorizontal:10}} >
      <Text style={{ color: 'white',fontWeight:'bold', fontSize: 16 }}>BNL Prepaid Card</Text>
               <Text style={{ color: 'white', fontSize: 14 }}>***8520 05/21</Text>
               <Text style={{ color: 'white',
                   fontSize: 26,
                   marginTop:7,
                   fontWeight:'bold',
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>2,93</Text>
                    <Text style={{  color: 'white',
                   fontSize: 18,
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>Euros</Text>

      </View>
      </TouchableOpacity>

      <TouchableOpacity 
       onPress={()=> {navigation.navigate('CardDetails',{datadetails:Teb})}}
      style={{borderTopRightRadius:10,
      borderTopLeftRadius:10, 
      marginTop:-8,
       width:'100%', backgroundColor:'#0b9d88', height:deviceHeight*0.12}}>
       <View style={{paddingVertical:10,paddingHorizontal:10}} >
      <Text style={{ color: 'white',fontWeight:'bold', fontSize: 16 }}>Teb Euro Account</Text>
               <Text style={{ color: 'white', fontSize: 14 }}>01610000000003922</Text>
               <Text style={{ color: 'white',
                   fontSize: 26,
                   marginTop:7,
                   fontWeight:'bold',
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>177,40</Text>
                    <Text style={{  color: 'white',
                   fontSize: 18,
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>Euros</Text>

      </View>
      </TouchableOpacity>







      <TouchableOpacity 
       onPress={()=> {navigation.navigate('CardDetails',{datadetails:Bitcoin})}}
      style={{borderTopRightRadius:10,
      borderTopLeftRadius:10, 
      marginTop:-8,
       width:'100%', backgroundColor:'#000000', height:deviceHeight*0.12}}>
       <View style={{paddingVertical:10,paddingHorizontal:10}} >
      <Text style={{ color: 'white',fontWeight:'bold', fontSize: 16 }}>Bitcoin Wallet</Text>
               <Text style={{ color: 'white', fontSize: 14 }}>[Public Address]</Text>
               <Text style={{ color: 'white',
                   fontSize: 26,
                   marginTop:7,
                   fontWeight:'bold',
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>2,40</Text>
                    <Text style={{  color: 'white',
                   fontSize: 18,
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>Euros</Text>

      </View>
      </TouchableOpacity>








      <TouchableOpacity 
       onPress={()=> {navigation.navigate('CardDetails',{datadetails:Gshare})}}
      style={{borderTopRightRadius:10,
      borderTopLeftRadius:10, 
      marginTop:-8,
       width:'100%', backgroundColor:'#2a315a', height:deviceHeight*0.125}}>
       <View style={{paddingVertical:10,paddingHorizontal:10}} >
      <Text style={{ color: 'white',fontWeight:'bold', fontSize: 16 }}>gigaaa Shares</Text>
               <Text style={{ color: 'white', fontSize: 14 }}>gigaaa International S.A</Text>
               <Text style={{ color: 'white',
                   fontSize: 26,
                   marginTop:7,
                   fontWeight:'bold',
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>20.000</Text>
                    <Text style={{  color: 'white',
                   fontSize: 18,
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>Euros</Text>

      </View>
      </TouchableOpacity>



      <TouchableOpacity
      onPress={()=> {navigation.navigate('CardDetails',{datadetails:Nut})}}
      
       style={{
       backgroundColor:'white',
     
       width:'100%',  }}>
       <ImageBackground    imageStyle={{ borderRadius:10,  resizeMode: 'contain'}}
  source={nutimg} style={{ height: 212.7,marginTop:-11.4,  width: '100%', }}>
 
  <View  style={{ paddingHorizontal:10, height:'100%',width:'100%'}}>
  <View style={{paddingVertical:10, }}>
 
               <Text style={{ color: 'white',fontWeight:'bold', fontSize: 16 }}>gigaaa Nuts</Text>
               <Text style={{ color: 'white', fontSize: 14 }}>UserID 222</Text>
               <Text style={{ color: 'white',
                   fontSize: 26,
                   marginTop:7,
                   fontWeight:'bold',
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>{Nut.amount}</Text>
               <Text style={{  color: 'white',
                   fontSize: 18,
                   textAlign: 'right',
                   paddingHorizontal:5,
                   bottom: 50, }}>Euros</Text>
             </View>
             </View>
            
            
           </ImageBackground>
 
      
      
      
    
      </TouchableOpacity>

     


          
        </View>
        
      </ScrollView>
      */}

      {/* <View style={{ alignItems: 'center', justifyContent: "center", marginBottom: 120, width: '15%', height: 30, alignSelf: 'center', borderColor: "black", borderWidth: 2, borderRadius: 20 }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.openDrawer();
            // navigation.toggleDrawer();

            navigation.navigate('Mario');
          }}
        >
          <Text>
            Mario
         </Text>
        </TouchableOpacity>
      </View> */}


      {/* <BottomTabs /> */}
      <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          width: 70,
          height: 50,
          borderRadius: 35,
          bottom: 35,
          zIndex: 10,
        }}>
        <View style={[styles.button, styles.actionBtn]}>
         
            <TouchableOpacity  onPress={() => {
            navigation.navigate('Mario');
          }}>
              
              {/* <Iconn
                style={{width: 60, padding: 10, height: 60}}
                size={40}
                name="md-finger-print-sharp"
              /> */}
  <Image   style={{width: 75, padding: 1, height: 75}} source={require('../images/Menu_gigaaa_Mic_Inactive.png')} />

             
            </TouchableOpacity>
            </View>
          
       
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          border: 2,
          radius: 3,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3,
          },
          x: 0,
          y: 0,
          style: {marginVertical: 5},
          bottom: 0,
          width: '100%',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 10,
          paddingHorizontal: 25,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          
            onPress={() =>
              navigation.navigate('Home')
              // navigation.navigate('Notify')

            }>
            <Image
              style={{width: 20, height: 20}}
              source={require('../images/home.png')}

              // source={{
              //   uri:
              //     'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png',
              // }}
              onPress={() => {
                Alert.alert('');
              }}></Image>
          </TouchableOpacity>
          <Text style={{justifyContent: 'center',marginTop:2, fontSize:10,color:'#4C749C', alignItems: 'center'}}>
            Home
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginStart: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}>
            <Iconn
              name="person"
              size={20}
              color="#4C749C"
              onPress={() => {
                Alert.alert('click');
              }}
            />
          </TouchableOpacity>
          <Text style={{justifyContent: 'center',color:'#4C749C', fontSize:10, alignItems: 'center'}}>
            Social
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginStart: 85,
            justifyContent:'center', 
          }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}>
           {/* <Image
              style={{width: 30, height: 20, resizeMode:'cover'}}
              
              source={require('../images/Menu_Messenger_Inactive.png')}

              // source={{
              //   uri:
              //     'http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png',
              // }}
              onPress={() => {
                Alert.alert('');
              }}></Image> */}
           
            <Icon
              name="message-circle"
              size={21}
              color="#4C749C"
              onPress={() => {
                Alert.alert('click');
              }}
              style={{marginHorizontal: 16,}}
              containerStyle={{marginHorizontal: 16}}
            />
          </TouchableOpacity>
          <Text style={{justifyContent: 'center', color:'#4C749C', fontSize:10, alignItems: 'center'}}>
            Message
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          
            marginHorizontal: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('click');
            }}>
           <Image
              style={{width: 20, height: 20, }}
              source={require('../images/Menu_Wallet_Inactive.png')}

             
              onPress={() => {
                Alert.alert('');
              }}></Image>
           
            {/* <Iconn
              name="ios-wallet-outline"
              size={20}
              color="#4C749C"

              style={{marginHorizontal: 16,}}
              containerStyle={{marginHorizontal: 16}}
            /> */}
          </TouchableOpacity>
          <Text style={{marginTop:4, alignSelf:'center', fontSize:10, color:'#4C749C', alignItems: 'center'}}>
            Wallet
          </Text>
        </View>

        {/* </View> */}
      </View>
    </View>

    </SafeAreaView>




  );
};


export default CardImage;



const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'grey',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,

  },
});