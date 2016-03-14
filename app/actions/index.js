export function startSession(level, round) {
  return {
    type: 'START_SESSION',
    level: `${level}`,
    round: `${level}.${round}`
  };
}

export function courseLoaded(data) {
  return {
    type: 'COURSE_LOADED',
    data: data
  };
}