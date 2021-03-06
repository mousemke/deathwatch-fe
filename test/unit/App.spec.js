// @flow
import assert from 'assert';
import React from 'react';
import { Route } from 'react-router-dom';
import App from '../../src/components/App.jsx';
import Home from '../../src/components/Home/Home.jsx';
import FourOhFour from '../../src/components/FourOhFour/FourOhFour.jsx';

import { shallow } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The App component', () => {
  it('should show the initial div', () => {
    const wrapper = shallow(<App />);

    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;

      return pathMap;
    }, {});

    assert.deepEqual(pathMap['/'], Home);
    assert.deepEqual(pathMap['*'], FourOhFour);
  });
});
