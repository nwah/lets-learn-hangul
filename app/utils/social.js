import { extend } from 'lodash';
import qs from 'qs';

// TODO: pull from server?
const env = (
  /localhost/.test(location.hostname) ? 'local'
  : /staging/.test(location.hostname) ? 'staging'
  : 'prod'
);
const fbAppId = ({
  prod: '1332107326799451',
  staging: '1332120460131471',
  local: '1332119800131537',
})[env];
const publicUri = 'http://letslearnhangul.com';

export function getTwitterShareUrl(overrides = {}) {
  let tweet = extend({
    text: 'I just learned to read Korean!',
    url: publicUri,
    hashtags: ['korean', 'hangul', 'hangeul'].join(','),
  }, overrides);

  return `https://twitter.com/intent/tweet?${qs.stringify(tweet)}`;
}

export function getFacebookShareUrl(overrides = {}) {
  let post = extend({
    app_id: fbAppId,
    display: 'page',
    quote: 'I just learned to read Korean!',
    href: publicUri,
    hashtag: '#korean #hangul #hangeul',
    redirect_uri: `${baseUri()}/nowwhat`,
  }, overrides);

  return `https://www.facebook.com/dialog/share?${qs.stringify(post)}`;
}

function baseUri() {
  return `${location.protocol}//${location.host}`;
}