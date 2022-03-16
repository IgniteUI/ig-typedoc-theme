import { DefaultThemeRenderContext, PageEvent, Reflection, JSX } from "typedoc"
import { analytics } from "../partials/analytics"
import { footer } from "../partials/footer";
import { header } from "../partials/header";
import { getConfigData } from "../utils/lib"
const plugin = require('typedoc-plugin-localization');

export const defaultLayout = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
    const defaultEnUrl = getConfigData(context, 'typedoc_default_url', 'en');
    const defaultJpUrl = getConfigData(context, 'typedoc_default_url', 'jp');
    const baseUrl = getConfigData(context, 'url');
    const apiJsonFile = getConfigData(context, 'versions');
    const gaID = getConfigData(context, 'gaID');
    return (
        <html class="default no-js" lang="en">
            <head>
                <meta charSet="utf-8" />
                {context.hook("head.begin")}
                <meta http-equiv="x-ua-compatible" content="IE=edge" />
                <title>
                    {props.model.name === props.project.name ?
                        props.project.name :
                        `${props.model.name} | ${props.project.name}`}
                </title>
                <meta name="description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {context.options.getValue('localize') === 'en' ?
                    <link rel="canonical" href={defaultEnUrl} /> :
                    <link rel="canonical" href={defaultJpUrl} />}

                <link rel="alternate" href={defaultEnUrl} hreflang="en" />
                <link rel="alternate" href={defaultEnUrl} hreflang="en-us" />
                <link rel="alternate" href={defaultJpUrl} hreflang="ja" />
                <link rel="alternate" href={defaultJpUrl} hreflang="ja-jp" />
                <link rel="alternate" href={defaultEnUrl} hreflang="x-default" />

                <link rel="stylesheet" href="https://infragistics.com/assets/modern/css/layout.css" />
                <link rel="stylesheet" href="https://infragistics.com/assets/modern/css/animate-custom.css" />
                <link rel="stylesheet" href="https://infragistics.com/assets/modern/css/fontello.css" />
                <link rel="stylesheet" href={`${baseUrl}/css/navigation.css`} />
                <link rel="stylesheet" href="https://infragistics.com/css/footer.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.typekit.net/zhy2hpz.css" />
                {/* <link rel="stylesheet" href={context.relativeURL("assets/custom.css")} /> */}

                <script async src={context.relativeURL("assets/search.js")} id="search-script"></script>

                {analytics(context)}
                {context.hook("head.end")}
            </head>
            <body id="body" data-base-url={baseUrl} data-api-versions-json={apiJsonFile}>
                {context.hook('body.begin')}
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe src={`https://www.googletagmanager.com/ns.html?id=${gaID}`}
                        height={0} width={0} style="display:none;visibility:hidden"></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                {header(context, props)}
                <div class="container container-main">
                    {/* TODO: add body content */}
                    <div class="row">
                        <div>
                            <input id="tsd-search-field" type="text" placeholder={plugin.localize('Search API')} />
                        </div>
                        BODY CONTENT
                    </div>
                </div>

                {footer(context, props)}

                <div class="overlay"></div>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
                <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js" integrity="sha256-8WqyJLuWKRBVhxXIL1jBDD7SDxU936oZkCnxQbWwJVw=" crossOrigin="anonymous"></script>
                <script type="text/javascript" src="https://infragistics.com/assets/modern/scripts/jquery-migrate.min.js"></script>
                <script type="text/javascript" src={`${baseUrl}/assets/modern/scripts/plugins.nav.js`}></script>
                <script type="text/javascript" src={`${baseUrl}/assets/modern/scripts/navigation.js`}></script>
                <script src="https://unpkg.com/lunr/lunr.js"></script>

                {context.hook("body.end")}
            </body>
        </html>
    );
}
