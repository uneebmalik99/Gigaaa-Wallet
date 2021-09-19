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
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import CircleSlider from "react-native-circle-slider";
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'

function CreateGig({ item, navigation }) {
    const[value , setvalue] = useState(0)
    const { colors } = useTheme();

    const theme = useTheme();

    const [options , setoptions] = useState(false)
    const [data, setdata] = useState([
        {
            day: "Wednesday",
            date: "Aprl 04 2020"
        },

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
   
    var radiogroup_options = [
      {id: 0, label: 'Button1' },
      {id: 1, label: 'Button2' },
      {id: 2, label: 'Button3' },
      {id: 3, label: 'Button4' },
    ];
    var radio_props = [
        {label: 'Physical', value: 0 },
        {label: 'Virtual', value: 1 }
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


  

    



    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>


      <View style={{  width:'100%',height:deviceHeight*0.08,backgroundColor:'white', paddingHorizontal:13, flexDirection:'column'}}>
  
  <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  
          <TouchableOpacity
                            style={{ alignSelf: 'flex-start', }}
        //                     onPress={() => {
        //     navigation.goBack();
        // }}

                        >
                            {/* <Ionicons name='chevron-back-outline' size={21}  /> */}
                            {/* <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} /> */}
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Create GIG</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}
                       onPress={() => {
            navigation.goBack();
        }}
    
                            >
                                <Ionicons name='close-outline'  size={20}  color='black'/>
            {/* <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/> */}
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>

  
  
           </View>
    
      
   

       

<ScrollView style={{width:deviceWidth , paddingHorizontal:15}}>





<View>

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd',}}  >GIG Name<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="ASOT 900 LIVE by Armin van Buuren"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>





<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >Category<Text style={{ color: 'red' }}>*</Text></Text>
<TextInput
style={{ width: '100%', paddingHorizontal: 15,marginTop:4, borderWidth: 0.3,height:Platform.OS === 'ios' ? 35 : 30,borderColor:'grey', borderRadius: 20, fontSize: 14,paddingVertical:2 }}
   placeholder="NightLife"
   placeholderTextColor='#2f345c'
   onChangeText={
    
     (value) => setcardholder(value)
   }
>


</TextInput>


<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Type<Text style={{ color: 'red' }}>*</Text></Text>

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

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Link to the Event<Text style={{ color: 'red' }}>*</Text></Text>


{/* <RadioForm
  radio_props={radio_props}
  initial={0}
  formHorizontal={true}

//   onPress={(value) => {this.setState({value:value})}}
/> */}

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
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Start Date<Text style={{ color: 'red' }}>*</Text></Text>
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
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>Start Time<Text style={{ color: 'red' }}>*</Text></Text>
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
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>End Date<Text style={{ color: 'red' }}>*</Text></Text>
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
    <Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}>End Time<Text style={{ color: 'red' }}>*</Text></Text>
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
    <Text style={{color:'#7e75fc',fontSize:12, marginTop:5,marginLeft:8}}>+Add Another Date</Text>
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
    <Text style={{alignSelf:'center', marginLeft:10}}>This is a free event</Text>
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

<Text style={{ fontWeight: 'bold',marginTop:10, fontSize: 14, marginLeft:8,color:'#8978fd'}}  >Description<Text style={{ color: 'red' }}>*</Text></Text>
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
Create GIG 
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

export default CreateGig;
