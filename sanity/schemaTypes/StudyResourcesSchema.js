import { defineField } from 'sanity'


const StudyResourcesSchema = {
  name: 'studyresource',
  title: 'StudyResource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Study Set Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      options: {
        list: [
          { title: 'SAT', value: 'sAT' },
          { title: 'ACT', value: 'aCT' },
          { title: 'AP Research', value: 'aP Research' },
          { title: 'AP Seminar', value: 'aP Seminar' },
          { title: 'AP 2D Art & Design', value: 'aP 2D Art & Design' },
          { title: 'AP 3D Art & Design', value: 'aP 3D Art & Design' },
          { title: 'AP Drawing', value: 'aP Drawing' },
          { title: 'AP Art History', value: 'aP Art History' },
          { title: 'AP Music Theory', value: 'aP Music Theory' },
          { title: 'AP English Language & Composition', value: 'aP English Language & Composition' },
          { title: 'AP English Literature & Composition', value: 'aP English Literature & Composition' },
          { title: 'AP African American Studies', value: 'aP African American Studies' },
          { title: 'AP Comparative Government & Politics', value: 'aP Comparative Government & Politics' },
          { title: 'AP European History', value: 'aP European History' },
          { title: 'AP Human Geography', value: 'aP Human Geography' },
          { title: 'AP Macroeconomics', value: 'aP Macroeconomics' },
          { title: 'AP Microeconomics', value: 'aP Microeconomics' },
          { title: 'AP Psychology', value: 'aP Psychology' },
          { title: 'AP United States Government & Politics', value: 'aP United States Government & Politics' },
          { title: 'AP United States History', value: 'aP United States History' },
          { title: 'AP Modern World History', value: 'aP Modern World History' },
          { title: 'AP Calculus AB', value: 'aP Calculus AB' },
          { title: 'AP Calculus BC', value: 'aP Calculus BC' },
          { title: 'AP Computer Science A', value: 'aP Computer Science A' },
          { title: 'AP Computer Science Principles', value: 'aP Computer Science Principles' },
          { title: 'AP Precalculus', value: 'aP Precalculus' },
          { title: 'AP Statistics', value: 'aP Statistics' },
          { title: 'AP Biology', value: 'aP Biology' },
          { title: 'AP Chemistry', value: 'aP Chemistry' },
          { title: 'AP Environmental Science', value: 'aP Environmental Science' },
          { title: 'AP Physics 1', value: 'aP Physics 1' },
          { title: 'AP Physics 2', value: 'aP Physics 2' },
          { title: 'AP Physics C: Electricity & Magnetism', value: 'aP Electricity & Magnetism' },
          { title: 'AP Physics C: Mechanics', value: 'aP Physics C: Mechanics' },
          { title: 'AP Chinese Language & Culture', value: 'aP Chinese Language & Culture' },
          { title: 'AP French Language & Culture', value: 'aP French Language & Culture' },
          { title: 'AP German Language & Culture', value: 'aP German Language & Culture' },
          { title: 'AP Italian Language & Culture', value: 'aP Italian Language & Culture' },
          { title: 'AP Japanese Language & Culture', value: 'aP Japanese Language & Culture' },
          { title: 'AP Latin', value: 'aP Latin' },
          { title: 'AP Spanish Language & Culture', value: 'aP Spanish Language & Culture' },
          { title: 'AP Spanish Literature & Culture', value: 'aP Spanish Literature & Culture' },
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'resourceUrl',
      title: 'Resource Link',
      type: 'url',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'dateCreated',
      title: 'Date Created',
      type: 'date',
      validation: Rule => Rule.required()
    }),
  ]
}


export default StudyResourcesSchema;