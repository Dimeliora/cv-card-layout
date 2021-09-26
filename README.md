# Практический курс по верстке и JavaScript

Учебное задание #1 в рамках курса - верстка CV-карточки.

## Сборка проекта

```bash
1. git clone https://github.com/Dimeliora/practical-course-1--cv-card
2. cd practical-course-1--cv-card
3. npm install
```

Для сборки проекта используется планировщик задач Gulp.
Скрипты для сборки:

-   serve - сборка в development-режиме и запуск dev-server
-   build - сборка в development-режиме
-   prod - сборка в production-режиме

В режиме production осуществляется минификация HTML, CSS и JS кода, без записи source-map.
