import React from "react";
import { TextBase, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Card, Badge } from "react-native-elements";
import ROUTES from "../constants/routes";
import ScreenContainer from "../screens/ScreenContainer";

const tasks = [
  {
    index: "1",
    doctor_name: "Dr Li Kung",
    duration: "4 mins",
    details: "lorem dummy",
    status: "In Progress",
    badge_status: "warning",
    color_id: "yellow",
    type: "video"
  },
  {
    index: "2",
    doctor_name: "Dr Li Kung",
    duration: "40 mins",
    details: "habi jabi",
    status: "Not Started",
    badge_status: "error",
    color_id: "red",
    type: "audio",
  },
  {
    index: "3",
    doctor_name: "Dr Li Kung",
    duration: "40 mins",
    details: "habi jabi",
    status: "Completed",
    badge_status: "success",
    color_id: "green",
    type: "audio",
  },
  {
    index: "4",
    doctor_name: "Dr Li Kung",
    duration: "400 mins",
    details: "habi jabi",
    status: "Not Started",
    badge_status: "error",
    color_id: "red",
    type: "audio",
  },
];

const styling = {
  red: { color: "red" },
  yellow: { color: "yellow" },
  green: { color: "green" },
};

const TaskScreen = ({ navigation }) => (
  <ScreenContainer>
    {tasks.map((t, i) => {
      return (
        <TouchableOpacity key={i} onPress={()=>navigation.push(t.type=='audio' ? ROUTES.TaskAudio : ROUTES.TaskVideo)}>
          <Card  containerStyle={{ padding: 10 }}>
            <Text>
              Task {t.index} : {t.doctor_name}
            </Text>
            <Text style={styling[t.color_id]}>
              Estimated duration: {t.duration}
            </Text>
            {/* map not working in inside style for custom color */}
            <Text>{t.details}</Text>
            <Badge
              status={t.badge_status}
              size="large"
              containerStyle={{ position: "absolute", top: 1, right: 5 }}
            />
            {/* map not working in inside style for custom color */}
            <Text style={styling[t.color_id]}>Status : {t.status}</Text>
          </Card>
        </TouchableOpacity>
      );
    })}
  </ScreenContainer>
);

export default TaskScreen;
