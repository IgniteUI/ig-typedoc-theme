import { cpSync } from 'fs';
import { resolve } from 'path';
import { navigation } from './partials/navigation';
import { index } from './partials/index';
import { memberSources } from './partials/member.sources';
import { memberDeclaration } from './partials/member.declarations';
import { reflectionTemplate } from './templates/reflection';
import { memberSignatureBody } from './partials/member.signature.body';
import { breadcrumb } from './partials/breadcrumb';

import { Application, DefaultTheme, DefaultThemeRenderContext, JSX, Options, PageEvent, Reflection, RenderTemplate, Renderer, RendererEvent } from "typedoc";
import { defaultLayout } from "./layouts/default";

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
    return (...r: L) => fn(first, ...r);
}

export class IgThemeRenderContext extends DefaultThemeRenderContext {
    constructor(theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
        super(theme, page, options);

        this.reflectionTemplate = bind(reflectionTemplate, this);
        this.navigation = bind(navigation, this);
        this.index = bind(index, this);
        this.memberSources = bind(memberSources, this);
        this.memberDeclaration = bind(memberDeclaration, this);
        this.memberSignatureBody = bind(memberSignatureBody, this);
        this.breadcrumb = bind(breadcrumb, this);

        this.defaultLayout = (template: RenderTemplate<PageEvent<Reflection>>, props: PageEvent<Reflection>) => {
            return (
                defaultLayout(this, template, props)
            );
        }
    }
};

export class IgTheme extends DefaultTheme {
    private _ctx?: IgThemeRenderContext;

    public constructor(renderer: Renderer) {
        super(renderer);

        renderer.on(RendererEvent.END, () => {
            const from = resolve(__dirname, "./assets");
            const to = resolve(this.application.options.getValue("out"), "assets");
            cpSync(from, to, { recursive: true });
        });
    }

    override getRenderContext(pageEvent: PageEvent<Reflection>): IgThemeRenderContext {
        this._ctx ||= new IgThemeRenderContext(
            this,
            pageEvent,
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
