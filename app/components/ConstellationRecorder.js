// import React from 'react';
// import { map, mapValues, sample, random } from 'lodash';
// import GeometricJamo from './GeometricJamo';
// import { branch } from 'baobab-react/higher-order';
// import Circle from './Circle';

// const jamos = (
//   'ㅇ ㄹ ㅗ ㄱ ㅅ ㅇ ㅣ ㅅ ㄷ ㅎ ㅋ ㅗ ㄱ ㅍ ㅏ ㅡ ㅍ ㅎ ㅌ ㅅ ㅓ ㄹ ㄴ ㅗ ㅏ ㅡ ㅂ ㅇ ㅅ ㅁ ㅣ ㅇ ㅓ'
// ).split(' ');

// const coordSets = {
//   landing: [[97,-356],[-129,-409],[314,-278],[469,-423],[560,-229],[375,-59],[604,50],[324,177],[-416,-298],[-375,-526],[-467,-91],[-379,104],[-598,103],[-189,298],[-454,319],[117,324],[-61,493],[-321,515],[419,474],[627,326],[47,-588],[259,-479],[-613,-459],[-691,-225],[788,-412],[511,-595],[852,-124],[902,225],[756,541],[-703,531],[-822,312],[-880,-23],[-910,-426],[-1040,159],[-1049,-207],[-490,727],[198,652],[-163,733],[570,730],[1047,478],[1017,-324],[-1013,463],[-826,757],[-310,967],[156,949],[891,832],[537,994],[1177,3],[-1274,-69],[-673,1060],[-1094,772],[-1172,-495],[-1301,384],[1090,-567],[1432,-228],[1330,282],[1117,703],[813,1219],[300,1180],[-82,1153],[-415,1129],[-901,1033],[-1271,616],[-1298,177]],
//   nowwhat: [[97,-356],[-129,-409],[314,-278],[469,-423],[560,-229],[375,-59],[604,50],[324,177],[-416,-298],[-375,-526],[-467,-91],[-379,104],[-598,103],[-189,298],[-454,319],[117,324],[-61,493],[-321,515],[419,474],[627,326],[47,-588],[259,-479],[-613,-459],[-691,-225],[788,-412],[511,-595],[852,-124],[902,225],[756,541],[-703,531],[-822,312],[-880,-23],[-910,-426],[-1040,159],[-1049,-207],[-490,727],[198,652],[-163,733],[570,730],[1047,478],[1017,-324],[-1013,463],[-826,757],[-310,967],[156,949],[891,832],[537,994],[1177,3],[-1274,-69],[-673,1060],[-1094,772],[-1172,-495],[-1301,384],[1090,-567],[1432,-228],[1330,282],[1117,703],[813,1219],[300,1180],[-82,1153],[-415,1129],[-901,1033],[-1271,616],[-1298,177]],
//   record: JSON.parse(localStorage.getItem('coords') || '[]'),
// };
// const styleSets = mapValues(coordSets, coords =>
//   map(coords, ([x, y]) => ({left: `${Math.round(.9 * x)}px`, top: `${Math.round(.9 * y)}px`}))
// );

// class Constellation extends React.Component {
//   state = {jamos};
//   i = 0;

//   changeRandom = () => {
//     this.changeJamo(this.i++);
//   };

//   changeJamo = (n = 0) => {
//     let nextJamos = this.state.jamos.slice();
//     nextJamos[n++ % jamos.length] = sample(jamos);
//     this.setState({jamos: nextJamos});
//   };

//   componentDidMount() {
//     // this.timer = setInterval(this.changeRandom, 200);
//     window.addEventListener('click', e => {
//       let cx = window.innerWidth / 2;
//       // let cy = window.innerHeight / 2;
//       let cy = 300;
//       let x = Math.round(e.pageX - cx);
//       let y = Math.round(e.pageY - cy);

//       console.log('x:', x, 'y:', y);

//       let set = coordSets.record;
//       let styles = styleSets.record;
//       for (let i = set.length - 1; i >= 0; i--) {
//         if (Math.abs(x - set[i][0]) < 20 && Math.abs(y - set[i][1]) < 20) {
//           set.splice(i, 1);
//           styles.splice(i, 1);
//           this.forceUpdate();
//           localStorage.setItem('coords', JSON.stringify(set));
//           return;
//         }
//       }

//       set.push([x, y]);
//       styles.push({left: `${Math.round(x)}px`, top: `${Math.round(y)}px`});
//       this.forceUpdate();
//       localStorage.setItem('coords', JSON.stringify(set));
//     });
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     const {geometric, location} = this.props;
//     const {jamos} = this.state;
//     // const page = /nowwhat/.test(location.pathname) ? 'nowwhat' : 'landing';
//     const page = 'record';
//     const coords = coordSets[page];
//     const styles = styleSets[page];

//     return (
//       <div className="constellation">
//         <div className="constellation__center">
//           {geometric && map(coords, ([x, y], i) => 
//             <div className="constellation__jamo"
//               style={styles[i]}
//               onMouseEnter={e => {
//                 this.changeJamo(i % jamos.length);
//               }}
//               key={i}>
//               <GeometricJamo
//                 geometric={geometric}
//                 jamo={jamos[i % jamos.length]}
//                 fill={false}
//                 size={140} />
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default branch(Constellation, {
//   cursors: {
//     geometric: ['geometric'],
//   }
// });