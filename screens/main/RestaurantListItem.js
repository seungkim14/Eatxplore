import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { FontAwesome } from '../../assets/icons';

class RestaurantListItem extends Component {
  _pressItem = (restaurant) => {
    const { t, i18n, navigation } = this.props;
    // console.log(restaurant.id);
    this.props.navigation.navigate('RestaurantDetail', {restaurant, t, i18n});
  }

  render() {
    const { t, i18n, navigation, distance } = this.props;
    const { name, type, img, link } = this.props.restaurant;
    // const { id, name, cuisines, thumb } = this.props.restaurant.restaurant;
    const { headerContentStyle } = styles;
    console.log(link);
    return (
      <View style={styles.restaurantBoxStyle}>
        <TouchableOpacity style={styles.imageContainer} onPress={()=>{this._pressItem(this.props.restaurant)}}>
          <Image
            style={styles.imageStyle}
            // source={{uri: thumb}}
            // source={{uri: 'https://screenshotlayer.com/images/assets/placeholder.png'}}
            // onError={(error) => console.log(error)}
            source={{uri: link}}
          />
        </TouchableOpacity>
        <View style={styles.restaurantBottomContainer}>
          <View style={styles.restaurantLeftContainer}>
            <Text style={styles.restaurantTitle}>{ name }</Text>
            <Text style={styles.restaurantKind}>{ type }</Text>
            {/*<Text style={styles.restaurantKind}>{ cuisines }</Text>*/}
          </View>
          <View style={styles.restaurantRightContainer}>
            <Text><Text style={styles.awesome}>{FontAwesome.place}</Text> { distance } miles</Text>
          </View>
        </View>
      </View>

    );
  }
}


const styles = {
  restaurantLeftContainer: {
    paddingLeft: 15,
  },
  restaurantRightContainer: {
    paddingRight: 15,
  },
  restaurantTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  restaurantKind: {
    fontSize: 15,
  },
  awesome : {
    fontFamily: 'fontawesome'
  },
  restaurantBoxStyle: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  restaurantBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: 180,
    flex: 1,
    margin: 1,
  },
  imageStyle: {
    width: null,
    height: 180,
    resizeMode: 'center',
    opacity: 1,
  }
};

export default RestaurantListItem ;
