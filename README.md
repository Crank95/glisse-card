# Glisse Card für Home Assistant

Glisse Card stellt Schalter, Beleuchtung und Dashboard-Ansichten für Home Assistant bereit. Welche Entitäten angezeigt werden, legst du in deiner eigenen Kartenkonfiguration fest.

## Installation über HACS

1. Öffne in HACS das Menü **Benutzerdefinierte Repositories**.
2. Füge die GitHub-Adresse dieses Repositories als Typ **Dashboard** hinzu.
3. Lade **Glisse Card** herunter und lade das Home-Assistant-Frontend neu.

Für die manuelle Installation kopiere `dist/glisse-card.js` nach `/config/www/glisse-card.js` und registriere `/local/glisse-card.js` als JavaScript-Modul unter den Dashboard-Ressourcen.

## Umstieg von der bisherigen Glisse-Karte

Das frühere Repository `Crank95/lovelace-glisse-card` wird nicht mehr gepflegt bzw. ist nicht mehr erreichbar. Es darf nicht gleichzeitig mit `Crank95/glisse-card` als Dashboard-JavaScript geladen werden: Beide Varianten registrieren die gleichen Custom-Element-Tags (`glisse-card`, `glisse-home` und `glisse-dashboard`). Dann kann eine alte Version die neue blockieren.

1. Erstelle vor der Umstellung ein Home-Assistant-Backup.
2. Installiere zuerst `Crank95/glisse-card` über HACS.
3. Kontrolliere unter **Einstellungen → Dashboards → Ressourcen**, dass die aktuelle Ressource `/hacsfiles/glisse-card/glisse-card.js` verfügbar ist.
4. Entferne erst dann das alte HACS-Paket `Crank95/lovelace-glisse-card` und kontrolliere, dass dessen Ressourcenverweis `/hacsfiles/lovelace-glisse-card/glisse-card.js` verschwunden ist.
5. Schließe die Home-Assistant-App vollständig und öffne sie erneut. Bereits registrierte Custom Elements werden in einem offenen WebView nicht einfach ausgetauscht.

Ein gültiger Dashboard-YAML-Aufbau allein beweist nicht, dass eine Custom Card im Browser fehlerfrei läuft. Teste Scrollen, Tippen und Langdrücken auf iOS nach dem Wechsel separat.

## Kartenkonfiguration

Ersetze die fiktive Entität im Beispiel durch eine Entität aus deiner eigenen Home-Assistant-Installation.

```yaml
type: custom:glisse-card
entity: light.beispiel
name: Beispiellicht
```

Für eine Dashboard-Ansicht stehen außerdem `custom:glisse-home` und `custom:glisse-dashboard` zur Verfügung. Das optionale [Glisse Theme](https://github.com/Crank95/glisse-home-theme) lässt sich separat als **Theme** installieren.

Glisse Card verwendet den Glisse Switch von [0kzh/glisse](https://github.com/0kzh/glisse). Die Hinweise zu den eingebundenen Bibliotheken stehen in [THIRD-PARTY-LICENSES.txt](THIRD-PARTY-LICENSES.txt).
