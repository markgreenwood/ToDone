const fs = require('fs');
const path = require('path');

const tasks = [
  {
    id: '1',
    description: 'Do this',
    duedate: '',
    complete: false
  },
  {
    id: '2',
    description: 'Do that',
    duedate: '',
    complete: false
  },
  {
    id: '3',
    description: 'Save the world',
    duedate: '',
    complete: false
  }
];

fs.writeFileSync(path.join(__dirname, 'tasks.json'), JSON.stringify(tasks, null, 2));