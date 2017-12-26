import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface EventBusArgs {
  type: string;
  data: any;
}

@Injectable()
export class EventBusService {
@Output() fire: EventEmitter<any> = new EventEmitter();
  private _messages$ = new Subject<EventBusArgs>();
  viewList: boolean;
  constructor() {
    this.viewList = false;
  }

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string): Observable<any> {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
  show() {
    // this.fire.emit(false);
    this.viewList = true;
  }
  hide() {
    // this.fire.emit(true);
    this.viewList = false;
  }

}
