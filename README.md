
# Laravel & React Projekt

Dieses Projekt verwendet Laravel als Backend und React mit Bootstrap als Frontend. Die Anwendung läuft auf einem lokalen Server mit XAMPP und verwendet MySQL als Datenbank.

## Voraussetzungen

Stellen Sie sicher, dass die folgenden Softwarekomponenten auf Ihrem System installiert sind:

- [XAMPP](https://www.apachefriends.org/index.html) (für Apache und MySQL)
- [Composer](https://getcomposer.org/) (für PHP-Abhängigkeiten)
- [Node.js & npm](https://nodejs.org/) (für JavaScript-Abhängigkeiten)
- [Git](https://git-scm.com/) (zum Klonen des Repositories)

## Installation

### 1. Klonen Sie das Repository

```bash
git clone https://github.com/IhrBenutzername/IhrRepository.git
cd IhrRepository
```

### 2. XAMPP konfigurieren

1. Starten Sie XAMPP und aktivieren Sie `Apache` und `MySQL`.
2. Öffnen Sie phpMyAdmin unter `http://localhost/phpmyadmin` und erstellen Sie eine neue Datenbank (z.B. `laravel_react_db`).

### 3. Laravel Backend einrichten

1. Navigieren Sie in das Backend-Verzeichnis:

    ```bash
    cd backend
    ```

2. Installieren Sie die PHP-Abhängigkeiten mit Composer:

    ```bash
    composer install
    ```

3. Erstellen Sie eine `.env` Datei:

    ```bash
    cp .env.example .env
    ```

4. Bearbeiten Sie die `.env` Datei und passen Sie die Datenbankeinstellungen an:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel_react_db
    DB_USERNAME=root
    DB_PASSWORD=
    ```

5. Generieren Sie den Anwendungsschlüssel:

    ```bash
    php artisan key:generate
    ```

6. Führen Sie die Migrationen aus, um die Datenbanktabellen zu erstellen:

    ```bash
    php artisan migrate
    ```

7. Starten Sie den Laravel-Server:

    ```bash
    php artisan serve
    ```

Das Backend sollte jetzt unter `http://localhost:8000` laufen.

### 4. React Frontend einrichten

1. Navigieren Sie in das Frontend-Verzeichnis:

    ```bash
    cd ../frontend
    ```

2. Installieren Sie die JavaScript-Abhängigkeiten:

    ```bash
    npm install
    ```

3. Starten Sie den React-Entwicklungsserver:

    ```bash
    npm start
    ```

Das Frontend sollte jetzt unter `http://localhost:3000` laufen.

### 5. Bootstrap einbinden

Bootstrap ist bereits in den Projektabhängigkeiten enthalten. Sie können Bootstrap-Komponenten direkt in Ihren React-Komponenten verwenden. Ein Beispiel:

```jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Willkommen zu meinem Laravel & React Projekt!</h1>
    </div>
  );
}

export default App;
```

## Weitere Befehle

- **Build für Produktion:**

    ```bash
    npm run build
    ```

- **Backend Tests ausführen:**

    ```bash
    php artisan test
    ```

- **Frontend Tests ausführen:**

    ```bash
    npm test
    ```

## Nützliche Links

- [Laravel Dokumentation](https://laravel.com/docs)
- [React Dokumentation](https://reactjs.org/docs/getting-started.html)
- [Bootstrap Dokumentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Probleme und Fehlerbehebung

Falls Sie auf Probleme stoßen, überprüfen Sie bitte die Einstellungen in der `.env` Datei und stellen Sie sicher, dass alle Dienste von XAMPP ordnungsgemäß laufen. Achten Sie auch darauf, dass die Ports nicht durch andere Anwendungen blockiert werden.

## Lizenz

Dieses Projekt steht unter der [MIT Lizenz](https://opensource.org/licenses/MIT).
