// Keeps development independent from an already-running production/local server.
process.env.PORT ||= '3001';
require('./server');
