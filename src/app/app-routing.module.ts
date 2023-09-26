
import { NgModule, Directive } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormComponent } from './my-container/dynamic-form/dynamic-form.component';
import { HeaderComponent } from './my-container/header/header.component';
import { BindingComponent } from './my-container/binding/binding.component';
import { TestComponent } from './my-container/test/test.component';
import { DirectivesComponent } from './my-container/directives/directives.component';
import { ProductComponent } from './my-container/product/product.component';
import { MyProductComponent } from './my-container/my-product/my-product.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { MobileComponent } from './my-container/product/mobile/mobile.component';
import { TvComponent } from './my-container/product/tv/tv.component';
import { LaptopComponent } from './my-container/product/laptop/laptop.component';
import { CameraComponent } from './my-container/product/camera/camera.component';
import { NgContentComponent } from './my-container/ng-content/ng-content.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ContainerComponent } from './my-container/container/container.component';
import { InputComponent } from './my-container/input/input.component';
import { ComponentInteractionComponent } from './my-container/component-interaction/component-interaction.component';
import { ServiceComponent } from './my-container/service/service.component';
import { OutputComponent } from './my-container/input/output/output.component';
import { MyOutputComponent } from './my-container/my-output/my-output.component';
import { ObservableComponent } from './my-container/observable/observable.component';
import { RouteParametersComponent } from './my-container/route-parameters/route-parameters.component';
import { DepartmentDetailComponent } from './my-container/department-detail/department-detail.component';
import { ParaRouteComponent } from './my-container/para-route/para-route.component';
import { UsersComponent } from './my-container/para-route/users/users.component';
import { ErrorHandlingComponent } from './my-container/observable/error-handling/error-handling.component';
import { ViewchildComponent } from './my-container/viewchild/viewchild.component';
import { ViewChildRenderChildComponent } from './my-container/viewchild/viewchild-render/view-child-render-child/view-child-render-child.component';
import { ViewchildRenderComponent } from './my-container/viewchild/viewchild-render/viewchild-render.component';
import { MyPipeComponent } from './my-container/my-pipe/my-pipe.component';
import { SubjectComponent } from './my-container/subject/subject.component';
import { ProjectOneComponent } from './my-container/project-one/project-one.component';
import { TemplateDrivenFormComponent } from './my-container/template-driven-form/template-driven-form.component';
import { ReactiveformsComponent } from './my-container/reactiveforms/reactiveforms.component';
import { InputTestComponent } from './my-container/inOut/input-test/input-test.component';

const routes: Routes = [
 { path:'', redirectTo:'binding', pathMatch:'full'},
  {path:'binding', component:BindingComponent },
  {path:'form', component:DynamicFormComponent },
  // {path:'binding', component:BindingComponent},
  {path:'test', component:TestComponent},
  {path:'directive', component:DirectivesComponent},
  // {path:'product', children:[
  //   {path:'', component:ProductComponent},
  //   {path:'mobile', component:MobileComponent}
  // ]},
  {path:'product', component:ProductComponent, children:[
    {path:'',  component:CameraComponent},
    {path:'mobile', component:MobileComponent},
    {path:'tv', component:TvComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'camera', component:CameraComponent}

  ]},
  // {path:'routerNavigate', component:RouterNavigateComponent},
  {path:'ngContent', component:NgContentComponent},
  {path:'ngContainer', component:ContainerComponent},
  {path:'input', component:InputComponent},
  {path:'componentInteraction', component:ComponentInteractionComponent},
  // {path:'myProduct', component:MyProductComponent},
  {path:'service', component:ServiceComponent},
  {path:'myOutput', component:MyOutputComponent},
  {path:'observable', component:ObservableComponent},
  {path:'routePara', component:RouteParametersComponent},
  {path:'departments/:id', component:DepartmentDetailComponent},
  {path:'paraRoute', component:ParaRouteComponent},
  // {path:'user', component:UsersComponent},
  {path:'user/:id', component:UsersComponent},
  {path:'errorHandling',component:ErrorHandlingComponent},
  {path: 'viewchild', component:ViewchildComponent},
  {path: 'viewChildRender', component:ViewchildRenderComponent},
  {path: 'myPipe', component:MyPipeComponent},
  {path: 'subject', component:SubjectComponent},
  {path: 'projectOne', component:ProjectOneComponent},
  {path: 'templateDF', component:TemplateDrivenFormComponent},
  {path: 'reactiveForm', component:ReactiveformsComponent},
  {path: 'inputTest', component:InputTestComponent},
  {path: 'viewChild', component:ViewchildComponent},
  {path:'**', component:BindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

