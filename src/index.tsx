import { cpSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { navigation } from "./partials/navigation.js";
import { index } from "./partials/index.js";
import { memberSources } from "./partials/member.sources.js";
import { memberDeclaration } from "./partials/member.declarations.js";
import { reflectionTemplate } from "./templates/reflection.js";
import { memberSignatureBody } from "./partials/member.signature.body.js";
import { breadcrumb } from "./partials/breadcrumb.js";

import {
    Application,
    DefaultTheme,
    DefaultThemeRenderContext,
    JSX,
    Options,
    PageEvent,
    Reflection,
    RenderTemplate,
    Renderer,
    RendererEvent,
    Router,
} from "typedoc";
import { defaultLayout } from "./layouts/default.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
    return (...r: L) => fn(first, ...r);
}

export class IgThemeRenderContext extends DefaultThemeRenderContext {
    constructor(router: Router, theme: DefaultTheme, page: PageEvent<Reflection>, options: Options) {
        super(router, theme, page, options);

        this.reflectionTemplate = bind(reflectionTemplate, this);
        this.navigation = bind(navigation, this);
        this.index = bind(index, this);
        this.memberSources = bind(memberSources, this);
        this.memberDeclaration = bind(memberDeclaration, this);
        this.memberSignatureBody = bind(memberSignatureBody, this);
        this.breadcrumbs = bind(breadcrumb, this);

        this.defaultLayout = (template: RenderTemplate<PageEvent<Reflection>>, props: PageEvent<Reflection>) => {
            return defaultLayout(this, template, props);
        };
    }
}

export class IgTheme extends DefaultTheme {
    private _ctx?: IgThemeRenderContext;

    public constructor(renderer: Renderer) {
        super(renderer);
    }

    override getRenderContext(pageEvent: PageEvent<Reflection>): IgThemeRenderContext {
        return new IgThemeRenderContext(this.router, this, pageEvent, this.application.options);
    }
}

export function load(app: Application) {
    app.renderer.hooks.on(
        "head.end",
        (context): JSX.Element => (
            <link rel="stylesheet" href={context.relativeURL("assets/css/main.css")} />
        )
    );

    app.renderer.hooks.on(
        "body.end",
        (context): JSX.Element => (
            <script src={context.relativeURL("assets/common.js")} />
        )
    );

    app.renderer.on(RendererEvent.END, () => {
        const from = path.resolve(__dirname, "assets");
        const to = path.resolve(app.options.getValue("out"), "assets");
        cpSync(from, to, { recursive: true });
    });

    app.renderer.defineTheme("igtheme", IgTheme);
}
