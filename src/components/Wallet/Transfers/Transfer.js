import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableNativeFeedback, Modal, ScrollView } from 'react-native';

import styles from './Transfer.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20
  }
});

options = [
  {
    value: 'sa',
    description: 'Select a Reason'
  },

  {
    value: 'ra',
    description: 'Access Bank'
  },

  {
    value: 'va',
    description: 'Guaranty Trust'
  },
  {
    value: 'cv',
    description: 'Wema Bank'
  },
  {
    value: 'fd',
    description: 'UBA'
  },

  {
    value: 'edu',
    description: 'Zenith Bank'
  }
];

const transfer = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <Header nav={navigation} title="Transfers" returnNavLink="Wallet" />

      <View style={containerStyles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.header}>Transfers</Text>
          <Text style={styles.subHeader}>Send to friends</Text>
        </View>

        <View style={styles.inputContainer}>
          {/* <TextInput style={styles.input} placeholder="Select bank" /> */}

          <TouchableNativeFeedback onPress={() => setShowModal(true)}>
            <View style={styles.card}>
              <View style={styles.mainContent}>
                <View style={styles.cardContent}></View>
              </View>

              <View style={styles.cardIcon}>
                <Image source={require('../../../../assets/dropdown.png')} style={{ height: 15, width: 15 }} />
              </View>
            </View>
          </TouchableNativeFeedback>

          <TextInput style={styles.input} placeholder="Account number" />

          <View style={styles.inputFeedback}>
            <View style={styles.cardIcon}>
              <Image source={require('../../../../assets/user.png')} style={{ height: 14, width: 14 }} />
            </View>

            <Text style={{ fontFamily: 'gilroy-medium', fontSize: 14 }}>Janet Doe</Text>
          </View>

          <TextInput style={styles.input} placeholder="Enter amount" />

          <TextInput style={styles.input} placeholder="Narration" />
        </View>

        <TouchableNativeFeedback
          onPress={() => navigation.navigate('ConfirmationDetails', { name: 'ConfirmationDetails' })}>
          <View style={styles.button}>
            <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>Continue</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <Modal
        transparent={showModal}
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal1(false)}>
        <View style={styles.modalBody}>
          <View style={styles.modalContent}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>Select a category</Text>

              <TextInput style={styles.searchInput} placeholder="Search for options" />

              <ScrollView>
                {options.map((option) => (
                  <View
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: 'black'
                    }}>
                    <Text>{option.description}</Text>
                  </View>
                ))}
              </ScrollView>

              <TouchableNativeFeedback onPress={() => setShowModal1(false)}>
                <View style={[styles.modalButton, styles.defaultBtn, { marginTop: 30 }]}>
                  <Text style={styles.buttonText}>Done</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default transfer;
