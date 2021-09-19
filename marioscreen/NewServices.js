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
    Dimensions
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import BottomTabs from '../screens/BottomTabs.js';
import { Appbar, Card ,Avatar} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';

function NewServices({ navigation }) {
    const [friendslist , setfriendslist] = useState([
        {
            id:1
        },
        {
            id:2
        },
        {
            id:3
        },
        {
            id:4
        }

    ])
    const [ data , setdata] = useState([
        {
            id:1,
            name:'Service Name',
            button:'activate'

        },
        {
            id:2,
            name:'Service Name',
            button:'open'      
          },
        {
            id:3,
            name:'Service Name',
            button:'activate'       
         },
        {
            id:4,
            name:'Service Name',
            button:'Deactivate'      
          },
        {
            id:5,
            name:'Service Name',
            button:'activate'       
         },
        {
            id:6,
            name:'Service Name',
            button:'activate'      
          },
       
    ])
    
    
    const renderFriendslist = () =>{
            return(
    
                <Avatar.Image
                style={{alignSelf:'center', }}
                source={{
                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    
                }}
                size={13}
            >
            </Avatar.Image>         )
        }
    
        const renderlist = ({item}) =>{
            return(
                
            
            <View style={{width:'90%' ,alignSelf:'center',flexDirection:'row', borderRadius:20,paddingHorizontal:10,marginBottom:10, paddingVertical:7, borderWidth:0.3, backgroundColor:'#f4f4f5', borderColor:'#A6A8BA' }}>
            <View style={{width:'25%',justifyContent:'center', }}>
    
                 <Image
                                        style={{ width: 85, height: 85,alignSelf:'center', resizeMode:'stretch', }} resizeMethod='auto'
                                        source={require('../Resources/Appicon.png')} />
                </View>      
                <View style={{flexDirection:'column',marginLeft:10,width:'48%', marginTop:3, }}>
    
                 <Text style={{fontSize:14}}>Services</Text>
                 <Text style={{fontSize:12, color:'#f14057' }}>Utility</Text>
                 <View style={{flexDirection:'row'}}>
       
                
    
                </View>
                <Text style={{fontSize:12 ,color: '#A6A8BA', marginBottom:1,marginTop:3,}}>"Example of use" Description of services</Text>
                <Text style={{fontSize:12, marginTop:10,}}>Developer Name</Text>

                </View>




                <View style={{flexDirection:'column',width:'27%',justifyContent:'center',  marginTop:3, }}>


                <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Rating
                   imageSize={10}
                />    
                <Text style={{fontSize:10, marginLeft:2}}>129</Text>


                </View>
      
                 
                <View style={{width:'100%', justifyContent:'center'}}> 
                <Text style={{fontSize:12 ,alignSelf:'center', marginBottom:1,marginTop:3,}}>Friends using this:</Text>

                <FlatList
                        contentInsetAdjustmentBehavior="automatic"
                        data={friendslist}
                        
                        contentContainerStyle={{alignSelf:'center', height:20,justifyContent:'center'}}
                        style={{alignSelf:'center'}}
                        horizontal={true}
    
                        renderItem={renderFriendslist}
                        keyExtractor={(item,id) => id.toString()}
                         />
                </View>
                <View style={{width:'100%',marginTop:2, justifyContent:'center'}}> 

                { item.button === 'activate' || item.button === 'open' ? <TouchableOpacity style={{alignSelf:'center' , borderRadius:20,backgroundColor:'#292F58'}}>
                <Text  style={{color:'white', fontSize:12, paddingVertical:4,paddingHorizontal:10}}>{item.button}</Text>

                </TouchableOpacity>:
                <TouchableOpacity style={{alignSelf:'center' , borderRadius:20,backgroundColor:'#f14057'}}>
                <Text  style={{color:'white', fontSize:12, paddingVertical:4,paddingHorizontal:10}}>Deactivate</Text>

                </TouchableOpacity>
                }
               
                </View>
                </View>


                     </View>
    //         <View style={{borderWidth:0.5,width:deviceWidth , marginHorizontal:10,paddingHorizontal:10, justifyContent:'center',alignSelf:'center', borderRadius:10,marginLeft:10,marginBottom:10, padding:8,
    //          borderColor:'#A6A8BA' ,flexDirection:'row', backgroundColor:'#f4f4f5'}}>
                    
    //             <View style={{width:'30%', backgroundColor:'red'}}>
    
    //             <Image
    //                                     style={{ width: 75, height: 85,}}resizeMethod='auto'
    //                                     source={require('../Resources/Appicon.png')} />
    //             </View>
    
    //             <View style={{flexDirection:'column',marginLeft:13,marginRight:5,width:'30%',backgroundColor:'green', marginTop:3, }}>
    
    //             <Text style={{fontSize:14}}>Services</Text>
    //             <Text style={{fontSize:10, color:'#f14057' }}>Utility</Text>
    //             <View style={{flexDirection:'row'}}>
    //             <Rating
    //               imageSize={10}
    
    // />
    // <Text style={{fontSize:6}}>129</Text>
                
    
    //             </View>
    //             <Text style={{fontSize:7 , marginBottom:1,marginTop:3,}}>Friends using this:</Text>
    //             <FlatList
    //                     contentInsetAdjustmentBehavior="automatic"
    //                     data={friendslist}
    //                     horizontal={true}
    
    //                     renderItem={renderFriendslist}
    //                     keyExtractor={(item,id) => id.toString()}
    //                      />
    //             </View>



    //             <View style={{flexDirection:'column',marginLeft:13,marginRight:5,width:'30%',backgroundColor:'green', marginTop:3, }}>
    
    // <View style={{flexDirection:'row'}}>
    // <Rating
    //   imageSize={10}

    //         />
    //     <Text style={{fontSize:6}}>129</Text>
    

    // </View>
    // <Text style={{fontSize:7 , marginBottom:1,marginTop:3,}}>Friends using this:</Text>
    
    // <FlatList
    //         contentInsetAdjustmentBehavior="automatic"
    //         data={friendslist}
    //         horizontal={true}
            
    //         renderItem={renderFriendslist}
    //         keyExtractor={(item,id) => id.toString()}
    //          />

    //          <TouchableOpacity>
    //              <Text>Activate</Text>
    //          </TouchableOpacity>
    // </View>
    
    //         </View>
            
            );
        }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={{ backgroundColor: 'white', width: '100%', height: deviceHeight * 0.08, paddingHorizontal: 13, flexDirection: 'column' }}>

                <View style={{ width: '100%', height: deviceHeight * 0.07, marginTop: 5, flexDirection: 'row' }}>

                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <TouchableOpacity
                            style={{ alignSelf: 'flex-start' }}
                            onPress={() => {
                                navigation.navigate('DrawerContent');
                            }}
                        >
                            <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 15, fontWeight: 'bold' }}>Service Store</Text>
                    </View>

                    <View style={{ justifyContent: 'center', width: '100%', height: '100%', position: 'absolute' }}>
                        <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>

                            <TouchableOpacity
                                style={{ alignSelf: 'flex-end', marginLeft: 40 }}

                            >
                                <Image style={{ width: 21, height: 21, alignSelf: 'center', resizeMode: 'contain', marginRight: 20 }} source={require('../images/bell.png')} />
                            </TouchableOpacity>
                        </View>


                    </View>



                </View>

            </View> */}
            {/* <View style={{ height: deviceHeight * 0.1, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ServicesStore');
                        }}>
                        <Text style={{ color: '#FE1459', fontSize: 15, fontWeight: 'bold' }}> Discover</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Categories');
                        }}>
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>Categories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyServices');
                        }}>
                        <Text style={{ color: '#A6A8BA', fontWeight: 'bold', fontSize: 15 }}>My Services</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View style={{ backgroundColor: 'white', paddingVertical:10 }}>
                <View style={{ width: "90%", display: 'flex', flexDirection: 'row', height: deviceHeight * 0.04, justifyContent: 'space-between', alignSelf: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: '#292F58', fontSize: 14, fontWeight:'bold' }}>New Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#4D7099', fontSize: 14, fontWeight:'bold' }}>Filters</Text>
                    </TouchableOpacity>
                </View>
            </View>



            <FlatList
                    data={data}
                    renderItem={renderlist}
                    contentInsetAdjustmentBehavior='automatic'
                    contentContainerStyle={{paddingBottom:70}}
                
                    keyExtractor={(item,id) => id.toString()}
                     />

            <BottomTabs />
        </SafeAreaView>
    )
}

export default NewServices
