const dateFix = (str) => {
  // Pisahkan string berdasarkan tanda "-"
  const parts = str.split("-");

  // Pastikan setiap bagian memiliki dua digit
  const day = parts[0].padStart(2, "0");
  const month = parts[1].padStart(2, "0");
  const year = parts[2];

  // Gabungkan kembali bagian-bagian tersebut menjadi satu string
  return `${day}-${month}-${year}`;
};

export default dateFix;
