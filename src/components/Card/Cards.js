import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity, Image } from "react-native";
import { Div, Text } from "react-native-magnus";
import toCamelCase from "../../../utils/camelCase";
import empty from "../../../assets/empty.png"
import Card from "./Card";

const Cards = ({ navigation, worker, filter }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(worker.tasks);
  }, [worker]);

  const filterTask = (tasks, filter) => {
    switch (filter) {
      case "Tersedia":
        return tasks.filter((task) => task.status == "pending");
      case "Diserahkan":
        return tasks.filter((task) => task.status == "submitted");
      case "Selesai":
        return tasks.filter((task) => task.status == "done");
      default:
        return tasks;
    }
  };

  const filteredTask = filterTask(tasks, filter);

  return (
    <Div h={260}>
      {filteredTask.length == 0 ? (
        <Div justifyContent="center" alignItems="center" h="96%">
          <Image
          style={{
            width: 110,
            height: 65,
            marginBottom: 10,
          }}
          source={empty}
        />
        <Text fontWeight="900" fontSize={25} color="#2E3A59">Tidak ada item</Text>
        </Div>
      ) : (
        <Div justifyContent="space-between" row mx={-20}>
          <ScrollView horizontal={true}>
            {filteredTask.map((task, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Task", { task })}
              >
                <Card
                  title={`Tugas ${index + 1}`}
                  description={toCamelCase(task.description)
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")}
                  date={task.dueTo}
                  opacity={1}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Div>
      )}

      <Div alignItems="center">
        <Div h={1} w="70%" bg="#D8DEF3" mb={10}></Div>
      </Div>
    </Div>
  );
};

export default Cards;
