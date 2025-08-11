import { type SchemaTypeDefinition } from 'sanity'
import internship from './InternshipsSchema'
import adulting from './AdultingSchema'
import scholarship from './ScholarshipsSchema'
import studyresource from './StudyResourcesSchema'
import navhs from './NavHSSchema'
import collegeprep from './CollegePrepSchema'
import mentorpage from './MentorPageSchema'
import blogpost from './BlogPostSchema'
import blockcontent from './BlockContent'
import studentstories from './StudentStoriesSchema'
import studentprojects from './StudentProjectsSchema'

export const schemaTypes: SchemaTypeDefinition[] = [
    internship,
    adulting,
    scholarship,
    studyresource,
    navhs,
    collegeprep,
    mentorpage,
    blogpost,
    blockcontent,
    studentstories,
    studentprojects,
]
