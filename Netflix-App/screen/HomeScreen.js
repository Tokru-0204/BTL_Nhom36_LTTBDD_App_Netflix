import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import React from "react";
import Headers from "../components/Headers";
import TrendingComponent from "../components/TrendingComponent";
import MoviesRows from "../components/MoviesRows";
import Headers1 from "../components/Headers1";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      stickyHeaderIndices={[0]}
    >
      <Headers1/>
    
      <Headers />

      <TrendingComponent />

      <MoviesRows />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});



// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ScrollView,
//   Animated,
// } from "react-native";
// import Headers1 from "../components/Headers1";
// import Headers from "../components/Headers";
// import TrendingComponent from "../components/TrendingComponent";
// import MoviesRows from "../components/MoviesRows";
// const HomeScreen = () => {
//     return (
//         // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         //     <Text
//         //         onPress={() => alert('This is the "Home" screen.')}
//         //         style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
//         // </View><ScrollView
//     <ScrollView
//       style={{ flex: 1, backgroundColor: "black" }}
//       // stickyHeaderIndices={[0]}
//     >
//       {/* <Headers1/> */}
    
//       <Headers />

//       <TrendingComponent />

//       <MoviesRows />
//     </ScrollView>
//     );
// }

// export default HomeScreen;

// const styles = StyleSheet.create({});
