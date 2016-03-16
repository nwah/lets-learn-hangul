export function startSession(level, round) {
  return {
    type: 'START_SESSION',
    level: level,
    round: round
  };
}

export function loadCourse() {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_COURSE'
    });

    return fetch('/data/course.json')
      .then(res => res.json())
      .then(data => dispatch(courseLoaded(data)))
      .catch(err => dispatch(loadCourseFailed(err)));
  }
}

export function courseLoaded(data) {
  return {
    type: 'COURSE_LOADED',
    data: data
  };
}

export function loadCourseFailed(err) {
  return {
    type: 'LOAD_COURSE_FAILED',
    err: err
  };
}

export function loadShapes() {
  return function(dispatch) {
    dispatch({
      type: 'LOAD_SHAPES'
    });

    return fetch('/data/shapes.json')
      .then(res => res.json())
      .then(data => dispatch(shapesLoaded(data)))
      .catch(err => dispatch(loadShapesFailed(err)));
  }
}

export function shapesLoaded(data) {
  return {
    type: 'SHAPES_LOADED',
    shapes: data
  };
}

export function loadShapesFailed(err) {
  return {
    type: 'LOAD_SHAPES_FAILED',
    err: err
  };
}

export function updateResponse(response) {
  return {
    type: 'UPDATE_RESPONSE',
    response: response
  };
}

export function submitResponse() {
  return {
    type: 'SUBMIT_RESPONSE'
  };
}