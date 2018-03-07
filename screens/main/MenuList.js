import React, { Component } from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';
import { MenuDetail } from "./MenuDetail";
import Header from '../../components/Header';

class MenuList extends Component {
  state = { menu: [] };

  componentWillMount() {
    var menu = require('../../data/menu');
    this.setState( { menu });
  }

  _renderItem = ({item}) => {
    return (
        <MenuDetail key={item.id} menu={item}/>
    );
  }

  _keyExtractor = (item, index) => item.id;

  _drawerToggle = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  _getRestaurant = () => {
    return require('../../data/restaurants')[0];
  }

  render() {
    let { menu } = this.state;
    if (menu) {
      return (
          <View style={{flex:1}}>
            <ScrollView>
              <Text style={{fontSize: 40}}>Recommendations</Text>
              <Text style={{fontSize: 25}}> What Chinese People Like</Text>
              <Text style={{fontSize: 20}}> Based on your nationality</Text>
              <FlatList
                  data={menu[0]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
              <Text style={{fontSize: 25}}> What Mexican People Like</Text>
              <Text style={{fontSize: 20}}> Based on restaurant's nationality</Text>
              <FlatList
                  data={menu[1]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
              <Text style={{fontSize: 40}}>Full Menu</Text>
              <FlatList
                  data={menu[2]}
                  keyExtractor={this._keyExtractor}
                  renderItem={this._renderItem}
              />
            </ScrollView>
          </View>
      );
    }
    return <View/>;
  }
}

export default MenuList;