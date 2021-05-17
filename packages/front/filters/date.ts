export const dateFormat = (value: string | Date) => {
  let year = "";
  let month = "";
  let date = "";
  if (typeof value === "string") {
    const matches = value.match(
      /^([0-9]{4})[/-](0[0-9]|1[0-2])[/-]([0-2][0-9]|3[0-1]).*$/
    );
    if (matches) {
      year = matches[1];
      month = matches[2];
      date = matches[3];
    }
  } else if (value instanceof Date) {
    year = String(value.getFullYear());
    month = String(value.getMonth() + 1);
    date = String(value.getDate());
  }

  if (year && month && date) {
    return `${year}/${month.padStart(2, "0")}/${date.padStart(2, "0")}`;
  } else {
    return "";
  }
};
