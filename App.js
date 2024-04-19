import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet,  } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Awarnes from './components/Awarnes';
import MyComponent from './components/loading';
import ConsultationPage from './components/ConsultationPage';
import ReportForm from './components/Reports';
import FeeDetailsPage from './components/FeeDetailsPage';
import PaymentForm from './components/PaymentForm';
import AppointmentForm from './components/AppointmentForm';
import Volunteer from './components/Volunteer';

export default function App() {
  const Drawer = createDrawerNavigator();

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props} style={styles.container}>
        <DrawerItem label="Menu"
        style={styles.unpressableDrawerItem}
        icon={() => <MaterialIcons name="menu-open" size={24} color="#CDDEFF" />}
        labelStyle={styles.unpressableDrawerItem}
        />
        <DrawerItem 
          style={styles.drawerItem}
          label="Infrastructure reporting"
          onPress={() => props.navigation.navigate('Report Form')}
          icon={() => <FontAwesome5 name="road" size={24} color="#CDDEFF" />} 
          labelStyle={styles.itemMenu}
        />
        <DrawerItem 
          style={styles.drawerItem}
          label="Awarnes"
          onPress={() => props.navigation.navigate('Awarnes')}
          icon={() => <FontAwesome6 name="road-barrier" size={24} color="#CDDEFF" />} 
              //<FontAwesome6 name="road-circle-exclamation" size={24} color="black" />
          labelStyle={styles.itemMenu}
        />
        <DrawerItem
          style={styles.drawerItem}
          label="Legal procedures"
          onPress={() => props.navigation.navigate('Consultation Page')}
          icon={() =><FontAwesome6 name="legal" size={24} color="#CDDEFF" />}
          labelStyle={styles.itemMenu}
        />
        <DrawerItem
          style={styles.drawerItem}
          label="Volunteer work"
          onPress={() => props.navigation.navigate('Volunteer work')}
          icon={() =><MaterialIcons name="volunteer-activism" size={24} color="#CDDEFF" />}
          labelStyle={styles.itemMenu}
        />
      </DrawerContentScrollView>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name='Main Menu' component={MyComponent}/>
        <Drawer.Screen name="Awarnes" component={Awarnes}/>
        <Drawer.Screen name="Report Form" component={ReportForm}/>
        <Drawer.Screen name='Consultation Page' component={ConsultationPage}/>
        <Drawer.Screen name='Fee Details' component={FeeDetailsPage}/>
        <Drawer.Screen name='Payment' component={PaymentForm}/>
        <Drawer.Screen name='Appointment' component={AppointmentForm}/>
        <Drawer.Screen name='Volunteer work' component={Volunteer}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:"10%",
  },
  unpressableDrawerItem: {
    
    opacity: 0.8,
    color:"#6191EC",
  },
  drawerItem: {
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    
  },
  itemMenu:{
    color:"#6191EC",
    
  },
});