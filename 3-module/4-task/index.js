function showSalary(users, age) {
  // ваш код...
  let userStr;
  const arrSize = users.filter(item => (item.age <= age)).length;

  return userStr = users.filter(item => (item.age <= age)).map((item, index) => index < arrSize-1 ? `${item.name}, ${item.balance}\n` : `${item.name}, ${item.balance}`).join("");

}
