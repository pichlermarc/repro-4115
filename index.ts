import {
  ConsoleMetricExporter,
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG)

const meterProvider = new MeterProvider();
const reader1 = new PeriodicExportingMetricReader({
    exportIntervalMillis: 50,
    exporter: new ConsoleMetricExporter({
    })
});
meterProvider.addMetricReader(reader1);

const reader2 = new PeriodicExportingMetricReader({
    exportIntervalMillis: 50,
  exporter: new ConsoleMetricExporter()
});
meterProvider.addMetricReader(reader2);

const testCounter1 = meterProvider.getMeter("testMeter").createCounter("testCounter1");
const testCounter2 = meterProvider.getMeter("testMeter").createCounter("testCounter2");

setInterval(() => {
  testCounter1.add(1);
  testCounter2.add(2);
}, 1000);