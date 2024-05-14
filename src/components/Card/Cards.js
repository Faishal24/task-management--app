import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div, Icon } from "react-native-magnus";
import Card from "./Card";

const Cards = ({ navigation, worker }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(worker.tasks);
  }, [worker]);

  return (
    <Div>
      <Div justifyContent="space-between" row mx={-20}>
        <ScrollView horizontal={true}>
          {tasks.map((task, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Task", { task })}
            >
              <Card
                title={`Tugas ${index + 1}`}
                description={task.description}
                date={task.dueTo}
                opacity={1}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Div>

      {/* <Div row justifyContent="center" mb={10}>
        <Icon
          name="dot-fill"
          fontFamily="Octicons"
          fontSize={16}
          color="#008CFF"
          rounded="md"
        />
        <Icon
          name="dot"
          fontFamily="Octicons"
          fontSize={16}
          color="#66717E"
          rounded="md"
          mx={5}
        />
        <Icon
          name="dot"
          fontFamily="Octicons"
          fontSize={16}
          color="#66717E"
          rounded="md"
        />
      </Div> */}
    </Div>
  );
};

export default Cards;
