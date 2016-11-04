import React from 'react';
import ReactOnRails from 'react-on-rails';

import Events from '../containers/Events';

const EventsApp = (props) => (
  <Events {...props} />
);

// This is how react_on_rails can see the EventsApp in the browser.
ReactOnRails.register({ EventsApp });
