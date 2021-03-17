import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial215509Navigator from '../features/Tutorial215509/navigator';
import NotificationList215481Navigator from '../features/NotificationList215481/navigator';
import Settings215480Navigator from '../features/Settings215480/navigator';
import Settings215472Navigator from '../features/Settings215472/navigator';
import UserProfile215470Navigator from '../features/UserProfile215470/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial215509: { screen: Tutorial215509Navigator },
NotificationList215481: { screen: NotificationList215481Navigator },
Settings215480: { screen: Settings215480Navigator },
Settings215472: { screen: Settings215472Navigator },
UserProfile215470: { screen: UserProfile215470Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
