import * as Notifications from "expo-notifications";
import { format } from "date-fns";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const scheduleNotification = async (task) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder tugas: " + task.description,
      body: "Selesaikan pada: " + task.dueTo,
      data: { data: "goes here" },
    },
    trigger: { seconds: 1 },
  });
};

const notificationHandler = async (tasks) => {
  console.log("==========================");

  for (let i = 0; i < tasks.length; i++) {
    const today = new Date();
    const formattedToday = format(today, "dd-MM-yyyy");
    const dueDate = tasks[i].dueTo;

    const day = formattedToday.slice(0, 2);
    const dayDue = dueDate.slice(0, 2);
    const month = formattedToday.slice(3, 5);
    const monthDue = dueDate.slice(3, 5);

    // Notifikasi muncul ketika h-1 batas pengumpulan tugas
    if ((dayDue - 1 == day || day == dayDue) && month == monthDue && tasks[i].status !== "done") {
      console.log("Tugas ini harus diselesaikan hari ini:", tasks[i]);
      await scheduleNotification(tasks[i]);
    } else {
      console.log("Tidak ada tugas yang harus diselesaikan hari ini.");
      console.log(tasks[i].status);
    }
  }
};

export default notificationHandler;
