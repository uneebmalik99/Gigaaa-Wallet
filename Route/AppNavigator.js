import * as React from 'react';
import {  Button, } from 'react-native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { View, Text, BlurView,TouchableOpacity, TextInput, StyleSheet, Platform, BackHandler, Image, ScrollView,ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CardImage from '../screens/CardImage';
import CardInformation from '../screens/CardInformation';
import CardInformationDate from '../screens/CardInformationDate';
import CardInformationFirst from '../screens/CardInformationFirst';
import EditPage from '../screens/EditPage';
import Home from '../screens/Home'
import BottomTabs from '../screens/BottomTabs';
import CardInformationScan from '../screens/CardInformationScan';
import AddFriends_Card from '../screens/AddFriends_Card';
import SendMoney_Friend from '../screens/SendMoney_Friend';
import CardDetails from '../screens/CardDetails';
import Mario from '../marioscreen/Mario';
import ServicesStore from '../marioscreen/ServicesStore';
import NewServices from '../marioscreen/NewServices';
import Categories from '../marioscreen/Categories';
import MyServices from '../marioscreen/MyServices';
import ShopingList from '../marioscreen/ShopingList';
import Notify from '../marioscreen/Notify';
import AppConstance from '../constance/AppConstance';
import  Discover from "../marioscreen/Discover";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import GigDetails from '../screens/GigDetails';
import EditGig from '../screens/EditGig';
import CreateGig from '../screens/CreateGig';
import Participant from '../screens/Participant';
import UserProfile from '../screens/UserProfile';

const Stack = createStackNavigator();


const TopTab = createMaterialTopTabNavigator();
const Discovertab = ()=> {
  return (
 
    <TopTab.Navigator  tabBarOptions={{
      labelStyle: { fontSize: 13, fontWeight:'bold' },
      // tabStyle: { width: 130,height:60,paddingLeft:10 , paddingVertical:5 },
      inactiveTintColor:"#A6A8BA",
      style: {
        borderTopWidth: 0,
        elevation: 0
      },
      activeTintColor:"#f14057",
      pressColor:"white",
      indicatorStyle:{ backgroundColor: 'white' },
    }}
    swipeEnabled={false}
    >
      <TopTab.Screen  name="Discover"   component={Discover1}  />
      <TopTab.Screen name="Categories" component={Categories} />
      <TopTab.Screen name='MyServices' component={MyServices} />
    </TopTab.Navigator>
  );
}
const Discover1 = () =>{
  return(
  <Stack.Navigator 
   initialRouteName="Discover" 
   
           screenOptions={{
             headerShown: false,
           }}>
         <Stack.Screen name="Discover" component={Discover}  />
         <Stack.Screen name="NewServices" component={NewServices} />
   </Stack.Navigator>
  );
}

const NewService = ()=> {
  return (
 
    <TopTab.Navigator  tabBarOptions={{
      labelStyle: { fontSize: 13, fontWeight:'bold' },
      // tabStyle: { width: 130,height:60,paddingLeft:10 , paddingVertical:5 },
      inactiveTintColor:"#A6A8BA",
      style: {
        borderTopWidth: 0,
        elevation: 0
      },
      activeTintColor:"#f14057",
      pressColor:"white",
      indicatorStyle:{ backgroundColor: 'white' },
    }}
    swipeEnabled={false}
    >
      <TopTab.Screen  name="NewServices"   component={NewServices}  />
      <TopTab.Screen name="Categories" component={Categories} />
      <TopTab.Screen name='MyServices' component={MyServices} />
    </TopTab.Navigator>

  );
}





// const Tab = createBottomTabNavigator();
// const Tab = AnimatedTabBarNavigator();
// const StackAuctions = createStackNavigator();
// const StackInvoice =createStackNavigator();
// const StackBids =createStackNavigator();

// const TopTab = createMaterialTopTabNavigator();


// const StackBid =({navigation}) =>{
//   return(
//   <StackBids.Navigator >
// <StackBids.Screen name='My Bids' component={TabStack} options={{

// headerStyle: {
//             backgroundColor: '#268ef5',
     
//           },
//           headerTitleAlign:"center",
//           headerTitleStyle: {
//             color:'white' ,
//           },
//       headerLeft: () => (
//     <TouchableOpacity style={{position: 'absolute',paddingHorizontal:9,
//   alignContent:'flex-start',alignSelf:'flex-start', }}
 
//  onPress={() => navigation.openDrawer()}
//  >
//       <Image source={ require('../Assets/icons/list1.png')} 
//  style={{ width: 24, height:24,marginRight:10, alignSelf: 'center' }} resizeMode='contain'
// />
//   </TouchableOpacity>
//             )}} />
// <StackBids.Screen name='ongoingDetails' component={ongoingDetails} />
// <StackBids.Screen name='WonbidsDetails' component={WonbidsDetails} />

//   </StackBids.Navigator>
//   );
// }


// const Stackinvoice =({navigation}) =>{
//   return(
//   <StackBids.Navigator >
// <StackBids.Screen name='invoice1' component={invoice1} 
// options={{

//   title:'My Invoice',

// headerStyle: {
//             backgroundColor: '#268ef5',
     
//           },
//           headerTitleAlign:"center",
//           headerTitleStyle: {
//             color:'white' ,
//           },
//       headerLeft: () => (
//     <TouchableOpacity style={{position: 'absolute',paddingHorizontal:9,
//   alignContent:'flex-start',alignSelf:'flex-start', }}
 
//  onPress={() => navigation.openDrawer()}
//  >
//       <Image source={ require('../Assets/icons/list1.png')} 
//  style={{ width: 24, height:24,marginRight:10, alignSelf: 'center' }} resizeMode='contain'
// />
//   </TouchableOpacity>
//             )}} 

//             />

//  <StackBids.Screen name='invoice2' component={invoice2} options={{

// title:'My Invoice',

// headerStyle: {
//           backgroundColor: '#268ef5',
   
//         },
//         headerTitleAlign:"center",
//         headerTitleStyle: {
//           color:'white' ,
//         },
        
//  }}/>

// {/* <Stackinvoice.Screen name='ongoingDetails' component={ongoingDetails} />
// <Stackinvoice.Screen name='WonbidsDetails' component={WonbidsDetails} /> */}

//   </StackBids.Navigator>
//   );
// }



const AppNavigator = (props) => {
 return (
   <Stack.Navigator 
   initialRouteName="CardImage" 
   
           screenOptions={{
             headerShown: false,
           }}
   >
 <Stack.Screen name="CardImage" component={CardImage} />
         <Stack.Screen name="BottomTabs" component={BottomTabs} />
         <Stack.Screen name="CardInformationScan" component={CardInformationScan} />
         <Stack.Screen name="AddFriends_Card" component={AddFriends_Card} />
         <Stack.Screen name="SendMoney_Friend" component={SendMoney_Friend} />
         <Stack.Screen name="CardDetails" component={CardDetails} />



         <Stack.Screen name="EditPage" component={EditPage} />
         <Stack.Screen name="Mario" component={Mario} />
         <Stack.Screen name="ServicesStore" component={Discovertab}
          options={{headerShown:'true' , title:'Services Store',

 headerStyle: {
    borderTopWidth: 0,
    elevation: 0,
  
            backgroundColor: 'white',
     
          },
          headerTitleAlign:"center",
          headerTitleStyle: {
            color:'black' ,
            fontSize:18,
          },
          headerRight: () => (
            <TouchableOpacity
            style={{ alignSelf: 'flex-start',marginRight:15 }}

        >
            <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/>
            {/* <Image style={{ width: 21, height: 21, alignSelf: 'center', resizeMode: 'contain', marginRight: 20 }} source={require('../images/bell.png')} /> */}
        </TouchableOpacity>
            ),
      headerLeft: () => (
        <TouchableOpacity
        style={{ alignSelf: 'flex-start',  }}
        onPress={() => {
          props.navigation.openDrawer();
            
        }}

    >
        <Image style={{ width: 21, height: 21,marginLeft:15, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} />
    </TouchableOpacity>
    
            )
                 
            }} 
/>
         <Stack.Screen name="NewService" component={NewService} />
         <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name ="GigDetails" component={GigDetails} />
            <Stack.Screen name='Participant' component={Participant} />
            <Stack.Screen name='UserProfile' component={UserProfile} />
            <Stack.Screen name ="EditGig" component={EditGig} />
            <Stack.Screen name='CreateGig' component={CreateGig} />
         <Stack.Screen name="Categories" component={Categories} />
         <Stack.Screen name="NewServices" component={NewService} />
         <Stack.Screen name="ShopingList" component={ShopingList} />
         <Stack.Screen name="Notify" component={Notify} />


  

   </Stack.Navigator>
 
 );
}

export default AppNavigator;
