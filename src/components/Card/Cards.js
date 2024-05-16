import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div, Icon } from "react-native-magnus";
import toCamelCase from "../../../utils/camelCase";
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
        {tasks.filter((task) => task.status !== "done").map((task, index) => (
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
    </Div>
  );
};

export default Cards;
