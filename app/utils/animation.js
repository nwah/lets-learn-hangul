import { branch } from 'baobab-react/higher-order';

export function transitionableBranch(com) {
  const branched = branch.apply(null, arguments);

  [
    'componentWillAppear',
    'componentDidAppear',
    'componentWillEnter',
    'componentDidEnter',
    'componentWillLeave',
    'componentDidEnter',
  ].forEach(method => {
    if (method in com.prototype) {
      branched.prototype[method] = function() {
        return com.prototype[method].apply(this, arguments);
      };
    }
  });

  return branched;
}