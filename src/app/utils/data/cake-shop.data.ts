import { IProject } from '../IProject';

export const OnlineBookStoreData: IProject = {
  id: 'BD7972A2-197A-4236-841F-7D298A149726',
  name: 'Online Book Store',
  description:
    'A sample Cake Shop Website built with ASP.NET Core (Multi-Page Application)',
  projectLink: 'https://github.com/MadhanChiluka/OnlineBookStore',
  liveUrl: null,
  isFeatured: true,
  features: [
    'Only Admin can perform Create/Edit/Delete cakes & manage Orders.',
    'Normal User can only can buy cakes & view their orders.',
    'Managing Cart System using cookie.',
    'Client Side & Server side validation',
    'Session Based Authentication & Authorization',
    'Login through either Username or Email',
    'Application Architecture is decoupled form ORM (Entity Framework)'
  ],
  tags: ['Java-Spring'],
  techStuff: [
    'Java',
    'Spring Framework',
    'Hibernate JPA',
    'MySQL',
    'Angular',
    'Bootstap 4'
  ],
  additionalData: []
};
