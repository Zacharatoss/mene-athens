/* =========================================================
   ΜΕΝΟΥ
   Για να αλλάξεις κάτι: άλλαξε όνομα, περιγραφή ή τιμή ανάμεσα στα "".
   Για νέο προϊόν: αντέγραψε μια γραμμή { name: ..., price: ... }, και άλλαξέ τη.
   Για νέα κατηγορία: αντέγραψε ένα ολόκληρο μπλοκ { id: ..., items: [...] },
   "id": μόνο λατινικά, χωρίς κενά (χρησιμοποιείται στο link).
   "tag" (προαιρετικό): μικρή ετικέτα, π.χ. "Νέο", "Βαρέλι".
   Το σύμβολο € μπαίνει αυτόματα μετά την τιμή.
   ========================================================= */

const MENU = [
  {
    id: "kafes",
    title: "Καφές",
    note: "Όπου υπάρχουν δύο τιμές: μονός / διπλός · Extra σιρόπι ή δόση καφέ +0,30€",
    items: [
      { name: "Espresso", price: "2,50 / 2,90" },
      { name: "Americano", price: "2,50 / 2,90" },
      { name: "Freddo espresso", price: "3,90" },
      { name: "Freddo cappuccino", price: "4,10" },
      { name: "Cappuccino", price: "3,90 / 4,10" },
      { name: "Latte", price: "4,50" },
      { name: "Φίλτρου", price: "3,20 / 3,40" },
      { name: "Ελληνικός", price: "2,50 / 2,90" },
      { name: "Νες", price: "3,20" },
      { name: "Φραπέ", price: "3,20" },
    ],
  },
  {
    id: "rofimata",
    title: "Ροφήματα & Τσάι",
    items: [
      { name: "Σοκολάτα κλασική", price: "4,50" },
      { name: "Σοκολάτα λευκή", price: "4,80" },
      { name: "Τσάι πράσινο", price: "4,50" },
      { name: "Τσάι μαύρο", price: "4,50" },
      { name: "Χαμομήλι", price: "4,00" },
    ],
  },
  {
    id: "xymoi",
    title: "Χυμοί & Νερά",
    items: [
      { name: "Χυμός πορτοκάλι", price: "4,30" },
      { name: "Smoothie", price: "6,00" },
      { name: "Amita ανάμικτος", price: "3,00" },
      { name: "Νερό Ζαγόρι μικρό", price: "0,50" },
      { name: "Νερό Ζαγόρι μεγάλο", price: "2,50" },
    ],
  },
  {
    id: "anapsyktika",
    title: "Αναψυκτικά",
    items: [
      { name: "Pepsi", price: "3,70" },
      { name: "Pepsi zero", price: "3,70" },
      { name: "Ήβη πορτοκάλι", price: "3,70" },
      { name: "Ήβη σόδα", price: "3,50" },
      { name: "Ήβη λεμόνι", price: "3,70" },
      { name: "7up", price: "3,70" },
      { name: "Pink grapefruit", price: "3,50" },
      { name: "Red Bull", price: "4,50" },
      { name: "Lipton ice tea", price: "3,50" },
      { name: "Souroti ανθρακούχο", price: "3,80" },
    ],
  },
  {
    id: "cocktails",
    title: "Signature Cocktails",
    items: [
      { name: "Mini Athens", desc: "Highland Mountain ουίσκι · Λεμόνι · Κράνμπερι · Σιρόπι σφενδάμου · Αρωματικά bitters · Ασπράδι αυγού · Δεντρολίβανο · Φρεσκοτριμμένο μοσχοκάρυδο", price: "10,00" },
      { name: "Green Soul", desc: "Kingsbury Gin · Λάιμ · Τζίντζερ · Αγγούρι · Μήλο", price: "8,00" },
      { name: "Paradise Nut", desc: "Old Nick Rum · Φιστίκι · Λικέρ πορτοκαλιού · Ανανάς · Μάνγκο · Λάιμ · Σιρόπι ζάχαρης", price: "8,00" },
      { name: "Velvet Winter", desc: "Kreskova Vodka · Ανανάς · Πάσιον φρουτ · Φράουλα · Μάνγκο · Λάιμ · Πικραμύγδαλο · Τζίντζερ μπιρ", price: "8,00" },
      { name: "Desert Bloom", desc: "Tiscaz Tequila · Γκρέιπφρουτ · Λάιμ · Σιρόπι αγαύης · Πάσιον φρουτ · Τσίλι", price: "8,00" },
      { name: "Bloom Ginger", desc: "Kreskova Vodka · Πάσιον φρουτ · Λάιμ · Βανίλια · Κανέλα · Τζίντζερ", price: "8,00" },
    ],
  },
  {
    id: "mpyres",
    title: "Μπύρες",
    items: [
      { name: "EZA Lager Draft 400ml", desc: "Ισορροπημένη lager με γεμάτο σώμα, ζύμωση 21 ημερών · Αλκοόλ 5,0%", price: "6,00", tag: "Βαρέλι" },
      { name: "EZA Pilsener 330ml", desc: "Ελληνική pilsener με μεστό σώμα και ντελικάτη πικράδα · Αλκοόλ 5,2%", price: "5,00" },
      { name: "A Toda Madre Mexican-Style Lager 330ml", desc: "Δροσιστική και ευκολόπιοτη, με αρώματα βύνης και νότες λυκίσκου · Αλκοόλ 4,5%", price: "5,50" },
      { name: "Cretan Kings Pilsener 330ml", desc: "Μπύρα αργής ωρίμανσης από την Κρήτη · Αλκοόλ 5,0%", price: "5,00" },
      { name: "Mahou Cinco Estrellas Lager 330ml", desc: "Ισπανική lager με χρυσαφένιο χρώμα και κρεμώδη αφρό · Αλκοόλ 5,5%", price: "5,50" },
      { name: "Πειραϊκή Pilsener 330ml", desc: "Μπύρα αργής ωρίμανσης με την ψυχή του Πειραιά · Αλκοόλ 5,0%", price: "5,00" },
      { name: "Pils Hellas Radler 330ml", desc: "Μπύρα με χυμό λεμονιού · Αλκοόλ 2%", price: "5,00" },
      { name: "Pils Hellas 0.0% 330ml", desc: "Χωρίς αλκοόλ, με γεύση αληθινής μπύρας", price: "5,50" },
    ],
  },
  {
    id: "krasi",
    title: "Κρασί & Αφρώδη",
    items: [
      { name: "Κρασί ποτήρι λευκό", price: "6,00" },
      { name: "Κρασί ποτήρι ροζέ", price: "6,00" },
      { name: "Κρασί ποτήρι κόκκινο", price: "6,00" },
      { name: "Μοσχάτο", price: "6,00" },
      { name: "Prosecco", price: "7,00" },
      { name: "Σαγκρία", price: "6,50" },
    ],
  },
  {
    id: "pota",
    title: "Ποτά, Ούζο & Τσίπουρο",
    items: [
      { name: "Ποτό απλό", price: "8,00" },
      { name: "Ποτό special", price: "11,00" },
      { name: "Ούζο Pilavas καραφάκι 200ml", price: "7,00" },
      { name: "Τσίπουρο Pilavas καραφάκι 200ml", price: "7,00" },
    ],
  },
];
