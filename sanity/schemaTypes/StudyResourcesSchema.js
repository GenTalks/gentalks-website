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
          { title: 'SAT', value: 'sat' },
          { title: 'ACT', value: 'act' },
          { title: 'AP Research', value: 'ap research' },
          { title: 'AP Seminar', value: 'ap seminar' },
          { title: 'AP 2D Art & Design', value: 'ap 2D & art design' },
          { title: 'AP 3D Art & Design', value: 'ap 3D & art design' },
          { title: 'AP Drawing', value: 'ap drawing' },
          { title: 'AP Art History', value: 'ap art history' },
          { title: 'AP Music Theory', value: 'ap music theory' },
          { title: 'AP English Language & Composition', value: 'ap english language & composition' },
          { title: 'AP English Literature & Composition', value: 'ap english literature & composition' },
          { title: 'AP African American Studies', value: 'ap african american studies' },
          { title: 'AP Comparative Government & Politics', value: 'ap comparative government & politics' },
          { title: 'AP European History', value: 'ap european history' },
          { title: 'AP Human Geography', value: 'ap human geography' },
          { title: 'AP Macroeconomics', value: 'ap macroeconomics' },
          { title: 'AP Microeconomics', value: 'ap microeconomics' },
          { title: 'AP Psychology', value: 'ap psychology' },
          { title: 'AP United States Government & Politics', value: 'ap united states government & politics' },
          { title: 'AP United States History', value: 'ap united states history' },
          { title: 'AP Modern World History', value: 'ap modern world history' },
          { title: 'AP Calculus AB', value: 'ap calculus ab' },
          { title: 'AP Calculus BC', value: 'ap calculus bc' },
          { title: 'AP Computer Science A', value: 'ap computer science a' },
          { title: 'AP Computer Science Principles', value: 'ap computer science principles' },
          { title: 'AP Precalculus', value: 'ap precalculus' },
          { title: 'AP Statistics', value: 'ap statistics' },
          { title: 'AP Biology', value: 'ap biology' },
          { title: 'AP Chemistry', value: 'ap chemistry' },
          { title: 'AP Environmental Science', value: 'ap environmental science' },
          { title: 'AP Physics 1', value: 'ap physics 1' },
          { title: 'AP Physics 2', value: 'ap physics 2' },
          { title: 'AP Physics C: Electricity & Magnetism', value: 'ap physics c: electricity & magnetism' },
          { title: 'AP Physics C: Mechanics', value: 'ap physics c: mechanics' },
          { title: 'AP Chinese Language & Culture', value: 'ap chinese language & culture' },
          { title: 'AP French Language & Culture', value: 'ap french language & culture' },
          { title: 'AP German Language & Culture', value: 'ap german language & culture' },
          { title: 'AP Italian Language & Culture', value: 'ap italian language & culture' },
          { title: 'AP Japanese Language & Culture', value: 'ap japanese language & culture' },
          { title: 'AP Latin', value: 'ap latin' },
          { title: 'AP Spanish Language & Culture', value: 'ap spanish language & culture' },
          { title: 'AP Spanish Literature & Culture', value: 'ap spanish literature & culture' },
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