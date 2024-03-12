import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const APP_ROUTES: Route[] = [
    { path: "user", loadChildren: () => import("./modules/user/user.module").then(u => u.UserModule) },
    { path: "course", loadChildren: () => import("./modules/course/course.module").then(u => u.CourseModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}