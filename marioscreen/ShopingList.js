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
    TextInput
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card, ToggleButton , Avatar} from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Rating, AirbnbRating } from 'react-native-ratings';

function ShopingList({ navigation }) {

const [friendslist , setfriendslist] = useState([
    {
        id:1
    },
        
     
])
const [ data , setdata] = useState([
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    }
])


const renderFriendslist = () =>{
        return(

            <Avatar.Image
            source={{
                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
            }}
            size={13}
        >
        </Avatar.Image>         )
    }

const renderlist = () =>{
        return(<View style={{borderWidth:0.5,justifyContent:'center',alignSelf:'center', borderRadius:10,marginLeft:10,marginBottom:10, padding:8, borderColor:'#A6A8BA' ,flexDirection:'row', backgroundColor:'#f4f4f5'}}>
                
            <View>

            <Image
                                style={{ width: 75, height: 76,}} resizeMethod='resize' resizeMode='stretch'
                                source={require('../Resources/Appicon.png')} />
            </View>

            <View style={{flexDirection:'column',marginLeft:13,marginRight:5, marginTop:3, }}>

            <Text style={{fontSize:14}}>Services</Text>
            <Text style={{fontSize:12, color:'#f14057' }}>Utility</Text>
            <View style={{flexDirection:'row'}}>
            <Rating
              imageSize={10}
              

/>
<Text style={{fontSize:10}}>129</Text>
            

            </View>
            <Text style={{fontSize:12 , marginBottom:1,marginTop:3,}}>Friends using this:</Text>
            <FlatList
                    data={friendslist}
                    horizontal={true}

                    renderItem={renderFriendslist}
                    keyExtractor={(item,id) => id.toString()}
                     />
            </View>

        </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Service Store</Text>
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
    



            <View style={{ height: deviceHeight * 0.13, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: "96%", flex: 1, flexDirection: 'row', padding: 2, justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, height: '80%' }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Image
                            style={{ width: 55, height: 55,  }} resizeMethod='auto'
                            source={require('../Resources/Appicon.png')} />
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14,color:'#292F58', fontWeight:'bold' }}>Shopping List</Text>
                        <Text style={{ color: "grey", fontSize: 12 }}>Gigaaa development services.</Text>
                        <View style={{ display: 'flex',marginTop:3, flexDirection: 'row' }}>
                          <Rating
                                        imageSize={12}


                          />
                          <Text style={{fontSize:10, marginLeft:3, color:'#292F58'}}>129</Text>
                        </View>

                    </View>
                    <View style={{ alignSelf: 'center',justifyContent:'center',marginTop:35,  }}>
                    <Text style={{ fontSize: 10, fontWeight:'bold' }}>Friends using this:</Text>

      <FlatList
                    data={friendslist}
                    horizontal={true}

                    renderItem={renderFriendslist}
                    keyExtractor={(item,id) => id.toString()}
                     />
                  
                        

                    </View>
                    <View style={{ paddingTop: 10, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ height: 30, width: 70, justifyContent: 'center', borderRadius: 20, backgroundColor: '#292F58' }}>
                            <Text style={{ color: 'white',fontSize:12, alignSelf: 'center' }}>Activate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={{ height: deviceHeight * 0.1, backgroundColor: 'white', width: "100%", justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', width: "90%" }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don’t forget anything with our new list service</Text>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.14, backgroundColor: 'white',marginBottom:10, width: "100%", justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', borderBottomWidth: 0.5, borderColor: '#A6A8BA', padding: 5, width: "90%" }}>
                        <Text style={{ fontSize: 12, color: '#A6A8BA', fontWeight: 'bold' }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</Text>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', borderBottomWidth: 0.5, borderColor: '#A6A8BA', padding: 10, width: "90%" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>gigaaa…</Text>
                            <Text style={{ fontSize: 12,  }}>(EU) English</Text>
                        </View>
                        <Text style={{ fontSize: 12, paddingTop: 10, }}>“Make me a list for supermarket” </Text>
                        <Text style={{ fontSize: 12, paddingTop: 10,  }}>“Example 2”</Text>
                        <Text style={{ fontSize: 12, paddingTop: 10,  }}>“Example 3”</Text>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.16, backgroundColor: 'white', width: "100%", justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', borderBottomWidth: 0.5, borderColor: '#A6A8BA', padding: 10, width: "90%" }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' , color:'#292F58'}}>About Shopping List</Text>

                        <View style={{ flexDirection: 'row', width: "95%", justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 12, paddingTop: 10, color:'#292F58' }}>Classification</Text>
                                <Text style={{ fontSize: 12, paddingTop: 10, }}>Phrase</Text>
                                <Text style={{ fontSize: 12, paddingTop: 10, }}>Language</Text>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Text style={{ fontSize: 12, paddingTop: 10,color:'grey', fontWeight: 'bold' }}>Utilities </Text>
                                <Text style={{ fontSize: 12, paddingTop: 10, color:'grey', fontWeight: 'bold' }}>gigaaa.. make a list</Text>
                                <Text style={{ fontSize: 12, paddingTop: 10, color:'grey',fontWeight: 'bold' }}>Español (ES), Español (MX), English (EU) German (GER)</Text>
                            </View>
                        </View>
                    </View>
                </View>




                <Text style={{ fontSize: 14, fontWeight: 'bold',marginTop:10,marginLeft:25, color: '#292F58' }}>Califications</Text>
                <View style={{ display: 'flex',marginLeft:25, paddingTop: 10, flexDirection: 'row' }}>
                            <Rating  
                               imageSize={15}
                            
                            />
                            <Text style={{marginLeft:10, fontSize:14}} >5 of 5 stars</Text>
                        </View>
                 <Text style={{ fontSize: 12,  color: '#A6A8BA',  marginTop:5,marginLeft:25,  }}>9.4 Users Valorations</Text>

                 <View style={{height:0.5 , backgroundColor:'#A6A8BA', width:'90%',alignSelf:'center', marginVertical:8,}}>

                 </View>
      
                {/* <View style={{ height: deviceHeight * 0.11, backgroundColor: 'white', width: "100%", }}>
                    <View style={{ alignSelf: 'center', borderTopWidth: 1,marginTop:10,marginLeft:20, borderColor: '#A6A8BA', width: "90%" }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold',marginTop:5, color: '#292F58' }}>Califications</Text>
                       
                        <View style={{ display: 'flex', paddingTop: 10, flexDirection: 'row' }}>
                            <Rating  
                               imageSize={15}
                            
                            />
                            <Text style={{marginLeft:5, fontSize:13.5}} >5 of 5 stars</Text>
                        </View>
                        <Text style={{ paddingTop: 10, color: '#A6A8BA' }}>9.4 Users Valorations</Text>
                    </View>
                </View> */}
                <View style={{  backgroundColor: 'white', width: "100%", }}>
                    <View style={{ alignSelf: 'center',  borderColor: '#A6A8BA', width: "90%" }}>
                        <View style={{ display: 'flex',marginLeft:10, paddingTop: 5, flexDirection: 'row' }}>
                        <Rating  
                               imageSize={15}              
                            />
                        </View>                       
                        <Text style={{ paddingTop: 10,marginLeft:10,fontWeight:'bold',  color: '#2F2F34' }}>Title</Text>

                     
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>

                            <TextInput style={{ width: "50%" ,paddingVertical:0,marginLeft:5, fontSize:12}} placeholder="User Name" />
                            <TextInput style={{ width: "50%",paddingVertical:0, fontSize:12 }} placeholder="Comment Date" />
                        </View>
                        <TextInput style={{ width: "50%",fontSize:12,paddingVertical:0, marginLeft:5, color: 'black' }} placeholder="User Comments" placeholderTextColor="#2F2F34" />
                    </View>
                </View>

                <View style={{ height:0.5, backgroundColor:'grey',marginTop:10, marginHorizontal:20 }}>

        </View>
               
                <View style={{  backgroundColor: 'white', width: "100%", }}>
                    <View style={{ width: '90%', alignSelf: 'center' }}>

                        <TouchableOpacity style={{ width: "50%",marginTop:15, marginLeft:5 }}>
                            <Text style={{ fontSize: 12, color: '#4D7099',marginLeft:5 }}>View All Comments</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            



                <View style={{ backgroundColor: 'white',marginVertical:10, width: "100%", }}>
                    <View style={{ width: "90%", alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14,marginLeft:5, color: '#292F58' }}>Escribe una reseña:</Text>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.24, backgroundColor: 'white', width: "100%", }}>
                    <View style={{ width: "90%",borderColor:'#A6A8BA', padding:5, alignSelf: 'center', borderWidth: 1, borderRadius: 20, height: 100 }}>
                        <TextInput placeholder="Lorem Ipsum" multiline={true} />
                    </View>
                    <View style={{ width: "90%", display: 'flex', flexDirection: 'row', marginBottom: 10, alignSelf: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <View style={{ display: 'flex', marginTop: 5, flexDirection: 'row' }}>
                        <Rating  
                               imageSize={15}              
                            />
                        </View>
                        <TouchableOpacity style={{ height: 25, width: 100, backgroundColor: '#A6A8BA', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ color: 'white', fontSize:12 }}>SEND</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: deviceHeight * 0.17, backgroundColor: 'white', width: "100%", }}>
                    <View style={{ width: "90%", alignSelf: 'center',  }}>
                        <Text style={{ fontSize: 14,fontWeight:'bold', color: '#292F58' }}>Commentaries</Text>
                        <Text style={{ fontSize: 12, marginTop: 5, marginBottom: 5, color: 'grey',  }}>Informa fallas del servicio y envía comentarios para ayudar a corregir problemas o para desarrollar nuevas funciones para este servicio.</Text>
                        <TouchableOpacity style={{ height: 26, width: 120,marginTop:10, backgroundColor: '#292F58', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}
                            onPress={() => {
                                navigation.navigate('Notify');
                            }}
                        >
                            <Text style={{ color: 'white', fontSize:12 }}>Send a comment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.05, backgroundColor: 'white', width: "100%", }}>
                    <View style={{ width: "90%", alignSelf: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#292F58' }}>Other users activate too</Text>
                    </View>
                </View>
            
            
            
            
            
            <View style={{ backgroundColor:'white', paddingVertical:2, }}>
            
            <FlatList
                    data={data}
                    horizontal={true}
                    contentContainerStyle={{paddingHorizontal:10}}
                    renderItem={renderlist}
                    keyExtractor={(item,id) => id.toString()}
                     />


            </View>
            
            
            
                {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', backgroundColor: 'white', height: deviceHeight * 0.2 }}>
                    
                   
                   
                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}> 
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>





                    <View style={{ width: "49%", height: 130, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: "96%", flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <Image
                                    style={{ width: 80, height: 100, borderRadius: 10 }}
                                    source={require('../Resources/Appicon.png')} />
                            </View>

                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#2F2F34', fontSize: 17 }}>Service</Text>
                                <Text style={{ color: '#FE1459' }}>Utilitiy</Text>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Image style={{ width: 10, height: 10, alignSelf: 'center', resizeMode: 'contain', marginRight: 2 }} source={require('../images/star.png')} />
                                    <Text>129</Text>
                                </View>
                                <Text style={{ fontSize: 11 }}>Friends using this:</Text>
                                <Image
                                    style={{ width: 60, resizeMode: 'cover', height: 20, borderRadius: 10 }}
                                    source={require('../images/friends.jpg')} />
                                <View style={{ paddingTop: 10 }}>

                                </View>
                            </View>
                        </View>
                    </View>

                </View> */}




            </ScrollView>
        </SafeAreaView >
    )
}

export default ShopingList
