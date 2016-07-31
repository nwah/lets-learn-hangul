export function startHistory(tree) {
  recordEvent(tree, 'started-learning');
}

export function setLatest(tree, level, round) {
  const user = tree.select('user');
  user.set('latest', `${level}.${round}`);
  saveUser(tree);
}

export function recordEvent(tree, type, data = {}) {
  const history = tree.select('user', 'history');
  history.push({
    time: new Date().toISOString(),
    type,
    ...data
  });
  saveUser(tree);
}

export function saveUser(tree) {
  let json = JSON.stringify(tree.get('user'));
  localStorage.setItem('lets-learn-hangul', json);
}

export function loadUser(tree) {
  let user = JSON.parse(localStorage.getItem('lets-learn-hangul') || 'null');
  if (user) tree.set('user', user);
}

export function dismissHint(tree, hint) {
  const hinted = tree.select('user', 'hinted');
  hinted.set(hint, true);
}