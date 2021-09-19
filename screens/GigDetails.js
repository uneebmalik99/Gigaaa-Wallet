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
import {

    Avatar,
   
} from 'react-native-paper';
import BottomTabs from './BottomTabs.js';
import { Appbar, Card } from 'react-native-paper';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import CircleSlider from "react-native-circle-slider";
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function GigDetails({ item, navigation }) {
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
        },
        {
            id:1,
            name:'Global News',
        },
      
       
    ])


    const renderlist2 = ({item , index}) =>{
        return(
        <TouchableOpacity style={{borderRadius:10,borderColor:'#8978fd',marginHorizontal:2,paddingHorizontal:15, flex:0.5,justifyContent:'center',   borderWidth:1}}>
    <View style={{justifyContent:'center',paddingVertical:10, alignSelf:'center'}}>
    <Text style={{alignSelf:'center', fontSize:12}}>Monday</Text>
    <Text style={{alignSelf:'center', fontSize:18,marginTop:3, fontWeight:'bold'}}>21</Text>
    <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Sep 2020</Text>
    <Text style={{alignSelf:'center',fontSize:12, marginTop:10,}}>18:00 - 20:30</Text>
    </View>

</TouchableOpacity>
    
        );
}
    const renderlist = ({ item, index }) => {
    
        return(


            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('GigDetails')
            }}
            style={{flex:0.5, borderColor:'black',marginTop:10, marginHorizontal:1.3, borderWidth:0.2, borderRadius:8 }}>

<ImageBackground 
            source={require('../images/bg2.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 8,  }} style={{ height:150, width: "100%" }}
                        >



                        {/* <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:6,justifyContent:'space-between' }}>
                            
                            <View style={{flexDirection:'column',alignSelf:'flex-start', }}>
                            <Text style={{fontSize:26, fontWeight:'bold', color:'white'}} >Tomorrow</Text>
                            
                           

                          
                            
                            </View>
                         
                        </View>  */}

            
            
<Text style={{color:'white', flex: 1,
         justifyContent:'center',
          
          marginBottom: 0,}}>
    
</Text>
<View style={{flexDirection:'column',width:'100%',padding:5, justifyContent:'flex-end',  }}>

                        
                    <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>
                        28
                    </Text>


                    <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>
                        Justine Locjne
                    </Text>
                          

</View>
     


                            </ImageBackground>


            </TouchableOpacity>

            
        );








    

       
    }


    



    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
              <View style={{  width:'100%',height:deviceHeight*0.08,backgroundColor:'white', paddingHorizontal:13, flexDirection:'column'}}>
  
  <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  
          <TouchableOpacity
                            style={{ alignSelf: 'flex-start', }}
                            onPress={() => {
            navigation.goBack();
        }}

                        >
                            <Ionicons name='chevron-back-outline' size={21}  />
                            {/* <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} /> */}
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>GIG</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

   onPress={()=>
   navigation.navigate('EditGig')}
    
                            >
                                <Entypo name='dots-three-vertical'  size={20}  color='black'/>
            {/* <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/> */}
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>

  
  
           </View>
    
      
   
<ScrollView style={{width:deviceWidth, paddingHorizontal:15,}}>
<TouchableOpacity 
         
            style={{width:'100%', borderColor:'black',marginTop:10, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
            source={require('../images/bg2.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 8,  }} style={{justifyContent:'space-between', flexDirection:'column', height: deviceHeight*0.68, width: "100%" }}
                        >

<LinearGradient
                      colors={['#5759ba',   'transparent', ]}
                      
                      locations={[0.8, 1]}
                      style={{alignItems: 'center',
                      justifyContent: 'flex-start',
                      opacity:0.9,
                      borderRadius: 8,
                      height:'20%',
                      width: '100%',}}
                    >
                        <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:6,justifyContent:'space-between' }}>
                            
                            <View style={{flexDirection:'column',width:'100%', alignSelf:'flex-start', }}>
                                <View style={{width:'100%',justifyContent:'space-between', flexDirection:'row'}}>
                                <Text style={{fontSize:26, fontWeight:'bold', color:'white'}} >Tomorrow</Text>
                                <FontAwesome name='share-alt' style={{alignSelf:'center', }} color='white' size={28} />
                                </View>
                            <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>12:00 - 18:00</Text>
                            
                            <View style={{flexDirection:'row', marginTop:2,}} >
                                <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='white' />
                            <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>2,5 KM</Text>

                            </View>

                            
                            </View>
                        </View> 

            
                    </LinearGradient><LinearGradient
                      colors={[ 'transparent', '#5759ba', ]}
                      
                      locations={[0,0.25]}
                      style={{alignItems: 'center',
                      justifyContent: 'flex-start',
                      opacity:0.9,
                      borderRadius: 8,
                      height:'24%',
                      width: '100%',}}
                    >
                        
                        <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:14,justifyContent:'space-between' }}>
                            
                            <View style={{flexDirection:'column',alignSelf:'flex-start',marginTop:10, }}>
                            {/* <TouchableOpacity style={{borderRadius:20,marginTop:2,width:'50%',  backgroundColor:'green',justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:16, padding:1,}}>Paid</Text>
                            </TouchableOpacity>  */}

                            <View style={{flexDirection:'row', marginTop:5,}}>
                            <Text style={{fontSize:26, fontWeight:'bold', color:'white'}} >Concert</Text>

                                <FontAwesome name='music'  style={{alignSelf:'center' ,marginLeft:5, }} color='white' size={20}/>

                            </View>
                           <View>


                               <View style={{flexDirection:'row',width:'95%', marginTop:5,justifyContent:'space-between' }}>

<View style={{flexDirection:'row'}}>

                               <Avatar.Image
                        
                        source={require('../images/download.jpeg')} 
                        size={42}
                    >
                    </Avatar.Image>  

                    <View style={{flexDirection:'column',width:'90%',justifyContent:'center',  marginLeft:5,}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#52d8dc'}} >Invited by </Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                
                <View  style={{flexDirection:'row'}}>
<Text style={{fontSize:16, fontWeight:'bold', color:'white'}} >Aaron Derren 44 </Text>
                    <Feather name='settings' style={{alignSelf:'center'}} color='#52d8dc' />

                    
                </View>
                    
                    <TouchableOpacity style={{borderRadius:20,marginTop:2,width:'25%',  backgroundColor:'green',alignSelf:'center', justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:16, padding:1,}}>Paid</Text>
                            </TouchableOpacity>
                    </View>
                  


                    </View>
                    </View>
   
                               </View>

                           </View>


             
                            </View>

                        </View> 
                          

                    </LinearGradient>



     


                            </ImageBackground>


            </TouchableOpacity>
<Entypo name='chevron-thin-down' style={{alignSelf:'center', marginTop:10,}} size={24} color='grey'/>




<View>
    <Text style={{fontWeight:'bold',fontSize:18,marginTop:35,}}>ASOT 900 LIVE by Armin van Buuren</Text>
    <Text style={{fontSize:14,fontWeight:'bold',color:'#8978fd', marginTop:15,}}>Event Location</Text>
    <Text style={{fontSize:12, marginTop:2.5,}}>Dircksenstrabe 35,10178 Berlin, Germany</Text>

<Text style={{fontSize:14,fontWeight:'bold',marginTop:15,color:'#8978fd'}}>When?</Text>
</View>
<View style={{flexDirection:'row',marginTop:3, width:'100%', justifyContent:'space-around'}}>
<FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                horizontal={true}
                contentContainerStyle={{backgroundColor:'white',  }}
                renderItem={renderlist2}
                keyExtractor={(item,id) => id.toString()}
                 />  

{/* <TouchableOpacity style={{borderRadius:10,borderColor:'#8978fd',width:'32.8%',justifyContent:'center',   borderWidth:1}}>
    <View style={{justifyContent:'center',paddingVertical:10, alignSelf:'center'}}>
    <Text style={{alignSelf:'center', fontSize:12}}>Monday</Text>
    <Text style={{alignSelf:'center', fontSize:18,marginTop:3, fontWeight:'bold'}}>21</Text>
    <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Sep 2020</Text>
    <Text style={{alignSelf:'center',fontSize:12, marginTop:10,}}>18:00 - 20:30</Text>
    </View>

</TouchableOpacity> */}


{/* <View style={{width:'2%'}}>

    </View> */}
    {/* <TouchableOpacity style={{borderRadius:10,borderColor:'grey',width:'32.8%',justifyContent:'center',   borderWidth:1}}>
    <View style={{justifyContent:'center',paddingVertical:10, alignSelf:'center'}}>
    <Text style={{alignSelf:'center', fontSize:12}}>Monday</Text>
    <Text style={{alignSelf:'center', fontSize:18,marginTop:3, fontWeight:'bold'}}>21</Text>
    <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Sep 2020</Text>
    <Text style={{alignSelf:'center',fontSize:12, marginTop:10,}}>18:00 - 20:30</Text>
    </View>

</TouchableOpacity> */}

{/* <View style={{width:'2%'}}>

    </View> */}
    {/* <TouchableOpacity style={{borderRadius:10,borderColor:'grey',width:'32.8%',justifyContent:'center',  borderWidth:1}}>
    <View style={{justifyContent:'center',paddingVertical:10, alignSelf:'center'}}>
    <Text style={{alignSelf:'center', fontSize:12}}>Monday</Text>
    <Text style={{alignSelf:'center', fontSize:18,marginTop:3, fontWeight:'bold'}}>21</Text>
    <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Sep 2020</Text>
    <Text style={{alignSelf:'center',fontSize:12, marginTop:10,}}>18:00 - 20:30</Text>
    </View>

</TouchableOpacity> */}
</View>


<Text style={{fontSize:14,fontWeight:'bold',marginTop:10,color:'#8978fd'}}>Description</Text>
<Text style={{fontSize:12,marginTop:2}}>
    demo text demo textdemo text demo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo text
</Text>



<Text style={{fontSize:14,fontWeight:'bold',marginTop:15,color:'#8978fd'}}>Price</Text>
<Text style={{fontSize:12,marginTop:5}}>
   <Text style={{fontWeight:'bold', }}>Eur 60,00</Text> (will be paid at the location)
</Text>



<Text style={{fontSize:14,fontWeight:'bold',marginTop:15,color:'#8978fd'}}>Participants (Public Event)</Text>
<View style={{marginTop:6,flexDirection:'row',marginRight:5, justifyContent:'space-between'}}>
<Text style={{fontWeight:'bold',fontSize:12,  }}>1209 Participants</Text>
<TouchableOpacity
onPress={()=> navigation.navigate('Participant')}
>
<Text style={{fontSize:12,fontWeight:'bold',color:'#8978fd'}}>Show All</Text>


</TouchableOpacity>


</View>



<FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{backgroundColor:'white',   paddingBottom: 30}}
                renderItem={renderlist}
                keyExtractor={(item,id) => id.toString()}
                 /> 








<View style={{height:55}}>


   <Text>dsv</Text>    
   </View>
</ScrollView>


          {/* <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:3,  paddingBottom: 30}}
                renderItem={renderlist}
                keyExtractor={(item,id) => id.toString()}
                 /> */}






            {/* <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:3,  paddingBottom: 30}}
                renderItem={renderlist2}
                keyExtractor={(item,id) => id.toString()}
                 />  */}







            {/* <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:3,  paddingBottom: 30}}
                renderItem={renderlist3}
                keyExtractor={(item,id) => id.toString()}
                 /> */}


            {/* <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                contentContainerStyle={{backgroundColor:'white', width:deviceWidth, paddingHorizontal:10,  paddingBottom: 30}}
                renderItem={renderlist}
                keyExtractor={(item,id) => id.toString()}
                 />  */}
     
            <BottomTabs />

        </SafeAreaView>
    )
}

export default GigDetails;
