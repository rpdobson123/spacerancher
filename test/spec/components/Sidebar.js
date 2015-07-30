'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Sidebar from 'components/Sidebar.jsx';

describe('Sidebar', () => {
    let SidebarComponent;

    beforeEach(() => {
        SidebarComponent = createComponent(Sidebar);
    });

    it('should have its component name as default className', () => {
        expect(SidebarComponent._store.props.className).toBe('Sidebar');
    });
});
