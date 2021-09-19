import React, { useState } from 'react'
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
    Dimensions,
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import CircleSlider from "react-native-circle-slider";
import { useTheme } from '@react-navigation/native';
import Iconn from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Feather';

function Mario({ item, navigation }) {
    const[value , setvalue] = useState(0)
    const { colors } = useTheme();

    const theme = useTheme();
    const [data, setdata] = useState([
        {
            day: "Wednesday",
            date: "Aprl 04 2020"
        }

    ])

    const [list , setlist] = useState([
        {
            id:1,
            name:'Global News',
        },
        {
            id:2,
            name:'Wish Outdoor',
        },
        {
            id:3,
            name:'Global News',
        }
    ])



    const renderlist = ({ item, index }) => {
        if(index === 0 ){
            return(
               
<View style={{flex:0.5, marginHorizontal:5, marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20,borderColor:'grey',borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 150, width: "100%" }}
                        >

<Text style={{color:'white',marginLeft:10,marginTop:10, fontSize:12}}>{item.name}</Text>

<Text style={{color:'white',marginLeft:10, marginTop:55,fontSize:10, fontWeight:'bold'}}>Dubia virtual museums offer a cultural escape </Text>
<Text style={{fontSize:8, color:'white', marginLeft:10}}>jerry Marc CNN updated Aprial 7 ,2019</Text>

                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:10,fontWeight:'bold', textAlign:'center'}}>Gateway Global</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>

            );
        } else if(index === 2){
            return(

<View style={{flex:0.5, marginHorizontal:5,marginTop:-60, marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20,borderColor:'grey',borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 140, width: "100%" }}
                        >
                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:10,fontWeight:'bold', textAlign:'center'}}>Gateway Global</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>

            );
        }
        else{

        return(

<View style={{flex:0.5, justifyContent:'center', marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20,borderColor:'grey',borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 220, width: "100%" }}
                        >
                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:10,fontWeight:'bold', textAlign:'center'}}>Gateway Global</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>


);
        }
    }
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
              <View style={{  width:'100%',height:deviceHeight*0.08,backgroundColor:'white', paddingHorizontal:13, flexDirection:'column'}}>
  
  <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  
          <TouchableOpacity
                            style={{ alignSelf: 'flex-start', }}
                            onPress={() => {
            navigation.openDrawer();
        }}

                        >
                            <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Good afternoon,Mario!</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

   onPress={()=>
       navigation.openDrawer()}
                            >
            <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/>
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>
  
           </View>
    
          
          <View style={{width:deviceWidth,height:95,paddingHorizontal:5, flexDirection:'row',backgroundColor:'white', justifyContent:'space-around'}}>
            <View style={{width:'30%',height:'100%', alignSelf:'center',justifyContent:'space-between' , flexDirection:'column', }}>

                <View style={{marginTop:25,}}>

                <Text style={{ color: '#B2B2B2',alignSelf:'flex-start', fontSize:12, fontWeight:'bold' }}>{data.map(obj => (
                        obj.day
                    ))}

                    </Text>
                </View>
         

                    <View>


                    <Text style={{ color: '#FE1459', fontWeight: "bold", alignSelf:'flex-start', fontSize:13 }}>Calender</Text>
                    <Text style={{ color: '#B2B2B2', fontSize: 12, alignSelf:'flex-start' }}>4 Task Left</Text>
                    </View>

                                </View> 


            <View style={{width:'30%',height:'100%', alignSelf:'center',backgroundColor:'blue', justifyContent:'center'}}>
            <ImageBackground source={require('../images/volume.png')} 
                             style={{ height: 100,justifyContent:'center', width: "100%" }} imageStyle={{justifyContent:'center'}}
                        >           
                         <CircleSlider value={90} meterColor={'red'}  dialRadius={46} style={{alignSelf:'center'}} btnRadius={9}  textSize={9}	 dialWidth={2} min={0}  strokeColor={'red'} strokeWidth={2}   />



                        </ImageBackground>

            </View> 


            <View style={{width:'30%',height:'100%', alignSelf:'center',flexDirection:'column',  justifyContent:'space-between'}}>
            <Text style={{ color: '#B2B2B2',marginTop:25, alignSelf:'flex-end',fontSize:12, fontWeight:'bold'}}>{data.map(obj => (
                        obj.date
                    ))}
                    </Text> 

                    <View>
                    <Text style={{ color: '#FE1459', fontWeight: "bold",fontSize:12, alignSelf:'flex-end' }}> Dispositives</Text>
                    <Text style={{ color: '#B2B2B2', fontSize: 12, alignSelf:'flex-end' }}> 4 Near</Text>

                        </View>    
                 


                           </View> 

          </View>
           
       
         
            <ScrollView horizontal={true}  style={{backgroundColor:'white',paddingTop:15, height:70 }}>
   <TouchableOpacity style={{justifyContent:'center', backgroundColor:'white', shadowColor: '#F0F3F4',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity:  0.4,
          shadowRadius: 3,s: 3,
        
        elevation: 2,borderColor:'#F0F3F4',height:30,width:140, borderWidth:0.2, marginLeft:20, borderRadius:15}}>

<Text style={{padding:10,alignSelf:'center', textAlign:'center', fontWeight:'bold',  }}>"Call Alex in 4min"</Text>

   </TouchableOpacity>


   <TouchableOpacity style={{marginLeft:10,  justifyContent:'center',backgroundColor:'white',  shadowColor: '#F0F3F4',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        
        elevation: 2,borderColor:'#F0F3F4',height:30,width:120, borderWidth:0.2,  borderRadius:15}}>

<Text style={{padding:10,alignSelf:'center', fontWeight:'bold'}}>New Task</Text>

   </TouchableOpacity>



   <TouchableOpacity style={{marginLeft:10,  justifyContent:'center',backgroundColor:'white',  shadowColor: '#F0F3F4',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        marginRight:20,
        elevation: 2,borderColor:'#F0F3F4',height:30,width:120, borderWidth:0.2,  borderRadius:15}}>
<Text style={{padding:5,alignSelf:'center', fontWeight:'bold'}}>Next Task</Text>

   </TouchableOpacity>
   
</ScrollView>

       


<ScrollView>

<View style={{flexDirection:'row',marginBottom:90, backgroundColor:'white',paddingHorizontal:5,justifyContent:'center', width:deviceWidth}} >


<View style={{flexDirection:'column', width:'50%',paddingHorizontal:5, }}> 

<View style={{width:'100%',  marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20, shadowColor: '#F0F3F4',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        
        elevation: 2,borderColor:'#F0F3F4',     borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 160, width: "100%" }}
                        >

<Text style={{color:'white',marginLeft:10,marginTop:10, fontSize:12, fontStyle:'italic'}}>Global News</Text>

<Text style={{color:'white',marginLeft:10, marginTop:70,fontSize:10, fontWeight:'bold'}}>Dubia virtual museums offer a cultural escape </Text>
<Text style={{fontSize:8, color:'white', marginLeft:10}}>jerry Marc CNN updated Aprial 7 ,2019</Text>
                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:12,fontWeight:'bold', textAlign:'center'}}>Gateway Global</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>

<View style={{width:'100%', justifyContent:'center', marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20,shadowColor: '#F0F3F4',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        
        elevation: 2,borderColor:'#F0F3F4'  ,borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 230, width: "100%" }}
                        >
                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:12,fontWeight:'bold', textAlign:'center'}}>Gateway Global</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>

</View>


<View style={{flexDirection:'column', width:'50%', paddingHorizontal:5 }}> 

<View style={{width:'100%', marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20,shadowColor: '#F0F3F4',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        
        elevation: 2,borderColor:'#F0F3F4',  borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 230, width: "100%" }}
                        >

<Text style={{color:'white',marginLeft:20,marginTop:10, fontSize:14,fontWeight:'bold' }}>Tomorrowland</Text>
<Text style={{color:'white',marginLeft:20,fontSize:12}}>Music</Text>

<Text style={{color:'white',marginLeft:20, marginTop:95,fontSize:12, }}>Sat, 30 Nov, 2020</Text>
<Text style={{fontSize:9, color:'white', marginLeft:20}}>Sheffied, United Kingdom</Text>

<TouchableOpacity style={{height:20,justifyContent:'center',width:60, borderRadius:20, borderColor:'white', borderWidth:1, marginLeft:20, marginTop:10}}>
    <Text style={{color:'#b2e836', fontSize:12, alignSelf:'center'}}>Sample</Text>

</TouchableOpacity>
                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:12,fontWeight:'bold', textAlign:'center'}}>Wish Outdoor</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>

<View style={{width:'100%', justifyContent:'center', marginVertical:10}}>

<TouchableOpacity style={{flexDirection:'column',width:'100%' ,borderRadius:20,shadowColor: '#F0F3F4',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        
        elevation: 2,borderColor:'#F0F3F4',borderWidth:0.5, backgroundColor:'white' }}>
<ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 20 }} style={{ height: 160, width: "100%" }}
                        >
                            </ImageBackground>



<View>
  <View style={{ marginTop:-10}}>


<TouchableOpacity style={{justifyContent:'center',borderRadius:50, alignSelf:'center',width:20,height:20}}>
    <ImageBackground  source={require('../Resources/CNN.png')}  imageStyle={{borderRadius:15}} style={{width:20,height:20}} />

</TouchableOpacity>
</View>

<View style={{flexDirection:'row' , paddingVertical:5,}}>
<View style={{width:'60%',justifyContent:'center', }}> 
<Text style={{alignSelf:'center',fontSize:12,fontWeight:'bold', textAlign:'center'}}>Gateway Global</Text>

</View>

<View style={{width:'40%',justifyContent:'center', flexDirection:'row'}}> 
<FontAwesome name='share-square-o' size={12} style={{alignSelf:'center'}} />

<Entypo name='dots-three-vertical'  size={12} style={{alignSelf:'center', marginLeft:5}}/>


</View>
</View>
</View>                              
           
</TouchableOpacity>

</View>

</View>


</View>


</ScrollView>

            

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
          <Text style={{justifyContent: 'center',marginTop:2, fontSize:12,color:'#4C749C', alignItems: 'center'}}>
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
          <Text style={{justifyContent: 'center',color:'#4C749C', fontSize:12, alignItems: 'center'}}>
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
          <Text style={{justifyContent: 'center', color:'#4C749C', fontSize:12, alignItems: 'center'}}>
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
          <Text style={{marginTop:4, alignSelf:'center', fontSize:12, color:'#4C749C', alignItems: 'center'}}>
            Wallet
          </Text>
        </View>

        {/* </View> */}
      </View>
    

        </SafeAreaView>
    )
}

export default Mario

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