(() => {
  // files to evaluate
  // bad
  const fs = [
    { id: 1, f: false },
    { id: 2, f: false },
    { id: 3, f: true },
    { id: 4, f: false },
    { id: 5, f: false },
    { id: 7, f: true },
  ];
  // better
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // files to delete
  // bad
  const arhivos = fs.map(f => f.f);
  // better
  const filesToDelete = filesToEvaluate.map(file => file.flagged);

  // bad
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}
  // better
  class User {}
  interface User {}

  // today
  // bad
  const ddmmyyyy = new Date();
  // better
  const today = new Date();

  // elapsed time in days
  // bad
  const d: number = 23;
  // better
  const elapsedTimeInDays: number = 23;

  // number of files in directory
  // bad
  const dir = 33;
  // better
  const numberOfFilesInDirectory = 33;

  // first name
  // bad
  const nombre = 'Fernando';
  // better
  const firstName = 'Fernando';

  // last name
  // bat
  const apellido = 'Herrera';
  // better
  const lastName = 'Herrera';

  // days since modification
  // bad
  const dsm = 12;
  // better
  const daysSinceLastModification = 12;

  // max classes per student
  // bad
  const max = 6;
  // better
  const maxClassesPerStudent = 6;
})();
