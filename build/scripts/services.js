(function(){
  var AppService, prepareHandler$ = function (o){
        o.__event_handler = o.__event_handler || [];
        o.__event_advisor = o.__event_advisor || [];
      }, trigger$ = function (e, p){
        var advisors, _e, ex, handlers;
        prepareHandler$(this);
        this.last = {
          event: e,
          exception: null
        };
        advisors = this.__event_advisor.length;
        while ((advisors -= 1) >= 0) {
          try {
            _e = this.__event_advisor[advisors].call(p, e);
            if (_e) {
              this.last.event = e = _e;
            }
          } catch (e$) {
            ex = e$;
            this.last.exception = ex;
            return false;
          }
        }
        handlers = this.__event_handler.length;
        while ((handlers -= 1) >= 0) {
          this.__event_handler[handlers].call(p, e);
        }
        return true;
      };
  AppService = function(JEFRi){
    var AppService;
    AppService = (function(){
      AppService.displayName = 'AppService';
      var prototype = AppService.prototype, constructor = AppService;
      function AppService(){
        var this$ = this;
        JEFRi.ready.then(function(){
          this$.load();
        });
      }
      prototype.load = function(){
        var this$ = this;
        return JEFRi.get({
          _type: "AppEntity"
        }).then(function(gotten){
          this$.entities = gotten;
          trigger$.call(this$.loaded = this$.loaded || {}, this$.entities, this$);
        });
      };
      prototype.save = function(){
        return JEFRi.save(this.entities);
      };
      prototype.entities = [];
      return AppService;
    }());
    return new AppService();
  };
  angular.module('dhcpman');
}).call(this);
