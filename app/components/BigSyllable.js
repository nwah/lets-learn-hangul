import React from 'react';
import { clamp } from 'lodash';
import { decompose, isHangul } from '../utils/hangul';
import { getShapeIDs, getHintIDs, getSyllableType, getJamoHint } from '../utils/display';
import BigText from './BigText';

const hintRadius = 190;
const colors = ['#ee1a60', '#367add', '#b70d4e'];

class BigSyllable extends React.Component {
  state = {
    hinted: {},
    hovering: {},
    centers: {}
  };

  showHint(i) {
    this.updateCenters();
    let {hinted} = this.state;
    hinted[i] = true;
    this.setState({hinted});
    setTimeout(() => this.hideHint(i), 1000);

    if (this.props.onPeek) {
      this.props.onPeek(decompose(this.props.syllable)[i]);
    }
  }

  hideHint(i) {
    let {hinted} = this.state;
    hinted[i] = false;
    this.setState({hinted});
  }

  mouseEnter(i) {
    this.setState({hovering: {[i]: true}});
  }

  mouseLeave(i) {
    this.setState({hovering: {[i]: false}});
  }

  updateCenters() {
    const min = hintRadius;
    const max = 600 - hintRadius;

    let jamos = decompose(this.props.syllable);
    let centers = {};

    jamos.forEach((jamo, i) => {
      let bbox = this.refs[`jamo-${i}`].getBBox();
      centers[i] = {
        x: clamp(bbox.x + bbox.width / 2, min, max),
        y: clamp(bbox.y + bbox.height / 2, min, max)
      };
    });
    this.setState({centers});
  }

  renderJamos() {
    let {shapes, syllable} = this.props;
    let {hinted, hovering} = this.state;

    return (
      <g className="jamos">
        {getShapeIDs(syllable).map((id, i) =>
          <path
            d={shapes[id] || ''}
            fill={hinted[i] ? 'transparent' : colors[i]}
            opacity={hovering[i] ? 0.5 : 1}
            ref={`jamo-${i}`}
            key={i} />
        )}
      </g>
    );
  }

  renderHints() {
    let {syllable} = this.props;
    let {hinted, centers} = this.state;

    return (
      <g className="hints">
        {decompose(syllable).map((jamo, i) =>
          hinted[i] && (
            <g key={i}>
              <circle
                r={hintRadius}
                opacity="0.8"
                fill={colors[i]}
                cx={centers[i].x} cy={centers[i].y} />
              <text
                x={centers[i].x}
                y={centers[i].y + 40}
                textAnchor="middle"
                style={{
                  fontFamily: 'Helvetica, sans-serif',
                  fontSize: '140px',
                  fill: 'white',
                }}>
                {getJamoHint(jamo, i === 0)}
              </text>
            </g>
          )
        )}
      </g>
    );
  }

  render() {
    let {hinted, hovering} = this.state;
    let {syllable} = this.props;

    return (
      isHangul(syllable) ?
        <svg viewBox="0 0 600 600" className="big-syllable">
          {this.renderJamos()}
          {this.renderHints()}
          <Hitareas
            {...this.props}
            onHit={this.showHint.bind(this)}
            onMouseEnter={this.mouseEnter.bind(this)}
            onMouseLeave={this.mouseLeave.bind(this)} />
        </svg>
      :
        <BigText text={syllable} />
    );
  }
}

const Hitareas = ({syllable, shapes, onHit, onMouseEnter, onMouseLeave}) => (
  <g className="hitareas">
    {getHintIDs(syllable).map((id, i) => 
      <path style={{cursor: 'pointer'}} fill="transparent" key={i}
        d={shapes[id] || ''}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => onHit(i)}
        onMouseEnter={() => onMouseEnter(i)}
        onMouseLeave={() => onMouseLeave(i)}
      />
    )}
  </g>
);

export default BigSyllable;