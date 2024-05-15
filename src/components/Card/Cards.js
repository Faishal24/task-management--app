import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div, Icon } from "react-native-magnus";
import Card from "./Card";

const Cards = ({ navigation, worker }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(worker.tasks);
  }, [worker]);

  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(" ");
  };

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
                description={toCamelCase(task.description).split(" ").slice(0, 3).join(" ")}
                date={task.dueTo}
                opacity={1}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Div>

      <Div alignItems="center">
        <Div h={1} w="70%" bg="#D8DEF3" mb={10}></Div>
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
