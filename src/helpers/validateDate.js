export function validateDate(dateString) {
    if (!dateString) return false;
    const [year, month, day] = dateString.split("-");
    const inputDate = new Date(`${year}-${month}-${day}`);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);
    if (inputDate >= yesterday) {
        return true;
    } else {
        return false;
    }
}
