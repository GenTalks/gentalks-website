import { type SchemaTypeDefinition } from 'sanity'
import internship from './InternshipsSchema'
import adulting from './AdultingSchema'
import scholarship from './ScholarshipsSchema'
import studyresource from './StudyResourcesSchema'
import navhs from './NavHSSchema'
import collegeprep from './CollegePrepSchema'

export const schemaTypes: SchemaTypeDefinition[] = [
    internship, 
    adulting, 
    scholarship, 
    studyresource,
    navhs,
    collegeprep,
]
