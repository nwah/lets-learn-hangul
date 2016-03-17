export function showIndex(tree) {
  tree.set('indexShowing', true);
}

export function hideIndex(tree) {
  tree.set('indexShowing', false);
}

export function toggleIndex(tree) {
  tree.get('indexShowing') ? hideIndex(tree) : showIndex(tree);
}