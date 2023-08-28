import { Component } from '@angular/core';

@Component({
  selector: 'app-leistungen',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.scss'],
})
export class LeistungenComponent {
  table1 = [
    '- Komplette Objektbetreuung',
    '- Kontrolle und Betreuung der Immobilie',
    '- Überwachung des Einwandfreien Zustands des Objektes',
    '- Überwachung aller Technischen Anlagen',
    '- Überwachung der Beleuchtung',
    '- Instand halten von Türschließer, Schlösser, Türen usw.',
    '- Durchführung von Kleinreparaturen',
    '- Abfallbehälter Bereitstellen und Fehlbefüllung beseitigen',
    '- Zählerstände Ablesen',
    '- Reinigen der Hofabläufe und Gullys',
    '- Reinigung des Hausflur',
    '- Reinigung der Fenster',
    '- Reinigen aller Grün -und Grauflächen',
    '- Tiefgarage/Duplexanlagen Reinigen ',
    '- Unrat, Unkraut auf Grau und Grünflächen beseitigen',
    '- Müllplätze Regelmäßig reinigen',
    '- Parkplatzreinigung',
    '- Laub aufsammeln und entsorgen',
    '- Notdienst',
    '- und vieles mehr!',
  ];
  table2 = [
    '- Rasenmähen und Pflege',
    '- Hecken und Sträucher Schneiden',
    '- Pflege der Beete',
    '- Verkehrssicherungsschnitt',
    '- Gehölzflächenpflege',
    '- Gartengestaltung',
    '- Baumfällarbeiten',
    '- Terrassenbau',
    '- Pflasterarbeiten in Verbindung mit Gartengestaltung',
    '- Mini Baggerarbeiten',
    '- und vieles mehr!',
  ];
  table3 = [
    '- Dach Reinigung',
    '- Dachrinnen Reinigung',
    '- Reinigen von Grauflächen',
    '- Kehren von Einfahrten',
    '- Kehren von Gehsteigen',
    '- Kehren von Parkplätzen und Gewerbeflächen ',
    '- Auch größere Flächen sind kein Problem',
  ];
  table4 = [
    '- Einfahren Räumen&Streuen',
    '- Gehsteige Räumen&Streuen',
    '- Gewerbeflächen Räumen&Streuen',
    '- Parkplätze Räumen&Streuen',
    '- Auch größere Flächen sind kein Problem',
  ];
  lastText = ['Lassen Sie sich ein individuelles Angebot erstellen!'];

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
