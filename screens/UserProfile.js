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
import { Appbar , Avatar} from 'react-native-paper';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';

import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



const nutimg = require('../images/nutfinal.png');
const tebimg = require('../images/tebbankaccount.png');
const gimg = require('../images/Gfinal.png');
const bitcoinimg = require('../images/bitcoinfinal.png');
const BNLimg = require('../images/debitCard.png');

const UserProfile = ({ navigation }) => {













  const [Data, setData] = useState([
{
  id:1,
  date:'Today , 20-03-21'
},
{
  id:2,
  date:'Tomorrow , 21-03-21'
}
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


const separator =() =>{
  return(
    <View>
<Text style={{justifyContent:'center',fontWeight:'bold', fontSize:18, alignSelf:'center' , color:'#7675fc'}}>Today ,20-03-21</Text>
    </View>
  )

}

const renderlist =  ({ item, index }) =>{

    return(
      <View>

<Text style={{justifyContent:'center',fontWeight:'bold', fontSize:18, alignSelf:'center' , color:'#7675fc'}}>{item.date}</Text>

    <TouchableOpacity style={{borderWidth:1  , width:'100%', height:230, alignSelf:'center', justifyContent:'space-between', borderRadius:15,marginVertical:10,marginHorizontal:0.5,  borderColor:'#7d7cfc' ,flexDirection:'row',}}>
          



    <View style={{padding:8 ,width:'50%',height:'100%',justifyContent:'space-between', flexDirection:'column'}}>
      <View>
        
         <Text style={{color:'#7d7cfc' }}>Mon, Sep 21 - 18:00</Text>
         <Text>ASOT 900 LIVE by Armin van Buuren</Text>
         <View>
       <View style={{flexDirection:'row',}} >
                               <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='#7d7cfc' />
                         <Text style={{alignSelf:'flex-start',fontSize:15 , paddingHorizontal:3,color:'#7d7cfc'  }}>2,5 KM</Text>

                          </View>  
                                </View>
       </View>

       <Text style={{fontWeight:'bold', paddingLeft:10,paddingBottom:10, fontSize:15,color:'#7d7cfc' }}>See Tickets</Text>
       </View>
<View style={{width:'50%',height:'100%'}}>
<ImageBackground 
          source={require('../images/bg2.jpeg')} 


                          imageStyle={{ borderRadius: 15,  }} style={{ height: '100%', width: "100%" }}
                      >


<LinearGradient
                    colors={['#6264db', '#32326c',  'transparent', ]}
                    
                    locations={[0.3,0.8 ,1 ]}
                    style={{alignItems: 'center',
                    justifyContent: 'flex-start',
                    opacity:0.9,
                    borderRadius: 8,
                    height:'20%',
                    width: '100%',}}
                  >
                      <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:6,justifyContent:'space-between' }}>
                          
                          <View style={{flexDirection:'row',alignSelf:'flex-start', }}>
                          <AntDesign color='white' size={20} style={{alignSelf:'center'}} name='apple-o' />

                          <Text style={{fontSize:18, fontWeight:'bold', color:'white' , marginLeft:7,}} >Food</Text>
                        

                     
                          </View>
                       
                      </View> 

          
                  </LinearGradient>
          
<Text style={{color:'white', flex: 1,
       justifyContent:'center',
        
        marginBottom: 0,}}>
  
</Text>
<View style={{flexDirection:'column',width:'100%',justifyContent:'flex-end',  }}>
<LinearGradient
                    colors={[ 'transparent', '#242547', ]}
                    
                    locations={[0.2,0.7]}
                    style={{alignItems: 'center',
                    justifyContent: 'flex-start',
                    opacity:0.9,
                    borderRadius: 8,
                    height:'48%',
                    width: '100%',}}
                  >
                      
                      <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:10,justifyContent:'space-between' }}>
                          
                       
                         <View>


                             <View style={{flexDirection:'row', marginTop:5, }}>

                             <Avatar.Image
                      
                      source={require('../images/download.jpeg')} 
                      size={32}
                  >
                  </Avatar.Image>  

                  <View style={{flexDirection:'column', marginLeft:5,}}>
                  <Text style={{fontSize:10, fontWeight:'bold', color:'#52d8dc'}} >Invited by </Text>
                  <View style={{flexDirection:'row'}}>

                  <Text style={{fontSize:14, fontWeight:'bold', color:'white'}} >Aaron Derren 44 </Text>
                  <Feather name='settings' style={{alignSelf:'center'}} color='#52d8dc' />
                  </View>
                


                  </View>
                  
                             </View>
                         </View>


               
                          

                      </View> 
                        
                  </LinearGradient>
</View>
   


                         </ImageBackground>
  
</View>
       
  </TouchableOpacity>
  </View>
  );   
//   }else{
//     return(<TouchableOpacity style={{flex:0.5 ,height:230, alignSelf:'center', justifyContent:'space-between', borderRadius:15,marginVertical:10,marginHorizontal:0.5 ,flexDirection:'column', backgroundColor:'#f4f4f5'}}>
     
// <ImageBackground 
//           source={require('../images/bg2.jpeg')} 


//                           imageStyle={{ borderRadius: 15,  }} style={{ height: '100%', width: "100%" }}
//                       >


// <LinearGradient
//                     colors={['#6264db', '#32326c',  'transparent', ]}
                    
//                     locations={[0.3,0.8 ,1 ]}
//                     style={{alignItems: 'center',
//                     justifyContent: 'flex-start',
//                     opacity:0.9,
//                     borderRadius: 8,
//                     height:'20%',
//                     width: '100%',}}
//                   >
//                       <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:6,justifyContent:'space-between' }}>
                          
//                           <View style={{flexDirection:'row',alignSelf:'flex-start', }}>
//                           <AntDesign color='white' size={20} style={{alignSelf:'center'}} name='apple-o' />

//                           <Text style={{fontSize:18, fontWeight:'bold', color:'white' , marginLeft:7,}} >Food</Text>
                        

                     
//                           </View>
                       
//                       </View> 

          
//                   </LinearGradient>
          
// <Text style={{color:'white', flex: 1,
//        justifyContent:'center',
        
//         marginBottom: 0,}}>
  
// </Text>
// <View style={{flexDirection:'column',width:'100%',justifyContent:'flex-end',  }}>
// <LinearGradient
//                     colors={[ 'transparent', '#242547', ]}
                    
//                     locations={[0.2,0.7]}
//                     style={{alignItems: 'center',
//                     justifyContent: 'flex-start',
//                     opacity:0.9,
//                     borderRadius: 8,
//                     height:'48%',
//                     width: '100%',}}
//                   >
                      
//                       <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:10,justifyContent:'space-between' }}>
                          
                       
//                          <View>


//                              <View style={{flexDirection:'row', marginTop:5, }}>

//                              <Avatar.Image
                      
//                       source={require('../images/download.jpeg')} 
//                       size={32}
//                   >
//                   </Avatar.Image>  

//                   <View style={{flexDirection:'column', marginLeft:5,}}>
//                   <Text style={{fontSize:10, fontWeight:'bold', color:'#52d8dc'}} >Invited by </Text>
//                   <View style={{flexDirection:'row'}}>

//                   <Text style={{fontSize:14, fontWeight:'bold', color:'white'}} >Aaron Derren 44 </Text>
//                   <Feather name='settings' style={{alignSelf:'center'}} color='#52d8dc' />
//                   </View>
                


//                   </View>
                  
//                              </View>
//                          </View>


               
                          

//                       </View> 
                        
//                   </LinearGradient>
// </View>
   


//                          </ImageBackground>
//   </TouchableOpacity>
//   );
//   }
  
}
// const renderlist = ({ item, index }) => {




//   if (index % 2 == 0) {
//     return (<TouchableOpacity style={{justifyContent:'space-between',borderColor:'#7d7cfc', height:200,paddingVertical:10, borderWidth:1,borderRadius:15, flex:0.5,    paddingHorizontal: 10, flexDirection: 'column', }}>

// {/* <View>
//         <Text>Mon, Sep 21 - 18:00</Text>
//         <Text>ASOT 900 LIVE by Armin van Buuren</Text>
//         <View>
//         <View style={{flexDirection:'row',}} >
//                               <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='#7d7cfc' />
//                           <Text style={{alignSelf:'flex-start',fontSize:15 , paddingHorizontal:3,color:'#7d7cfc'  }}>2,5 KM</Text>

//                           </View>  
//                                   </View>
//       </View>

//       <Text>See Tickets</Text> */}
    

//     </TouchableOpacity>


//     )
//   }
//     else {
//       return (<TouchableOpacity style={{justifyContent:'space-between', height:200,borderWidth:1, borderRadius:15, flex:0.5,  flexDirection: 'column', }}>

   




// {/* <ImageBackground 
//           source={require('../images/bg2.jpeg')} 


//                           imageStyle={{ borderRadius: 15,  }} style={{ height: '100%', width: "100%" }}
//                       >


// <LinearGradient
//                     colors={['#5759ba',   'transparent', ]}
                    
//                     locations={[0.8, 1]}
//                     style={{alignItems: 'center',
//                     justifyContent: 'flex-start',
//                     opacity:0.9,
//                     borderRadius: 8,
//                     height:'20%',
//                     width: '100%',}}
//                   >
//                       <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:6,justifyContent:'space-between' }}>
                          
//                           <View style={{flexDirection:'column',alignSelf:'flex-start', }}>
//                           <Text style={{fontSize:26, fontWeight:'bold', color:'white'}} >Tomorrow</Text>
//                           <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>12:00 - 18:00</Text>
                          
//                           <View style={{flexDirection:'row',}} >
//                               <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='white' />
//                           <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>2,5 KM</Text>

//                           </View>

                     
//                           </View>
                       
//                       </View> 

          
//                   </LinearGradient>
          
// <Text style={{color:'white', flex: 1,
//        justifyContent:'center',
        
//         marginBottom: 0,}}>
  
// </Text>
// <View style={{flexDirection:'column',width:'100%',justifyContent:'flex-end',  }}>
// <LinearGradient
//                     colors={[ 'transparent', '#5759ba', ]}
                    
//                     locations={[0,0.2]}
//                     style={{alignItems: 'center',
//                     justifyContent: 'flex-start',
//                     opacity:0.9,
//                     borderRadius: 8,
//                     height:'54%',
//                     width: '100%',}}
//                   >
                      
//                       <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:10,justifyContent:'space-between' }}>
                          
                       
//                          <View>


//                              <View style={{flexDirection:'row', marginTop:5, }}>

//                              <Avatar.Image
                      
//                       source={require('../images/download.jpeg')} 
//                       size={32}
//                   >
//                   </Avatar.Image>  

//                   <View style={{flexDirection:'column', marginLeft:5,}}>
//                   <Text style={{fontSize:12, fontWeight:'bold', color:'#52d8dc'}} >Invited by </Text>
//                   <View style={{flexDirection:'row'}}>

//                   <Text style={{fontSize:14, fontWeight:'bold', color:'white'}} >Aaron Derren 44 </Text>
//                   <Feather name='settings' style={{alignSelf:'center'}} color='#52d8dc' />
//                   </View>
                


//                   </View>
                  
//                              </View>
//                          </View>


               
                          

//                       </View> 
//                           <View style={{width:'95%',}}>
//                           <FontAwesome name='share-alt' style={{alignSelf:'flex-end',marginHorizontal:10, marginBottom:20}} color='white' size={30} />
//                           </View>

//                   </LinearGradient>
// </View>
   


//                           </ImageBackground> */}

//     </TouchableOpacity>


//     )
//   //   return (<View style={{ borderWidth:1,flex:0.5, borderTopColor: '#CCD1D1', width: deviceWidth, paddingHorizontal: 15, flexDirection: 'column', }}>



//   //     <TouchableOpacity>
//   //       <Text>hvyyh</Text>
//   //     </TouchableOpacity>
//   //   </View>


//   //   )

//   }


// }

//   const renderlist = ({ item, index }) => {




//     if (index % 2 == 0) {
//       return (<TouchableOpacity style={{justifyContent:'space-between',borderColor:'#7d7cfc', height:200,paddingVertical:10, borderWidth:1,borderRadius:15, flex:0.5,    paddingHorizontal: 10, flexDirection: 'column', }}>

// {/* <View>
//           <Text>Mon, Sep 21 - 18:00</Text>
//           <Text>ASOT 900 LIVE by Armin van Buuren</Text>
//           <View>
//           <View style={{flexDirection:'row',}} >
//                                 <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='#7d7cfc' />
//                             <Text style={{alignSelf:'flex-start',fontSize:15 , paddingHorizontal:3,color:'#7d7cfc'  }}>2,5 KM</Text>

//                             </View>  
//                                     </View>
//         </View>

//         <Text>See Tickets</Text> */}
      

//       </TouchableOpacity>


//       )
//     }
//       else {
//         return (<TouchableOpacity style={{justifyContent:'space-between', height:200,borderWidth:1, borderRadius:15, flex:0.5,  flexDirection: 'column', }}>

     




// {/* <ImageBackground 
//             source={require('../images/bg2.jpeg')} 


//                             imageStyle={{ borderRadius: 15,  }} style={{ height: '100%', width: "100%" }}
//                         >


// <LinearGradient
//                       colors={['#5759ba',   'transparent', ]}
                      
//                       locations={[0.8, 1]}
//                       style={{alignItems: 'center',
//                       justifyContent: 'flex-start',
//                       opacity:0.9,
//                       borderRadius: 8,
//                       height:'20%',
//                       width: '100%',}}
//                     >
//                         <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:6,justifyContent:'space-between' }}>
                            
//                             <View style={{flexDirection:'column',alignSelf:'flex-start', }}>
//                             <Text style={{fontSize:26, fontWeight:'bold', color:'white'}} >Tomorrow</Text>
//                             <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>12:00 - 18:00</Text>
                            
//                             <View style={{flexDirection:'row',}} >
//                                 <Ionicons name='ios-location-outline' style={{alignSelf:'center'}} size={15} color='white' />
//                             <Text style={{alignSelf:'flex-start',fontSize:16 ,fontWeight:'bold', paddingHorizontal:3,color:'white'  }}>2,5 KM</Text>

//                             </View>

                       
//                             </View>
                         
//                         </View> 

            
//                     </LinearGradient>
            
// <Text style={{color:'white', flex: 1,
//          justifyContent:'center',
          
//           marginBottom: 0,}}>
    
// </Text>
// <View style={{flexDirection:'column',width:'100%',justifyContent:'flex-end',  }}>
// <LinearGradient
//                       colors={[ 'transparent', '#5759ba', ]}
                      
//                       locations={[0,0.2]}
//                       style={{alignItems: 'center',
//                       justifyContent: 'flex-start',
//                       opacity:0.9,
//                       borderRadius: 8,
//                       height:'54%',
//                       width: '100%',}}
//                     >
                        
//                         <View style={{flexDirection:'row',alignItems:'center', width:'92%',paddingTop:10,justifyContent:'space-between' }}>
                            
                         
//                            <View>


//                                <View style={{flexDirection:'row', marginTop:5, }}>

//                                <Avatar.Image
                        
//                         source={require('../images/download.jpeg')} 
//                         size={32}
//                     >
//                     </Avatar.Image>  

//                     <View style={{flexDirection:'column', marginLeft:5,}}>
//                     <Text style={{fontSize:12, fontWeight:'bold', color:'#52d8dc'}} >Invited by </Text>
//                     <View style={{flexDirection:'row'}}>

//                     <Text style={{fontSize:14, fontWeight:'bold', color:'white'}} >Aaron Derren 44 </Text>
//                     <Feather name='settings' style={{alignSelf:'center'}} color='#52d8dc' />
//                     </View>
                  


//                     </View>
                    
//                                </View>
//                            </View>


                 
                            

//                         </View> 
//                             <View style={{width:'95%',}}>
//                             <FontAwesome name='share-alt' style={{alignSelf:'flex-end',marginHorizontal:10, marginBottom:20}} color='white' size={30} />
//                             </View>

//                     </LinearGradient>
// </View>
     


//                             </ImageBackground> */}

//       </TouchableOpacity>


//       )
//     //   return (<View style={{ borderWidth:1,flex:0.5, borderTopColor: '#CCD1D1', width: deviceWidth, paddingHorizontal: 15, flexDirection: 'column', }}>



//     //     <TouchableOpacity>
//     //       <Text>hvyyh</Text>
//     //     </TouchableOpacity>
//     //   </View>


//     //   )

//     }


//   }


  return (



    <SafeAreaView style={{ flex:1, height: deviceHeight, backgroundColor:'white' }}>



<View style={{flexDirection:'row',backgroundColor:'white',  justifyContent:'center', width:deviceWidth,paddingTop:15,paddingBottom:10 }}>

<TouchableOpacity
              style={{ alignSelf: 'flex-start', justifyContent:'flex-start' }}

            >
              <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
            </TouchableOpacity>

            
<View style={{flexDirection:'row',width:'25%' }}>

  <Image  source={require('../images/download.jpeg')} style={{width:100, height:100 ,   borderRadius: 150 / 2,
 marginTop:1}}/>
  <TouchableOpacity style={{marginTop:5,height:22, width:22,justifyContent:'center',marginLeft:-18,  borderRadius:15, backgroundColor:'#2a3055'}}>
    <MaterialIcons name='mode-edit' style={{alignSelf:'center',}} color='white' size={15}/>
  </TouchableOpacity>
</View>


<View style={{marginLeft:10, width:'40%',paddingHorizontal:5,}}>
  <View style={{flexDirection:'row'}}>
  <Text style={{ fontSize:20, fontWeight:'bold'}}>Justine Lockne</Text>
  <Feather name='settings' style={{alignSelf:'center', marginLeft:4}} size={14} color='#52d8dc' />


  </View>

  <Text >lockedmyheart</Text>
  
  
  
  <View style={{flexDirection:'row',marginTop:10 }}>
<View>
<Text style={{fontWeight:'bold'}}  >123</Text>
  <Text style={{fontWeight:'400'}}>Friends</Text>
</View>
<View style={{width:'10%'}}>

</View>
<View>
  <Text style={{fontWeight:'bold'}}>3</Text>
  <Text style={{fontWeight:'400'}}>Requests</Text>
</View>
  </View>

</View>

<View style={{backgroundColor:'purplle',width:'22%' }}>
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
     

<View style={{ width:deviceWidth, height:33, paddingHorizontal:20}}>
  <View  style={{height:'100%',justifyContent:'center',flexDirection:'row',borderWidth:1,borderColor:'#7d7cfc', borderRadius:20,}}>
<View style={{width:'30%',}}>

</View>
    <View style={{justifyContent:'space-around',width:'30%',  flexDirection:'row', alignSelf:'center'}}>
    <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/linkedin.png')} />
    <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/instagram.png')} />
    <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/youtube.png')} />

    
    </View>

    <View style={{width:'33%', justifyContent:'center' }}>
      <TouchableOpacity style={{alignSelf:'flex-end', justifyContent:'center'}}>
      <Text style={{fontWeight:'bold', alignSelf:'center', fontSize:20}}>+</Text>

      </TouchableOpacity>
</View>
  </View>

</View>


{/* <View style={{marginTop:60,}}>  */}
<Text style={{justifyContent:'center',fontWeight:'bold', fontSize:18, alignSelf:'center' , color:'#7675fc'}}>Your GIGs (0)</Text>

<FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={Data}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:15,  paddingBottom: 70}}
                renderItem={renderlist}
                keyExtractor={(item,id) => id.toString()}
                // ItemSeparatorComponent={separator}
                 />
{/* </View> */}


{/* <View style={{ 
backgroundColor:'white',marginTop:60,
marginBottom: Platform.OS === 'ios' ? 30 : 70,}}>





</View> */}


<BottomTabs  />




        {/* {this.renderMainContent()} */}
    </SafeAreaView>

//     <SafeAreaView style={{ backgroundColor: 'white',  height: deviceHeight, width: deviceWidth }}>
// <View style={{backgroundColor:'green'}}>

// <View style={{flexDirection:'row',backgroundColor:'white',width:deviceWidth,paddingTop:15,paddingBottom:10 }}>
// <View style={{width:'3%'}}>

// </View>
// <TouchableOpacity
//               style={{ alignSelf: 'flex-start', justifyContent:'flex-start' }}

//             >
//               <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
//             </TouchableOpacity>

            
// <View style={{flexDirection:'row',width:'25%' }}>

//   <Image  source={require('../images/download.jpeg')} style={{width:100, height:100 ,   borderRadius: 150 / 2,
//  marginTop:1}}/>
//   <TouchableOpacity style={{marginTop:5,height:22, width:22,justifyContent:'center',marginLeft:-18,  borderRadius:15, backgroundColor:'#2a3055'}}>
//     <MaterialIcons name='mode-edit' style={{alignSelf:'center',}} color='white' size={15}/>
//   </TouchableOpacity>
// </View>


// <View style={{marginLeft:10, width:'40%'}}>
//   <View style={{flexDirection:'row'}}>
//   <Text style={{ fontSize:16, fontWeight:'bold'}}>Justine Lockne</Text>
//   <Feather name='settings' style={{alignSelf:'center', marginLeft:4}} size={14} color='#52d8dc' />


//   </View>

//   <Text >lockedmyheart</Text>
  
  
  
//   <View style={{flexDirection:'row',marginTop:10 }}>
// <View>
// <Text style={{fontWeight:'bold'}}  >123</Text>
//   <Text style={{fontWeight:'400'}}>Friends</Text>
// </View>
// <View style={{width:'10%'}}>

// </View>
// <View>
//   <Text style={{fontWeight:'bold'}}>3</Text>
//   <Text style={{fontWeight:'400'}}>Requests</Text>
// </View>
//   </View>

// </View>

// <View style={{backgroundColor:'purplle',width:'21%' }}>
//        <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
//               <TouchableOpacity
//                 style={{ alignSelf: 'flex-end' }}
//                 onPress={() => {

//                 }}
//               >
//                 <Image style={{ width: 22.5, height: 22.5, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/Buttons_Share.png')} />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{ alignSelf: 'flex-end', marginLeft: 40 }}
//                 onPress={() => {
//                   navigation.navigate('CardInformationScan');
//                 }}
//               >
//                 <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/Menu_Add.png')} />
//               </TouchableOpacity>
//             </View>

// </View>
// </View>
     

// <View style={{ width:deviceWidth, height:33, paddingHorizontal:20}}>
//   <View  style={{backgroundColor:'#43507f',height:'100%',justifyContent:'center',flexDirection:'row', borderRadius:20,}}>
// <View style={{width:'30%',}}>

// </View>
//     <View style={{justifyContent:'space-around',width:'30%',  flexDirection:'row', alignSelf:'center'}}>
//     <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/linkedin.png')} />
//     <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/instagram.png')} />
//     <Image style={{ width: 23, height: 23, alignSelf: 'center', resizeMode: 'contain' }} source={require('../images/youtube.png')} />

    
//     </View>

//     <View style={{width:'33%', justifyContent:'center' }}>
//       <TouchableOpacity style={{alignSelf:'flex-end', justifyContent:'center'}}>
//       <Text style={{fontWeight:'bold', color:'white',alignSelf:'center', fontSize:20}}>+</Text>

//       </TouchableOpacity>
// </View>
//   </View>

// </View>

// <View
// style={{
//   flex: 1,
//   justifyContent: 'flex-end',
//   backgroundColor:'red',
//   marginBottom: 36
// }}

// >


// </View>

    

// </View>

//       <BottomTabs />

//     </SafeAreaView>




  );
};


export default UserProfile;
