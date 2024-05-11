import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../costants/Colors';

export default function ReviewStars() {
    return (
        <View style={{ alignItems: "flex-start" , marginTop: 4 }}>
          <Stars 
            default={2.5}
            count={5}
            half={true}
            starSize= {16}
            fullStar={<Icon name={"star"} style={[styles.starStyle]} />}
            emptyStar={
              <Icon
                name={"star-outline"}
                style={[styles.starStyle, styles.starStyle]}
              />
            }
            halfStar={<Icon name={"star-half"} style={[styles.starStyle]} />}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    starStyle: {
      color: Colors.yellow,
    },
  });