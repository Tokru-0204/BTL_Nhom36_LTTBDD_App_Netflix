import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import plans from "../data/plans";

const PlansScreen = () => {
  const data = plans;
  return (
    <ScrollView>
      <View style={{ padding: 10, backgroundColor: "white" }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Choose the plan that is right for you
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 17, fontWeight: "600" }}>
            Watch all you Ad free
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 17, fontWeight: "600" }}>
            Recommendations just for you
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 17, fontWeight: "600" }}>
            Cancel your Plan anytime
          </Text>
        </View>

        {data.map((item, index) => (
          <Pressable
            key={index}
            style={{
              height: 160,
              borderRadius: 7,
              borderColor: "#E50914",
              borderWidth: 0.5,
              padding: 15,
              margin: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  backgroundColor: "#E50914",
                  padding: 10,
                  width: 120,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
              </View>

              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                Price: ${item.price}
              </Text>
            </View>

            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                >
                  Video Quantity: {item.videoQuality}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}>
                  Resolution: {item.resolution}
                </Text>
              </View>
              <Fontisto
                style={{ marginRight: 6 }}
                name="netflix"
                size={28}
                color="black"
              />
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Devices You can watch On</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {item.devices.map((device) => (
                  <Entypo
                    style={{ marginRight: 6 }}
                    name={device.name}
                    size={27}
                    color="#E50914"
                  />
                ))}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});