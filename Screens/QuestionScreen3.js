import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';

import skiImg from '../assets/ski.jpg';
import data from '../Questions/questions';

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
        <ImageBackground source={skiImg} resizeMode='cover' style={styles.headerImg}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Frequent questions</Text>
            </View>
        </ImageBackground>
        <ScrollView alwaysBounceVertical={false} bounces={false}>

            {data.map(({bg, question, answer}, index) => {
                return ( 
                <TouchableOpacity 
                    key={question} 
                    style={styles.catContainer}
                    onPress={() => {
                        ref.current.animateNextTransition();
                        setCurrentIndex(index === currentIndex ? null : index)
                    }} 
                    activeOpacity={0.7} 
                    >
                    <View style={[styles.category, {backgroundColor: bg}]}>
                        <View style={styles.catTextContainer}>
                            <Text style={styles.categoryText}>{question}</Text>
                        </View>
                        {index === currentIndex &&(
                            <View style={styles.quesList}>
                                <View style={styles.quesContainer}>
                                    <Text key={answer} style={styles.answerText}>{answer}</Text>
                                </View>
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
        marginHorizontal: 20,
    },

    catTextContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#3293B4",
    },

    category: {
        flexGrow: 1,
        marginHorizontal: 10,
    },

    categoryText: {
        fontSize: 27,
        fontWeight: '700',
        textTransform: "uppercase",
        letterSpacing: -1,
        color: "#3293B4",
        marginTop: 30,
        marginBottom: 10,
        textAlign: "center"
    },

    quesList:{
        marginBottom: 20
    },

    quesContainer: {
        marginTop: 10,
        marginHorizontal: 10,
    },

    answerText: {
        color: "#3293B4",
        fontSize: 20,
        marginTop: 10,
        textAlign: "center",
        paddingBottom: 30,
    },

});