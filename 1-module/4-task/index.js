function checkSpam(str) {
  // ваш код...

  //Напишите функцию `checkSpam(str)`, возвращающую `true`, если `str` содержит `'1xBet'` или `'XXX'`, а иначе `false`.
  const spamWord1 = '1xBet'.toLowerCase();
  const spamWord2 = 'XXX'.toLowerCase();

  str = str.toLowerCase();

  if (str.includes(spamWord1) || str.includes(spamWord2)) {
    return true;
  } else {
    return false;
  }


}
