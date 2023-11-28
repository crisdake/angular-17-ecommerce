"use strict";(self.webpackChunkstore=self.webpackChunkstore||[]).push([[526],{526:(q,d,n)=>{n.r(d),n.d(d,{RegisterComponent:()=>U});var u=n(6814),o=n(95);class c{static MatchValidator(s,r){return a=>{const i=a.get(s),l=a.get(r);return i&&l&&i.value!==l.value?(l.setErrors({match:!0}),{match:!0}):(l?.setErrors(null),null)}}}var e=n(5678),f=n(7466),p=n(1430);function m(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Este Campo es requerido"),e.qZA()())}function g(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Este Campo debe ser un email"),e.qZA()())}function _(t,s){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,m,3,0,"div",0)(2,g,3,0,"div",0),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.Uservalidator.controls.emailField.hasError("required")),e.xp6(1),e.Q6J("ngIf",r.Uservalidator.controls.emailField.hasError("email"))}}function b(t,s){if(1&t){const r=e.EpF();e.TgZ(0,"div")(1,"form",1),e.NdJ("ngSubmit",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.ValidateUser())}),e.TgZ(2,"div",2),e._UZ(3,"input",3),e.TgZ(4,"label",4),e._uU(5,"Email address"),e.qZA(),e.YNc(6,_,3,2,"div",0),e.qZA(),e.TgZ(7,"button",5),e._uU(8," Continue "),e.qZA()()()}if(2&t){const r=e.oxw();e.xp6(1),e.Q6J("formGroup",r.Uservalidator),e.xp6(5),e.Q6J("ngIf",r.Uservalidator.controls.emailField.invalid&&r.Uservalidator.controls.emailField.touched)}}function x(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Este Campo es requerido"),e.qZA()())}function v(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Este Campo debe ser un email"),e.qZA()())}function h(t,s){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,x,3,0,"div",0)(2,v,3,0,"div",0),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.form.controls.emailField.hasError("required")),e.xp6(1),e.Q6J("ngIf",r.form.controls.emailField.hasError("email"))}}function y(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Este Campo es requerido"),e.qZA()())}function w(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Este Campo debe ser tener como minimo 8 caracteres "),e.qZA()())}function Z(t,s){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,y,3,0,"div",0)(2,w,3,0,"div",0),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.form.controls.PasswordField.hasError("required")),e.xp6(1),e.Q6J("ngIf",r.form.controls.PasswordField.hasError("minlength"))}}function k(t,s){1&t&&(e.TgZ(0,"div")(1,"strong",6),e._uU(2,"Las contrase\xf1as no son iguales"),e.qZA()())}function T(t,s){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,k,3,0,"div",0),e.qZA()),2&t){const r=e.oxw(2);e.xp6(1),e.Q6J("ngIf",r.form.controls.ConfirmPassword.hasError("mismatch"))}}function C(t,s){if(1&t){const r=e.EpF();e.TgZ(0,"div")(1,"form",1),e.NdJ("ngSubmit",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.Doregister())}),e.TgZ(2,"div",2),e._UZ(3,"input",7),e.TgZ(4,"label",8),e._uU(5,"Email address"),e.qZA(),e.YNc(6,h,3,2,"div",0),e.qZA(),e.TgZ(7,"div",2),e._UZ(8,"input",9),e.TgZ(9,"label",10),e._uU(10,"Password"),e.qZA(),e.YNc(11,Z,3,2,"div",0),e.qZA(),e.TgZ(12,"div",2),e._UZ(13,"input",11),e.TgZ(14,"label",12),e._uU(15,"Confirm password"),e.qZA(),e.YNc(16,T,2,1,"div",0),e.qZA(),e.TgZ(17,"div",13)(18,"div",2),e._UZ(19,"input",14),e.TgZ(20,"label",15),e._uU(21,"First name"),e.qZA()(),e.TgZ(22,"div",2),e._UZ(23,"input",16),e.TgZ(24,"label",17),e._uU(25,"Photo URL"),e.qZA()()(),e.TgZ(26,"button",5),e._uU(27," Submit "),e.qZA()()()}if(2&t){const r=e.oxw();e.xp6(1),e.Q6J("formGroup",r.form),e.xp6(5),e.Q6J("ngIf",r.form.controls.emailField.invalid&&r.form.controls.emailField.touched),e.xp6(5),e.Q6J("ngIf",r.form.controls.PasswordField.invalid&&r.form.controls.PasswordField.touched),e.xp6(5),e.Q6J("ngIf",r.form.controls.ConfirmPassword.invalid&&r.form.controls.ConfirmPassword.touched)}}let U=(()=>{class t{constructor(r,a,i){this.Authservice=r,this.formBuilder=a,this.router=i,this.ShowRegister=!1,this.status="init",this.statusUser="init",this.Uservalidator=this.formBuilder.nonNullable.group({emailField:["",[o.kI.required,o.kI.maxLength(20),o.kI.email]]}),this.form=this.formBuilder.nonNullable.group({name:["",o.kI.required],avatar:["",o.kI.pattern(/^https?:\/\/\S+/)],emailField:["",[o.kI.required,o.kI.maxLength(20),o.kI.email]],PasswordField:["",[o.kI.required,o.kI.minLength(8)]],ConfirmPassword:["",o.kI.required]},{validators:[c.MatchValidator("PasswordField","ConfirmPassword")]})}Doregister(){if(this.form.valid){this.status="loading";const{name:r,emailField:a,PasswordField:i,avatar:l}=this.form.getRawValue();this.Authservice.RegisterAndlogin(r,a,i,l).subscribe({next:()=>{this.status="success",this.router.navigate(["/"])},error:()=>{this.status="failed"}})}else this.form.markAllAsTouched()}ValidateUser(){if(this.Uservalidator.valid){this.statusUser="loading";const{emailField:r}=this.Uservalidator.getRawValue();this.Authservice.Available(r).subscribe({next:a=>{this.statusUser="success",a.isAvailable?this.router.navigate(["/login"],{queryParams:{emailField:r}}):(this.ShowRegister=!0,this.form.controls.emailField.setValue(r))},error:()=>{this.statusUser="failed"}})}else this.Uservalidator.markAllAsTouched()}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(f.e),e.Y36(o.qu),e.Y36(p.F0))};static#r=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"relative","z-0","w-full","mb-6","group"],["type","email","name","floating_email","id","floating_email","formControlName","emailField","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:text-black","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","floating_email",1,"peer-focus:font-medium","absolute","text-sm","text-slate-900","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","rtl:peer-focus:left-auto","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","submit",1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","w-full","sm:w-auto","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"],[1,"text-red-500","text-sm"],["type","email","name","floating_email","id","floating_email","formControlName","emailField","placeholder"," ","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","floating_email",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","rtl:peer-focus:left-auto","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","password","name","floating_password","id","floating_password","placeholder"," ","formControlName","PasswordField","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","floating_password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","password","name","repeat_password","id","floating_repeat_password","placeholder"," ","formControlName","ConfirmPassword","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","floating_repeat_password",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],[1,"grid","md:grid-cols-2","md:gap-6"],["type","text","name","floating_first_name","id","floating_first_name","placeholder"," ","formControlName","name","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","floating_first_name",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"],["type","text","name","floating_last_name","id","floating_last_name","placeholder"," ","formControlName","avatar","required","",1,"block","py-2.5","px-0","w-full","text-sm","text-gray-900","bg-transparent","border-0","border-b-2","border-gray-300","appearance-none","dark:border-gray-600","dark:focus:border-blue-500","focus:outline-none","focus:ring-0","focus:border-blue-600","peer"],["for","floating_last_name",1,"peer-focus:font-medium","absolute","text-sm","text-gray-500","dark:text-gray-400","duration-300","transform","-translate-y-6","scale-75","top-3","-z-10","origin-[0]","peer-focus:start-0","rtl:peer-focus:translate-x-1/4","peer-focus:text-blue-600","peer-focus:dark:text-blue-500","peer-placeholder-shown:scale-100","peer-placeholder-shown:translate-y-0","peer-focus:scale-75","peer-focus:-translate-y-6"]],template:function(a,i){1&a&&e.YNc(0,b,9,2,"div",0)(1,C,28,4,"div",0),2&a&&(e.Q6J("ngIf",!i.ShowRegister),e.xp6(1),e.Q6J("ngIf",i.ShowRegister))},dependencies:[u.ez,u.O5,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u]})}return t})()}}]);