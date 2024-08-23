import { format } from "date-fns";

const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();

export const formattedTimeNow = `${hours}:${minutes}`;
export const formattedDateToday = format(today, "dd/MM/yyyy");
export const dateFormatter = selectedDate => {
    return format(new Date(selectedDate), "dd/MM/yyyy");
}