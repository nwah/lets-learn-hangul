import React from 'react';

const Bragging = props => (
  <svg version="1.1" width="270px" height="220px" viewBox="0 0 270 220" {...props}>
    <path fill="#2B2A28" d="M65.521,65.758c1.891,5.513-0.787,12.286-7.876,13.389c-5.986,0.788-13.389-2.993-18.902-5.198 c-1.26,3.151-8.664,15.437-10.711,18.272c-3.151,4.568-8.664,4.883-12.287,3.308C15.903,80.407,29.134,59.3,33.388,46.068 c2.52-7.876-12.129-5.986-18.115-10.396c-4.725-3.623-3.308-10.712-1.89-14.335c20.477,5.356,29.141,8.191,33.709,17.17 c3.15,6.143-1.733,17.485-5.356,26.936C55.125,68.909,62.056,67.963,65.521,65.758z M106.949,44.178 c0.472,3.308-0.787,8.821-3.78,10.554c-5.041,2.993-12.916,4.253-18.745,5.986c0.473,3.78,5.514,18.902,2.048,22.683 c-8.349,1.89-9.451-15.752-11.184-25.519c-2.048-12.444-2.363-25.99-0.788-39.695c0.157-1.418,2.993-4.095,4.883-4.568 c3.151,9.609,1.891,26.936,2.993,31.661C88.362,46.699,99.388,44.178,106.949,44.178z"/>
    <path fill="#2B2A28" d="M177.513,65.758c0.63,7.876-9.923,15.279-15.437,16.854c-2.363,0.63-17.012,5.356-26.463,8.821 c-5.986,2.205-8.033,2.678-11.656,1.26c-3.623-1.575-4.095-9.136-2.363-12.602c6.773-14.177,13.862-19.848,18.115-25.361 c-2.993-2.678-9.293-0.472-13.389,1.575c-8.506-5.356-4.726-12.287-3.466-13.862c1.103-1.26,7.403-5.828,9.766-9.924 c0-6.931-16.225-6.773-21.738-9.766c-2.52-1.26-0.157-7.403,1.89-8.191c5.041-1.891,15.122-0.945,20.005,3.623 c8.348,7.718,9.766,15.91,3.466,23.785c7.403,0.945,14.334,5.198,14.964,6.931c2.205,5.986-7.245,17.012-13.389,23.471 c9.924-0.945,18.745-5.198,24.415-8.191c1.103-0.945,8.979-6.616,12.444-7.561C175.15,57.41,177.355,63.553,177.513,65.758z  M211.694,85.605c1.418,2.52,2.363,8.821-2.52,12.917c-7.245,5.828-24.1,10.239-33.236,6.616c-2.993-1.26-2.993-5.198-2.205-8.191 c1.733-7.561,6.931-17.169,14.964-25.045c5.198-4.883,17.957-18.745,17.957-25.046c-3.938-2.205-15.122-1.103-19.375,3.308 c-1.26,3.151-2.52,5.514-4.568,7.089c-0.788,0-2.678,0.315-3.308-0.63c-2.363-3.308,1.103-30.716-7.718-41.9 c-2.363-3.15,3.308-4.883,6.301-3.308c6.301,3.308,10.239,15.437,10.239,25.045c5.356-3.15,16.382-5.513,22.368-0.945 c3.308,2.678,4.41,6.773,0.945,12.129c-3.465,5.198-12.759,16.697-17.169,24.888C201.456,74.107,208.859,80.722,211.694,85.605z  M197.518,88.914c-1.418-2.993-4.253-7.718-7.245-9.609c-2.363,3.938-6.459,10.397-5.671,13.547 C187.752,95.529,195.47,93.166,197.518,88.914z"/>
    <path fill="#2B2A28" d="M137.403,197.845c-4.725,6.459-18.115,11.657-30.716,11.657c-7.403-5.671-1.103-15.437,1.418-21.265 c1.733-4.253,4.095-11.184,4.726-14.807c-1.418-4.253-10.554-0.63-15.594-3.15c-3.781-1.89-3.466-9.766,0.63-13.232 c1.733-0.472,5.828-1.418,7.561-5.986c5.041-13.231,2.048-25.045-7.876-36.702c-1.26-3.938-2.205-10.239,3.938-12.916 c8.033-3.623,17.957,22.84,17.957,33.079c-0.157,13.547-7.876,18.273-13.389,21.265c0.315,1.26,2.048,1.575,2.836,1.733 c7.876,2.993,14.649,13.704,10.868,21.265c-0.315,0.473,0.315,1.89-0.157,2.678c-2.205,2.993-6.143,10.554-6.458,15.122 c23.628-2.363,15.91-13.547,12.444-16.697c-4.883-2.205-1.891-4.568-1.418-7.718C132.835,174.061,143.074,189.97,137.403,197.845z  M183.714,156.576c0.472,3.308-0.787,8.821-3.78,10.554c-5.041,2.993-12.916,4.253-18.745,5.986 c0.473,3.78,5.514,18.902,2.048,22.683c-8.349,1.89-9.451-15.752-11.184-25.518c-2.048-12.444-2.363-25.991-0.788-39.695 c0.157-1.418,2.993-4.095,4.883-4.568c3.151,9.608,1.891,26.936,2.993,31.661C165.126,159.096,176.153,156.576,183.714,156.576z"/>
    <path fill="#2B2A28" d="M226.129,151.331c0.945,5.356-0.945,11.814-2.205,14.649c-3.151,7.403-11.499,22.21-20.477,19.847 c-0.63,0.945-4.411-0.63-5.356-2.835c-0.472-0.945-2.047-5.828,0.63-9.293c3.466-4.253,15.594-20.32,15.279-24.416 c-0.315-3.78-6.458-8.033-10.081-9.293c-8.979,1.89-14.807-10.712-4.095-14.019c0.945-0.315,2.993,0.157,4.095,0.787 c8.821,5.514,15.437,9.137,17.8,15.437C222.191,143.298,225.814,149.441,226.129,151.331z M257.633,152.591 c0.315,7.246,1.575,18.115-0.788,28.038c-0.157,0.945-1.733,0.63-2.678,0.63c-2.363,0-4.883-2.993-5.828-4.883 c-0.315-9.924-1.26-23.471-1.26-32.607c0.157-13.074-7.245-18.43-0.315-19.06c3.938-0.315,8.664,13.074,8.979,17.327 C255.743,143.298,257.476,149.756,257.633,152.591z"/>
  </svg>
);

export default Bragging;