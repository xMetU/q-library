export class FetchAll {
  static readonly type = '[Category] Fetch All Categories';
}

export class SetExpanded {
  static readonly type = '[Category] Set Expanded';
  constructor(public expanded: string[]) { }
}

export class SetSelected {
  static readonly type = '[Category] Set Selected';
  constructor(public selected: string[]) { }
}
