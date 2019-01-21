var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

  // with foreach

  let officersId = []

  officers.forEach(id => officersId.push(id.id));
  console.log(officersId);

  // using map

  const officersIdWithMap = officers.map(id => id.id);
  console.log(officersIdWithMap);

  const pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  const pilotsId = pilots.map(id => id.id);
  console.log(pilotsId);

  const nameWithT = pilots.map(name => name.name.charAt(0) === 'T');
  console.log(nameWithT);