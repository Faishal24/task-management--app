const formatDate = (str) => {
  const parts = str.split("-");

  const day = parts[0];
  let month = parts[1];
  const year = parts[2];

  switch (month) {
    case "01":
      month = "Januari";
      break;
    case "02":
      month = "Februari";
      break;
    case "03":
      month = "Maret";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "Mei";
      break;
    case "06":
      month = "Juni";
      break;
    case "07":
      month = "Juli";
      break;
    case "08":
      month = "Agustus";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "Oktober";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "Desember";
      break;
  }

  return `${day} ${month} ${year}`;
};

export default formatDate;
