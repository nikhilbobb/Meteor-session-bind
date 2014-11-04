Package.describe({
  name: 'nikhizzle:session-bind',
  summary: "session-bind - two way data bindings between session variables and handlebars template html forms.",
  version: '1.0.1',
  git: "https://github.com/nikhilbobb/Meteor-session-bind"
});

Package.on_use(function (api, where) {
  api.versionsFrom('1.0');
  api.use(['handlebars', 'templating', 'session', 'underscore', 'deps'], 'client');
  api.add_files('session-bind.js', ['client']);
  api.export('sessionBind');
});

Package.on_test(function (api) {
  api.use(['tinytest', 
	  'test-helpers', 
	  'jquery', 
	  'session', 
	  'nikhizzle:session-bind', 
	  'templating',
	  'mongo-livedata']);

  api.add_files(['session-bind_tests.html','session-bind_tests.js'], 'client');
});
