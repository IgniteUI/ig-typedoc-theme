import {DefaultThemeRenderContext, JSX, PageEvent, Reflection} from 'typedoc';
import { footerEn } from './infrafoot.js';
import { footerJp } from './infrafoot.ja.js';

export function footer(context: DefaultThemeRenderContext, props: PageEvent<Reflection>) {
    if (!context.options.getValue('name').includes('Ignite UI')) {
        return;
    }

    return (
        <footer>
            <div class="container">
                <h2 class="tsd-legend-title">Legend</h2>
                <div class="tsd-legend-group">
                    <ul class="tsd-legend">
                        <li class="tsd-kind-module"><span class="tsd-kind-icon">Module</span></li>
                        <li class="tsd-kind-object-literal"><span class="tsd-kind-icon">Object literal</span></li>
                        <li class="tsd-kind-variable"><span class="tsd-kind-icon">Variable</span></li>
                        <li class="tsd-kind-function"><span class="tsd-kind-icon">Function</span></li>
                        <li class="tsd-kind-function tsd-has-type-parameter"><span class="tsd-kind-icon">Function with type parameter</span></li>
                        <li class="tsd-kind-index-signature"><span class="tsd-kind-icon">Index signature</span></li>
                        <li class="tsd-kind-type-alias"><span class="tsd-kind-icon">Type alias</span></li>
                        <li class="tsd-kind-type-alias tsd-has-type-parameter"><span class="tsd-kind-icon">Type alias with type parameter</span></li>

                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-enum"><span class="tsd-kind-icon">Enumeration</span></li>
                        <li class="tsd-kind-enum-member"><span class="tsd-kind-icon">Enumeration member</span></li>
                        <li class="tsd-kind-property tsd-parent-kind-enum"><span class="tsd-kind-icon">Property</span></li>
                        <li class="tsd-kind-method tsd-parent-kind-enum"><span class="tsd-kind-icon">Method</span></li>
                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-interface"><span class="tsd-kind-icon">Interface</span></li>
                        <li class="tsd-kind-interface tsd-has-type-parameter"><span class="tsd-kind-icon">Interface with type parameter</span></li>
                        <li class="tsd-kind-constructor tsd-parent-kind-interface"><span class="tsd-kind-icon">Constructor</span></li>
                        <li class="tsd-kind-property tsd-parent-kind-interface"><span class="tsd-kind-icon">Property</span></li>
                        <li class="tsd-kind-method tsd-parent-kind-interface"><span class="tsd-kind-icon">Method</span></li>
                        <li class="tsd-kind-index-signature tsd-parent-kind-interface"><span class="tsd-kind-icon">Index signature</span></li>
                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-class"><span class="tsd-kind-icon">Class</span></li>
                        <li class="tsd-kind-class tsd-has-type-parameter"><span class="tsd-kind-icon">Class with type parameter</span></li>
                        <li class="tsd-kind-constructor tsd-parent-kind-class"><span class="tsd-kind-icon">Constructor</span></li>
                        <li class="tsd-kind-property tsd-parent-kind-class"><span class="tsd-kind-icon">Property</span></li>
                        <li class="tsd-kind-method tsd-parent-kind-class"><span class="tsd-kind-icon">Method</span></li>
                        <li class="tsd-kind-accessor tsd-parent-kind-class"><span class="tsd-kind-icon">Accessor</span></li>
                        <li class="tsd-kind-index-signature tsd-parent-kind-class"><span class="tsd-kind-icon">Index signature</span></li>
                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-constructor tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited constructor</span></li>
                        <li class="tsd-kind-property tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited property</span></li>
                        <li class="tsd-kind-method tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited method</span></li>
                        <li class="tsd-kind-accessor tsd-parent-kind-class tsd-is-inherited"><span class="tsd-kind-icon">Inherited accessor</span></li>
                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-property tsd-parent-kind-class tsd-is-protected"><span class="tsd-kind-icon">Protected property</span></li>
                        <li class="tsd-kind-method tsd-parent-kind-class tsd-is-protected"><span class="tsd-kind-icon">Protected method</span></li>
                        <li class="tsd-kind-accessor tsd-parent-kind-class tsd-is-protected"><span class="tsd-kind-icon">Protected accessor</span></li>
                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-property tsd-parent-kind-class tsd-is-private"><span class="tsd-kind-icon">Private property</span></li>
                        <li class="tsd-kind-method tsd-parent-kind-class tsd-is-private"><span class="tsd-kind-icon">Private method</span></li>
                        <li class="tsd-kind-accessor tsd-parent-kind-class tsd-is-private"><span class="tsd-kind-icon">Private accessor</span></li>
                    </ul>
                    <ul class="tsd-legend">
                        <li class="tsd-kind-property tsd-parent-kind-class tsd-is-static"><span class="tsd-kind-icon">Static property</span></li>
                        <li class="tsd-kind-call-signature tsd-parent-kind-class tsd-is-static"><span class="tsd-kind-icon">Static method</span></li>
                    </ul>
                </div>
            </div>
            <div id="footer-container">
                {context.options.getValue('localize') === 'en' ? footerEn(context, props) : footerJp(context, props)}
            </div>
        </footer>
    )
}
