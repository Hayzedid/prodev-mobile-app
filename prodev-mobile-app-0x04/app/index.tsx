import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants/index';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Fall in Love with Coffee in Blissful Delight!</Text>
          </View>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Welcome to our cozy coffee corner, where every cup is a delightful for you.
            </Text>
          </View>
        </View>
        
        <View style={styles.buttonGroup}>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Join Now</Text>
            </TouchableOpacity>
          </Link>
        </View>
        
        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>Already have an account? </Text>
          <Link href="/signin">
            <Text style={[styles.titleSubText, { textDecorationLine: 'underline' }]}>Sign In</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}
