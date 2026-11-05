# Glisse Card für Home Assistant

Glisse Card stellt Schalter, Beleuchtung und Dashboard-Ansichten für Home Assistant bereit. Welche Entitäten angezeigt werden, legst du in deiner eigenen Kartenkonfiguration fest.

## Installation über HACS

1. Öffne in HACS das Menü **Benutzerdefinierte Repositories**.
2. Füge die GitHub-Adresse dieses Repositories als Typ **Dashboard** hinzu.
3. Lade **Glisse Card** herunter und lade das Home-Assistant-Frontend neu.

Für die manuelle Installation kopiere `dist/glisse-card.js` nach `/config/www/glisse-card.js` und registriere `/local/glisse-card.js` als JavaScript-Modul unter den Dashboard-Ressourcen.

## Kartenkonfiguration

Ersetze die fiktive Entität im Beispiel durch eine Entität aus deiner eigenen Home-Assistant-Installation.

```yaml
type: custom:glisse-card
entity: light.beispiel
name: Beispiellicht
```

Für eine Dashboard-Ansicht stehen außerdem `custom:glisse-home` und `custom:glisse-dashboard` zur Verfügung. Das optionale [Glisse Theme](https://github.com/Crank95/glisse-home-theme) lässt sich separat als **Theme** installieren.

Glisse Card verwendet den Glisse Switch von [0kzh/glisse](https://github.com/0kzh/glisse). Die Hinweise zu den eingebundenen Bibliotheken stehen in [THIRD-PARTY-LICENSES.txt](THIRD-PARTY-LICENSES.txt).
