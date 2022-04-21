import { DefaultThemeRenderContext, Reflection, JSX } from "typedoc";
const plugin = require('typedoc-plugin-localization');

export const breadcrumb = (context: DefaultThemeRenderContext, props: Reflection): JSX.Element | undefined =>
    props.parent ? (
        <>
            {context.breadcrumb(props.parent)}
            <li>{props.url ? <a href={context.urlTo(props)}>{props.name}</a> : <span>{props.name}</span>}</li>
        </>
    ) : props.url ? (
        <li>
            <a href={context.urlTo(props)}>{plugin.localize('Globals')}</a>
        </li>
    ) : undefined;
