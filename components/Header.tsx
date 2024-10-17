import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

const Header: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <Image source={{ uri: imageUrl }} style={styles.headerImage} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0D92F4',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Header;
