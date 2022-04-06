import { DefaultThemeRenderContext, JSX, PageEvent, Reflection } from 'typedoc';

export function navEn(context: DefaultThemeRenderContext, props: PageEvent<Reflection>) {
    return (
        <header id="header" class="globalnav" data-nav-auto-init="true" data-mega-menu="true">
                <div id="header-wrap" class ="globalnav__container stuck no-transparent top-animate" data-default-height="175" data-sticky-height="175">
                    {/* CSE Container */}
                    <div class ="globalnav__search">
                        <div class ="globalnav__search-container globalnav__wrapper">
                            <div class ="search search__container search--support" data-cse-resultsurl="/search">
                                <input id="q" class ="search__input" type ="text" name="q" value="" placeholder="Search Infragistics.com"/>
                                <button id="search__button-navigation" type ="submit" value="search" aria-label="Search Infragistics.com">
                                    <svg enable-background="new 0 0 512 512" id="search" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M497.913,497.913c-18.782,18.782-49.225,18.782-68.008,0l-84.862-84.863c-34.889,22.382-76.13,35.717-120.659,35.717  C100.469,448.767,0,348.312,0,224.383S100.469,0,224.384,0c123.931,0,224.384,100.452,224.384,224.383  c0,44.514-13.352,85.771-35.718,120.676l84.863,84.863C516.695,448.704,516.695,479.131,497.913,497.913z M224.384,64.109  c-88.511,0-160.274,71.747-160.274,160.273c0,88.526,71.764,160.274,160.274,160.274c88.525,0,160.273-71.748,160.273-160.274  C384.657,135.856,312.909,64.109,224.384,64.109z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Primary Nav */}
                    <div class ="globalnav__primary clearfix">
                        <div class ="globalnav__wrapper">
                            {/* My Account */}
                            <div class ="globalnav__section clearfix">
                                <nav class ="globalnav__menu-container">
                                    <ul class ="navigation navigation--xs navigation--hpad-0">
                                        <li class ="navigation__text deemphasize" style="width: auto;">North American Sales: 1-800-231-8588</li>
                                        <li><a title="Contact Us" data-id="9668" href="/about-us/contact-us" class ="mchNoDecorate">Global Contacts</a></li>
                                        <li class ="navigation__account">
                                            <a class ="signInLink mchNoDecorate" href="/my-account/keys-and-downloads">My Account</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <br /><br /><br /> */}
                            {/* Brand */}
                            <h1 class ="globalnav__brand">
                                <a href="/" class ="mchNoDecorate">
                                {/* <span class ="hidden--visual">Infragistics</span> */}
                                <img class ="globalnav__logo" src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" alt="Infragistics logo"/>
                                <img class ="globalnav__logo_abbr" src="https://static.infragistics.com/marketing/Website/General/IG-icon.svg" alt="Infragistics logo"/>
                                </a>
                            </h1>
                            {/* Mobile Menu Toggle */}
                            <div class ="globalnav__mobile-menu responsive">
                                <a class ="globalnav__menu-toggle mchNoDecorate" href="#"> <span>Menu</span> </a>
                            </div>
                            {/* Global Search Toggle */}
                            <div class ="globalnav__search-toggle">
                                <div class ="globalnav__search-close"><i> </i></div>
                            </div>
                            {/* Menu */}
                            <nav class ="globalnav__menu-container">
                                <ul class ="navigation navigation--navbar navigation--hpad-0 sf-menu sf-js-enabled sf-arrows">
                                    <li class ="navigation__mobile-link">
                                        <div class ="globalnav__callout-text">North American Sales: 1-800-321-8588</div>
                                    </li>
                                    <li class ="navigation__mobile-link"><a class ="navigation__sub-menu mchNoDecorate sf-with-ul" href="#">My Account</a>
                                        <ul class ="sub-menu clearfix" style="display: none;">
                                            <li><a class ="signInLink mchNoDecorate" href="/my-account/keys-and-downloads">Sign In/Register</a></li>
                                        </ul>
                                    </li>
                                    <li class ="menu-full-width">
                                        <a class ="navigation__sub-menu mchNoDecorate sf-with-ul" title="Design and Development" href="/products/ultimate">
                                        <span class ="hidden-md">Design &amp; Development</span><span class ="visible-md hidden-lg hidden-sm hidden-xs hidden-xxs">Design &amp; Develop</span></a>
                                        <ul style="display: none; opacity: 0;">
                                            <li>
                                                <div class ="mar-bottom--sm">
                                                    <div class ="navigation__sub-menu-header">Best Value</div>
                                                        <div class ="emphasize"><a href="/products/ultimate" class ="mchNoDecorate">Infragistics Ultimate <span class ="deemphasize">The complete toolkit for building high performing web, mobile and desktop apps.</span> </a></div>
                                                    </div>
                                                <div>
                                                <div class ="emphasize"><a href="/products/indigo-design" class ="mchNoDecorate">Indigo.Design <span class ="deemphasize">Use a unified platform for visual design, UX prototyping, code generation and application development.</span> </a></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class ="navigation__sub-menu-header">Web</div>
                                                <a class ="deemphasize mchNoDecorate" href="/products/ignite-ui-angular">Ignite UI for Angular</a>
                                                <a class ="deemphasize mchNoDecorate" href="/products/ignite-ui">Ignite UI for JavaScript</a>
                                                <a class ="deemphasize mchNoDecorate" href="/products/ignite-ui-react">Ignite UI for React</a>
                                                <a class ="deemphasize mchNoDecorate" href="/products/aspnet">Ultimate UI for ASP.NET</a>
                                                <a class ="deemphasize mchNoDecorate" href="/products/indigo-design">Indigo.Design</a>
                                            </li>
                                            <li>
                                                <div class ="navigation__sub-menu-header">Desktop</div>
                                                    <a href="/products/windows-forms" class ="mchNoDecorate">Ultimate UI for Windows Forms</a>
                                                    <a href="/products/wpf" class ="mchNoDecorate">Ultimate UI for WPF</a>
                                                <div class ="navigation__sub-menu-header">Prototyping</div>
                                                <a href="/products/indigo-design" class ="mchNoDecorate">Indigo.Design</a>
                                            </li>
                                            <li>
                                                <div class ="navigation__sub-menu-header">Mobile</div>
                                                <a href="/products/xamarin" class ="mchNoDecorate">Ultimate UI for Xamarin</a>
                                                <a href="/products/ios" class ="mchNoDecorate">Ultimate UI for iOS</a>
                                                <a href="/products/android" class ="mchNoDecorate">Ultimate UI for Android</a>
                                            </li>
                                            <li>
                                                <div class ="navigation__sub-menu-header">Automated Testing Tools</div>
                                                <a href="/products/test-automation-micro-focus-uft" class ="mchNoDecorate">Test automation for Micro Focus UFT: Windows Forms</a>
                                                <a href="/products/test-automation-micro-focus-uft" class ="mchNoDecorate">Test automation for Micro Focus UFT: WPF</a>
                                                <a href="/products/test-automation-ibm-rft" class ="mchNoDecorate">Test automation for IBM RFT: Windows Forms</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a class ="navigation__sub-menu mchNoDecorate sf-with-ul" title="UX" href="/products/indigo-design/desktop">UX</a>
                                        <ul style="display: none;">
                                            <li><a title="Indigo.Design Desktop" href="/products/indigo-design/desktop" class ="mchNoDecorate">Indigo.Design Desktop <span class ="deemphasize">Collaborative prototyping and remote usability testing for UX &amp; usability professionals</span></a></li>
                                            <li><a title="Indigo.Design" href="/products/indigo-design" class ="mchNoDecorate">Indigo.Design <span class ="deemphasize">A Unified Platform for Visual Design, UX Prototyping, Code Generation, and App Development</span></a></li>
                                        </ul>
                                    </li>
                                    <li class =""><a class ="navigation__sub-menu mchNoDecorate sf-with-ul" title="Business Intelligence" href="https://revealbi.io">Business Intelligence</a>
                                        <ul style="display: none;">
                                            <li><a title="Reveal Embedded" href="https://revealbi.io" class ="mchNoDecorate">Reveal Embedded <span class ="deemphasize">Accelerate your time to market with powerful, beautiful dashboards into your apps</span></a></li>
                                            <li><a title="Reveal" href="https://revealbi.io/app" class ="mchNoDecorate">Reveal App <span class ="deemphasize">Empower everyone in your organization to use data to make smarter business decisions</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a title="Team Productivity" href="/products/shareplus-enterprise" class ="mchNoDecorate">Team Productivity</a></li>
                                    <li><a class ="navigation__sub-menu mchNoDecorate sf-with-ul" title="Learn and Support" href="/support"><span class ="hidden-md">Learn &amp; Support</span><span class ="visible-md hidden-lg hidden-sm hidden-xs hidden-xxs">Support</span></a>
                                        <ul style="display: none;">
                                            <li><a title="Help and Support Documents" href="/support" class ="mchNoDecorate">Help &amp; Support Documents</a></li>
                                            <li><a title="Blogs" href="/community/blogs" class ="mchNoDecorate">Blogs</a></li>
                                            <li><a title="Forums" href="/community/forums" class ="mchNoDecorate">Forums</a></li>
                                            <li><a title="Product Ideas" href="/community/ideas" class ="mchNoDecorate">Product Ideas</a></li>
                                            <li><a title="Reference Applications" href="/resources/sample-applications" class ="mchNoDecorate">Reference Applications</a></li>
                                            <li><a title="Customer Stories" href="/resources/case-studies" class ="mchNoDecorate">Customer Stories</a></li>
                                            <li><a title="Webinars" href="/webinars" class ="mchNoDecorate">Webinars</a></li>
                                            <li><a title="eBooks and Whitepapers" href="/resources/whitepapers" class ="mchNoDecorate">eBook &amp; Whitepapers</a></li>
                                            <li><a title="Events" href="/events" class ="mchNoDecorate">Events</a></li>
                                        </ul>
                                    </li>
                                    <li><a title="Free Trials" href="/free-downloads" class ="mchNoDecorate">Free Trials</a></li>
                                    <li><a class ="navigation__sub-menu mchNoDecorate sf-with-ul" title="Pricing" href="/how-to-buy/product-pricing">Pricing</a>
                                        <ul style="display: none;">
                                            <li><a title="Pricing" href="/how-to-buy/product-pricing" class ="mchNoDecorate">Product Pricing / Buy Online</a></li>
                                            <li><a title="Renew Existing License" href="/how-to-buy/renewal" class ="mchNoDecorate">Renew Existing License</a></li>
                                            <li><a title="Contact Us" href="/about-us/contact-us" class ="mchNoDecorate">Contact Us</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div class ="globalnav__overlay"></div>
                        </div>
                    </div>
                    {/* SECONDARY NAV */}
                </div>
        </header>
    )
}
