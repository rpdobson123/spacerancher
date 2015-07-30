'use strict';

describe('SpacerancherApp', () => {
  let React = require('react/addons');
  let SpacerancherApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SpacerancherApp = require('components/SpacerancherApp.js');
    component = React.createElement(SpacerancherApp);
  });

  it('should create a new instance of SpacerancherApp', () => {
    expect(component).toBeDefined();
  });
});
