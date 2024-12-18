import { DeclarationReflection, DefaultThemeRenderContext, JSX, ReflectionType } from 'typedoc';
import { renderTypeParametersSignature, wbr } from '../utils/lib.js';
import { localize } from 'typedoc-plugin-localization';

export const memberDeclaration = (context: DefaultThemeRenderContext, props: DeclarationReflection) => (
    <>
        <div class="tsd-signature tsd-kind-icon">
            {wbr(props.name)}
            {renderTypeParametersSignature(props.typeParameters)}
            {props.type && (
                <>
                    <span class="tsd-signature-symbol">{!!props.flags.isOptional && "?"}:</span>{" "}
                    {context.type(props.type)}
                </>
            )}
            {!!props.defaultValue && (
                <>
                    <span class="tsd-signature-symbol">
                        {" = "}
                        {props.defaultValue}
                    </span>
                </>
            )}
        </div>

        {context.memberSources(props)}

        {context.commentSummary(props)}
        {context.commentTags(props)}

        {!!props.typeParameters && (
            <>
                <h4 class="tsd-type-parameters-title">{localize('Type parameters')}</h4>
                {context.typeParameters(props.typeParameters)}
            </>
        )}
        {props.type instanceof ReflectionType && (
            <div class="tsd-type-declaration">
                <h4>{localize('Type declaration')}</h4>
                {context.typeDeclaration(props.type)}
            </div>
        )}
    </>
);
