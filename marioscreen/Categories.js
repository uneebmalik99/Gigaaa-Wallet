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
import { Appbar, Card , Avatar} from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';



function Categories({ navigation }) {

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
            id:1
        },
        {
            id:2
        },
        {
            id:3
        },
        {
            id:1
        },
        {
            id:2
        },
        {
            id:3
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
    
    const renderlist = () =>{
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

                <TouchableOpacity style={{alignSelf:'center' , borderRadius:20,backgroundColor:'#292F58'}}>
                <Text  style={{color:'white', fontSize:12, paddingVertical:4,paddingHorizontal:10}}>Activate</Text>

                </TouchableOpacity>
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
        <SafeAreaView style={{ flex: 1, backgroundColor:'white' }}>
            
             <View style={{ width:deviceWidth}}> 
             <ScrollView    contentContainerStyle={{backgroundColor:'white',marginTop:5,paddingVertical:10, justifyContent:'center'}} horizontal={true}>
                 
             <TouchableOpacity style={{marginHorizontal:10, flexDirection:'column'}}>
             <Image
                                style={{ width: 60, height: 50, resizeMode:'stretch' ,   }} resizeMethod='resize' 
                                source={require('../Resources/Utility.png')} />
            <Text style={{ color: '#292F58',marginTop:4,alignSelf:'center', fontSize: 12 }}>Utilities</Text>

             </TouchableOpacity>

             <TouchableOpacity style={{marginHorizontal:10, flexDirection:'column'}}>
             <Image
                                style={{ width: 60, height: 50, resizeMode:'stretch' ,   }} resizeMethod='resize' 
                                source={require('../Resources/Games.png')} />
            <Text style={{ color: '#292F58',marginTop:4,alignSelf:'center', fontSize: 12 }}>Games</Text>

             </TouchableOpacity>


             <TouchableOpacity style={{marginHorizontal:10, flexDirection:'column'}}>
             <Image
                                style={{ width: 60, height: 50, resizeMode:'stretch' ,   }} resizeMethod='resize' 
                                source={require('../Resources/Music.png')} />
            <Text style={{ color: '#292F58',marginTop:4,alignSelf:'center', fontSize: 12 }}>Music</Text>

             </TouchableOpacity>


             <TouchableOpacity style={{marginHorizontal:10, flexDirection:'column'}}>
             <Image
                                style={{ width: 60, height: 50, resizeMode:'stretch' ,   }} resizeMethod='resize' 
                                source={require('../Resources/News.png')} />
            <Text style={{ color: '#292F58',marginTop:4,alignSelf:'center', fontSize: 12 }}>News</Text>

             </TouchableOpacity>

             <TouchableOpacity style={{marginHorizontal:10, flexDirection:'column'}}>
             <Image
                                style={{ width: 60, height: 50, resizeMode:'stretch' ,   }} resizeMethod='resize' 
                                source={require('../Resources/Utility.png')} />
            <Text style={{ color: '#292F58',marginTop:4,alignSelf:'center', fontSize: 12 }}>Utilities</Text>

             </TouchableOpacity>
           
         </ScrollView>
         
         </View>

            
            <FlatList
                    data={data}
                    renderItem={renderlist}
                    contentInsetAdjustmentBehavior='automatic'
                    contentContainerStyle={{paddingBottom:70}}
                
                    keyExtractor={(item,id) => id.toString()}
                     />



            {/* <ScrollView>
                <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "96%", flex: 1, flexDirection: 'row', marginBottom: 10, padding: 2, justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 120, height: 150,  }} resizeMode='center' resizeMethod='resize'
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 12, padding: 4 }}>Service Name</Text>
                            <Text style={{ color: "#FE1459", padding: 2 }}>Utility</Text>
                            <Text style={{ color: '#A6A8BA', fontSize: 7 }}>“Example of use” Description of service</Text>
                            <Text style={{ color: '#292F58', fontSize: 10, paddingTop: 15 }}>Developer Name</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
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
                                <TouchableOpacity style={{ height: 30, width: 80, justifyContent: 'center', borderRadius: 20, backgroundColor: '#292F58' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>Activate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "96%", flex: 1, flexDirection: 'row', marginBottom: 10, padding: 2, justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 120, height: 150, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 12, padding: 4 }}>Service Name</Text>
                            <Text style={{ color: "#FE1459", padding: 2 }}>Utility</Text>
                            <Text style={{ color: '#A6A8BA', fontSize: 7 }}>“Example of use” Description of service</Text>
                            <Text style={{ color: '#292F58', fontSize: 10, paddingTop: 15 }}>Developer Name</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
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
                                <TouchableOpacity style={{ height: 30, width: 80, justifyContent: 'center', borderRadius: 20, backgroundColor: '#292F58' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>Open</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "96%", flex: 1, flexDirection: 'row', marginBottom: 10, padding: 2, justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 120, height: 150, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 12, padding: 4 }}>Service Name</Text>
                            <Text style={{ color: "#FE1459", padding: 2 }}>Utility</Text>
                            <Text style={{ color: '#A6A8BA', fontSize: 7 }}>“Example of use” Description of service</Text>
                            <Text style={{ color: '#292F58', fontSize: 10, paddingTop: 15 }}>Developer Name</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
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
                                <TouchableOpacity style={{ height: 30, width: 100, justifyContent: 'center', borderRadius: 20, backgroundColor: '#FE1459' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>Desactivate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "96%", flex: 1, flexDirection: 'row', marginBottom: 10, padding: 2, justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 120, height: 150, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 12, padding: 4 }}>Service Name</Text>
                            <Text style={{ color: "#FE1459", padding: 2 }}>Utility</Text>
                            <Text style={{ color: '#A6A8BA', fontSize: 7 }}>“Example of use” Description of service</Text>
                            <Text style={{ color: '#292F58', fontSize: 10, paddingTop: 15 }}>Developer Name</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
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
                                <TouchableOpacity style={{ height: 30, width: 80, justifyContent: 'center', borderRadius: 20, backgroundColor: '#292F58' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>Activate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: deviceHeight * 0.2, backgroundColor: 'white', width: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: "96%", flex: 1, flexDirection: 'row', marginBottom: 10, padding: 2, justifyContent: 'space-between', backgroundColor: '#FFFFFF', shadowColor: '#00000029', borderRadius: 4, borderWidth: 0.1, height: '80%' }}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 120, height: 150, borderRadius: 10 }}
                                source={require('../Resources/Appicon.png')} />
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 12, padding: 4 }}>Service Name</Text>
                            <Text style={{ color: "#FE1459", padding: 2 }}>Utility</Text>
                            <Text style={{ color: '#A6A8BA', fontSize: 7 }}>“Example of use” Description of service</Text>
                            <Text style={{ color: '#292F58', fontSize: 10, paddingTop: 15 }}>Developer Name</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
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
                                <TouchableOpacity style={{ height: 30, width: 80, justifyContent: 'center', borderRadius: 20, backgroundColor: '#292F58' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center' }}>Activate</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            */}
            <BottomTabs />
        </SafeAreaView>
    )
}

export default Categories
