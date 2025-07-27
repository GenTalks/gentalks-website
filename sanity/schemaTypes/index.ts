import { type SchemaTypeDefinition } from 'sanity'
import internship from './InternshipsSchema'
import adulting from './AdultingSchema'
import scholarship from './ScholarshipsSchema'
import studyresource from './StudyResourcesSchema'

export const schemaTypes: SchemaTypeDefinition[] = [internship, adulting, scholarship, studyresource]
