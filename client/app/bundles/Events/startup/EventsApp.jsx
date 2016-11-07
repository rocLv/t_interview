import React from 'react';
import ReactOnRails from 'react-on-rails';

import Events from '../containers/Events';

// This is how react_on_rails can see the EventsApp in the browser.
ReactOnRails.register({ Events });
