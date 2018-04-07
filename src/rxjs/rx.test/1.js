import Rx, { Observable, Subject } from 'rxjs/Rx';

// 将冷流转成热流
function makeHot(cold$) {
    let subject$ = new Subject()
    cold$.subscribe(subject$)
    return Observable.create(observer => {
        subject$.subscribe(observer)
    })
}

let cold$ = Observable.create(observer => {
    observer.next({ name: 'cheche' })
    observer.complete();
})
let hot$ = cold$.share()

//注意这样只能打印A：
//因为值是被同步送出的，当第一次订阅时就已经触发值的送出，此时subject的内部观察者列表只有A
//B是后来加进来的
hot$.subscribe(console.log.bind(null, 'A: '))
hot$.subscribe(console.log.bind(null, 'B: '))


setTimeout(() => {



}, 200)





let stream$ = Rx.Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
}).share()

/*stream$.subscribe(
    (data) => console.log('subscriber 1', data),
    err => console.error(err),
    () => console.log('completed')
);
stream$.subscribe(
    (data) => console.log('subscriber 2', data),
    err => console.error(err),
    () => console.log('completed')
);*/
