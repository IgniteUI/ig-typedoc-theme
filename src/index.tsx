import path from 'path';
import { copy } from "fs-extra";

import { Application, DefaultTheme, DefaultThemeRenderContext, JSX, Options, PageEvent, Reflection, Renderer, RendererEvent } from "typedoc";
import { defaultLayout } from "./layouts/default";

export class IgThemeRenderContext extends DefaultThemeRenderContext {
    constructor(theme: DefaultTheme, options: Options) {
        super(theme, options);

        this.defaultLayout = (props: PageEvent<Reflection>) => {
            return (
                defaultLayout(this, props)
            );
        }
    }
};

export class IgTheme extends DefaultTheme {
    private _ctx?: IgThemeRenderContext;

    public constructor(renderer: Renderer) {
        super(renderer);

        renderer.on(RendererEvent.END, async() => {
            const out = this.application.options.getValue('out');

            await copy(
              path.join(
                process.cwd(),
                '/node_modules/ig-typedoc-theme/dist/assets',
              ),
              path.join(out, '/assets'),
            );
        });
    }

    override getRenderContext(): IgThemeRenderContext {
        this._ctx ||= new IgThemeRenderContext(
            this,
            this.application.options
        );
        return this._ctx;
    }
}

export function load(app: Application) {
    app.renderer.hooks.on(
        'head.end',
        (context): JSX.Element => (
            <link rel='stylesheet' href={context.relativeURL('assets/css/main.css')} />
        )
    )

    app.renderer.hooks.on(
        'body.end',
        (context): JSX.Element => (
            <script src={context.relativeURL('assets/common.js')} />
        )
    )

    app.renderer.defineTheme('igtheme', IgTheme);
}
