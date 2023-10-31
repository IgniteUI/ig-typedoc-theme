import { DefaultThemeRenderContext, PageEvent, Reflection, JSX } from 'typedoc';
import { navEn } from './infranav';
import { navJp } from './infranav.ja';
const plugin = require('typedoc-plugin-localization');

export const header = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
    if (!context.options.getValue('name').includes('Ignite UI')) {
        return;
    }

    const local = context.options.getValue('localize');
    const useVersioning = context.options.getValue('versioning');
    const product = context.options.getValue('product');
    const link = local === 'jp' ?
        `https://jp.infragistics.com/products/${product}` :
        `https://www.infragistics.com/products/${product}`;

    return (
        <header class="tsd-header">
            {local === 'en' ? navEn(context, props) : navJp(context, props)}
            <div class="tsd-header-content">
                <div class="tsd-header-group">
                    <h1 class="tsd-header-logo">
                        <a href={link}>{props.project.name}</a>
                        {useVersioning &&
                            <span class="version">
                                <select id="versions"></select>
                            </span>
                        }
                    </h1>
                    <div class="tsd-nav-toggle">
                        <input id="tsd-toggle-cbx" type="checkbox" />
                        <label for="tsd-toggle-cbx">
                            <span class="material-icons">menu</span>
                        </label>
                        <ul class="tsd-nav">
                            <li class="tsd-nav-item">
                                <button class="tsd-button--flat">
                                    <a href={link}>{plugin.localize('Components')}</a>
                                </button>
                            </li>
                            <li class="tsd-nav-item">
                                <button class="tsd-button">
                                    <a href={link}>{plugin.localize('Get Started')}</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
