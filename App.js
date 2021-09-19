import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Route/AppNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent } from './Route/Drawer'


const Drawer = createDrawerNavigator();
const App = () => {
    
 return (
     <NavigationContainer>
         <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
             
             
             <Drawer.Screen name='AppNavigator' component={AppNavigator} />
             
              </Drawer.Navigator> 

         
         
     </NavigationContainer>

 );
}

export default App;





























// import React from 'react';
// import {
//   Button,
//   View
// } from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigator } from '@react-navigation/drawer'

// import Settings from './src/Screens/Settings'


// const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();
// const Drawer = createDrawerNavigator()



// class App extends React.Component {

//   state = {
//     loggedIn: false
//   }

//   login = () => {
//     this.setState({loggedIn: true})
    
//   }

//   SignIn = ({navigation}) => {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name='SignIn' component={SignIn} options={{headerLeft: null, headerRight: () => (
//           <Button title='Logout' onPress={() => this.setState({loggedIn: false})}/>
//         )}}/>
//         <Stack.Screen name='SignUp' component={SignUp} options={{headerRight: () => (
//           <Button title='Logout' onPress={() => this.setState({loggedIn: false})}/>
//         )}}/>
//       </Stack.Navigator>
//     )
//   }

//   SignUp = () => {
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name='Settings' component={Settings} />
//       </Drawer.Navigator>
//     )
//   }

//   render() {
//     return (
//       <>
       
//             <NavigationContainer>
//               <Tabs.Navigator>
//                 <Tabs.Screen name='SignIn' children={SignIn} />
//                 <Tabs.Screen name='SignUp' children={SignUp} />
//               </Tabs.Navigator>
//             </NavigationContainer>
//           :
//           <View>
// <Text>Hiii</Text>          </View>
        
//       </>
//     )
//   }
// }

// export default App;
























// // import React from 'react';
// // import Navigation from './src/Route/navigation';
// // import 'react-native-gesture-handler';
// // import { NavigationContainer } from '@react-navigation/native';
// // import 'react-native-gesture-handler';
// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';

// // function App() {
// //     return (
// //         <NavigationContainer>{/* The rest of your code*/}</NavigationContainer>
// //     );
// // }export default App
// // export default () => <Navigation />;

// // <NavigationContainer>
// // {/* Rest of your app code */}
// // </NavigationContainer>

// // const App = () => {
// //     return (
// //       <Navigation>
// //         {/* Rest of your app code */}
// //       </Navigation>
// //     );
// //   };
  
// //   export default App;



// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>

//         <Stack.Screen name="CardImage" component={CardImage} />
//         <Stack.Screen name="BottomTabs" component={BottomTabs} />
//         <Stack.Screen name="CardInformationScan" component={CardInformationScan} />
//         <Stack.Screen name="AddFriends_Card" component={AddFriends_Card} />
//         <Stack.Screen name="SendMoney_Friend" component={SendMoney_Friend} />
//         <Stack.Screen name="CardDetails" component={CardDetails} />



//         <Stack.Screen name="EditPage" component={EditPage} />
//         <Stack.Screen name="Mario" component={Mario} />
//         <Stack.Screen name="ServicesStore" component={ServicesStore} />
//         <Stack.Screen name="NewServices" component={NewServices} />
//         <Stack.Screen name="Categories" component={Categories} />
//         <Stack.Screen name="MyServices" component={MyServices} />
//         <Stack.Screen name="ShopingList" component={ShopingList} />
//         <Stack.Screen name="Notify" component={Notify} />




//         <Stack.Screen name="DrawerContent" component={DrawerContent} />



//         {/* <Stack.Screen name="GigaSharesInfoEdit" component={GigaSharesInfoEdit} />

// <Stack.Screen name="DebitCardDetailEdit" component={DebitCardDetailEdit} />
//         <Stack.Screen name="TebBankDetailEdit" component={TebBankDetailEdit} />
//         <Stack.Screen name="NutsAccountEdit" component={NutsAccountEdit} />
//         <Stack.Screen name="BitCoinDetailEdit" component={BitCoinDetailEdit} />

//         <Stack.Screen
//            name="DebitCardInputInfo"  component={DebitCardInputInfo}
//         /> */}






//         <Stack.Screen name="CardInformation" component={CardInformation} />
//         <Stack.Screen
//           name="CardInformationFirst"
//           component={CardInformationFirst}
//         />

//         <Stack.Screen
//           name="CardInformationDate"
//           component={CardInformationDate}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
