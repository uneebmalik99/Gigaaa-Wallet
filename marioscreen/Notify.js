import React, { useState, useRef } from 'react'
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
import RBSheet from "react-native-raw-bottom-sheet";
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card, ToggleButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';


import AntDesign from 'react-native-vector-icons/dist/AntDesign';


import ModalDropdown from 'react-native-modal-dropdown';

function Notify({ navigation }) {

    const [color , setcolor] =useState('white')
    const refRBSheet = useRef();
    return (
        <SafeAreaView style={{ flex: 1 ,  }}>
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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Notify a Problem</Text>
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
    



<View style={{backgroundColor:'white' ,height:'100%', width:deviceWidth,paddingHorizontal:12, }}>


<View style={{flexDirection:'row',width:'100%',}}>



<TouchableOpacity     style={{flexDirection:'row'  }}
                    onPress={() => {
                        navigation.navigate('ShopingList');
                    }}>
                    <Icon name="md-chevron-back-outline" size={15} color="#292F58" />
                    <Text style={{color:'#292F58', fontSize:12}}>Back</Text>

                </TouchableOpacity>

</View>
<View style={{ alignSelf: 'center',marginTop:8, padding: 10, width: "100%" }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Username</Text>
                    <TextInput style={{  paddingVertical:0, fontSize:12,paddingHorizontal:1, color: 'grey' }} placeholder="Service Name"  fontWeight="bold" placeholderTextColor="grey"  />

                    <Text style={{ fontSize: 12, paddingTop: 2,marginBottom:10, fontWeight: 'bold' }}>Select your device</Text>

                    <View >
                        <View style={{ display: 'flex',paddingHorizontal:3,marginTop:5,  paddingTop:3, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12, marginTop:8 ,color:'grey'}}>Device 1</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12 ,marginTop:8,color:'grey'}}>Device 2</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12,marginTop:8,color:'grey' }}>Device 3</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12,marginTop:8,color:'grey' }}>Device 4</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12,marginTop:8,color:'grey' }}>Device 5</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12,marginTop:8,color:'grey' }}>Device 6</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <View style={{ height: 40, width: 40, borderRadius: 50, backgroundColor: '#292F58' }}>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 12,marginTop:8,color:'grey' }}>Device 7</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ width: '100%',marginTop:12, alignSelf: 'center' }}>
                    <TouchableOpacity style={{flexDirection:'row'}}
                        onPress={() => {refRBSheet.current.open()}}>
                        <Text style={{fontWeight:'bold'}}>Select your problem</Text>
                        <AntDesign name='caretdown'  style={{alignSelf:'center', marginLeft:5}} size={8}/>
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        container: {
                            backgroundColor: '#292F58',
                            borderTopLeftRadius:20,
                            borderTopRightRadius:20,
                            height: 350,
                            paddingTop:15,

                        },
                        draggableIcon: {
                            backgroundColor: "#292F58"
                        }
                    }}
                >
                    <View>

                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.6,paddingVertical:5, borderColor: '#D0D3D4', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', paddingVertical:5, color: 'white', }}>30 Ene 2021</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 1</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 2</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 3</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 4</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.2, borderColor: 'grey', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 5</Text>
                        </View>

                    </TouchableOpacity>
                    </View>

               
               <View style={{  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 20
}}>

             
                    <TouchableOpacity 
                    onPress={()=> refRBSheet.current.close()}
                    style={{width:25,justifyContent:'center', height:25, backgroundColor:'white', borderRadius:50, alignSelf:'flex-end', marginRight:30}}>
                    <Entypo   name='chevron-down' size={18} style={{alignSelf:'center'}}/>
                    </TouchableOpacity>
                    </View>

                </RBSheet>
                <View style={{ width: '100%',marginTop:10, alignSelf: 'center' }}>
                    <Text>Write a comment</Text>
                </View>

                <View style={{ width: "100%", alignSelf: 'center',marginTop:10, borderWidth: 0.5, borderRadius: 10, height: 100 }}>
                    <View style={{ height: deviceHeight * 0.07, padding:5, width: "100%", }}>
                        <TextInput  style={{height:'100%'}} placeholder="Lorem Ipsum" multiline={true} />
                    </View>

                </View>

               
                    </View>
                </View>
          
                


</View>




{/* <View style={{ height: deviceHeight * 0.07, backgroundColor: 'white', width: "100%", }}>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <TouchableOpacity
                        onPress={() => refRBSheet.current.open()}>
                        <Text style={{fontWeight:'bold'}}>Select your problem</Text>
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        container: {
                            backgroundColor: '#292F58',
                            borderRadius: 20,
                            height: 400

                        },
                        draggableIcon: {
                            backgroundColor: "#292F58"
                        }
                    }}
                >
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 1, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 15, color: 'white', }}>30 Ene 2021</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 1</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 2</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 3</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 4</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 5</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 6</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 7</Text>
                        </View>

                    </TouchableOpacity>

                </RBSheet>

            </View>
           
         
          
            <View style={{ height: deviceHeight * 0.07, backgroundColor: 'white', width: "100%", }}>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <TouchableOpacity
                        onPress={() => refRBSheet.current.open()}>
                        <Text style={{fontWeight:'bold'}}>Select your problem</Text>
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        container: {
                            backgroundColor: '#292F58',
                            borderRadius: 20,
                            height: 400

                        },
                        draggableIcon: {
                            backgroundColor: "#292F58"
                        }
                    }}
                >
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 1, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 15, color: 'white', }}>30 Ene 2021</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 1</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 2</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 3</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 4</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 5</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 6</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ borderBottomWidth: 0.3, borderColor: 'white', width: '80%', alignSelf: 'center' }}>
                            <Text style={{ alignSelf: 'center', padding: 10, color: 'white', }}>Problem 7</Text>
                        </View>

                    </TouchableOpacity>

                </RBSheet>

            </View>
           
           
            <View style={{ height: deviceHeight * 0.05, backgroundColor: 'white', width: "100%", }}>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Text>Write a comment</Text>
                </View>

            </View>
            <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", }}>

                <View style={{ width: "90%", alignSelf: 'center', borderWidth: 1, borderRadius: 10, height: 100 }}>
                    <View style={{ height: deviceHeight * 0.07, backgroundColor: 'white', width: "100%", }}>
                        <TextInput placeholder="Lorem Ipsum" multiline={true} />
                    </View>

                </View>

                <View style={{ alignSelf: 'flex-end', paddingTop: 10, paddingRight: 20 }}>
                    <TouchableOpacity style={{ height: 30, width: 100, backgroundColor: '#292F58', borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'white' }}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </View> */}


        </SafeAreaView>
    )
}

export default Notify
