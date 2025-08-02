//
// What if the product name CLUSTERPRO map to MIDI notes?
//
// 2025.07.31 Miyamoto Kazuyuki

//         C  L  U   S  T  E  R   P   R   O
//$: note("G4 E5 C#6 B5 C6 A4 A#5 G#5 A#5 G5").sound("supersaw")	// Just map
$: note("67 76 85 83 84 69 82 80 82 79").sound("piano")				// equivalent
$: note("55 64 73 71 72 57 70 68 70 67").sound("piano")				// 1 octave lower

$: s("bd hh hh hh hh sd hh hh hh hh").bank("tr909")					// Rhythm base
$: s("sd hh hh hh hh").bank("tr909")								// Dynamics adjustment

//
//         E  X  P  R  E  S  S  C  L  U  S  T  E  R
//$: note("69 88 80 82 69 83 83 67 76 85 83 84 69 82").sound("piano")
//
