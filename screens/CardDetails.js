import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView, 
  View,
  Image,
  FlatList,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
import AppConstance, {
  deviceHeight,
  deviceWidth,
} from '../constance/AppConstance.js';
const image=require('../images/Gfinal.png');
const CardDetails= ({route,navigation}) => {

  const{datadetails} = route.params;

  const [data, setdata] = useState([
    {
      id: 1,
      TransactionName: 'Receieved Transfer From Paypal',
      date:'13 April 2017  12:51',
      amount:'+80.00€',
      status:'0',
    },
    {
      id: 1,
      TransactionName: 'Bancomat Cash Withdrawl',
      amount:'-50.00€',
      status:'0',
      date:'13 April 2017  11:00',
    },

    {
      id: 1,
      TransactionName: 'POS Payment Agora AVM',
      date:'13 April 2017  12:51',
      status:'Declined',
      amount:'-124.99€',
    },

    {
      id: 1,
      TransactionName: 'Receieved Transfer From Paypal',
      status:'0',
      date:'13 April 2017  11:00',
      amount:'-50.00€',
    },

  ]
)


const [details, setdetails] = useState(datadetails)

const renderlist = ({item}) =>{


    

  return(  <View style={{borderTopWidth:0.2,borderTopColor:'#CCD1D1', width:'100%',  paddingHorizontal:0, flexDirection: 'column', }}>


          <View style={{padding:10}}>
              <Text>{item.TransactionName}</Text>
              <Text style={{textAlign:'right',bottom:20,color:'green'}}>{item.amount}</Text>
              {item.status !== '0'? <Text style={{textAlign:'left',bottom:20,color:'red'}}>{item.status}</Text>:null
              }
              <Text style={{color:'#A6A8BA',bottom:10}}>{item.date}</Text>
             
          </View>

{/*   
  <View style={{width:'15%'}}>
      <Image source={{ uri: item.image }}
          style={{ width: 40, height: 40, borderRadius: 400/ 2 }}
      />
  </View>
  
  
  <View style={{width:'55%', height: 50 ,flexDirection:'column'}}>
      <Text >
  {item.name}    </Text>
  <Text >
  {item.message}    </Text>
  </View>
  
  <View style={{ height: '60%', width:'30%', backgroundColor: '#715DFF',  borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
          navigation.navigate('SendMoney_Friend');
      }}>
          <Text style={{ alignSelf: 'center' , color:'white'}}>Select</Text>
  
      </TouchableOpacity>
  </View>
  */}
 
  </View>
  
  
  )
  
   }
  

  return (
   
    <SafeAreaView style={{backgroundColor:'white', flex:1,height:deviceHeight,width:deviceWidth}}>
    
    <View style={{  width:'100%',height:deviceHeight*0.08, paddingHorizontal:13, flexDirection:'column'}}>
  
<View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>

<View style={{justifyContent:'center',width:'20%', height:'100%',}}>
<TouchableOpacity
style={{alignSelf:'flex-start', }}
 onPress={() => {
navigation.goBack()               }}
>
<Image style={{width:24,height:24, alignSelf:'flex-start',}} source={require('../images/Buttons_Back.png')} />
</TouchableOpacity>

</View>
<View style={{justifyContent:'center',width:'60%',height:'100%',}}>
<Text style={{alignSelf:'center',textAlignVertical:'center', fontSize:20,fontWeight:'bold'}}>{datadetails.nickname}</Text>
</View>

<View style={{justifyContent:'center',width:'20%', height:'100%',}}>
<TouchableOpacity
style={{alignSelf:'flex-end'}}
 onPress={() => {
  navigation.navigate('EditPage',{editdata: details,
});
                }}
>
<Image style={{width:26,height:26, alignSelf:'flex-end', }} source={require('../images/Buttons_Options.png')} />
</TouchableOpacity>

</View>



</View>

         </View>
  
    {/* <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="gigaaa Smart Card" />
    <TouchableOpacity
    onPress={()=> {navigation.navigate('BitCoinInputInfo')}}>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
    */}
   
    <ScrollView style={{paddingHorizontal:15, backgroundColor:'white'}}>
    <Text style={{alignSelf:'center', fontWeight: 'bold', color: '#4d7099'}}>
    Card Information
        </Text>
        <View style={{alignSelf:'center', marginTop:0,width:'100%'}}>
          <ImageBackground    imageStyle={{ borderRadius: 10,  resizeMode: 'contain'}}
 source={datadetails.image} style={{ height: 250,  width: '100%', }}>

 <View  style={{padding:15, height:'100%',width:'100%'}}>
          
             <View style={{paddingVertical:15, }}>
              <Text style={{color: 'white',fontWeight:'bold',paddingTop:2, fontSize: 16}}>{details.CardName}</Text>
              <Text style={{color: 'white', fontSize: 14}}>{details.account}</Text>
              
              {details.shares !== '' ? 
              <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 23,
                  marginTop:10,
                  fontWeight:'bold',
                  textAlign: 'right',
                  paddingHorizontal:0,
                  bottom: 50,
                }}>
                {details.amount}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'right',
                  paddingHorizontal:0,
                  bottom: 50,
                }}>
                {details.currency}
              </Text>
              <Text style={{color: 'white',textAlign: 'right',
                  paddingHorizontal:0,
                  bottom: 50, fontSize: 13}}>{details.shares}</Text> 
            </View>
            : <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 23,
                  marginTop:10,
                  fontWeight:'bold',
                  textAlign: 'right',
                  paddingHorizontal:0,
                  bottom: 50,
                }}>
                {details.amount}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'right',
                  paddingHorizontal:0,
                  bottom: 50,
                }}>
                {details.currency}
              </Text>
            </View>}
            </View>
           
           {details.shares !== '' ?
           <View >
              <Text style={{color: 'white',fontWeight:'bold', fontSize: 23}}>{details.E_amount}</Text>
              <Text style={{color: 'white', fontWeight:'bold', fontSize: 16}}>{details.E_currency}</Text>          
            </View> :
            <View style={{top: 12, }}>
              <Text style={{color: 'white',fontWeight:'bold', fontSize: 23}}>{details.E_amount}</Text>
              <Text style={{color: 'white', fontWeight:'bold', fontSize: 16}}>{details.E_currency}</Text>          
            </View> }
            
            </View>
          </ImageBackground>
        </View>
        
        {details.value === '1' ?
        <View style={{width:'100%' , marginTop:5}}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:0,right:10}}>
            <View style={{backgroundColor:'#FF155A',left:10, height:Platform.OS === 'ios' ? 40 : 35,width:'48%', borderRadius:20,}}>
              <TouchableOpacity style={{width:'100%', alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white', fontWeight:'bold', top:8}}>Sell</Text>   
             </TouchableOpacity>
        
              </View>
              <View style={{backgroundColor:'#715DFF', left:10, height:Platform.OS === 'ios' ? 40 : 35,width:'48%', borderRadius:20,}}>
              <TouchableOpacity
            //  onPress={()=> navigation.navigate("Screen3")}
              style={{width:'100%',alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'bold',  top:8}}>Buy</Text>   
          </TouchableOpacity>
          
            </View>
           </View>
           <View style={{alignSelf:'center',}}>
          <Text style={{marginTop:10,color:'#4d7099', fontSize: 15, fontWeight: 'bold',alignSelf:'center'}}>
            Value
          </Text>
          </View>


          
          <View style={{borderBottomWidth:0.2,borderTopColor:'#E5E7E9',marginHorizontal:5, borderTopWidth:0.2, borderBottomColor:'#E5E7E9',paddingVertical:10, alignSelf:'center',flexWrap:'wrap',width:'100%', flexDirection: 'row', top: 5}}>
            <View style={{width:'25%',alignSelf:'center', alignSelf:'center',borderRightWidth:0.2,borderRightColor:'#E5E7E9'}}>
              <Text
                style={{fontWeight: 'bold',alignSelf:'center', fontSize: 16, color: '#0B9D88'}}>
                +12%
              </Text>
              <Text
                style={{ alignSelf:'center',fontSize: 13, color: '#292F58'}}>
                6 Mth
              </Text>
            </View>
            <View style={{width:'25%',alignSelf:'center',borderRightWidth:0.2,borderRightColor:'#E5E7E9'}}>
              <Text
                style={{fontWeight: 'bold',alignSelf:'center', fontSize: 16, color: '#FF155A'}}>
                -0.01%
              </Text>
              <Text
                style={{alignSelf:'center', fontSize: 13, color: '#292F58'}}>
                12 Mth
              </Text>
            </View>
            <View style={{width:'25%', alignSelf:'center',borderRightWidth:0.2,borderRightColor:'#E5E7E9'}}>
              <Text
                style={{fontWeight: 'bold',alignSelf:'center', fontSize: 16, color: '#FF155A'}}>
                -1.99%
              </Text>
              <Text
                style={{alignSelf:'center', fontSize: 13, color: '#292F58'}}>
                18 Mth
              </Text>
            </View>
            <View style={{width:'25%',alignSelf:'center',borderRightWidth:0.2,borderRightColor:'#E5E7E9'}}>
              <Text
                style={{fontWeight: 'bold',alignSelf:'center', fontSize: 16, color: '#0B9D88'}}>
                +1.1%
              </Text>
              <Text
                style={{alignSelf:'center', fontSize: 13, color: '#292F58'}}>
                24 Mth
              </Text>
            </View>
          </View>
       
          </View>:   <View style={{ width:'100%', backgroundColor: '#715DFF',marginTop:5, justifyContent:'center', borderRadius: 20, height: Platform.OS === 'ios' ? 35 : 35, alignItems: 'center', }}>
             <TouchableOpacity onPress={() => {
               navigation.navigate('AddFriends_Card');
             }} style={{ width: '100%', alignItems: 'center',justifyContent: 'center' }}>


             {details.nickname === 'gigaaa Nuts' ?
             <Text style={{ color: 'white', fontWeight:'bold' }}>Send Nuts</Text>

              :<Text style={{ color: 'white', fontWeight:'bold' }}>Send Money</Text>}
 

 
             </TouchableOpacity>
           </View>}
        
       
         <View style={{alignSelf:'center',width:'95%',borderRadius:20,}}>
          






      <Text style={{padding:10,fontWeight:'bold',marginBottom:10, alignSelf:'center',color:'#4D7099'}}>Last Transactions</Text>
        
        
        
        
      <FlatList
                        contentContainerStyle={{ paddingBottom: 50}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={data}
                    renderItem={renderlist}
                    keyExtractor={(item,index) => index.toString()}
                   

                    

                 />
        
        
        
        


        </View>
       </ScrollView>
     
    <BottomTabs/>
    </SafeAreaView>
  );



};
export default CardDetails;
