/**
 * Alternates Solo state
 */

soloState = MV.getSolo();


MV.write('VIDEO OUTPUT ROUTING:\n16 8\n\n');
MV.write('CONFIGURATION:\nSolo enabled: true\n\n');

console.log('Multiview is in solo mode.');  