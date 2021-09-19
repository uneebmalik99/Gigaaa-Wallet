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
    Platform,
    TextInput,
    Modal,
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
    Checkbox
} from 'react-native-paper';
import BottomTabs from './BottomTabs.js';
import { Appbar, Card } from 'react-native-paper';
import Feather from 'react-native-vector-icons/dist/Feather';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import CircleSlider from "react-native-circle-slider";
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

function EditGig({ item, navigation }) {
    const[value , setvalue] = useState(0)
    const { colors } = useTheme();

    const theme = useTheme();

    const [options , setoptions] = useState(false)
    const [data, setdata] = useState([
        {
            day: "Wednesday",
            date: "Aprl 04 2020"
        }

    ])

    const [selectPublic, setselectPublic] =useState(true)
    const [selectPrivate, setselectPrivate] =useState(false)

    const[EditImages , setEditImages] = useState([{
      image: '../images/bg2.jpeg',
    },{
      image: '../images/bg2.jpeg',

    }])


    const renderimageslist = ({item, index}) =>{
      if (item.plusImage) {
        return (
    <View style={{flexDirection:'column',alignSelf:'center', marginTop:5, justifyContent:'center',paddingHorizontal:2, width:'33%' ,height:140}}
    
    >
    <TouchableOpacity 
    onPress={()=> setopener(true)}
    style={{flexDirection:'column',justifyContent:'center', borderRadius:10, borderWidth:1, borderColor:'grey', alignSelf:'center',  paddingHorizontal:2, width:'100%' ,height:140}}
    >
            <Text style={{color:'grey',alignSelf:'center', fontSize:15,}}>+Upload (000 px X 000 px)</Text>
          </TouchableOpacity>
 
                    
    </View>
        );
      }
      
    
      return(   
    <View style={{flexDirection:'column',alignSelf:'center', marginTop:5,borderRadius:10, paddingHorizontal:2, width:'33%' ,height:140}}
    
    >
  
    <ImageBackground style={{width:'100%',height: 140, resizeMode:'cover'}} imageStyle={{ borderRadius: 10,  }}   source={require('../images/bg2.jpeg')} >
      
    <TouchableOpacity
     style={{alignSelf:'flex-end', margin:7,}}
     >
        <AntDesign name='closecircle'   size={16} color='grey'/>
    </TouchableOpacity>
      
      </ImageBackground>
    

                    
    </View>
    
      
      
      )
      
       }
    

    const [selectPhysical , setselectPhysical] =useState(true)
    const [selectVirtual , setselectVirtual] =useState(false)
   
    var radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
      ];
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
        {
            id:2,
            name:'Wish Outdoor',
        },
        {
            id:3,
            name:'Global News',
        },
        {
            id:3,
            name:'Global News',
        },
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

    const [checked, setChecked] = React.useState('first');


    const renderlist = ({ item, index }) => {
    
        return(


            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('GigDetails')
            }}
            style={{width:'100%', borderColor:'black',marginTop:10, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
            source={require('../images/bg2.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 8,  }} style={{ height: deviceHeight*0.58, width: "100%" }}
                        >

{/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
<Text>ukg</Text>
</View> */}
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
                            
                            <View style={{flexDirection:'column',alignSelf:'flex-start', }}>
                            <Text style={{fontSize:26, fontWeight:'bold', color:'white'}} >Tomorrow</Text>
                            <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>12:00 - 18:00</Text>
                            
                            <View style={{flexDirection:'row',}} >
                                <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='white' />
                            <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>2,5 KM</Text>

                            </View>

                            {/* <Text style={{alignSelf:'flex-start',fontSize:14  ,color:'white' }}>Label1</Text> */}
                            {/* <View style={{flexDirection:'row'}}>

<TouchableOpacity style={{borderRadius:20, paddingHorizontal:10, backgroundColor:'orange',justifyContent:'center'}}>
<Text style={{color:'white',alignSelf:'center', fontWeight:'bold', fontSize:13, padding:1,}}>Virtual</Text>
</TouchableOpacity>

<TouchableOpacity style={{borderRadius:20,marginTop:2,marginLeft:5, paddingHorizontal:10, backgroundColor:'purple',justifyContent:'center'}}>
<Text style={{color:'white',alignSelf:'center',fontWeight:'bold', fontSize:13, padding:1,}}>Free</Text>
</TouchableOpacity>    
</View> */}
                            {/* <TouchableOpacity style={{borderRadius:20,backgroundColor:'orange',justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:13, padding:1,}}>Virtual</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{borderRadius:20,marginTop:2,  backgroundColor:'purple',justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:13, padding:1,}}>Free</Text>
                            </TouchableOpacity>                 */}
                            
                            </View>
                         
                        </View> 

            
                      {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
                    </LinearGradient>
            
<Text style={{color:'white', flex: 1,
         justifyContent:'center',
          
          marginBottom: 0,}}>
    
</Text>
<View style={{flexDirection:'column',width:'100%',justifyContent:'flex-end',  }}>
<LinearGradient
                      colors={[ 'transparent', '#5759ba', ]}
                      
                      locations={[0,0.2]}
                      style={{alignItems: 'center',
                      justifyContent: 'flex-start',
                      opacity:0.9,
                      borderRadius: 8,
                      height:'54%',
                      width: '100%',}}
                    >
                        
                        <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:10,justifyContent:'space-between' }}>
                            
                            <View style={{flexDirection:'column',alignSelf:'flex-start',marginTop:10, }}>
                            <TouchableOpacity style={{borderRadius:20,marginTop:2,width:'50%',  backgroundColor:'green',justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:13, padding:1,}}>Paid</Text>
                            </TouchableOpacity> 

                            <View style={{flexDirection:'row', marginTop:5,}}>
                                <FontAwesome name='music'  style={{alignSelf:'center' , }} color='white' size={20}/>
                                <Text style={{fontSize:26, fontWeight:'bold',marginLeft:10, color:'white'}} >Concert</Text>

                            </View>
                           <View>


                               <View style={{flexDirection:'row', marginTop:5, }}>

                               <Avatar.Image
                        
                        source={require('../images/download.jpeg')} 
                        size={32}
                    >
                    </Avatar.Image>  

                    <View style={{flexDirection:'column', marginLeft:5,}}>
                    <Text style={{fontSize:14, fontWeight:'bold', color:'#52d8dc'}} >Invited by </Text>
                    <View style={{flexDirection:'row'}}>

                    <Text style={{fontSize:14, fontWeight:'bold', color:'white'}} >Aaron Derren 44 </Text>
                    <Feather name='settings' style={{alignSelf:'center'}} color='#52d8dc' />
                    </View>
                  


                    </View>
                    
                               </View>
                           </View>


                            {/* <Text style={{alignSelf:'flex-start',fontSize:14  ,color:'white' }}>Label1</Text> */}
                            {/* <View style={{flexDirection:'row'}}>

<TouchableOpacity style={{borderRadius:20, paddingHorizontal:10, backgroundColor:'orange',justifyContent:'center'}}>
<Text style={{color:'white',alignSelf:'center', fontWeight:'bold', fontSize:13, padding:1,}}>Virtual</Text>
</TouchableOpacity>

<TouchableOpacity style={{borderRadius:20,marginTop:2,marginLeft:5, paddingHorizontal:10, backgroundColor:'purple',justifyContent:'center'}}>
<Text style={{color:'white',alignSelf:'center',fontWeight:'bold', fontSize:13, padding:1,}}>Free</Text>
</TouchableOpacity>    
</View> */}
                            {/* <TouchableOpacity style={{borderRadius:20,backgroundColor:'orange',justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:13, padding:1,}}>Virtual</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{borderRadius:20,marginTop:2,  backgroundColor:'purple',justifyContent:'center'}}>
                                <Text style={{color:'white',alignSelf:'center', fontSize:13, padding:1,}}>Free</Text>
                            </TouchableOpacity>                 */}
                            
                            </View>

                        </View> 
                            <View style={{width:'95%',}}>
                            <FontAwesome name='share-alt' style={{alignSelf:'flex-end',marginHorizontal:10, marginBottom:20}} color='white' size={30} />
                            </View>

                    </LinearGradient>
</View>
     


                            </ImageBackground>


            </TouchableOpacity>

            
        );








    

       
    }


    



    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>




<Modal
          transparent={true}
          animationType={'none'}
          visible={options}
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
                  onPress={() => {setoptions(false)}}
                  style={{
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    width:"100%",
                    height:60,
                    borderBottomWidth:0.4,
                    borderColor:'grey',
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
                    
                    Delete GIG
                  </Text>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => {setoptions(false)}}
                  style={{
                    width:"100%",
                    height:60,
                    borderBottomWidth:0.4,
                    borderColor:'grey',
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
                      color: '#1082ff',
                    }}>
                    
                   Edit GIG
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {setoptions(false)}}
                  style={{
                    width:"100%",
                    borderBottomLeftRadius:10,
                    borderBottomRightRadius:10,
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
                      color: '#1082ff',
                    }}>
                    
                    Share GIG
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setoptions(false)}
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
                      fontWeight:'bold',
                      textAlign: 'center',
                      color: '#1082ff',
                    }}>
                    
                    Cancel
                  </Text>
                </TouchableOpacity>
          
          
          </View>
        </Modal>
       






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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 16, fontWeight: 'bold' }}>Edit GIG</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

   onPress={()=>
            setoptions(true)
        }
    
                            >
                                <Entypo name='dots-three-vertical'  size={20}  color='black'/>
            {/* <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/> */}
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>

  
  
           </View>
    
      
   

       
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

<ScrollView style={{width:deviceWidth , paddingHorizontal:15}}>


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




<View>

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd',}}  >GIG Name<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="John Doe"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>





<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd',}}  >Category<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="NightLife"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>


<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd',}}>Type<Text style={{ color: 'red' }}>*</Text></Text>

<View style={{flexDirection:'row', marginLeft:5,marginTop:8,}}>
  <TouchableOpacity 
  
  onPress={()=> {setselectPhysical(true); setselectVirtual(false)}}>
    { selectPhysical == true ?
    <Ionicons name='radio-button-on' color='#7675fc'  size={22}/> :
    <Ionicons name='radio-button-off' color='grey'  size={22}/>}
  </TouchableOpacity>

<Text style={{alignSelf:'center', marginLeft:10}}>Physical</Text>
  <TouchableOpacity 
  style={{marginLeft:30,}}
  onPress={()=> {setselectVirtual(true); setselectPhysical(false)}}>
    { selectVirtual == true ?
    <Ionicons name='radio-button-on' color='#7675fc'  size={22}/> :
    <Ionicons name='radio-button-off' color='grey'  size={22}/>}
  </TouchableOpacity>
  <Text style={{alignSelf:'center', marginLeft:10}}>Virtual</Text>

</View>
{/* <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}

//   onPress={(value) => {this.setState({value:value})}}
/> */}

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Link to the Event<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,color:'#7e75fc', marginTop:8, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="https://www.abc.com"
   placeholderTextColor='#7e75fc'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>








<View style={{flexDirection:'row'}}>


    <View style={{width:'55%'}}>
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >Start Date<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="2020-11-03 Monday"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>
    </View>

<View style={{width:'5%'}}>

</View>

    <View style={{width:'40%'}}>
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >Start Time<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="3:30 PM"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>
    </View>


</View>




<View style={{flexDirection:'row'}}>


    <View style={{width:'55%'}}>
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >End Date<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="2020-11-03 Monday"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>
    </View>

<View style={{width:'5%'}}>

</View>

    <View style={{width:'40%'}}>
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >End Time<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="3:30 PM"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>
    </View>


</View>



<TouchableOpacity>
    <Text style={{color:'#7e75fc',fontSize:14, marginTop:5,marginLeft:8}}>+Add Another Date</Text>
</TouchableOpacity>

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Price<Text style={{ color: 'red' }}>*</Text></Text>

<View style={{flexDirection:'row'}}>
<Checkbox
      status={checked ? 'checked' : 'unchecked'}
      uncheckedColor='green'
      color='#7e75fc'
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{alignSelf:'center',color:'#2f345c', marginLeft:10}}>This is a free event</Text>
</View>

<View style={{flexDirection:'row'}}>

<TextInput
style={{ width: '30%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="EUR"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>
<View style={{width:'5%'}}>

</View>
<TextInput
style={{ width: '65%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="60,00"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>










</View>

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >GIG Name<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 85 : 80,borderColor:'grey', borderRadius: 15, fontSize: 14,paddingVertical:2 }}
   placeholder="Type a description here (Max 250 words) "
   placeholderTextColor='grey'
   multiline={true}
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>
<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Privacy<Text style={{ color: 'red' }}>*</Text></Text>


<View style={{flexDirection:'row', marginLeft:5,marginTop:8,}}>
  <TouchableOpacity 
  
  onPress={()=> {setselectPublic(true); setselectPrivate(false)}}>
    { selectPublic == true ?
    <Ionicons name='radio-button-on' color='#7675fc'  size={22}/> :
    <Ionicons name='radio-button-off' color='grey'  size={22}/>}
  </TouchableOpacity>

<Text style={{alignSelf:'center',color:'#2f345c', marginLeft:10}}>Public</Text>
  <TouchableOpacity 
  style={{marginLeft:30,}}
  onPress={()=> {setselectPrivate(true); setselectPublic(false)}}>
    { selectPrivate == true ?
    <Ionicons name='radio-button-on' color='#7675fc'  size={22}/> :
    <Ionicons name='radio-button-off' color='grey'  size={22}/>}
  </TouchableOpacity>
  <Text style={{alignSelf:'center',color:'#2f345c',  marginLeft:10}}>Private</Text>

</View>







<View style={{flexDirection:'row', marginTop:10,}}>
<MaterialCommunityIcons name='information-outline' style={{alignSelf:'center'}} size={10} color='grey'  />
<Text style={{fontWeight:'bold', fontSize:12, marginLeft:2,}}>Public - Everyone can see your GIG</Text>
</View>

<Text style={{fontWeight:'bold',fontSize:12, marginLeft:12,marginTop:4,}}>Private - Only invited friends can see your GIG</Text>


<Text style={{fontWeight:'bold', color:'#8978fd',fontSize:14, marginTop:15,}}>Photos and Videos </Text>

<Text style={{fontWeight:'bold', color:'#2f345c',fontSize:10, marginLeft:2,marginTop:4,}}>If you don't upload any picture,your profile picture will be used by default</Text>


<FlatList
                      style={{alignSelf:'center', marginVertical:10,}}
                         contentInsetAdjustmentBehavior="automatic"
                      data={[...EditImages, { plusImage: true }]}

                     renderItem={renderimageslist}
                      numColumns={3}
                      extraData={EditImages}

                
                    keyExtractor={(item, index) => index.toString()}
                 
                  />



<TouchableOpacity
style={{marginVertical:10}}
onPress={() => {}}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={['#6465dc', '#5d67c8', '#596aba', '#526ea5', '#4d7099']}
          style={{    flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 20}}
          >
          <Text style={{  fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent', }}>
Save
         </Text>
        </LinearGradient>
      </TouchableOpacity>







</View>


<View style={{height:80}}>

</View>




















































































          
            </ScrollView>
     
            <BottomTabs />

        </SafeAreaView>
    )
}

export default EditGig;
