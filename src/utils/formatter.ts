import moment from "moment";

export const relativeDateFormatter = (date: string) => {
  return moment(date).fromNow();
};


