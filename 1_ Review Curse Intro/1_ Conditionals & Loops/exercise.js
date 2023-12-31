// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let salary = {ceo: 2200, manager: 1800, cto: 1800, developer: 1500, default:1000,};
  switch (role) {
    case "ceo":
      return `${role} => ${salary[role]}$`;
    case "manager":
      return `${role} => ${salary[role]}$`;
    case "cto":
      return `${role} => ${salary[role]}$`;
    case "developer":
      return `${role} => ${salary[role]}$`;
    default:
      return `Default => ${salary["default"]}$`;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);