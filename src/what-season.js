module.exports = function getSeason(date) {
  let seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    fall: [8, 9, 10]
  };
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  };
  if (!date.getMonth || Object.keys(date).length > 0) {
    throw Error('Error');
  };
  let month = date.getMonth();
  if (seasons.winter.includes(month)) {
    season = 'winter';
  }
  if (seasons.spring.includes(month)) {
    season = 'spring';
  }
  if (seasons.summer.includes(month)) {
    season = 'summer';
  }
  if (seasons.fall.includes(month)) {
    season = 'autumn';
  }
  return season;
};