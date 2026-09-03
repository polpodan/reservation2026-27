// Après déploiement de Apps Script, remplacer cette URL.
const API_URL = 'https://script.google.com/macros/s/AKfycbyIFN3xXlfjOeh7wOTnO8ZD_CLDdfy3va7sKfugDhOhzhsSbm-x4z8QSftFMe3q_sj-/exec';
const SCHOOL_YEAR_START = '2026-08-27'; // Jour 1 du cycle
const SCHOOL_YEAR_END = '2027-06-30';
const PERIODS = [
 {id:1,start:'07:57',end:'09:04'},
 {id:2,start:'09:14',end:'09:54'},
 {id:3,start:'10:09',end:'11:16'},
 {id:4,start:'12:16',end:'13:23'},
 {id:5,start:'13:38',end:'14:45'}
];
// true = tu enseignes; false = période libre selon l'image fournie.
const TEACHING = {
  1:[1,1,0,0,1,0,1,0,1,1],
  2:[1,1,0,0,1,0,1,0,1,1],
  3:[0,1,0,1,1,0,1,0,1,1],
  4:[0,1,0,1,1,1,1,0,0,1],
  5:[0,1,0,1,1,0,1,0,1,1]
};
// Jours sans enseignement/réservation selon le calendrier scolaire fourni.
// Les journées pédagogiques, congés et vacances sont bloqués ici.
const CLOSED_DATES = new Set([
 '2026-08-24','2026-08-25','2026-08-26',
 '2026-09-07','2026-09-21',
 '2026-10-05','2026-10-12',
 '2026-11-27',
 '2026-12-21','2026-12-22','2026-12-23','2026-12-24','2026-12-25','2026-12-28','2026-12-29','2026-12-30','2026-12-31',
 '2027-01-01','2027-01-04','2027-01-25',
 '2027-02-12',
 '2027-03-01','2027-03-02','2027-03-03','2027-03-04','2027-03-05','2027-03-19','2027-03-29',
 '2027-04-02','2027-04-05','2027-04-30',
 '2027-05-14',
 '2027-06-21','2027-06-22','2027-06-23','2027-06-24','2027-06-25'
]);

const ADMIN_PAGE_TITLE = 'Administration – Réservations';
