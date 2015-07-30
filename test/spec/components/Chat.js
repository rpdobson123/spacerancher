'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Chat from 'components/Chat.jsx';

describe('Chat', () => {
    let ChatComponent;

    beforeEach(() => {
        ChatComponent = createComponent(Chat);
    });

    it('should have its component name as default className', () => {
        expect(ChatComponent._store.props.className).toBe('Chat');
    });
});
