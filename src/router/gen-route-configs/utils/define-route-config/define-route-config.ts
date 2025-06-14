import _castArray from "lodash-es/castArray";
import _isFunction from "lodash-es/isFunction";
import _isObject from "lodash-es/isObject";
import _reduce from "lodash-es/reduce";
import type { DeepReadonly } from "vue";
import type { RouteConfig } from "vue-router";
import type { RouteConfigSingleView } from "vue-router/types/router";
import type { AsyncComponentsFs } from "../../typedef";

function defineRouteConfig(
  asyncComponentFs: DeepReadonly<AsyncComponentsFs[keyof AsyncComponentsFs]>,
  viewDir: string
): RouteConfig | RouteConfig[] {
  return _reduce<
    AsyncComponentsFs[keyof AsyncComponentsFs],
    RouteConfigSingleView
  >(
    asyncComponentFs,
    (acc, asyncComponentFs, filePath) => {
      if (_isFunction(asyncComponentFs)) {
        acc.component = asyncComponentFs;
        acc.name = viewDir;
        acc.path = `/${viewDir}`;
      } else if (_isObject(asyncComponentFs)) {
        if (filePath === "children") {
          const children = defineRouteConfig(asyncComponentFs, viewDir);
          acc.children!.push(..._castArray(children));
        } else {
          return defineRouteConfig(asyncComponentFs, filePath);
        }
      }
      return acc;
    },
    { children: [], path: "" }
  );
}

export default defineRouteConfig;
