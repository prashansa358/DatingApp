import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // @Input() usersFromHomeComponent:any;
  @Output() cancelRegister = new EventEmitter();
model:any ={}
constructor(private accountService:AccountService, private toastr:ToastrService){

}
register(){
  console.log(this.model);
  this.accountService.register(this.model).subscribe({
    next:() =>{
      // console.log(response);
      this.cancel();
    },
    error:error =>{ this.toastr.error(error.error)}
  })
}
cancel(){
  console.log('cancelled');
  this.cancelRegister.emit(false);
}
}
