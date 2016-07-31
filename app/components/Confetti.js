import React from 'react';
import { map, sample, random } from 'lodash';
import { isMedial } from '../utils/hangul';
import { mapping } from '../utils/display';
import { branch } from 'baobab-react/higher-order';

const ns = 'http://www.w3.org/2000/svg';
const width = 1280;
const jamos = Object.keys(mapping);
const red = '#ee1a60';
const blue = '#367add';
const count = 200;
const minZ = -1200;
const maxZ = 600;
const speed = 11;
const rspeed = 360 / 20;

class Confetti extends React.Component {
  running = false;
  i = 0;
  t = 0;
  ts = [];
  xs = [];
  zs = [];
  bits = [];
  paths = [];

  addBit = () => {
    if (!this.props.geometric) return;
    let jamo = sample(jamos);
    let i = this.i % count;
    let bit = this.bits[i];
    let path = this.paths[i];
    let z = random(minZ, maxZ);
    let x = random(-20, width + 20);

    path.setAttribute('d', sample(this.props.geometric));
    path.setAttribute('fill', isMedial(jamo) ? blue : red);
    
    // TODO: browser prefixes
    bit.style.transform = `translate3D(${x}px, -100px, ${z}px)`;

    this.ts[i] = 0;
    this.xs[i] = x;
    this.zs[i] = z;
    this.i++;
  };

  buildDivs = () => {
    for (let i = 0; i < count; i++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'confetti__piece');
      div.innerHTML = (''
        + '<svg width="100" height="100" viewBox="0 0 600 600">'
          + `<path d="M0,0l0,0" fill="transparent" />`
        + '</svg>'
      );
      this.refs.container.appendChild(div);
      this.bits.push(div);
      this.paths[i] = div.querySelector('path');
    }
  };

  tick = () => {
    if (!this.running) return;

    for (let i = 0; i < this.bits.length; i++) {
      this.ts[i]++;
      this.bits[i].style.transform =
        `translate3D(${this.xs[i]}px, ${speed * this.ts[i] - 100}px, ${this.zs[i]}px)`;
        // + ` rotateY(${rspeed * this.ts[i]}deg)`;
    }

    requestAnimationFrame(this.tick);
  };

  componentDidMount() {
    // return;
    this.buildDivs();
    this.timer = setInterval(this.addBit, 60);
    this.running = true;
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.refs.container.innerHTML = '';
    this.running = false;
  }

  render() {
    const {geometric} = this.props;

    return (
      <div className="confetti">
        <div className="confetti__container" ref="container" />
      </div>
    );
  }
}

export default branch(Confetti, {
  cursors: {
    geometric: ['geometric'],
  }
});