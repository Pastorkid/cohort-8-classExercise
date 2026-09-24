import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-promise-exmaple',
  imports: [],
  templateUrl: './rxjs-promise-exmaple.html',
  styleUrl: './rxjs-promise-exmaple.css',
})
export class RxjsPromiseExmaple implements OnInit, OnDestroy {
  myList = of([1, 2, 3]);
  private mySub!: Subscription;
  isSpinner = false;

  async loginUser() {
    try {
    } catch (error) {
    } finally {
    }
  }
  ngOnInit(): void {
    //  const promise=new Promise((resolve,reject)=>{
    //   reject('reject')
    //  })
    //  promise.then((data)=>{
    //   console.log(`I am resolcing a sucess promise`,data)
    //  })
    //  promise.catch((data)=>{
    //   console.log(`I am resolving a reject promise`,data);

    //  })

    // const resolvedpromise=Promise.resolve('Hello world').finally(()=>{
    //   console.log('i have finally a resolved promise');

    // })
    // const rejectPromise=Promise.reject('Hello reject promise').finally(()=>{
    //   console.log('i have finally reun a reject poromis');

    // })
    // console.log(resolvedpromise);
    // console.log(rejectPromise);

    // const loginPromise=new Promise((resolve,reject)=>{

    //   const isCorrectPassword=false;
    //   this.isSpinner=false
    //   if(isCorrectPassword){

    //     resolve('Login sucessfull')
    //   }else{

    //     reject('Wrong password')
    //   }
    // })
    // loginPromise.then((result)=>{
    //   console.log(result);

    // }).catch((data)=>{
    //   console.log(data);

    // }).finally(()=>{
    //   console.log('i have finashed ruuning');
    //   this.isSpinner=false
    // })

    const promise = new Promise((resolve, reject) => {
      // console.log('i am a promise');
      resolve('i am a resolve promis 1');
      resolve('i am a resolve promis 2');
      resolve('i am a resolve promis 3');
    });
    promise.then((data) => {
      console.log(data);
    });
    const observale = new Observable((resolve) => {
      // console.log('i am an observable');

      resolve.next('Observable object call 1');

      resolve.next('Observable object call 2');
      resolve.next('Observable object call 3');
    });

    observale
      .pipe(
        filter((res) => res != 'Observable object call 1'),
        map((res: any) => res.slice(0, 23)),
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });

    //subcrining to mylis using of oeperator
    // console.log(`my list is`,this.myList);
    // this.myList.subscribe({
    //   next:(data)=>{
    //     console.log(data);

    //   }
    // })
  }
  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }
}
