Пакет української локалізації для оновлення InstantCMS з версії 2.9.0 до 2.10.0

Увага! Це оновлення вам підійде якщо для InstantCMS 2.9.0 ви встановлювали мою українську локалізацію (користувача BoAnRo або andriy85if)

Перед початком оновлення не забудьте зробити резервну копію файлів сайту та бази даних. Розробники InstantCMS та української локалізації не несуть жодної відповідальності за будь-які втрати даних, які можуть статися при оновленні. 

На час процесу оновлення не забудьте надати права запису для папки /system/config/ та файлів, які в ній знаходяться. Також потрібно вимкнути кешування, якщо воно використовується на сайті.

Якщо Ви використовуєте шаблон відмінний від дефолтного потрібно його теж оновити.

Інструкція по оновленню:

1. Переконайтеся, що ви використовуєте InstantCMS 2.9.0 (версію можна подивитися внизу будь-якої сторінки в адмінці).

2. Увімкніть режим відладки в адмінці

3. Завантажте офіційний архів з оновленням тут http://upd.instantcms.ru/dist/instantcms-update-2.10.0.zip

4. Видаліть з нього файли install.sql та install.php і додайте з архіву української локалізації в офіційний архів оновлення такі ж самі 2 файли (замість тих, які були видалені) та manifest.uk.ini

5. Перейдіть в панель керування сайтом;

6. Перейдіть в розділ "компоненти";

7. Натисніть "встановити пакет доповнення", але нічого не вибирайте;

8. Очистіть кеш браузера;
    
9. Згорніть вікно браузера;

10. Весь вміст папки package з офіційного архіву оновлення, завантаженого в п.3 завантажте в корінь вашого сайту;

11. Після цього завантажте в корінь вашого сайту також вміст папки package з пакету української локалізації (з заміною файлів, якщо потрібно)

12. Поверніться у згорнене в п.9 вікно браузера, натисніть F5 на клавіатурі і виберіть архів, який ви завантажили в п.3;

13. На сторінці «Інформація про пакет» натисніть "Встановити";

15. На сторінці введення реквізитів ftp поставте чекбокс "Пропустити цей крок" і натисніть "Встановити";

16. Вимкнути режим відладки в адмінці

17. Також потрібно видалити наступні файли:
/system/widgets/auth
/system/widgets/auth/widget.php
/templates/default/controllers/users/action_confirm.tpl.php
/templates/default/controllers/users/friend_add.tpl.php
/templates/default/controllers/users/friend_delete.tpl.php
/templates/default/images/icons/vote.gif
/templates/default/widgets/auth
/templates/default/widgets/auth/auth.tpl.php
    
Оновлення завершено.

Якщо помітите якісь помилки, будь-ласка, повідомте про них у відповідній темі форуму http://www.instantcms.ru/forum/thread24546-1.html

