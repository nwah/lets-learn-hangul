import React from 'react';
import { decompose } from '../utils/hangul';
import { getShapeIDs, getHintIDs, getSyllableType, getJamoHint } from '../utils/display';

const colors = ['#ee1a60', '#367add', '#b70d4e'];

class BigSyllable extends React.Component {
  state = {
    hinted: {}
  };

  showHint(i) {
    this.setState({hinted: {[i]: true}});
    setTimeout(() => this.hideHint(i), 500)
  }

  hideHint(i) {
    this.setState({hinted: {[i]: false}});
  }

  render() {
    let {syllable, shapes} = this.props;
    let {hinted} = this.state;
    let hints = decompose(syllable).map((j, i) => getJamoHint(j, i === 2));

    return (
      <svg style={{width: 60, height: 60}} viewBox="0 0 600 600" className="big-syllable">
        <Jamos {...this.props} hinted={hinted} />
        <Hitareas {...this.props} onHit={this.showHint.bind(this)} />
        <Hints {...this.props} hinted={hinted} hints={hints} />
      </svg>
    );
  }
}

const Jamos = ({syllable, shapes, hinted}) => (
  <g>
    {getShapeIDs(syllable).map((id, i) =>
      <path d={shapes[id] || ''} fill={hinted[i] ? 'transparent' : colors[i]} key={i} />
    )}
  </g>
);

const Hitareas = ({syllable, shapes, onHit}) => (
  <g>
    {getHintIDs(syllable).map((id, i) => 
      <path style={{cursor: 'pointer'}} fill="transparent" key={i}
        d={shapes[id] || ''}
        onClick={() => onHit(i)}
      />
    )}
  </g>
);

const Hints = ({syllable, shapes, onHit}) => (
  <g>
    
  </g>
);

export default BigSyllable;