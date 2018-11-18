import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import Colors from '../constants/Colors';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { Icon } from 'expo';
import IconBlockView from '../components/IconBlockView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMenu: {
    backgroundColor: '#fff',
  },
  tabUnderline: {
    backgroundColor: Colors.tabIconSelected,
  },
  activeText: {
    color: Colors.tabIconSelected,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: Colors.tabIconSelected,
    height: 500,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const recommendationMenus = [
  { title: 'Diet', icon: 'leaf' },
  { title: 'Exercise', icon: 'child' },
  { title: 'Supplements', icon: 'rocket' },
  { title: 'Lifestyle', icon: 'bed' },
  { title: 'Others', icon: 'gift' },
]

export class RecommendScreen extends React.Component {
  static navigationOptions = {
    title: 'Recommendations',
    headerTintColor: Colors.tintColor,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Tabs
          style={styles.topMenu}
          tabBarUnderlineStyle={styles.tabUnderline}
          renderTabBar={()=> (
            <ScrollableTab />
          )}
        >
          {recommendationMenus.map((menu, i) => {
            return (
              <Tab
                key={i}
                heading={menu.title}
                tabStyle={styles.topMenu}
                activeTabStyle={styles.topMenu}
                textStyle={{ color: Colors.tabIconSelected }}
                activeTextStyle={styles.activeText}
              >
                <View style={{
                  backgroundColor: Colors.tabIconSelected,
                }}>
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomLeftRadius: '100%',
                    borderBottomRightRadius: '100%',
                    backgroundColor: '#fff',
                  }}>
                    <Icon.FontAwesome
                      name={menu.icon}
                      size={100}
                      style={{ marginTop: 45, marginBottom: 45 }}
                      color={Colors.tabIconSelected}
                    />
                  </View>
                </View>

                <View style={styles.content}>
                  <IconBlockView iconName=""><Text>Breakfast Recommendations</Text></IconBlockView>
                  <IconBlockView iconName=""><Text>Breakfast Recommendations</Text></IconBlockView>
                  <IconBlockView iconName=""><Text>Breakfast Recommendations</Text></IconBlockView>
                  <IconBlockView iconName=""><Text>Breakfast Recommendations</Text></IconBlockView>
                </View>
              </Tab>
            )
          })}
        </Tabs>
      </ScrollView>
    );
  }
}

export default RecommendScreen
