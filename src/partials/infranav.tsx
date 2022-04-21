import { DefaultThemeRenderContext, JSX, PageEvent, Reflection } from 'typedoc';

export function navEn(context: DefaultThemeRenderContext, props: PageEvent<Reflection>) {
    return (
        <header id="header" class="globalnav" data-nav-auto-init="false" data-mega-menu="true">
            <div class="sticky-wrapper" style="height: 77px;">
                <div id="header-wrap" class="globalnav__container" data-default-height="175" data-sticky-height="175">
                    {/* CSE Container */}
                    <div class="globalnav__search">
                        <div class="globalnav__search-container globalnav__wrapper">
                            <div class="search search__container search--support" data-cse-resultsurl="/search">
                                <input id="q" class="search__input" type="text" name="q" value="" placeholder="Search Infragistics.com"/>
                                <button type="submit" value="search">
                                    <svg enable-background="new 0 0 512 512" id="search" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M497.913,497.913c-18.782,18.782-49.225,18.782-68.008,0l-84.862-84.863c-34.889,22.382-76.13,35.717-120.659,35.717  C100.469,448.767,0,348.312,0,224.383S100.469,0,224.384,0c123.931,0,224.384,100.452,224.384,224.383  c0,44.514-13.352,85.771-35.718,120.676l84.863,84.863C516.695,448.704,516.695,479.131,497.913,497.913z M224.384,64.109  c-88.511,0-160.274,71.747-160.274,160.273c0,88.526,71.764,160.274,160.274,160.274c88.525,0,160.273-71.748,160.273-160.274  C384.657,135.856,312.909,64.109,224.384,64.109z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Primary Nav */}
                    <div class="globalnav__primary clearfix">
                        <div class="globalnav__wrapper">
                            {/* My Account */}
                            <div class="globalnav__section clearfix">
                                <nav class="globalnav__menu-container">
                                    <ul class="navigation navigation--xs navigation--hpad-0">
                                        <li class="navigation__text deemphasize" style="width: auto;">North American Sales: 1-800-231-8588</li>
                                        <li><a title="Contact Us" data-id="9668" href="/about-us/contact-us" class="mchNoDecorate">Global Contacts</a></li>
                                        <li class="navigation__account">
                                            <a class="signInLink mchNoDecorate" href="/my-account/keys-and-downloads">My Account</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <br /><br /><br /> */}
                            {/* Brand */}
                            <div class="globalnav__brand">
                                <a href="/" class="mchNoDecorate"> <img class="globalnav__logo" src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" alt=""/> <img class="globalnav__logo_abbr" src="https://static.infragistics.com/marketing/Website/General/IG-icon.svg" alt=""/> </a></div>
                            {/* Mobile Menu Toggle */}
                            <div class="globalnav__mobile-menu">
                                <a class="globalnav__menu-toggle mchNoDecorate" href="#"> <span>Menu</span> </a>
                            </div>
                            {/* Global Search Toggle */}
                            <div class="globalnav__search-toggle">
                                <div class="globalnav__search-close"><i> </i></div>
                            </div>
                            {/* Menu */}
                            <nav class="globalnav__menu-container">
                                <ul class="navigation navigation--navbar navigation--hpad-0 sf-menu">
                                    <li class="navigation__mobile-link">
                                        <div class="globalnav__callout-text">North American Sales: 1-800-321-8588</div>
                                    </li>
                                    <li class="navigation__mobile-link">
                                        <a class="navigation__sub-menu mchNoDecorate" href="#">My Account</a>
                                        <ul class="sub-menu clearfix" style="display: none;">
                                            <li><a class="signInLink mchNoDecorate" href="/my-account/keys-and-downloads">Sign In/Register</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-full-width">
                                        <a class="navigation__sub-menu" title="Design and Development" href="/products/ultimate"><span class="hidden-md">Design &amp; Development</span><span class="visible-md hidden-lg hidden-sm hidden-xs hidden-xxs">Design &amp; Develop</span></a>
                                        <ul>
                                            <li>
                                                <div class="navigation__sub-menu--left">
                                                    <div class="navigation__sub-menu--left-item">
                                                        <div class="navigation__sub-menu-header">Best Value Bundles</div>
                                                        <div class="emphasize"><a href="/products/ultimate"><span class="navigation__sub-menu-title">Infragistics Ultimate</span> <span class="navigation__sub-menu-price bgColor--ultimate">$1,495</span> <span class="deemphasize">The only complete UX/UI toolkit for building high performance, modern web, mobile and desktop applications.</span> </a></div>
                                                    </div>
                                                    <div class="navigation__sub-menu--left-item">
                                                        <div class="emphasize"><a href="/products/pro"><span class="navigation__sub-menu-title">Infragistics Professional</span> <span class="navigation__sub-menu-price bgColor--pro">$1,295</span> <span class="deemphasize">The comprehensive UI components library for web, mobile and desktop developers.</span> </a></div>
                                                    </div>
                                                    <div class="navigation__sub-menu--left-item hidden-sm hidden-xs hidden-xxs">
                                                        <div class="emphasize"><a href="/products/ignite-ui"><span class="navigation__sub-menu-title">Ignite UI</span> <span class="navigation__sub-menu-price bgColor--ignite">$1,295</span> <span class="deemphasize">A complete library of UI components for building modern, data-rich and responsive web apps.</span> </a></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="navigation__sub-menu-header">Web</div>
                                                <a class="deemphasize" title="App Builder" href="/products/appbuilder">App Builder <strong>(New)</strong></a>
                                                <a class="deemphasize" href="/products/ignite-ui">Ignite UI</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-angular">Angular</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-aspnet-core">ASP.NET Core</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-aspnet-mvc">ASP.NET MVC</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-blazor">Blazor</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-jquery">jQuery</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-react">React</a>
                                                <a class="deemphasize small-pad-left" href="/products/ignite-ui-web-components">Web Components</a>
                                                <a class="deemphasize" href="/products/aspnet">Ultimate UI for ASP.NET Web Forms</a>
                                            </li>
                                            <li>
                                                <div class="navigation__sub-menu-header">Desktop</div>
                                                <a href="/products/windows-forms">Ultimate UI for Windows Forms</a>
                                                <a href="/products/wpf">Ultimate UI for WPF</a>
                                                <div class="navigation__sub-menu-header">Cross Platform</div>
                                                <a href="/products/uno-platform">Ultimate UI for Uno</a>
                                                <a href="/products/uwp">Ultimate UI for UWP</a>
                                                <a href="/products/winui">Ultimate UI for WinUI</a>
                                                <a href="/products/xamarin">Ultimate UI for Xamarin</a>
                                            </li>
                                            <li>
                                                <div class="navigation__sub-menu-header">Design to Code</div>
                                                <a class="hidden-sm hidden-xs hidden-xxs" href="/products/indigo-design">Indigo.Design</a>
                                                <a class="hidden-sm hidden-xs hidden-xxs" href="/products/appbuilder">App Builder <strong>(New)</strong></a>
                                                <div class="navigation__sub-menu-header">Automated Testing Tools</div>
                                                <a href="/products/test-automation-micro-focus-uft">Test automation for Micro Focus UFT: Windows Forms</a>
                                                <a href="/products/test-automation-micro-focus-uft">Test automation for Micro Focus UFT: WPF</a>
                                                <a href="/products/test-automation-ibm-rft">Test automation for IBM RFT: Windows Forms</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="navigation__sub-menu mchNoDecorate" title="UX" href="/products/indigo-design">UX</a>
                                        <ul style="display: none;">
                                            <li><a title="Indigo.Design" href="/products/indigo-design" class="mchNoDecorate">Indigo.Design <span class="deemphasize">A Unified Platform for Visual Design, UX Prototyping, Code Generation, and App Development</span></a></li>
                                            <li><a title="App Builder" href="/products/appbuilder" class="mchNoDecorate">App Builder<span class="deemphasize">Cloud-based WYSIWYG Drag &amp; Drop Tool, Endless Theming options and Standards-Based Code Output</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="">
                                        <a class="navigation__sub-menu mchNoDecorate" title="Business Intelligence" href="https://www.revealbi.io">Business Intelligence</a>
                                        <ul style="display: none;">
                                            <li><a title="Reveal" href="https://www.revealbi.io" class="mchNoDecorate">Reveal <span class="deemphasize">Easily embed beautiful data visualizations into your apps</span></a></li>
                                            <li><a title="Slingshot" href="https://www.slingshotapp.io" class="mchNoDecorate">Slingshot <span class="deemphasize">Empower everyone in your organization to use data to make smarter business decisions</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="navigation__sub-menu mchNoDecorate" title="Team Productivity" href="https://www.slingshotapp.io">Team Productivity</a>
                                        <ul style="display: none;">
                                            <li><a title="Slingshot" href="https://www.slingshotapp.io" class="mchNoDecorate">Slingshot <span class="deemphasize">Connect everyone you work with to data, project management, content and chats for better results.</span></a></li>
                                            <li><a title="SharePlus" href="https://www.infragistics.com/products/shareplus-enterprise" class="mchNoDecorate">SharePlus <span class="deemphasize">Secure, instant access to content and data on the go – with or without connectivity.</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="navigation__sub-menu mchNoDecorate" title="Learn and Support" href="/support"><span class="hidden-md">Learn &amp; Support</span><span class="visible-md hidden-lg hidden-sm hidden-xs hidden-xxs">Support</span></a>
                                        <ul style="display: none;">
                                            <li><a title="Help and Support Documents" href="/support" class="mchNoDecorate">Help &amp; Support Documents</a></li>
                                            <li><a title="Blogs" href="/community/blogs" class="mchNoDecorate">Blogs</a></li>
                                            <li><a title="Forums" href="/community/forums" class="mchNoDecorate">Forums</a></li>
                                            <li><a title="Product Ideas" href="/community/ideas" class="mchNoDecorate">Product Ideas</a></li>
                                            <li><a title="Reference Applications" href="/resources/sample-applications" class="mchNoDecorate">Reference Applications</a></li>
                                            <li><a title="Customer Stories" href="/resources/case-studies" class="mchNoDecorate">Customer Stories</a></li>
                                            <li><a title="Webinars" href="/webinars" class="mchNoDecorate">Webinars</a></li>
                                            <li><a title="eBooks and Whitepapers" href="/resources/whitepapers" class="mchNoDecorate">eBook &amp; Whitepapers</a></li>
                                            <li><a title="Events" href="/events" class="mchNoDecorate">Events</a></li>
                                        </ul>
                                    </li>
                                    <li><a title="Free Trials" href="/free-downloads" class="mchNoDecorate">Free Trials</a></li>
                                    <li>
                                        <a class="navigation__sub-menu mchNoDecorate" title="Pricing" href="/how-to-buy/product-pricing">Pricing</a>
                                        <ul style="display: none;">
                                            <li><a title="Pricing" href="/how-to-buy/product-pricing" class="mchNoDecorate">Product Pricing / Buy Online</a></li>
                                            <li><a title="Renew Existing License" href="/how-to-buy/renewal" class="mchNoDecorate">Renew Existing License</a></li>
                                            <li><a title="Contact Us" href="/about-us/contact-us" class="mchNoDecorate">Contact Us</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div class="globalnav__overlay">&nbsp;</div>
                        </div>
                    </div>
                    {/* SECONDARY NAV */}
                </div>
            </div>
        </header>
    )
}
