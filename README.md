# Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/4115

## How to run

- `npm install`
- `npm run start`
- See memory usage climb. Increasing the `PeriodicExportingMetricReader`'s interval also increases the speed at which the memory climbs, indicating the leak exists in the collection cycle.
