'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Container from 'components/Container.jsx';

describe('Container', () => {
    let ContainerComponent;

    beforeEach(() => {
        ContainerComponent = createComponent(Container);
    });

    it('should have its component name as default className', () => {
        expect(ContainerComponent._store.props.className).toBe('Container');
    });
});
