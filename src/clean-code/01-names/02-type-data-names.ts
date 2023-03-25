(() => {
  // list of temperatures celsius
  // bad
  const arrayOfNums = [33.6, 12.34];
  // better
  const temperaturesCelsius = [33.6, 12.34];

  // ip address of the server
  // bad
  const ip = '123.123.123.123';
  // better
  const serverIp = '123.123.123.123';

  // user list
  // bad
  const people = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];
  // better
  const users = [
    { id: 1, email: 'fernando@google.com' },
    { id: 2, email: 'juan@google.com' },
    { id: 3, email: 'melissa@google.com' },
  ];

  // user email list
  // bad
  const emails = people.map(u => u.email);
  // better
  const userEmails = users.map(user => user.email);

  // boolean variables of a video game
  // bad
  const jump = false;
  const run = true;
  const noTieneItems = true;
  const loading = false;
  // better
  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;

  // start time
  // bad
  const start = new Date().getTime();
  // better
  const startTime = new Date().getTime();

  // execute other code

  // end time
  // bad
  const end = new Date().getTime() - start;
  // better
  const endTime = new Date().getTime() - startTime;
})();
