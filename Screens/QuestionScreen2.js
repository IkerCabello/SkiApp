import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';

import skiImg from '../assets/ski.jpg';
import data from '../Questions/questionsCategories';

const transition = (
    <Transition.Together>
        <Transition.In type="fade" durationMs={200} />
        <Transition.Change />
        <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
)

const QuestionScreen2 = () => {

    const [currentIndex, setCurrentIndex] = useState(null);
    const ref = React.useRef();

  return (
    <Transitioning.View style={styles.main} ref={ref} transition={transition}>
        <ScrollView alwaysBounceVertical={false} alwaysBounceHorizontal={false}>
            <ImageBackground source={skiImg} resizeMode='cover' style={styles.headerImg}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Frequent questions</Text>
                </View>
            </ImageBackground>

            {data.map(({bg, category, subCategories}, index) => {
                return ( 
                <TouchableOpacity 
                    key={category} 
                    style={styles.catContainer}
                    onPress={() => {
                        ref.current.animateNextTransition();
                        setCurrentIndex(index === currentIndex ? null : index)
                    }} 
                    activeOpacity={0.7} 
                    >
                    <View style={[styles.category, {backgroundColor: bg}]}>
                        <View style={styles.catTextContainer}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </View>
                        {index === currentIndex &&(
                            <View style={styles.quesList}>
                            {subCategories.map(({question, answer}) => (
                                <View style={styles.quesContainer}>
                                    <Text key={question} style={styles.questionText}>{question}</Text>
                                    <Text key={answer} style={styles.answerText}>{answer}</Text>
                                </View>
                                ))}
                            </View>
                        )}
                    </View>
                </TouchableOpacity>
                )
            })}
        </ScrollView>
    </Transitioning.View>
  )
};

export default QuestionScreen2;

const styles = StyleSheet.create({

    main: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
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

    catContainer: {
        flexGrow: 1,
    },

    catTextContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#fff"
    },

    category: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    categoryText: {
        fontSize: 30,
        fontWeight: '700',
        textTransform: "uppercase",
        letterSpacing: -1,
        color: "#fff",
        marginTop: 40,
        marginBottom: 40,
    },

    quesList:{
        marginBottom: 20
    },

    quesContainer: {
        marginTop: 10,
    },

    questionText: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "600"
    },

    answerText: {
        color: "#fff",
        fontSize: 19,
        marginTop: 10,
    },

});