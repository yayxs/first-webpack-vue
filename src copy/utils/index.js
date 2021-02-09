export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  // 格式化形式
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  console.log(format);
  console.log(cFormat);
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      console.log("传进来的是string");
      if (/^[0,9]+$/.test(time)) {
        console.log("走进来", time);
      } else {
        console.log("兼容safari");
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }
    if (typeof time === "number" && time.toString().length === 10) {
      console.log("走进了数值");
      console.log(time * 1000);
    }
    console.log("最终的time", time);
    date = new Date(time);
  }
  date = new Date();

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  console.log(formatObj);
  const time_str = format.replace(/{([ymdhisa])+}/g, (res, key) => {
    console.log(res);
    const val = formatObj[key];
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][val];
    }
    return val.toString().padStart(2, "0");
  });

  return time_str;
}
