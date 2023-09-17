import React from 'react';
import ReactDOM from 'react-dom';

import Desktop from '../build/desktop/bundle.cjs';

ReactDOM.hydrate(<Desktop />, document.getElementById('root'));