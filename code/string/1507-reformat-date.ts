function reformatDate(date: string): string {
  const m = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const [day, month, year] = date.split(" ");

  return year + "-" + m[month] + "-" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day));
};
