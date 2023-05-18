import React from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';

import skiImg from '../assets/ski.jpg';
import data from '../Questions/questions';

const QuestionScreen = () => {
  return (
    <View style={styles.main}>
        <ScrollView style={styles.container} alwaysBounceVertical={false}>
            <ImageBackground source={skiImg} resizeMode='cover' style={styles.headerImg}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Frequent questions</Text>
                </View>
            </ImageBackground>

            {data.map(({id, question, answer}) => (
                <View style={styles.queSection} key={question}>
                    <View style={styles.quesContainer}>
                        <Text style={styles.queText}>{question}</Text>
                    </View>
                    <View style={styles.ansContainer} key={id}>
                        <Text style={styles.ansText}>{answer}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  )
};

export default QuestionScreen;

const styles = StyleSheet.create({

    main: {
        backgroundColor: "white"
    },

    container: {
        
    },

    headerImg: {
        height: 200,
    },

    headerContainer: {
        justifyContent: "center",
        alignItems: "right",
        marginTop: 120,
        marginHorizontal: 30,
    },

    headerText: {
        fontSize: 35.5,
        fontWeight: "bold",
        color: "#fff",
        position: "absolute"
    },

    queSection: {
        marginHorizontal: 20,
        marginTop: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "#263A5F",
    },

    quesContainer: {
        
    },

    queText: {
        fontSize: 25,
        color: "#3293B4",
        fontWeight: "500"
    },

    ansContainer: {
        marginTop: 10,
        marginBottom: 10
    },

    ansText: {
        fontSize: 16.5,
        
    }

});