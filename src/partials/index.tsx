import { DefaultThemeRenderContext, ReflectionCategory, JSX, ContainerReflection, ReflectionKind} from "typedoc";
import { wbr } from "../utils/lib";

function renderCategory({ urlTo }: DefaultThemeRenderContext, item: ReflectionCategory, prependName = "") {
    return (
        <section class="tsd-index-section">
            <h3>{prependName ? `${prependName} ${item.title}` : item.title}</h3>
            <ul class="tsd-index-list" aria-hidden="true">
                {item.children.map((item) => (
                    <li class={ReflectionKind.classString(item.kind)}>
                        <a href={urlTo(item)} class="tsd-kind-icon">
                            {item.name ? wbr(item.name) : <em>{wbr(ReflectionKind.singularString(item.kind!))}</em>}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export function index(context: DefaultThemeRenderContext, props: ContainerReflection) : JSX.Element {
    if (props.categories && props.categories.length) {
        return (
            <section class="tsd-panel-group tsd-index-group">
                <section class="tsd-panel tsd-index-panel">
                    <div class="tsd-index-content">{props.categories.map((item) => renderCategory(context, item))}</div>
                </section>
            </section>
        );
    }

    if (props.groups && props.groups.length) {
        return (
            <section class="tsd-panel-group tsd-index-group">
                <section class="tsd-panel tsd-index-panel">
                    <div class="tsd-index-content">
                        {props.groups.map((item) => (
                            item.categories ? (
                                <section class={"tsd-index-section " + item.title}>
                                    {item.categories.map((item2) => renderCategory(context, item2, item.title))}
                                </section>
                            ) : renderCategory(context, item)
                        ))}
                    </div>
                </section>
            </section>
        );
    }else {
        return (
            <section class="tsd-panel-group tsd-index-group">
                <section class="tsd-panel tsd-index-panel">
                    <div class="tsd-index-content"></div>
                </section>
            </section>
        );
    }
}
