import React, { useState, useEffect } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Div } from "react-native-magnus";
import { formatDistanceToNow } from "date-fns";
import List from "./List";

const Lists = ({ navigation, worker }) => {
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

  const data = tasks.slice(0, 2)

  return (
    <Div h={190}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((task) => {
          const [day, month, year] = task.createdAt.split('-')
          const numericDay = parseInt(day, 10);
          const numericMonth = parseInt(month, 10); // Kurangi 1 karena bulan dimulai dari 0
          const numericYear = parseInt(year, 10);

          const fns = formatDistanceToNow(new Date(numericYear, numericMonth, numericDay),{
            addSuffix: true,
          });

          const waktu = fns.split(' ')[1]
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
  );
};

export default Lists;
