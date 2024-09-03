import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const notificationHandler = async () => {
  console.log("Notification Test");
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Reminder Tugas",
      body: 'Pengumpulan tugas "Analisa Laporan" akan segera berakhir',
      data: { data: "goes here" },
    },
    trigger: { seconds: 1 }, // Notifikasi akan muncul setelah 2 detik
  });
};

export default notificationHandler;
