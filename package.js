Package.describe({
  summary: "session-bind - two way data bindings between session variables and handlebars template html forms. Useful for reactive UI forms, eg. number of results."
});

Package.on_use(function (api, where) {
  api.use(['handlebars', 'templating', 'session', 'underscore', 'deps'], 'client');
  api.add_files('session-bind.js', ['client']);
  api.export('sessionBind');
});

Package.on_test(function (api) {
  api.use(['tinytest', 
	  'test-helpers', 
	  'jquery', 
	  'session', 
	  'session-bind', 
	  'templating',
	  'mongo-livedata']);

  api.add_files(['session-bind_tests.html','session-bind_tests.js'], 'client');
});
