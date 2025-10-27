import { ContainerReflection, DeclarationReflection, DefaultThemeRenderContext, PageEvent, ReflectionKind, ReflectionType } from "typedoc";
import { JSX } from "typedoc";
import { hasTypeParameters } from "../utils/lib.js";
import { localize } from 'typedoc-plugin-localization';

export const reflectionTemplate = (context: DefaultThemeRenderContext, props: PageEvent<ContainerReflection>) => (
    <>
        {props.model.hasComment() && <section class="tsd-panel tsd-comment">
            {context.commentSummary(props.model)}
            {context.commentTags(props.model)}
        </section>}
        {hasTypeParameters(props.model) && (
            <section class="tsd-panel tsd-type-parameters">
                {context.typeParameters(props.model.typeParameters)}
            </section>
        )}
        {props.model instanceof DeclarationReflection && (
            <>
                {!!props.model.typeHierarchy && (
                    <section class="tsd-panel tsd-hierarchy">
                        <h3>{localize('Hierarchy')}</h3>
                        {context.hierarchy(props.model.typeHierarchy)}
                    </section>
                )}
                {!!props.model.implementedTypes && (
                    <section class="tsd-panel">
                        <h3>{localize('Implements')}</h3>
                        <ul class="tsd-hierarchy">
                            {props.model.implementedTypes.map((item) => (
                                <li>{context.type(item)}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {!!props.model.implementedBy && (
                    <section class="tsd-panel">
                        <h3>{localize('Implemented by')}</h3>
                        <ul class="tsd-hierarchy">
                            {props.model.implementedBy.map((item) => (
                                <li>{context.type(item)}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {!!props.model.signatures && (
                    <section class="tsd-panel">
                        <h3 class="tsd-before-signature">{localize('Callable')}</h3>
                        {context.memberSignatures(props.model)}
                    </section>
                )}
                {!!props.model.indexSignatures && (
                    props.model.indexSignatures.map((signature) => (
                        <section class={"tsd-panel " + ReflectionKind.classString(props.model.kind)}>
                            <h3 class="tsd-before-signature">Indexable</h3>
                            <div class="tsd-signature tsd-kind-icon">
                                <span class="tsd-signature-symbol"></span>
                                {signature.parameters!.map((item) => (
                                    <>
                                        {item.name}: {context.type(item.type)}
                                    </>
                                ))}
                                <span class="tsd-signature-symbol">{"]: "}</span>
                                {context.type(signature.type)}
                            </div>
                            {signature.comment}
                            {signature?.type instanceof ReflectionType && context.typeDetailsIfUseful(signature, signature.type)}
                        </section>
                    ))
                )}
            </>
        )}
        {context.index(props.model)}
        {context.members(props.model)}
    </>
)
