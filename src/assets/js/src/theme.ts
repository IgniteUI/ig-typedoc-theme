import * as path from 'path';

import { DefaultTheme } from 'typedoc';
import { RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc';

export default class EnvironmentLinkSetup extends DefaultTheme {

    constructor(renderer: Renderer, basePath: any) {
        super(renderer, basePath);

        this.listenTo(renderer, RendererEvent.BEGIN, this.onRenderingBegin);
    }

    private onRenderingBegin() {
      if (this.owner && this.owner.theme) {
        this.owner.theme.resources.deactivate();
        this.owner.theme.resources.helpers.addOrigin('getConfigData', path.join(this.basePath, 'helpers'));
        this.owner.theme.resources.activate();
      }
    }
}
