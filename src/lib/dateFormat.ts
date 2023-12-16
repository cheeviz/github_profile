export function dateFormat(date: string) {
  try {
    const data = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };

    const format = new Intl.DateTimeFormat("pt-BR", options).format(data);
    return format;
  } catch (error) {
    console.error(error);
  }
}
