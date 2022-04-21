import { DefaultThemeRenderContext, JSX, PageEvent, Reflection } from 'typedoc';

export function navJp(context: DefaultThemeRenderContext, props: PageEvent<Reflection>) {
    return (
<header id="header" class="globalnav" data-nav-auto-init="false" data-mega-menu="true">
    <div class="sticky-wrapper" style="height: 77px;">
        <div id="header-wrap" class="globalnav__container" data-default-height="175" data-sticky-height="175">
            {/* CSE Container */}
            <div class="globalnav__search">
                <div class="globalnav__search-container globalnav__wrapper">
					<div class="search search__container search--support" data-cse-resultsurl="https://jp.infragistics.com/search">
                        <input id="q" class="search__input" type="text" name="q" value="" placeholder="Infragistics.com を検索"/>
                        <button type="submit" value="search">
                            <svg enable-background="new 0 0 512 512" id="search" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg">
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
                                <li class="navigation__text deemphasize" style="width: auto;">インフラジスティックス・ジャパン株式会社: 050 (1745) 6258</li>
                                <li class="navigation__account">
                                    <a class="signInLink mchNoDecorate" href="https://jp.infragistics.com/my-account/keys-and-downloads">アカウント</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <br /><br /><br /> */}
                    {/* Brand */}
                    <div class="globalnav__brand">
                        <a href="/" class="mchNoDecorate"> <img class="globalnav__logo" src="https://static.infragistics.com/marketing/Website/General/Infragistics-horizontal.svg" alt="Infragistics"/> <img class="globalnav__logo_abbr" src="https://static.infragistics.com/marketing/Website/General/IG-icon.svg" alt="Infragistics"/> </a>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div class="globalnav__mobile-menu"><a class="globalnav__menu-toggle mchNoDecorate" href="#"><span>メニュー</span></a></div>
                    {/* Global Search Toggle */}
                    <div class="globalnav__search-toggle">
                        <div class="globalnav__search-close"><i> </i></div>
                    </div>
                    {/* Menu */}
                    <nav class="globalnav__menu-container">
                        <ul class="navigation navigation--navbar navigation--hpad-0 sf-menu">
                            <li class="navigation__mobile-link"><a class="navigation__sub-menu mchNoDecorate" href="#">マイ アカウント</a>
                                <ul class="sub-menu clearfix" style="display: none;">
                                    <li><a class="signInLink mchNoDecorate" href="https://jp.infragistics.com/my-account/keys-and-downloads">ログイン</a></li>
                                </ul>
                            </li>
                            <li class="menu-full-width">
	                            <a class="navigation__sub-menu" title="Design and Development" href="/products/ultimate"><span class="hidden-md">開発</span><span class="visible-md hidden-lg hidden-sm hidden-xs hidden-xxs">開発</span></a>
	                            <ul>
		                            <li>
			                            <div class="navigation__sub-menu--left">
				                            <div class="navigation__sub-menu--left-item">
					                            <div class="navigation__sub-menu-header">おすすめパッケージ</div>
					                            <div class="emphasize"><a href="/products/ultimate"><span class="navigation__sub-menu-title">Infragistics Ultimate</span> <span class="navigation__sub-menu-price bgColor--ultimate" style="font-size: 9pt;">¥242,000<br />(税抜き)</span> <span class="deemphasize">Web、モバイル、デスクトップアプリ構築のためのUX / UIツールキット完全版</span> </a></div>
				                            </div>
				                            <div class="navigation__sub-menu--left-item">
					                            <div class="emphasize"><a href="/products/ignite-ui"><span class="navigation__sub-menu-title">Ignite UI</span> <span class="navigation__sub-menu-price bgColor--ignite" style="font-size: 9pt;">¥220,000<br />(税抜き)</span> <span class="deemphasize">Webアプリを構築するためのUIコンポーネント完全版ライブラリ</span> </a></div>
				                            </div>
				                            <div class="navigation__sub-menu--left-item hidden-sm hidden-xs hidden-xxs">
					                            <div class="emphasize"><a href="/products/indigo-design"><span class="navigation__sub-menu-title">Indigo.Design</span> <span class="navigation__sub-menu-price bgColor--san-marino" style="font-size: 9pt;">¥176,000<br />(税抜き)</span> <span class="deemphasize">プロトタイピング、ユーザビリティテスト、コード生成をワンストップで</span> </a></div>
				                            </div>
			                            </div>
		                            </li>
		                            <li>
                                        <div class="navigation__sub-menu-header">Web向け</div>
                                        <a class="deemphasize" title="App Builder" href="/products/appbuilder">App Builder <strong>(新規)</strong></a>
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
			                            <div class="navigation__sub-menu-header">デスクトップ向け</div>
                                        <a href="/products/windows-forms">Ultimate UI for Windows Forms</a>
                                        <a href="/products/wpf">Ultimate UI for WPF</a>
			                            <div class="navigation__sub-menu-header">クロスプラットフォーム向け</div>
                                        <a href="/products/uno-platform">Ultimate UI for Uno</a>
                                        <a href="/products/uwp">Ultimate UI for UWP</a>
                                        <a href="/products/winui">Ultimate UI for WinUI</a>
                                        <a href="/products/xamarin">Ultimate UI for Xamarin</a>
			                            <div class="navigation__sub-menu-header">プロトタイピング</div>
                                        <a class="hidden-sm hidden-xs hidden-xxs" href="/products/indigo-design">Indigo.Design</a>
                                    </li>
                                    <li>
			                            <div class="navigation__sub-menu-header">Design to Code</div>
                                        <a class="hidden-sm hidden-xs hidden-xxs" href="/products/indigo-design">Indigo.Design</a>
                                        <a class="hidden-sm hidden-xs hidden-xxs" href="/products/appbuilder">App Builder <strong>(New)</strong></a>
                                    </li>
	                            </ul>
                            </li>
                            <li><a class="navigation__sub-menu mchNoDecorate" title="UX" href="/products/indigo-design">UX</a>
                                <ul style="display: none;">
                                    <li><a title="Indigo.Design" href="/products/indigo-design" class="mchNoDecorate">Indigo.Design <span class="deemphasize">3ステップでデザインから画面コードを生成できるアプリケーションデザインプラットフォーム</span></a></li>
                                    <li><a title="App Builder" href="/products/appbuilder" class="mchNoDecorate">App Builder <span class="deemphasize">ドラッグアンドドロップで Web アプリケーションを構築できる ローコード WYSIWYGデザイナー</span></a></li>
                                </ul>
                            </li>
                            <li><a href="https://www.revealbi.io/jp" class="mchNoDecorate">データ可視化</a></li>
                            <li>
                                <a class="navigation__sub-menu mchNoDecorate" title="チームコラボレーション" href="https://www.slingshotapp.io">チームコラボレーション</a>
                                <ul style="display: none;">
                                    <li><a title="Slingshot" href="https://www.slingshotapp.io" class="mchNoDecorate">Slingshot <span class="deemphasize">データ、プロジェクト管理、コンテンツ、チャット。チームの可能性を最大限に引き出すタスク・プロジェクト管理ツール</span></a></li>
                                </ul>
                            </li>
                            <li><a data-id="12491" href="/consulting" class="mchNoDecorate">サービス</a></li>
                            <li><a class="navigation__sub-menu mchNoDecorate" title="リソース" href="/support/product-help-downloads">リソース</a>
                                <ul style="display: none;">
                                    <li><a data-id="12501" href="/support/product-help-downloads" class="mchNoDecorate">製品ヘルプ</a></li>
                                    <li><a data-id="12865" href="/events" class="mchNoDecorate">イベント/セミナー情報</a></li>
                                    <li><a data-id="12562" href="/resources/sample-applications" class="mchNoDecorate">サンプルアプリケーション</a></li>
                                    <li><a data-id="23364" href="/resources/case-studies" class="mchNoDecorate">お客様導入事例</a></li>
                                    <li><a href="https://kb.jp.infragistics.com/" class="mchNoDecorate">ナレッジベース</a></li>
                                    <li><a href="https://blogs.jp.infragistics.com" class="mchNoDecorate">Blog</a></li>
                                </ul>
                            </li>
                            <li><a href="/free-downloads" class="mchNoDecorate">ダウンロード</a></li>
                            <li><a class="navigation__sub-menu mchNoDecorate" data-id="12495" href="/how-to-buy">ご購入</a>
                                <ul style="display: none;">
                                    <li><a data-id="20940" href="/how-to-buy/product-pricing" class="mchNoDecorate">製品のご購入方法</a></li>
                                    <li><a data-id="20940" href="/how-to-buy/product-pricing" class="mchNoDecorate">製品価格</a></li>
                                    <li><a data-id="12531" href="/support/supported-environments" class="mchNoDecorate">サポート環境</a></li>
                                    <li><a data-id="12547" href="/support/support-policies" class="mchNoDecorate">サポートポリシー</a></li>
                                    <li><a data-id="20966" href="/how-to-buy/renewal" class="mchNoDecorate">サブスクリプション更新</a></li>
                                    <li><a data-id="12387" href="/about-us/resellers" class="mchNoDecorate">販売パートナー</a></li>
                                    <li><a data-id="12601" href="/legal/terms-of-use" class="mchNoDecorate">法的情報</a></li>
                                    <li><a data-id="13374" href="/support/faq" class="mchNoDecorate">FAQ</a></li>
                                </ul>
                            </li>
                            <li><a data-id="21367" href="/support/faq" class="mchNoDecorate">お問い合わせ</a></li>
                        </ul>
                    </nav>
                    <div class="globalnav__overlay">&nbsp;</div>
                </div>
            </div>
        </div>
    </div>
</header>
    )
}
