import React from 'react';

class LandingBrushTitle extends React.Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({visible: true}), 100);
  }

  render() {
    let {visible} = this.state;
    let {animate = true, ...props} = this.props;

    return (
      <svg version="1.1" width="400px" height="400px" viewBox="-15 0 385 400" {...props}>
        { animate &&
          <defs>
            <mask id="writing">
              <polyline id="mask-line" fill="none" stroke="#FFFFFF" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="5400" strokeDashoffset="0"
                points="80.497,37 92.497,71.5 76.997,90 95.163,95.167 84.83,124.167 115.163,116.167 102.163,99.833 125.497,53.5 129.497,93.5 149.163,96.833 118.497,139.167 160.163,127.5 177.83,47.833 207.497,54.5 193.83,97.833 173.83,98.5 218.497,105.167 197.163,123.833 217.163,133.5 200.163,154.833 213.163,156.5 203.497,183.167 239.497,164.5 241.497,118.833 269.163,113.833 268.497,136.167 295.163,133.833 296.83,118.167 284.497,113.167 256.163,161.5 306.497,153.167 274.83,185.833 302.163,184.5 305.83,188.167 281.83,207.167 298.497,220.167 282.497,241.5 323.497,223.833 257.83,180.833 89.83,181.833 88.83,227.5 96.83,249.5 81.163,212.167 116.163,200.833 121.497,219.167 124.497,239.833 108.83,239.167 122.163,210.5 124.163,189.5 136.83,194.833 127.497,217.833 143.83,208.5 148.83,191.5 157.163,202.833 152.83,251.5 181.497,199.5 188.163,201.167 187.83,230.5 209.163,226.5 212.497,215.167 200.163,206.167 161.83,247.5 172.83,258.167 217.83,247.5 213.497,285.5 208.83,241.167 229.497,233.167 221.83,210.167 244.163,213.5 244.83,269.5 154.83,284.833 156.163,327.167 165.163,343.833 139.497,310.167 196.497,296.833 198.163,334.167 172.83,324.833 193.163,321.5 160.83,366.833 206.163,363.5 217.83,305.833 252.83,318.5 230.163,362.167 237.497,340.833 268.497,350.167 265.497,292.833 278.163,298.5 279.497,327.833 285.497,353.5 276.497,330.5 305.497,329.5 315.497,258.5 334.163,268.5 325.163,324.833 326.497,347.833"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  begin="0s"
                  from="5400"
                  to="0"
                  dur="15s"
                  values="5400; 0"
                  keySplines="0.23 1 0.32 1" 
                  keyTimes="0;1"
                  calcMode="spline"
                />
              </polyline>
            </mask>
          </defs>
        }

        <g mask={animate ? "url(#writing)" : 'none'} opacity={visible ? 1 : 0}>
          <path id="text" fill="#2B2A28" d="M114.878,118.942c-4.52,5.876-17.326,10.546-29.379,10.546 c-7.081-5.122-1.054-13.861,1.356-19.134c1.657-3.766,3.917-9.944,4.52-13.258c-1.356-3.766-10.094-0.452-14.915-2.712 c-3.616-1.808-3.315-8.738,0.602-11.902c1.657-0.452,5.575-1.205,7.232-5.424c4.821-11.751,1.959-22.448-7.533-32.844 c-1.205-3.465-2.109-9.19,3.767-11.601c7.684-3.164,17.175,20.49,17.175,29.831c-0.151,11.902-7.533,16.271-12.806,18.983 c0.301,1.055,1.958,1.205,2.712,1.507c7.533,2.561,14.011,12.203,10.396,18.983c-0.301,0.452,0.301,1.808-0.151,2.411 c-2.109,2.712-5.876,9.492-6.177,13.559c22.599-2.109,15.217-12.053,11.902-14.915c-4.67-1.959-1.808-4.068-1.356-6.93 C110.509,97.699,120.302,112.011,114.878,118.942z M160.679,124.968c1.054,1.808,2.109,8.588-3.767,10.546 c-0.753,0.151-7.684,2.41-10.245,3.616c-7.232,3.315-10.848,2.712-17.326,4.52c-1.054,0.151-3.616-0.151-4.821-0.151 c-7.533-0.452-8.136-8.889-7.081-12.354c0.603-1.959,2.863-5.424,5.273-7.232c10.697-8.437,25.612-20.189,19.285-25.914 c-1.657-1.506-11.149,1.055-13.559-0.904c-2.561-1.958-1.506-6.328-1.205-8.738c2.411-15.669-3.164-18.682-5.725-30.433 c0-0.452,1.808-4.369,3.465-5.575c17.025,5.424,10.697,26.818,6.78,36.008c4.67,0,14.313,1.356,17.477,4.219 c11.751,10.847-22.75,27.721-21.996,37.966C136.573,131.748,155.858,123.462,160.679,124.968z M239.88,165.317 c0.301,2.26-4.972,5.876-6.026,6.629c-12.203,8.286-24.106,13.107-30.886,13.409c-6.93,0.452-7.382-10.697-1.054-14.011 c5.424-2.712,9.492-12.655,0-14.463c-0.301,0-2.561-0.904-3.013-1.959c-0.452-1.054-2.26-5.725,0.452-8.136 c2.411-2.26,10.094-7.985,9.793-10.998c-2.109-1.506-12.203-0.301-13.559-1.958c-9.642-8.588,13.861-19.737,17.929-26.968 c-3.164-1.808-20.339,0.301-27.722,0.301c-9.04,0.151-17.778-8.437-12.806-11.45c2.561-1.507,9.19-2.712,16.874-3.013 c3.767-4.52,8.437-13.107,8.437-16.121c-1.055-8.437-1.055-18.833-7.985-22.147c-1.958-0.904-10.546-0.151-11.601-0.753 c-1.055-0.602-6.629-5.424-3.465-7.533c5.574-3.616,20.64-2.411,25.913,2.26c2.712,2.41,8.889,11.601,8.437,26.667 c-0.151,4.218-5.725,12.655-11.601,17.929c8.738,0.602,17.477,2.712,22.75,7.232c0,0.452-0.452,1.356-0.151,1.808 c3.766,5.725-16.874,15.669-19.737,20.791c24.106,3.465,21.695,12.203,16.121,20.641c-1.205,1.657-6.026,4.218-7.533,7.232 c-0.602,1.055,6.479,4.67,7.835,6.78c1.808,2.862,1.808,6.78,0.452,10.546c6.328-0.753,15.217-3.164,21.243-7.985 C239.579,160.948,240.181,163.66,239.88,165.317z M324.543,225.688c0.307,2.303-5.066,5.987-6.141,6.755 c-12.435,8.444-24.563,13.356-31.472,13.664c-7.062,0.46-7.522-10.9-1.075-14.277c5.527-2.764,9.672-12.742,0-14.584 c-0.307,0-2.61-1.075-3.07-2.149c-0.46-1.074-2.303-5.833,0.46-8.29c2.457-2.303,10.286-8.137,9.979-11.207 c-2.149-1.535-12.435-0.307-13.817-1.996c-9.825-8.751,14.124-20.111,18.269-27.48c-3.224-1.842-20.265,1.688-27.787,2.303 c-9.211,0.921-17.194-5.68-13.97-10.593c3.224-4.913,17.348-5.833,23.335-5.833c10.132,0,21.032,2.456,25.791,7.369 c0,0.46-0.46,1.382-0.153,1.842c3.838,5.833-17.194,15.966-20.111,21.186c24.563,3.531,22.106,12.435,16.426,21.032 c-1.228,1.688-6.141,4.298-7.676,7.369c-0.614,1.075,6.601,4.759,7.983,7.062c1.842,2.917,1.842,6.755,0.46,10.593 c6.448-0.768,15.505-3.224,21.646-7.983C324.235,221.39,324.85,224,324.543,225.688z M302.129,121.603 c0,13.049-11.974,19.804-25.484,20.878c-11.36,0.768-12.588-7.522-11.667-14.277c0.921-6.602,3.685-16.734,10.286-19.19 c1.075,0.307,3.685,1.535,5.22,2.456c0.154-0.768,0.46-1.228,1.075-1.228C290.768,108.861,302.129,112.545,302.129,121.603z M291.997,115.462c-1.229-1.689-9.825-0.921-12.282,0.46c-1.842,4.759-6.141,11.207-2.61,18.422 c5.066,1.228,10.9-0.154,13.817-4.145C293.992,125.901,295.835,120.528,291.997,115.462z M105.652,253.742 c-3.159,0.961-8.105,0.412-9.479-1.648c-7.418-11.814-16.759-48.217-11.539-57.421c1.374-2.473,7.693-4.946,7.83-3.709 c0.824,14.012,3.984,37.914,7.143,42.447c0.275,3.572,4.671,8.38,5.77,13.188C105.927,248.933,106.751,252.23,105.652,253.742z M126.807,233.273c-1.099,6.319-2.747,15.111-8.38,14.561c-0.824-1.923-4.259-1.923-5.495-2.747 c-3.297-2.061-8.792-6.456-9.891-10.852c-1.099-4.533,7.693-9.616,13.874-8.792c0.138-5.083-0.824-8.929-3.022-15.935 c-2.335-3.434-1.511-9.753,1.099-12.913c4.121,0.549,5.358,4.258,7.143,9.341C123.373,209.233,129.967,230.663,126.807,233.273z M117.054,230.526c-0.138-2.473-6.456-0.275-7.693,2.198c0.824,3.435,3.297,4.808,4.808,5.495 C116.504,238.081,117.466,233.273,117.054,230.526z M160.326,207.31c1.786,7.968,2.747,38.739-3.709,46.157 c-2.198,0-4.121-1.099-5.907-2.747c-2.198-12.089,1.511-30.222,0.687-40.799c-1.786,0-6.731,3.984-9.753,5.632 c-1.648,0.961-0.962,6.594-3.572,7.83c-1.099,0.549-3.159,0.137-4.671-1.099c0-2.885,1.374-22.804-3.984-24.04 c0.687-4.121,2.335-4.945,4.259-4.121c2.885,1.374,6.044,7.143,6.044,11.677c1.648,0.962,8.105-2.747,10.989-2.473 c-0.274-4.121-3.571-10.715-0.412-10.99c5.358-0.55,8.38,7.968,8.655,11.951C159.089,204.837,160.188,206.211,160.326,207.31z M227.824,244.56c1.374,1.374,0.824,3.297-0.55,4.121c-2.61,1.649-7.967,2.198-8.929,4.258c-2.885,6.182-0.687,25.276-0.687,33.931 c-0.824,1.099-3.847,0.824-4.671,0c-6.456-7.418-4.396-21.567-3.022-32.42c-9.067,1.236-17.721,6.319-25.826,6.319 c-4.808,0-9.341-7.144-8.105-9.616c4.533-2.885,12.638-4.533,17.858-5.632C208.043,242.499,223.154,241.675,227.824,244.56z M216.834,215.712c0,13.325-10.165,20.194-21.43,21.155c-9.616,0.824-10.577-8.792-8.517-14.561 c0.961-2.61,1.786-17.171,7.28-19.644c0.962,0.412,3.16,1.649,4.534,2.61c0-0.824,0.274-1.236,0.824-1.374 C207.356,202.662,216.834,206.371,216.834,215.712z M208.318,209.393c-1.099-1.786-8.242-0.962-10.303,0.412 c-1.649,4.946-5.22,11.539-2.198,18.82c4.121,1.236,9.204-0.275,11.539-4.121C210.103,219.97,211.477,214.476,208.318,209.393z M253.788,255.137c-0.412,4.259-1.923,10.715-5.358,14.012c-2.61,2.473-6.319-0.687-8.929-1.786 c-2.747-7.28,1.511-22.666,0.138-32.282c-4.259,0.137-9.341,3.571-12.501,3.983c-2.473-0.824-7.281-3.846-4.946-5.632 c4.259-3.297,12.501-5.358,15.523-6.869c2.747-1.236,0.137-13.05-0.55-15.385c-0.961-3.434,9.204-4.808,11.814,1.511 c1.649,3.847,3.297,7.144,4.671,14.836C254.749,233.845,254.337,248.681,253.788,255.137z M170.963,339.759 c0.412,1.923,0,4.121-1.236,5.22c-3.571,0.55-7.418-0.137-8.792-1.786c-10.165-12.776-16.759-34.343-12.501-45.745 c1.236-3.434,5.632-4.808,8.517-3.983c2.335,14.424,4.945,32.145,8.929,35.854C166.017,332.067,170.139,336.05,170.963,339.759z M200.085,359.541c1.649,2.198,2.061,6.731-0.549,7.83c-5.358,2.473-23.216-1.236-35.167,2.747c-1.236,0.687-2.748,1.374-5.358,0 c-0.687-0.274-1.099-1.511-1.099-2.473c-0.274-3.022,8.38-6.731,12.913-11.127c1.648-1.511,9.341-11.539,10.028-17.446 c-4.533-1.511-9.753-5.083-12.226-10.44c-0.275-0.412,0.55-1.099,1.374-1.923c1.374-4.946,13.737-9.341,17.996-8.517 c0.275-2.473-0.274-9.891-1.648-13.737c-3.984-3.297-0.962-6.868,0.961-9.067c2.747,0,6.319,3.022,7.693,7.144 c3.709,11.401,4.946,27.336-4.808,37.228c-3.709,2.747-5.632,10.99-10.577,17.309c5.495-0.962,12.501,0,17.996,1.374 C197.75,358.991,199.948,358.991,200.085,359.541z M187.997,323c-4.258-1.648-12.226,3.572-12.226,3.846 c0.687,0.962,6.456,4.121,7.693,4.808C185.936,330.968,187.997,326.846,187.997,323z M272.623,342.576 c1.648,4.808-0.687,10.715-6.868,11.676c-5.22,0.687-11.677-2.61-16.485-4.533c-1.099,2.747-7.555,13.462-9.341,15.935 c-2.748,3.984-7.556,4.258-10.715,2.885c0.137-13.188,11.676-31.595,15.385-43.134c2.198-6.869-10.577-5.22-15.797-9.067 c-4.121-3.159-2.885-9.341-1.648-12.501c17.858,4.671,25.414,7.143,29.397,14.973c2.747,5.358-1.511,15.248-4.671,23.491 C263.557,345.323,269.601,344.498,272.623,342.576z M308.752,323.756c0.412,2.885-0.687,7.693-3.297,9.204 c-4.396,2.61-11.264,3.709-16.347,5.22c0.412,3.297,4.808,16.484,1.786,19.781c-7.28,1.648-8.242-13.737-9.753-22.254 c-1.786-10.852-2.061-22.666-0.687-34.617c0.138-1.237,2.61-3.572,4.259-3.984c2.747,8.38,1.648,23.491,2.61,27.612 C292.542,325.953,302.158,323.756,308.752,323.756z M334.897,348.806c-0.687,0.687-4.259,3.297-8.105,2.473 c-2.885-0.687-7.831-5.083-7.831-7.967c0-1.786,1.099-9.479,7.693-9.479C334.622,335.069,334.897,342.487,334.897,348.806z M338.743,283.143c-0.55,5.632-3.846,43.272-13.05,41.623c-3.571-6.182-0.549-41.623,1.374-48.08 C333.248,275.45,339.43,277.373,338.743,283.143z"/>
        </g>
      </svg>
    );
  }
}

export default LandingBrushTitle;