import React from 'react';
import { map, mapValues, sample, random } from 'lodash';
import GeometricJamo from './GeometricJamo';
import { branch } from 'baobab-react/higher-order';
import Circle from './Circle';

const jamos = (
  'ㅇ ㄹ ㅗ ㄱ ㅅ ㅇ ㅣ ㅅ ㄷ ㅎ ㅋ ㅗ ㄱ ㅍ ㅏ ㅡ ㅍ ㅎ ㅌ ㅅ ㅓ ㄹ ㄴ ㅗ ㅏ ㅡ ㅂ ㅇ ㅅ ㅁ ㅣ ㅇ ㅓ'
).split(' ');

const coordSets = {
  landing: [[87,-320],[-116,-368],[283,-250],[422,-381],[504,-206],[338,-53],[544,45],[292,159],[-374,-268],[-337,-473],[-420,-82],[-341,94],[-538,93],[-170,268],[-409,287],[105,292],[-55,444],[-289,464],[377,427],[564,293],[42,-529],[233,-431],[-552,-413],[-622,-202],[709,-371],[460,-535],[767,-112],[812,203],[680,487],[-633,478],[-740,281],[-792,-21],[-819,-383],[-936,143],[-944,-186],[-441,654],[178,587],[-147,660],[513,657],[942,430],[915,-292],[-912,417],[-743,681],[-279,870],[140,854],[802,749],[483,895],[1059,3],[-1147,-62],[-606,954],[-985,695],[-1055,-445],[-1171,346],[981,-510],[1289,-205],[1197,254],[1005,633],[732,1097],[270,1062],[-74,1038],[-373,1016],[-811,930],[-1144,554],[-1168,159]],
  landingSmall: [[-10,-274],[125,-246],[193,-150],[174,-5],[272,-63],[248,95],[-192,-109],[-195,122],[211,228],[288,328],[261,471],[-161,540],[-77,175],[211,-252],[-209,-289],[-115,-240],[-245,-44],[-254,-199],[-156,2],[-266,60],[-261,217],[-264,365],[-32,470],[129,467],[286,-246],[-169,237],[-201,331],[-28,308],[104,290],[74,419],[-93,414],[-206,434],[204,366]],
  nowwhat: [[-9,251],[-253,258],[106,-164],[-19,-296],[269,-277],[363,-100],[487,-239],[604,-57],[530,197],[735,163],[355,323],[102,426],[-162,442],[-483,398],[-442,163],[-512,-53],[-643,123],[-697,-230],[-436,-294],[-787,-44],[-758,372],[-628,603],[-328,609],[-11,645],[336,605],[611,470],[833,348],[884,-23],[827,-224],[-991,-219],[-933,151],[-881,588],[-461,808],[-126,839],[249,844],[588,757],[901,633],[1052,169],[1103,-165]],
  nowwhatSmall: [[-9,251],[-253,258],[106,-164],[-19,-296],[269,-277],[363,-100],[487,-239],[604,-57],[530,197],[735,163],[355,323],[102,426],[-162,442],[-483,398],[-442,163],[-512,-53],[-643,123],[-697,-230],[-436,-294],[-787,-44],[-758,372],[-628,603],[-328,609],[-11,645],[336,605],[611,470],[833,348],[884,-23],[827,-224],[-991,-219],[-933,151],[-881,588],[-461,808],[-126,839],[249,844],[588,757],[901,633],[1052,169],[1103,-165]],
};
const styleSets = mapValues(coordSets, coords =>
  map(coords, ([x, y]) => ({left: `${x}px`, top: `${y}px`}))
);

class Constellation extends React.Component {
  state = {jamos};
  i = 0;

  changeRandom = () => {
    this.changeJamo(this.i++);
  };

  changeJamo = (n = 0) => {
    let nextJamos = this.state.jamos.slice();
    nextJamos[n++ % jamos.length] = sample(jamos);
    this.setState({jamos: nextJamos});
  };

  componentDidMount() {
    this.timer = setInterval(this.changeRandom, 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {geometric, location} = this.props;
    const {jamos} = this.state;
    const page = /nowwhat/.test(location.pathname) ? 'nowwhat' : 'landing';
    // TODO: Some way to handle this responsive stuff better?
    const setName = page + (window.innerWidth <= 600 ? 'Small' : '');
    const coords = coordSets[setName];
    const styles = styleSets[setName];

    return (
      <div className="constellation">
        <div className="constellation__center">
          {geometric && map(coords, ([x, y], i) => 
            <div className="constellation__jamo"
              style={styles[i]}
              onMouseEnter={e => {
                this.changeJamo(i % jamos.length);
              }}
              key={i}>
              <GeometricJamo
                geometric={geometric}
                jamo={jamos[i % jamos.length]}
                fill={false}
                size={140} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default branch(Constellation, {
  cursors: {
    geometric: ['geometric'],
  }
});