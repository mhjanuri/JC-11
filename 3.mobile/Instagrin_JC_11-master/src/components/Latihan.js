import React from 'react';
import { View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';

class App extends React.Component {
  render() {
    return (
      <View>
        <Animatable.View 
          animation="bounceOutUp"
          duration={2000}
          delay={1000}
          iterationCount={'infinite'}
        >
          <Header
            placement="left"
            leftComponent={{ icon: 'menu', type: 'material', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'https://en.meming.world/images/en/thumb/a/af/Surprised_Pikachu_3D.jpg/300px-Surprised_Pikachu_3D.jpg'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: 'https://pics.awwmemes.com/great-teacher-onizukachu-give-pikachu-a-face-know-48817599.png'}} style={{height: 350, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Animatable.View>
      </View>
    )
  }
}

export default App;
