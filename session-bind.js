sessionBind = function(template) {
  // events object used for tests as a workaround
  sessionBind.events = {};
  template.helpers({
    // name is the name of the session variable
    // obj is an optional object which can be used to scope the var
    // eg. var obj = {name: "joe"}; Session.set(obj);
    bindSession: function(name, obj) {
      // check if obj is a default handlebars empty return object
      // if so just get the value
      if (obj.hash != undefined) {
        var value = Session.get(name);
      } else {
        // otherwise either create a new object or get the currently
        // defined one
        var iObj = Session.get(obj);
        if (iObj == undefined) {
          var value = undefined;
          iObj = {};
          Session.set(obj, iObj);
        } else {
          var value = iObj[name];
        }
      }
      // create an id to use for the event
      var outObj = {};
      outObj["id"] = '_sessionBind_' + name;
      if (value != undefined) {
        outObj["value"] = value;
      }
      var eventMap = {};
      // since there are two events, throttle to 10ms to make sure
      // only gets executed once
      var primeEvent = _.throttle(function(event) {
        if (event.target.type == "checkbox") {
          var value = event.target.checked;
        } else {
          var value = event.target.value;
        }
        // save the data in a session variable or object
        if (iObj == undefined) {
          Session.set(name, value);
        } else {
          iObj = Session.get(obj);
          iObj[name] = value;
          Session.set(obj, iObj);
        }
      }, 10)
      sessionBind.events[name] = primeEvent;
      eventMap["input #_sessionBind_" + name] = primeEvent;
      eventMap["change #_sessionBind_" + name] = primeEvent;
      template.events(eventMap);
      return outObj;
    }
  });
}
