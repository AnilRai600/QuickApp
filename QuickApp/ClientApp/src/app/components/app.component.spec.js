"use strict";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("../components/app.component");
var login_component_1 = require("../components/login/login.component");
var notifications_viewer_component_1 = require("../components/controls/notifications-viewer.component");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var core_1 = require("@ngx-translate/core");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var ngx_toasta_1 = require("ngx-toasta");
var modal_1 = require("ngx-bootstrap/modal");
var tooltip_1 = require("ngx-bootstrap/tooltip");
var popover_1 = require("ngx-bootstrap/popover");
var auth_service_1 = require("../services/auth.service");
var app_title_service_1 = require("../services/app-title.service");
var app_translation_service_1 = require("../services/app-translation.service");
var configuration_service_1 = require("../services/configuration.service");
var theme_manager_1 = require("../services/theme-manager");
var alert_service_1 = require("../services/alert.service");
var local_store_manager_service_1 = require("../services/local-store-manager.service");
var oidc_helper_service_1 = require("../services/oidc-helper.service");
var notification_service_1 = require("../services/notification.service");
var notification_endpoint_service_1 = require("../services/notification-endpoint.service");
var account_service_1 = require("../services/account.service");
var account_endpoint_service_1 = require("../services/account-endpoint.service");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                http_1.HttpClientModule,
                forms_1.FormsModule,
                testing_2.RouterTestingModule,
                core_1.TranslateModule.forRoot({
                    loader: {
                        provide: core_1.TranslateLoader,
                        useClass: app_translation_service_1.TranslateLanguageLoader
                    }
                }),
                ngx_datatable_1.NgxDatatableModule,
                angular_oauth2_oidc_1.OAuthModule.forRoot(),
                ngx_toasta_1.ToastaModule.forRoot(),
                tooltip_1.TooltipModule.forRoot(),
                popover_1.PopoverModule.forRoot(),
                modal_1.ModalModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                notifications_viewer_component_1.NotificationsViewerComponent
            ],
            providers: [
                auth_service_1.AuthService,
                alert_service_1.AlertService,
                configuration_service_1.ConfigurationService,
                theme_manager_1.ThemeManager,
                app_title_service_1.AppTitleService,
                app_translation_service_1.AppTranslationService,
                notification_service_1.NotificationService,
                notification_endpoint_service_1.NotificationEndpoint,
                account_service_1.AccountService,
                account_endpoint_service_1.AccountEndpoint,
                local_store_manager_service_1.LocalStoreManager,
                oidc_helper_service_1.OidcHelperService
            ]
        }).compileComponents();
    }));
    it('should create the app', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'QuickApp'", function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.componentInstance;
        expect(app.appTitle).toEqual('QuickApp');
    });
    it('should render Loaded! in a h1 tag', function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Loaded!');
    });
});
//# sourceMappingURL=app.component.spec.js.map