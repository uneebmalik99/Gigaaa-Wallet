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
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import CircleSlider from "react-native-circle-slider";
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

function Home({ item, navigation }) {
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



    const renderlist = ({ item, index }) => {
    
        let d = index;
        let g = null;
        if(d & 1 ){
           g = index % 3;
           console.warn(g); 
        }
if(index === 1){
    return(
    <TouchableOpacity style={{height:150,marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8,justifyContent:'center', flex:0.5,backgroundColor:'#D7BDE2', }}>
<Text style={{color:'white', alignSelf:'center'}}>Placeholder</Text>
    </TouchableOpacity>
    );
}else if(g !== null){
    return(
        <TouchableOpacity style={{flex:0.5,  height:100, borderColor:'black',marginTop:-125, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>

        <ImageBackground 
                source={require('../images/bg2.jpeg')} 
        
        
        // source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                                imageStyle={{ borderRadius: 8,  }} style={{ height: 280, width: "100%" }}
                            >
        
        {/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
        <Text>ukg</Text>
        </View> */}
        <LinearGradient
              colors={['white',  'transparent', ]}
              
              locations={[0.55, 0.9]}
                        style={{alignItems: 'center',
              justifyContent:'flex-start',
              height:'15%',
            paddingTop:2,
              borderRadius: 8,
              
              width: '100%',}}
            >
                
                <View style={{flexDirection:'row',width:'80%',paddingVertical:1, justifyContent:'space-between'}}>
                    <Text>Date</Text>
                    <Avatar.Image
            
                source={require('../images/download.jpeg')} 
                size={22}
            >
            </Avatar.Image>  
                </View>
              {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
            </LinearGradient>
        
        <Text style={{color:'white', flex: 1,
             justifyContent:'center',
              
              marginBottom: 0,}}>
        
        </Text>
        
            <LinearGradient
              colors={['transparent', 'white', ]}
              
              locations={[0,  0.5]}
                        style={{alignItems: 'center',
                justifyContent:'flex-end',       
              marginBottom: 0,
              borderRadius: 8,
              height:'16%',
              width: '100%',}}
            >
                    <Text style={{alignSelf:'flex-start',paddingVertical:2,paddingHorizontal:18 }}>Title </Text>
               
            </LinearGradient>
        
        
                                </ImageBackground>
        
        
                </TouchableOpacity>
        
        
    )
}
else{
    return(
        <TouchableOpacity style={{flex:0.5,height:150, borderColor:'black',marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
        source={require('../images/bg2.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                        imageStyle={{ borderRadius: 8,  }} style={{ height: 280, width: "100%" }}
                    >

{/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
<Text>ukg</Text>
</View> */}
<LinearGradient
      colors={['white',  'transparent', ]}
      
      locations={[0.55, 0.9]}
                style={{alignItems: 'center',
      justifyContent:'flex-start',
      height:'15%',
    paddingTop:2,
      borderRadius: 8,
      
      width: '100%',}}
    >
        
        <View style={{flexDirection:'row',width:'80%',paddingVertical:1, justifyContent:'space-between'}}>
            <Text>Date</Text>
            <Avatar.Image
    
        source={require('../images/download.jpeg')} 
        size={22}
    >
    </Avatar.Image>  
        </View>
      {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
    </LinearGradient>

<Text style={{color:'white', flex: 1,
     justifyContent:'center',
      
      marginBottom: 0,}}>

</Text>

    <LinearGradient
      colors={['transparent', 'white', ]}
      
      locations={[0,  0.5]}
                style={{alignItems: 'center',
        justifyContent:'flex-end',       
      marginBottom: 0,
      borderRadius: 8,
      height:'16%',
      width: '100%',}}
    >
            <Text style={{alignSelf:'flex-start',paddingVertical:2,paddingHorizontal:18 }}>Title </Text>
       
    </LinearGradient>


                        </ImageBackground>


        </TouchableOpacity>

    );
}
      

       
    }

    const renderlist2 = ({ item, index }) => {
    

       

        return(
            <View style={{flex:0.5,borderColor:'black',marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
            source={require('../images/bg2.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 8,  }} style={{ height: 280, width: "100%" }}
                        >

{/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
<Text>ukg</Text>
</View> */}
<LinearGradient
          colors={['white',  'transparent', ]}
          
          locations={[0.55, 0.9]}
                    style={{alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          
          width: '100%',}}
        >
            
            <Text style={{alignSelf:'center',paddingVertical:5, }}>Title </Text>

          {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
        </LinearGradient>

<Text style={{color:'white', flex: 1,
         justifyContent:'center',
          
          marginBottom: 0,}}>
    
</Text>

        <LinearGradient
          colors={['transparent', 'white', ]}
          
          locations={[0,  0.5]}
                    style={{alignItems: 'center',
            justifyContent:'center',       
          marginBottom: 0,
          borderRadius: 8,
          paddingVertical:5,
          width: '100%',}}
        >
  <View style={{flexDirection:'row',width:'80%',paddingVertical:5, justifyContent:'space-between'}}>
                <Text>Date</Text>
                <Avatar.Image
        
            source={require('../images/download.jpeg')} 
            size={22}
        >
        </Avatar.Image>  
            </View>           
        </LinearGradient>


                            </ImageBackground>


            </View>

        );
       
    }

    const renderlist3 = ({ item, index }) => {
    

        return(
            <View style={{flex:0.5,borderColor:'black',marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>

<ImageBackground 
            source={require('../images/bg2.jpeg')} 


// source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                            imageStyle={{ borderRadius: 8,  }} style={{ height: 280, width: "100%" }}
                        >

{/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
<Text>ukg</Text>
</View> */}
<LinearGradient
          colors={['white',  'transparent', ]}
          
          locations={[0.4,  1]}
          style={{alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          
          width: '100%',}}
        >
            
           
          {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
        </LinearGradient>

<Text style={{color:'white', flex: 1,
         justifyContent:'center',
          
          marginBottom: 0,}}>
    
</Text>

        <LinearGradient
          colors={['transparent', 'white', ]}
          
          locations={[0,  0.6]}
                    style={{alignItems: 'center',
            justifyContent:'flex-end',       
          marginBottom: 0,
          paddingBottom:3,
          height:'30%',
          borderRadius: 8,
          width: '100%',}}
        >
                            <Text style={{alignSelf:'flex-start',  paddingHorizontal:18, }}>Title </Text>

             <View style={{flexDirection:'row',alignItems:'flex-end', width:'80%',paddingVertical:2, justifyContent:'space-between'}}>
                <Text>Date</Text>
                <Avatar.Image
        
            source={require('../images/download.jpeg')} 
            size={22}
        >
        </Avatar.Image>  
            </View>
           
        </LinearGradient>


                            </ImageBackground>


            </View>

        );
       
    }


    const renderlist4 = ({ item, index }) => {
        let d = index;
        let g = null;
        if(d & 1 ){
           g = index % 3;
           console.warn(g); 
        }
        if(index === 1){
            return(
            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('GigDetails')
            }}
            style={{height:150,marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8,justifyContent:'center', flex:0.5,backgroundColor:'#D7BDE2', }}>
        <Text style={{color:'white', alignSelf:'center'}}>Placeholder</Text>
            </TouchableOpacity>
            );
        }  
        
        else if(g !== null ){
            return(
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('GigDetails')
                }}
                style={{flex:0.5,borderColor:'black', height:100, borderColor:'black',marginTop:-125, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>
    
                <ImageBackground 
                            source={require('../images/bg2.jpeg')} 
                
                
                // source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                                            imageStyle={{ borderRadius: 8,  }} style={{ height: 280, width: "100%" }}
                                        >
                
                {/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
                <Text>ukg</Text>
                </View> */}
                <LinearGradient
                          colors={['#5759ba',   'transparent', ]}
                          
                          locations={[0.8, 1]}
                          style={{alignItems: 'center',
                          justifyContent: 'flex-start',
                          opacity:0.8,
                          borderRadius: 8,
                          height:'26%',
                          width: '100%',}}
                        >
                            <View style={{flexDirection:'row',alignItems:'center', width:'88%',paddingTop:6,justifyContent:'space-between' }}>
                                
                                <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                                <Text style={{fontSize:16, fontWeight:'bold', color:'white'}} >16 Apr 9pm</Text>
                                {/* <Text style={{alignSelf:'flex-start',fontSize:14  ,color:'white' }}>Label1</Text> */}

                                
                                </View>
                                <Avatar.Image
                        
                            source={require('../images/download.jpeg')} 
                            size={32}
                        >
                        </Avatar.Image>  
                            </View> 
                            <Text style={{alignSelf:'flex-start',fontSize:16 , paddingHorizontal:11,color:'white',fontWeight:'bold',  }}>Tattoo WorkShop  </Text>

                
                          {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
                        </LinearGradient>
                
                <Text style={{color:'white', flex: 1,
                         justifyContent:'center',
                          
                          marginBottom: 0,}}>
                    
                </Text>


                <View style={{flexDirection:'column',width:'50%', alignSelf:'flex-end', marginRight:5,marginBottom:5, }}>

<TouchableOpacity style={{borderRadius:20, paddingHorizontal:10, backgroundColor:'orange',justifyContent:'center'}}>
    <Text style={{color:'white',alignSelf:'center',fontWeight:'bold', fontSize:16, padding:1,}}>Virtual</Text>
</TouchableOpacity>

<TouchableOpacity style={{borderRadius:20,marginTop:2,marginLeft:5, paddingHorizontal:10, backgroundColor:'purple',justifyContent:'center'}}>
    <Text style={{color:'white',alignSelf:'center',fontWeight:'bold', fontSize:16, padding:1,}}>Free</Text>
</TouchableOpacity>    
</View>
     
                
                     
                
                
                                            </ImageBackground>
                
                
                            </TouchableOpacity>
                
                
            )
        }
        
        else{
            return(
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('GigDetails')
                }}
                style={{flex:0.5,borderColor:'black',marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>
    
    <ImageBackground 
                source={require('../images/bg2.jpeg')} 
    
    
    // source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                                imageStyle={{ borderRadius: 8,  }} style={{ height: 280, width: "100%" }}
                            >
    
    {/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
    <Text>ukg</Text>
    </View> */}
   <LinearGradient
                          colors={['#5759ba',   'transparent', ]}
                          
                          locations={[0.8, 1]}
                          style={{alignItems: 'center',
                          justifyContent: 'flex-start',
                          opacity:0.8,
                          borderRadius: 8,
                          height:'28%',
                          width: '100%',}}
                        >
                            <View style={{flexDirection:'row',alignItems:'center', width:'88%',paddingTop:6,justifyContent:'space-between' }}>
                                
                                <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                                <Text style={{fontSize:16, fontWeight:'bold', color:'white'}} >16 Apr 9pm</Text>
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
                                <Avatar.Image
                        
                            source={require('../images/download.jpeg')} 
                            size={32}
                        >
                        </Avatar.Image>  
                            </View> 
                            <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:11,color:'white'  }}>Tattoo WorkShop  </Text>

                
                          {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
                        </LinearGradient>
                
    <Text style={{color:'white', flex: 1,
             justifyContent:'center',
              
              marginBottom: 0,}}>
        
    </Text>
    <View style={{flexDirection:'column',width:'50%', alignSelf:'flex-end', marginRight:5,marginBottom:5, }}>

<TouchableOpacity style={{borderRadius:20, paddingHorizontal:10, backgroundColor:'orange',justifyContent:'center'}}>
    <Text style={{color:'white',alignSelf:'center',fontWeight:'bold', fontSize:16, padding:1,}}>Virtual</Text>
</TouchableOpacity>

<TouchableOpacity style={{borderRadius:20,marginTop:2,marginLeft:5, paddingHorizontal:10, backgroundColor:'purple',justifyContent:'center'}}>
    <Text style={{color:'white',alignSelf:'center',fontWeight:'bold', fontSize:16, padding:1,}}>Free</Text>
</TouchableOpacity>    
</View>
         
    
    
                                </ImageBackground>
    
    
                </TouchableOpacity>
    
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
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>gigaaa</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

   onPress={()=>
       {}}
    
                            >
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>
  
           </View>
    
    <ScrollView>
        <View style={{borderRadius:20, borderWidth:0.4,marginHorizontal:15,justifyContent:'center'}}>
        {/* <CalendarList
  // Enable horizontal scrolling, default = false
  horizontal={true}
  // Enable paging on horizontal, default = false
  pagingEnabled={true}
  // Set custom calendarWidth.
 
/>

        <Calendar
  horizontal={true}

  // Collection of dates that have to be colored in a special way. Default = {}

  // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
  markingType={'period'}
/> */}



<CalendarList
style={{backgroundColor:'red',marginVertical:3, alignSelf:"center", width:'95%'}}
  // Enable horizontal scrolling, default = false
  horizontal={true}
  // Enable paging on horizontal, default = false
  
  pagingEnabled={true}
  // Set custom calendarWidth.
  calendarWidth={320}
  markedDates={{
    '2021-04-16': {textColor: 'green'},
    '2021-04-17': {startingDay: true, color: 'green'},
    '2021-04-20': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
    '2021-04-23': {disabled: true, startingDay: true, color: 'green', endingDay: true}
  }}
  markingType={'multi-dot'}
/>
        </View>



<FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:12,  paddingBottom: 90}}
                renderItem={renderlist4}
                keyExtractor={(item,id) => id.toString()}
                 /> 

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


           
     
            <BottomTabs />

        </SafeAreaView>
   
   
   )
}

export default Home;
