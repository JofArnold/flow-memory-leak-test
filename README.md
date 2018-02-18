# Memory leak/100% CPU

One way to replicate issue https://github.com/facebook/flow/issues/2152

### To reproduce

Check out the project and run

`./project/node_modules/flow-bin/flow-osx-v0.65.0/flow --show-all-errors`
in root

I've included all npm modules (150MB) so no need to `npm i` etc. You will then see:

```
./project/node_modules/flow-bin/flow-osx-v0.65.0/flow --show-all-errors
Launching Flow server for /Users/cody/dev/clients/freybors/flow
Spawned flow server (pid=47659)
Logs will go to /private/tmp/flow/zSUserszScodyzSdevzSclientszSfreyborszSflow.log
Monitor logs will go to /private/tmp/flow/zSUserszScodyzSdevzSclientszSfreyborszSflow.monitor_log
Please wait. Server is initializing (merged files 4/5 (80.0%)):
```

Flow will hang on 4/5 with 100% CPU and will continue to increase in memory usage.


### Additional notes

UPDATE: Also happens with `./project/node_modules//.bin/flow`
