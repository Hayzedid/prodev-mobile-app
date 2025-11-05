import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants/index';

export default function Join() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/">
          <Ionicons name="arrow-back" size={24} color="black" />
        </Link>
        <Image source={HEROLOGOGREEN} />
        <View />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Fill your information below or register with your social account.</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput 
            style={styles.formControl}
            placeholder="Enter your name"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput 
            style={styles.formControl}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye" : "eye-off"} 
                size={24} 
                color="#7B7B7B" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.formLabel}>Confirm Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput 
              style={styles.passwordControl}
              placeholder="Confirm your password"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons 
                name={showConfirmPassword ? "eye" : "eye-off"} 
                size={24} 
                color="#7B7B7B" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin">
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
