import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotifierModule } from 'angular-notifier';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { CallToActionComponent } from './components/common/call-to-action/call-to-action.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { ResourcesStyleOneComponent } from './components/common/resources-style-one/resources-style-one.component';
import { WebSecurityStyleOneComponent } from './components/common/web-security-style-one/web-security-style-one.component';
import { ServicesStyleOneComponent } from './components/common/services-style-one/services-style-one.component';
import { ValuableClientsComponent } from './components/common/valuable-clients/valuable-clients.component';
import { HomeoneAboutComponent } from './components/pages/home-demo-one/homeone-about/homeone-about.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HometwoAboutComponent } from './components/pages/home-demo-two/hometwo-about/hometwo-about.component';
import { ServicesStyleTwoComponent } from './components/common/services-style-two/services-style-two.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { ResourcesStyleTwoComponent } from './components/common/resources-style-two/resources-style-two.component';
import { WebSecurityStyleTwoComponent } from './components/common/web-security-style-two/web-security-style-two.component';
import { OperationCenterComponent } from './components/common/operation-center/operation-center.component';
import { ServicesStyleThreeComponent } from './components/common/services-style-three/services-style-three.component';
import { OurApproachComponent } from './components/common/our-approach/our-approach.component';
import { SecurityComponent } from './components/common/security/security.component';
import { FeedbackStyleThreeComponent } from './components/common/feedback-style-three/feedback-style-three.component';
import { HomefourAboutComponent } from './components/pages/home-demo-four/homefour-about/homefour-about.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { CaseStudiesPageComponent } from './components/pages/case-studies-page/case-studies-page.component';
import { CaseStudiesDetailsPageComponent } from './components/pages/case-studies-details-page/case-studies-details-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TeamComponent } from './components/common/team/team.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { ShopPageComponent } from './components/pages/shop-page/shop-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoSevenComponent } from './components/pages/home-demo-seven/home-demo-seven.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { ServicesStyleFourComponent } from './components/common/services-style-four/services-style-four.component';
import { TrustWorldComponent } from './components/common/trust-world/trust-world.component';
import { FeedbackStyleFourComponent } from './components/common/feedback-style-four/feedback-style-four.component';
import { HowWeWorkComponent } from './components/common/how-we-work/how-we-work.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { FreeQuoteComponent } from './components/common/free-quote/free-quote.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { PrivacyPerformanceComponent } from './components/common/privacy-performance/privacy-performance.component';
import { HomesixBannerComponent } from './components/pages/home-demo-six/homesix-banner/homesix-banner.component';
import { CyberDefenseComponent } from './components/common/cyber-defense/cyber-defense.component';
import { SecurityInfrastructureComponent } from './components/common/security-infrastructure/security-infrastructure.component';
import { HomesevenBannerComponent } from './components/pages/home-demo-seven/homeseven-banner/homeseven-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    HomeDemoThreeComponent,
    FooterComponent,
    BlogComponent,
    CallToActionComponent,
    FeedbackStyleOneComponent,
    ResourcesStyleOneComponent,
    WebSecurityStyleOneComponent,
    ServicesStyleOneComponent,
    ValuableClientsComponent,
    HomeoneAboutComponent,
    FeaturesComponent,
    HomeoneBannerComponent,
    HometwoBannerComponent,
    HomethreeBannerComponent,
    HomeDemoFourComponent,
    HomefourBannerComponent,
    FunfactsComponent,
    HometwoAboutComponent,
    ServicesStyleTwoComponent,
    FeedbackStyleTwoComponent,
    ResourcesStyleTwoComponent,
    WebSecurityStyleTwoComponent,
    OperationCenterComponent,
    ServicesStyleThreeComponent,
    OurApproachComponent,
    SecurityComponent,
    FeedbackStyleThreeComponent,
    HomefourAboutComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    ServicesPageComponent,
    NotFoundComponent,
    ServicesDetailsPageComponent,
    ContactPageComponent,
    BlogGridPageComponent,
    BlogRightSidebarPageComponent,
    BlogLeftSidebarPageComponent,
    BlogDetailsPageComponent,
    WidgetSidebarComponent,
    CaseStudiesPageComponent,
    CaseStudiesDetailsPageComponent,
    TeamPageComponent,
    PricingPageComponent,
    AboutPageComponent,
    TeamComponent,
    FeedbackPageComponent,
    FaqPageComponent,
    TermsConditionsPageComponent,
    PrivacyPolicyPageComponent,
    MyAccountPageComponent,
    ShopPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProductsDetailsPageComponent,
    HomeDemoFiveComponent,
    HomeDemoSixComponent,
    HomeDemoSevenComponent,
    HomefiveBannerComponent,
    ServicesStyleFourComponent,
    TrustWorldComponent,
    FeedbackStyleFourComponent,
    HowWeWorkComponent,
    PricingComponent,
    FreeQuoteComponent,
    PartnerComponent,
    PrivacyPerformanceComponent,
    HomesixBannerComponent,
    CyberDefenseComponent,
    SecurityInfrastructureComponent,
    HomesevenBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CountUpModule,
    NgxScrollTopModule,
    ReactiveFormsModule,
    NotifierModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
