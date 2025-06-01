import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div, Text } from "react-native-magnus";
import { format, formatDistanceToNow } from "date-fns";
import toCamelCase from "../../utils/camelCase";
import List from "../components/List/List";

const TaskList = ({ worker, navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(worker.tasks);
  }, [worker]);

  return (
    <Div my={20} mx={20}>
      <Text fontSize={35} mb={15} fontWeight="900" color="#2E3A59">
        Daftar Tugas
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tasks?.map((task) => {
          const [day, month, year] = task.dueTo.split("-");
          const numericDay = parseInt(day, 10);
          const numericMonth = parseInt(month - 1, 10);
          const numericYear = parseInt(year, 10);

          const fns = formatDistanceToNow(new Date(numericYear, numericMonth, numericDay), {
            addSuffix: true,
          });

          return (
            <TouchableOpacity onPress={() => navigation.navigate("Task", { task, worker })}>
              <List
                title={toCamelCase(task.description.split(" ").slice(0, 2).join(" ") + "...")}
                date={`${fns}`}
                isList
                status={task.status}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Div>
  );
};

export default TaskList;
