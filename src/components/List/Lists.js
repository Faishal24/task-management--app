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

  const dataTest = tasks.filter((task) => task.status !== "done");

  return (
    <Div h={190}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataTest.map((task) => {
          const [day, month, year] = task.dueTo.split("-");
          const numericDay = parseInt(day, 10);
          const numericMonth = parseInt(month - 1, 10);
          const numericYear = parseInt(year, 10);

          const fns = formatDistanceToNow(
            new Date(numericYear, numericMonth, numericDay),
            {
              addSuffix: true,
            }
          );

          const waktu = fns.split(" ")[2];
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Task", { task })}
            >
              <List
                title={toCamelCase(
                  task.description.split(" ").slice(0, 2).join(" ") + "..."
                )}
                date={`${fns}`}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Div>
  );
};

export default Lists;
