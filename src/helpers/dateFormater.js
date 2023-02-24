export const dateFormater = (jsonDate) => {
    const date = new Date(jsonDate);

    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear().toString();

    const formattedDate = `${day}.${month}.${year}`;

    return formattedDate;
};
