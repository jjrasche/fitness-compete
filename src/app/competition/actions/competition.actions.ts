// import { Update } from '@ngrx/entity';
// import { unionize, ofType, UnionOf } from 'unionize';

// import { System } from '../models/system.model';
// import { TestCase } from '../models/test-case.model';
// import { API } from '../models/api.model';

// export const SystemActions = unionize({
//   LOAD_SYSTEMS: ofType<Array<System>>(),
//   ADD_SYSTEM: ofType<System>(),
//   UPDATE_SYSTEM: ofType<Update<System>>(),
//   DELETE_SYSTEM: ofType<number>(),
// },
//   { tag: 'type', value: 'payload' }
// );

// // export type SystemActionTypes = typeof SystemActions._Union;
// export type SystemActionTypes = UnionOf<typeof SystemActions>;
