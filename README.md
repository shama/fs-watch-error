# fs watch error

Demonstrates an fs watch error.

Do `git clone git://github.com/shama/fs-watch-error && cd fs-watch-error && npm install && npm test`.

*The `grunt` and `express` dev dependencies are merely there to give us a bunch of files to test with.*

```
$ npm test

> fs-watch-error@0.0.0 test /Users/kyle/Documents/www/fs-watch-error2
> node index & node index

watching 1307 files...
watching 1307 files...
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54353] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54353] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54353] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54353] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54354] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
2013-05-13 11:36 node[54353] (CarbonCore.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-21)
```