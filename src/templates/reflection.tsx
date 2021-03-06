import { ContainerReflection, DeclarationReflection, DefaultThemeRenderContext, PageEvent, ReflectionType } from "typedoc"
import { JSX } from "typedoc"
import { hasTypeParameters } from "../utils/lib"
const plugin = require('typedoc-plugin-localization')

export const reflectionTemplate = (context: DefaultThemeRenderContext, props: PageEvent<ContainerReflection>) => (
    <>
        {props.model.hasComment() && <section class="tsd-panel tsd-comment">{context.comment(props.model)}</section>}
        {hasTypeParameters(props.model) && (
            <section class="tsd-panel tsd-type-parameters">
                {/* <h3>{{#localize}}Type parameters{{/localize}}</h3> */}
                {context.typeParameters(props.model.typeParameters)}
            </section>
        )}
        {props.model instanceof DeclarationReflection && (
            <>
                {!!props.model.typeHierarchy && (
                    <section class="tsd-panel tsd-hierarchy">
                        <h3>{plugin.localize('Hierarchy')}</h3>
                        {context.hierarchy(props.model.typeHierarchy)}
                    </section>
                )}
                {!!props.model.implementedTypes && (
                    <section class="tsd-panel">
                        <h3>{plugin.localize('Implements')}</h3>
                        <ul class="tsd-hierarchy">
                            {props.model.implementedTypes.map((item) => (
                                <li>{context.type(item)}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {!!props.model.implementedBy && (
                    <section class="tsd-panel">
                        <h3>{plugin.localize('Implemented by')}</h3>
                        <ul class="tsd-hierarchy">
                            {props.model.implementedBy.map((item) => (
                                <li>{context.type(item)}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {!!props.model.signatures && (
                    <section class="tsd-panel">
                        <h3 class="tsd-before-signature">{plugin.localize('Callable')}</h3>
                        {context.memberSignatures(props.model)}
                    </section>
                )}
                {!!props.model.indexSignature && (
                    <section class={"tsd-panel " + props.model.cssClasses}>
                        <h3 class="tsd-before-signature">Indexable</h3>
                        <div class="tsd-signature tsd-kind-icon">
                            <span class="tsd-signature-symbol">[</span>
                            {props.model.indexSignature.parameters!.map((item) => (
                                <>
                                    {item.name}: {context.type(item.type)}
                                </>
                            ))}
                            <span class="tsd-signature-symbol">{"]: "}</span>
                            {context.type(props.model.indexSignature.type)}
                        </div>
                        {context.comment(props.model.indexSignature)}
                        {props.model.indexSignature?.type instanceof ReflectionType &&
                            context.parameter(props.model.indexSignature.type.declaration)}
                    </section>
                )}
            </>
        )}
        {context.index(props.model)}
        {context.members(props.model)}
    </>
)
