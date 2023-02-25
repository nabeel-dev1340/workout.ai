const getTutotialLink = (exerciseName: string) => {
  return `https://www.youtube.com/results?search_query=${exerciseName.replace(
    / /g,
    "+"
  )}`;
};

export default getTutotialLink;
