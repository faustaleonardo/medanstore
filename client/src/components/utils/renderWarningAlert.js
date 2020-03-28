import React from 'react';

import WarningAlert from '../partials/WarningAlert';

export default error => (error ? <WarningAlert content={error} /> : null);
