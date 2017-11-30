const fs = require('fs');
const path = require('path');

const tasks = [
  {
    id: '1',
    description: 'Do this',
    duedate: '2018-04-01',
    complete: false
  },
  {
    id: '2',
    description: 'Do that',
    duedate: '2017-12-25',
    complete: false
  },
  {
    id: '3',
    description: 'Save the world',
    duedate: '2017-11-30',
    complete: false
  }
];

fs.writeFileSync(path.join(__dirname, 'tasks.json'), JSON.stringify(tasks, null, 2));
