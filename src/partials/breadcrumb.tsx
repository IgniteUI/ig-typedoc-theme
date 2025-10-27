import { DefaultThemeRenderContext, Reflection, JSX } from "typedoc";
import { localize } from 'typedoc-plugin-localization';

export const breadcrumb = (context: DefaultThemeRenderContext, props: Reflection): JSX.Element => {
    if (props.parent) {
        return (
            <>
                {context.breadcrumbs(props.parent)}
                <li>{context.urlTo(props) ? <a href={context.urlTo(props)}>{props.name}</a> : <span>{props.name}</span>}</li>
            </>
        );
    }
    if (context.urlTo(props)) {
        return (
            <li>
                <a href={context.urlTo(props)}>{localize('Globals')}</a>
            </li>
        );
    }
    return <></>;
};
