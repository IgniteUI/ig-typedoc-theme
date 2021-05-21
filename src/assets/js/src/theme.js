var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as path from 'path';
import { DefaultTheme } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
var EnvironmentLinkSetup = /** @class */ (function (_super) {
    __extends(EnvironmentLinkSetup, _super);
    function EnvironmentLinkSetup(renderer, basePath) {
        var _this = _super.call(this, renderer, basePath) || this;
        _this.listenTo(renderer, RendererEvent.BEGIN, _this.onRenderingBegin);
        return _this;
    }
    EnvironmentLinkSetup.prototype.onRenderingBegin = function () {
        if (this.owner && this.owner.theme) {
            this.owner.theme.resources.deactivate();
            this.owner.theme.resources.helpers.addOrigin('getConfigData', path.join(this.basePath, 'helpers'));
            this.owner.theme.resources.activate();
        }
    };
    return EnvironmentLinkSetup;
}(DefaultTheme));
export default EnvironmentLinkSetup;
