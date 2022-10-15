import { eachWeekOfInterval } from "date-fns";

export const weekSaleInterval = eachWeekOfInterval({
  start: new Date("10/4/2022"),
  end: new Date("10/31/2022"),
});
