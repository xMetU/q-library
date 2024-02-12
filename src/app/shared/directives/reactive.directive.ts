import { Directive, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

@Directive({
  selector: '[appReactive]',
  standalone: true,
})
export class ReactiveDirective implements OnDestroy, OnInit {
  protected $init: Subject<void> = new Subject();
  protected $destroy: Subject<void> = new Subject();

  ngOnInit() {
    this.$init.next();
  }

  ngOnDestroy() {
    this.$destroy.next();
  }
}
