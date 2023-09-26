import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './my-container/top-nav/top-nav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Textsec1Component } from './my-container/textsec1/textsec1.component';
import { Textsec2Component } from './my-container/textsec2/textsec2.component';
import { BindingComponent } from './my-container/binding/binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DirectivesComponent } from './my-container/directives/directives.component';
import { DynamicFormComponent } from './my-container/dynamic-form/dynamic-form.component';
import { TestComponent } from './my-container/test/test.component';
import { ProductComponent } from './my-container/product/product.component';
import { MyProductComponent } from './my-container/my-product/my-product.component';
import { MobileComponent } from './my-container/product/mobile/mobile.component';
import { TvComponent } from './my-container/product/tv/tv.component';
import { LaptopComponent } from './my-container/product/laptop/laptop.component';
import { CameraComponent } from './my-container/product/camera/camera.component';
import { NgContentComponent } from './my-container/ng-content/ng-content.component';
import { CardComponent } from './my-container/card/card.component';
import { ContainerComponent } from './my-container/container/container.component';
import { InputComponent } from './my-container/input/input.component';
import { OutputComponent } from './my-container/input/output/output.component';
import { TestChildComponent } from './my-container/test-child/test-child.component';
import { ComponentInteractionComponent } from './my-container/component-interaction/component-interaction.component';
import { SecondChildComponent } from './my-container/second-child/second-child.component';
import { ServiceComponent } from './my-container/service/service.component';
import { SOneComponent } from './my-container/s-one/s-one.component';
import { STwoComponent } from './my-container/s-two/s-two.component';
import { MyServiceService } from './my-container/my-service.service';
import { MyOutputComponent } from './my-container/my-output/my-output.component';
import { MyOutPutChildComponent } from './my-container/my-out-put-child/my-out-put-child.component';
import { ObservableComponent } from './my-container/observable/observable.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteParametersComponent } from './my-container/route-parameters/route-parameters.component';
import { DepartmentDetailComponent } from './my-container/department-detail/department-detail.component';
import { ParaRouteComponent } from './my-container/para-route/para-route.component';
import { UsersComponent } from './my-container/para-route/users/users.component';
import { UserDataService } from './my-container/para-route/user-data.service';
import { ErrorHandlingComponent } from './my-container/observable/error-handling/error-handling.component';
import { ViewchildComponent } from './my-container/viewchild/viewchild.component';
import { ViewchildChildrenComponent } from './my-container/viewchild/viewchild-children/viewchild-children.component';
import { ViewchildRenderComponent } from './my-container/viewchild/viewchild-render/viewchild-render.component';
import { ViewChildRenderChildComponent } from './my-container/viewchild/viewchild-render/view-child-render-child/view-child-render-child.component';
import { TestDirectiveDirective } from './my-container/appDirective/test-directive.directive';
import { MyPipeComponent } from './my-container/my-pipe/my-pipe.component';
import { SubjectComponent } from './my-container/subject/subject.component';
import { SubOneComponent } from './my-container/subject/sub-one/sub-one.component';
import { SubTwoComponent } from './my-container/subject/sub-two/sub-two.component';
import { SubThreeComponent } from './my-container/subject/sub-three/sub-three.component';
import { SubFourComponent } from './my-container/subject/sub-four/sub-four.component';
import { ProductOneComponent } from './my-container/product-one/product-one.component';
import { ProjectOneComponent } from './my-container/project-one/project-one.component';
import { POneHeaderComponent } from './my-container/project-one/p-one-header/p-one-header.component';
import { CustomPipe } from './my-container/app-pipes/custom.pipe';
import { ThreeDotsPipe } from './my-container/app-pipes/three-dots.pipe';
import { FilterPipe } from './my-container/app-pipes/filter.pipe';
import { ColumnSumPipe } from './my-container/app-pipes/column-sum.pipe';
import { RowSumPipe } from './my-container/app-pipes/row-sum.pipe';
import { HighlightPipe } from './my-container/app-pipes/highlight.pipe';
import { AgePipe } from './my-container/app-pipes/age.pipe';
import { TemplateDrivenFormComponent } from './my-container/template-driven-form/template-driven-form.component';
import { ReactiveformsComponent } from './my-container/reactiveforms/reactiveforms.component';
import { InputTestComponent } from './my-container/inOut/input-test/input-test.component';
import { OutputTestComponent } from './my-container/inOut/output-test/output-test.component';
import { TestAgaginComponent } from './my-container/test-agagin/test-agagin.component';
import { TestBindingComponent } from './my-container/binding/test-binding/test-binding.component';
import { SpliceComponent } from './splice/splice.component';









@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    MyContainerComponent,
    TopNavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component,
    BindingComponent,
    DirectivesComponent,
    DynamicFormComponent,
    TestComponent,
    ProductComponent,
    MyProductComponent,
    MobileComponent,
    TvComponent,
    LaptopComponent,
    CameraComponent,
    NgContentComponent,
    CardComponent,
    ContainerComponent,
    InputComponent,
    OutputComponent,
    TestChildComponent,
    ComponentInteractionComponent,
    SecondChildComponent,
    ServiceComponent,
    SOneComponent,
    STwoComponent,
    MyOutputComponent,
    MyOutPutChildComponent,
    ObservableComponent,
    RouteParametersComponent,
    DepartmentDetailComponent,
    ParaRouteComponent,
    UsersComponent,
    ErrorHandlingComponent,
    ViewchildComponent,
    ViewchildChildrenComponent,
    ViewchildRenderComponent,
    ViewChildRenderChildComponent,
    TestDirectiveDirective,
    MyPipeComponent,
    SubjectComponent,
    SubOneComponent,
    SubTwoComponent,
    SubThreeComponent,
    SubFourComponent,
    ProductOneComponent,
    ProjectOneComponent,
    POneHeaderComponent,
     CustomPipe,
     ThreeDotsPipe,
     FilterPipe,
     ColumnSumPipe,
     RowSumPipe,
     HighlightPipe,
     AgePipe,
     TemplateDrivenFormComponent,
     ReactiveformsComponent,
     InputTestComponent,
     OutputTestComponent,
     TestAgaginComponent,
     TestBindingComponent,
     SpliceComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],

  providers: [MyServiceService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
