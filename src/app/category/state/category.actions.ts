export class FetchAll {
  static readonly type = '[Categories] Fetch All Categories';
}

export class SetExpanded {
  static readonly type = '[Categories] Set Expanded';
  constructor(public expanded: string[]) { }
}

export class SetSelected {
  static readonly type = '[Categories] Set Selected';
  constructor(public selected: string[]) { }
}
