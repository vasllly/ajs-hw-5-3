/**
 * @param items - массив, с объектами ваших персонажей
 * @param shield - включена общая защита или нет
 */
export default function setUpAttacks(characters, shield = true) {
  const items = characters;
  const result = [];
  let countLife = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].health > 0) countLife += 1;
  }

  function toDamage(i) {
    return (damage) => {
      if (shield) {
        for (let j = 0; j < items.length; j += 1) {
          if (items[j].health !== 0) {
            items[j].health -= Math.floor(damage / countLife);
          }
        }
        items[i].health -= damage % countLife;
      } else {
        items[i].health -= damage;
      }
      for (let j = 0; j < items.length; j += 1) {
        if (items[j].health <= 0) {
          items[j].health = 0;
          countLife -= 1;
        }
      }
    };
  }

  for (let i = 0; i < items.length; i += 1) {
    result[i] = toDamage(i);
  }

  return result;
}
