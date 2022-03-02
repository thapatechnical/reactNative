import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const UserData = () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);

  // render the students cards
  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
            <Text style={styles.myName}> mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    // height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "WorkSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "WorkSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "WorkSans_400Regular",
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "WorkSans_400Regular",
    paddingVertical: 50,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "WorkSans_400Regular",
  },
});

export default UserData;
