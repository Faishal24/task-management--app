import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Div, Text, Header, Button, Icon } from "react-native-magnus";
import List from "../components/List/List";
import toCamelCase from "../../utils/camelCase";
import { format, addDays, startOfWeek } from "date-fns";
import { TouchableOpacity } from "react-native";

const CalendarWeek = ({ selectedDate, onSelectDate }) => {
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 0 });

  const weekDays = [...Array(7)].map((_, index) => addDays(start, index));

  return (
    <Div row justifyContent="space-around">
      {weekDays.map((day) => (
        <TouchableOpacity key={day} onPress={() => onSelectDate(day)}>
          <Div
            w={45}
            h={55}
            mt={20}
            rounded={20}
            alignItems="center"
            justifyContent="center"
            bg={
              selectedDate &&
              format(day, "dd-MM-yyyy") === format(selectedDate, "dd-MM-yyyy")
                ? "#D8DEF3"
                : "white"
            }
          >
            <Text
              color={
                selectedDate &&
                format(day, "dd-MM-yyyy") === format(selectedDate, "dd-MM-yyyy")
                  ? "#1365bd"
                  : "#2E3A59"
              }
              fontWeight="900"
            >
              {format(day, "eee")}
            </Text>
            <Text
              color={
                selectedDate &&
                format(day, "dd-MM-yyyy") === format(selectedDate, "dd-MM-yyyy")
                  ? "#1365bd"
                  : "#2E3A59"
              }
              fontWeight="300"
            >
              {format(day, "d")}
            </Text>
          </Div>
        </TouchableOpacity>
      ))}
    </Div>
  );
};

const Calendar = ({ navigation }) => {
  const route = useRoute();
  const { worker } = route.params;

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today;
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "dd-MM-yyyy");
      const tasksForDate = worker.tasks.filter(
        (task) => task.dueTo === formattedDate
      );
      setTasks(tasksForDate);
    } else {
      setTasks(worker.tasks);
    }
  }, [selectedDate, worker.tasks]);

  return (
    <Div bg="#F2F5FF" h="100%">
      <Div
        bg="white"
        roundedBottomLeft={25}
        roundedBottomRight={25}
        shadow="sm"
      >
        {/* <Header
          p="lg"
          alignment="left"
          shadow={0}
          bg="white"
          prefix={
            <Button bg="transparent" onPress={() => navigation.navigate('Home', worker)}>
              <Icon
                name="arrow-back"
                fontFamily="Ionicons"
                fontSize={25}
                color="#2E3A59"
              />
            </Button>
          }
          suffix={
            <Button bg="transparent">
              <Icon
                name="search"
                fontFamily="FontAwesome"
                fontSize="2xl"
                color="#2E3A59"
              />
            </Button>
          }
        ></Header> */}

        <Div pt={15} px={20} pb={30}>
          <TouchableOpacity onPress={() => console.log(selectedDate)}>
          <Text fontSize={35} fontWeight="900" color="#2E3A59">
            {format(selectedDate, "MMMM")}
          </Text>
          </TouchableOpacity>
          <CalendarWeek
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        </Div>
      </Div>
      <Div pt={30} px={20}>
        <Text fontSize={30} fontWeight="900" pb={30}>
          Tugas
        </Text>
        {tasks.length === 0 ? (
          <Text>Tidak ada tugas :)</Text>
        ) : (
          tasks.map((task) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Task", { task })}
            >
              <List
                key={task.id}
                title={toCamelCase(task.description)
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}
                date={task.dueTo}
              />
            </TouchableOpacity>
          ))
        )}
      </Div>
    </Div>
  );
};

export default Calendar;
