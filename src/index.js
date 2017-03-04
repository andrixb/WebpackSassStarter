import _ from 'lodash';

import TestModule from './TestModule/TestModule';

import './index.scss';

var newEl = new TestModule();

function component () {
  var element = document.createElement('div');
      element.setAttribute('class', 'test');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','world'], ' ');

  return element;
}

document.body.appendChild(component());
document.body.appendChild(newEl.create());
