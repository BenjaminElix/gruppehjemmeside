export const schemaTypes = []
// sanity/schemaTypes/index.js

import schemaType from 'part:@sanity/base/schema-type'
import groupMember from './groupMember'

// Legg på flere schemaer her dersom du har dem,
// f.eks. import foo from './foo'

export const schemaTypes = schemaType.concat([
  groupMember,
  // foo,
])
