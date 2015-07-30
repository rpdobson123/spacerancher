'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Game from 'components/Game.jsx';

describe('Game', () => {
    let GameComponent;

    beforeEach(() => {
        GameComponent = createComponent(Game);
    });

    it('should have its component name as default className', () => {
        expect(GameComponent._store.props.className).toBe('Game');
    });
});
