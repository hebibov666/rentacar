import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset:"production",
  projectId:"kg2ox3iy",
  useCdn:false,
})
