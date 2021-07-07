import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';

const PostsStack = createStackNavigator();

const PostsStackScreen = () => {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Posts" component={Posts} />
      <PostsStack.Screen name="PostDetail" component={PostDetail} />
      <PostsStack.Screen name="PostEdit" component={PostEdit} />
      <PostsStack.Screen name="PostCreate" component={PostCreate} />
    </PostsStack.Navigator>
  );
};

export default PostsStackScreen;
