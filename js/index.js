import headerNav from './headerNav.js';
import range from './range.js';
import pickDonate from './donate/pickDonate.js';
import navMob from './navMob.js';

window.addEventListener('DOMContentLoaded', () => {
"use strict";
headerNav();
range();
pickDonate();
navMob();

console.log(`
Проверяющий, здравствуй! Ели у вас что-то сломалось при изменении экрана то,\n
перезагрузите страницу.
Моя телега: Roma9858\n
Мой discord: romanjhyltsou#6635\n
`);
});