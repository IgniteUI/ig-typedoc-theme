import { DefaultThemeRenderContext, PageEvent, Reflection, JSX } from 'typedoc';
import { navEn } from './infranav';
import { navJp } from './infranav.ja';

export const header = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
    const local = context.options.getValue('localize');
    const link = local === 'jp' ?
        'https://jp.infragistics.com/products/ignite-ui-angular' :
        'https://www.infragistics.com/products/ignite-ui-angular';

    return (
        <header class="tsd-header">
            {local === 'en' ? navEn(context, props) : navJp(context, props)}
            <div class="tsd-header-content">
                <div class="tsd-header-group">
                    <h1 class="tsd-header-logo">
                        <a href={link}>{props.project.name}</a>
                        <span class="version">
                            <select id="versions"></select>
                        </span>
                    </h1>
                    <div class="tsd-nav-toggle">
                        <input id="tsd-toggle-cbx" type="checkbox" />
                        <label for="tsd-toggle-cbx">
                            <span class="material-icons">menu</span>
                        </label>
                        <ul class="tsd-nav">
                            <li class="tsd-nav-item">
                                <button class="tsd-button--flat">
                                    {/* {LocalizedLink(props, 'Components')} */}
                                    <a href={link}>Components</a>
                                </button>
                            </li>
                            <li class="tsd-nav-item">
                                <button class="tsd-button">
                                    {/* {LocalizedLink(props, 'Get Started')} */}
                                    <a href={link}>Get Started</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
