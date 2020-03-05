import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { API_URL } from '../helpers/apiurl';

export default ({ post }) => {
    return (
        <Card style={{ width: '96%', alignSelf: 'center' }}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: `${API_URL}${post.profileimage}`}} />
                <Body>
                  <Text>{post.username}</Text>
                  <Text note>Instagrin {post.role}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `${API_URL}${post.image}`}} style={{height: 350, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                  <Text>{post.caption}</Text>
              </Left>
            </CardItem>
        </Card>
    )
}