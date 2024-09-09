let row = '*';
let i = 0;
// while (row.length < 5) {
//   row += '**'.repeat(i);
//   i++;
//   console.log(row);
// }

do {
  row += '*'.repeat(i);
  i++;
  console.log(row);
}
while (row.length < 48);