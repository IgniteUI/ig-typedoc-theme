import { DeclarationReflection, DefaultThemeRenderContext, JSX, SignatureReflection } from 'typedoc';
import { localize } from 'typedoc-plugin-localization';

export const memberSources = (
    context: DefaultThemeRenderContext,
    props: SignatureReflection | DeclarationReflection
) => {
    const sources: JSX.Element[] = [];

    if (props.implementationOf) {
        sources.push(
            <p>
                {localize('Implementation of') + ' '}
                {context.typeAndParent(props.implementationOf)}
            </p>
        );
    }
    if (props.inheritedFrom) {
        sources.push(
            <p>
                {localize('Inherited from') + ' '}
                {context.typeAndParent(props.inheritedFrom)}
            </p>
        );
    }
    if (props.overwrites) {
        sources.push(
            <p>
                {localize('Overrides') + ' '}
                {context.typeAndParent(props.overwrites)}
            </p>
        );
    }
    if (props.sources) {
        sources.push(
            <ul>
                {props.sources.map((item) =>
                    item.url ? (
                        <li>
                            {localize('Defined in') + ' '}
                            <a href={item.url}>
                                {item.fileName}:{item.line}
                            </a>
                        </li>
                    ) : (
                        <li>
                            {localize('Defined in') + ' '} {item.fileName}:{item.line}
                        </li>
                    )
                )}
            </ul>
        );
    }

    if (sources.length === 0) {
        return <></>;
    }

    return <aside class="tsd-sources">{sources}</aside>;
};