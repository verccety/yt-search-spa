function formatViewCount(count) {
  switch (true) {
    case count > 1000000000:
      return `${Math.round(count / 1000000000)} млрд. просмотров`;
    case count > 1000000:
      return `${Math.round(count / 1000000)} млн. просмотров`;
    case count > 1000:
      return `${Math.round(count / 1000)} тыс. просмотров`;
    default:
      return count;
  }
}

export default formatViewCount;
