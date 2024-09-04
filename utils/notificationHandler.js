import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const notificationHandler = async ({ title, body }) => {
  console.log("Notification Test", title, body);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: { data: "goes here" },
    },
    trigger: { seconds: 1 }, // Notifikasi akan muncul setelah 2 detik
  });
};

export default notificationHandler;
