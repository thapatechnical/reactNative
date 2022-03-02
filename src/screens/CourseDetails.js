import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../api/Courseapi";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const CourseDetails = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const id = route.params.courseId;
  console.log(id);

  const selectedCourse = Courses.find((element) => {
    return id === element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>

        <Text style={styles.description}>{selectedCourse.description}</Text>

        <Text style={[styles.description, styles.subCourse]}>
          {selectedCourse.course1}
        </Text>

        <Text style={[styles.description, styles.subCourse]}>
          {selectedCourse.course2}
        </Text>

        <Text style={[styles.description, styles.subCourse]}>
          {selectedCourse.course3}
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedCourse.price} </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Course")}>
            <Text style={styles.buttonText}> Join Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// !todo style the course1 and make it uppercase

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  courseContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },

  cardImage: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },

  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: "Nunito_700Bold",
    textAlign: "center",
  },

  subHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingBottom: 15,
    fontFamily: "WorkSans_400Regular",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 20,
  },
  subCourse: {
    textTransform: "uppercase",
    color: "#344055",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  price: {
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "WorkSans_400Regular",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "WorkSans_400Regular",
  },
});

export default CourseDetails;
