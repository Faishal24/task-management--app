import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div } from "react-native-magnus";
import { format, formatDistanceToNow } from "date-fns";
import toCamelCase from "../../../utils/camelCase";
import List from "./List";

const Lists = ({ navigation, worker }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(worker.tasks);
  }, [worker]);

  const data = tasks.slice(0, 2)

  return (
    <Div h={190}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.filter((task) => task.status !== "done").map((task) => {
          const [day, month, year] = task.dueTo.split('-')
          const numericDay = parseInt(day, 10);
          const numericMonth = parseInt(month - 1, 10);
          const numericYear = parseInt(year, 10);

          const fns = formatDistanceToNow(new Date("2024", "4", "11"),{
            addSuffix: true,
          });

          const waktu = fns.split(' ')[0]
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Task", { task })}>
              <List
                title={toCamelCase(
                  (task.description).split(" ").slice(0, 2).join(" ")
                )}
                date={`${waktu} hari yang lalu`}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Div>
    // onPress={() => navigation.navigate("Task", { task })
  );
};

export default Lists;
