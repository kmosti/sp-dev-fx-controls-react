"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CONTROL_TYPE = "react";
/**
 * Track control information
 *
 * @param componentName
 * @param properties
 */
function track(componentName, properties) {
    if (properties === void 0) { properties = {}; }
    // const telemetry = PnPTelemetry.getInstance();
    // telemetry.trackEvent(componentName, {
    //   version,
    //   controlType: CONTROL_TYPE,
    //   debug: DEBUG ? "true" : "false",
    //   environment: EnvironmentType[Environment.type],
    //   ...properties
    // });
}
exports.track = track;

//# sourceMappingURL=index.js.map
