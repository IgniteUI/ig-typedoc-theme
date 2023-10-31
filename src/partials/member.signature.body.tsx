import { DefaultThemeRenderContext, JSX, ReflectionType, SignatureReflection } from 'typedoc';
import { renderFlags } from '../utils/lib';
const plugin = require('typedoc-plugin-localization');

export const memberSignatureBody = (
    context: DefaultThemeRenderContext,
    props: SignatureReflection,
    { hideSources = false }: { hideSources?: boolean } = {}
) => (
    <>
        {!hideSources && context.memberSources(props)}
        {context.commentSummary(props)}
        {context.commentTags(props)}

        {!!props.typeParameters && (
            <>
                <h4 class="tsd-type-parameters-title">{plugin.localize('Type parameters')}</h4>
                {context.typeParameters(props.typeParameters)}
            </>
        )}
        {props.parameters && props.parameters.length > 0 && (
            <>
                <h4 class="tsd-parameters-title">{plugin.localize('Parameters')}</h4>
                <ul class="tsd-parameters">
                    {props.parameters.map((item) => (
                        <li>
                            <h5>
                                {renderFlags(item.flags)}
                                {!!item.flags.isRest && <span class="tsd-signature-symbol">...</span>}
                                {item.name}
                                {": "}
                                {context.type(item.type)}
                                {item.defaultValue != null && (
                                    <span class="tsd-signature-symbol">
                                        {" = "}
                                        {item.defaultValue}
                                    </span>
                                )}
                            </h5>
                            {context.commentSummary(item)}
                            {context.commentTags(item)}
                            {item.type instanceof ReflectionType && context.parameter(item.type.declaration)}
                        </li>
                    ))}
                </ul>
            </>
        )}
        {props.type && (
            <>
                <h4 class="tsd-returns-title">
                    {plugin.localize('Returns') + ' '}
                    {context.type(props.type)}
                </h4>
                {props.type instanceof ReflectionType && context.parameter(props.type.declaration)}
            </>
        )}
    </>
);
