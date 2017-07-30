import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeStackNavigator from 'components/navigation/home-stack-navigator';
import { COLORS } from 'constants/styles';

const drawerRouteConfig = {
  Home: {
    screen: HomeStackNavigator,
  },
};

const CustomDrawerContentComponent = props => (
  <View style={styles.drawer}>
    <DrawerItems {...props} />
  </View>
);

const drawerNavigatorConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />,
};

const AppDrawer = DrawerNavigator(drawerRouteConfig, drawerNavigatorConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AppDrawer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GREY.BLACK_RUSSIAN,
  },
  drawer: {
    flex: 1,
    backgroundColor: COLORS.GREY.BRIGHT_GREY,
  },
});
