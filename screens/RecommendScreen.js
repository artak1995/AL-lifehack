import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { Icon } from 'expo';
import Image from '../components/Icon'
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
    height: 700,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const recommendationMenus = [
  {
    title: 'Diet',
    icon: { name: 'diet', width: 80, height: 82 },
    color: '#ff6774',
    recommendations: [
      { title: 'Breakfast Recommendations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Lunch Recommendations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Dinner Recommendations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Light Snakes Recommendations', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Foods to Avoid', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….' },
    ]
  },
  {
    title: 'Exercise',
    icon: { name: 'exercise', width: 74, height: 82 },
    color: '#7167CF',
    recommendations: [
      { title: 'Cardio Training', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….' },
      { title: 'Resistance Training', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….' },
      { title: 'Weights Training ', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….' },
      { title: 'Flexibility Training', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….' },
    ],
  },
  {
    title: 'Supplements',
    icon: { name: 'supplements', width: 82, height: 82 },
    color: '#0D84B9',
    recommendations: [
      { title: 'Supplement One', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Supplement Two', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Supplement Three', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Supplement Four', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….'},
      { title: 'Supplement Five', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took….' },
    ]
  },
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
          tabBarUnderlineStyle={styles.tabUnderline}
          renderTabBar={()=> (
            <ScrollableTab
              style={{ borderWidth: 0, backgroundColor: '#fff' }}
            />
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
                style={{ transform: [{ translateY: -450 }] }}
              >
                <View style={{
                  backgroundColor: menu.color,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    borderBottomLeftRadius: 317,
                    borderBottomRightRadius: 317,
                    backgroundColor: '#fff',
                    width: 635,
                    height: 635,
                  }}>
                    <Image
                      iconName={menu.icon.name}
                      style={{ width: menu.icon.width, height: menu.icon.height, marginBottom: 50 }}
                    />
                    {/* <Icon.MaterialCommunityIcons
                      name={menu.icon}
                      size={100}
                      style={{ marginBottom: 50 }}
                    /> */}
                  </View>
                </View>
                <View style={{ ...styles.content, backgroundColor: menu.color } }>
                  {menu.recommendations.map((recommendation, i) => {
                    return (
                      <IconBlockView
                        key={i}
                        iconName="breakfastRecommendations"
                      >
                        <Text style={{
                          fontWeight: 'bold',
                          color: '#fff',
                        }}>{recommendation.title}</Text>
                        <Text style={{
                          color: '#fff',
                          marginTop: 10,
                        }}>{recommendation.description}</Text>
                      </IconBlockView>
                    )
                  })}
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
