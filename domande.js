const questions = [
  // LEZIONE 1
  {
    question: "Un indirizzo Bitcoin legacy inizia con il numero '3'.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "La proof-of-work in Bitcoin diventa sempre più facile nel tempo.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il white paper di Bitcoin è stato pubblicato da Satoshi Nakamoto nel 2008.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Bitcoin ha un limite massimo di 21 milioni di monete, tutte già state generate.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Nella crittografia asimmetrica, la stessa chiave viene usata per cifrare e decifrare.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il Lightning Network è una soluzione di secondo livello per aumentare la scalabilità di Bitcoin.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "L’attacco del 51% richiede che un singolo miner controlli più del 50% della potenza di hash della rete.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il blocco genesis di Bitcoin contiene un messaggio tratto dal quotidiano The Times.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La commissione di una transazione Bitcoin è calcolata in base all’importo trasferito.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "La tecnologia blockchain è stata progettata solo per gestire le criptovalute.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Un hardware wallet è considerato un cold wallet perché non è permanentemente connesso a Internet.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Nel sistema Bitcoin, le transazioni sono verificate da un’autorità centrale come una banca.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "L’output di una funzione hash ha lunghezza variabile a seconda dell’input.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il double spending è il tentativo di utilizzare più volte la stessa moneta digitale.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Chi possiede la chiave privata di un indirizzo Bitcoin può disporre dei fondi associati.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il Merkle Tree permette di verificare l’inclusione di una transazione in un blocco senza scaricare l’intero blocco.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Bitcoin è stato ideato da un gruppo di sviluppatori noto come Satoshi Nakamoto tra il 2008 e il 2009.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Nella rete Bitcoin tutti i nodi sono uguali e non esiste gerarchia (peer-to-peer).",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Un UTXO è un output di transazione non ancora speso.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Una transazione registrata nella blockchain Bitcoin può essere annullata da un’autorità centrale.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "L’indirizzo Bitcoin in formato Bech32 inizia con 'bc1'.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il tempo medio di generazione di un blocco in Bitcoin è di circa 10 minuti.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Un hard fork è una modifica del protocollo che non è retrocompatibile.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Bitcoin utilizza l’algoritmo di hash SHA-256 per calcolare l’impronta dei blocchi.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "I full node scaricano e verificano l’intera blockchain Bitcoin.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Le transazioni Bitcoin sono pseudonime perché gli indirizzi non sono direttamente legati all’identità reale.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Una funzione hash è facilmente invertibile, cioè dall’hash si può risalire al dato originale.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il premio per il mining di Bitcoin si dimezza ogni 4 anni circa, evento chiamato halving.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La proof-of-work è energeticamente efficiente rispetto ad altri algoritmi di consenso.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Taproot è un aggiornamento di Bitcoin che introduce le firme Schnorr e migliora la privacy.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },

  // LEZIONE 2
  {
    question: "La proof-of-stake è energeticamente più efficiente della proof-of-work.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "In Italia, il Decreto Semplificazioni del 2018 ha dato valore legale agli smart contract.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Le ICO (Initial Coin Offering) sono state utilizzate per raccogliere fondi per progetti blockchain.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Zcash utilizza le zero-knowledge proof (zk-SNARK) per garantire la privacy.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il problema dei generali bizantini descrive la difficoltà di raggiungere il consenso in presenza di nodi malevoli.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "DePIN (Decentralized Physical Infrastructure Network) si riferisce a infrastrutture fisiche decentralizzate gestite tramite blockchain.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il regolamento MiCA dell’Unione Europea disciplina i mercati delle criptovalute.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Solana utilizza un algoritmo di consenso chiamato Proof of History (PoH).",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Le blockchain permissionless permettono a chiunque di inviare transazioni, mentre quelle permissioned richiedono autorizzazione.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Cardano utilizza un protocollo di consenso chiamato Ouroboros.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il modello Stock-to-Flow è stato utilizzato per prevedere il prezzo del Bitcoin.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "IOTA si basa su una struttura dati chiamata Tangle, che è un grafo aciclico orientato (DAG).",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Lo sharding è una tecnica che divide la blockchain in parti per migliorare la scalabilità.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Monero utilizza le ring signatures per offuscare l’origine delle transazioni.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Una sidechain è una blockchain indipendente collegata a una blockchain principale tramite un peg a due vie.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Polkadot mira all’interoperabilità tra diverse blockchain tramite una relay chain e parachain.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Dogecoin è nato come scherzo (memecoin) ed è un fork di Litecoin.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Algorand utilizza un meccanismo di consenso basato su sorteggio casuale dei validatori (Pure PoS).",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "L’algoritmo PBFT richiede che meno di 1/3 dei nodi sia bizantino per funzionare correttamente.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Le stablecoin come Tether mantengono il valore ancorato a una valuta fiat o a un asset.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La Proof of Authority (PoA) si basa sulla reputazione dei validatori ed è spesso usata in blockchain private.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "EOS e Cardano sono state definite “Ethereum killer” perché mirano a superare Ethereum.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "L’EBSI è l’infrastruttura europea di servizi blockchain per la pubblica amministrazione.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Litecoin utilizza un tempo di blocco di 10 minuti, come Bitcoin.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Le blockchain 1.0 sono principalmente focalizzate sugli smart contract.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Nella proof-of-stake, i validatori vengono scelti in base alla loro potenza di calcolo.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "IPFS è un sistema di archiviazione distribuita che utilizza identificatori basati sul contenuto (CID).",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La Proof of Burn richiede di consumare energia elettrica per ottenere il diritto di mining.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il problema del double spending non esiste nelle blockchain permissioned.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Le zero-knowledge proof permettono di dimostrare la conoscenza di un segreto senza rivelarlo.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },

  // LEZIONE 3
  {
    question: "Il checksum degli indirizzi Ethereum utilizza l’hash SHA3 e le maiuscole/minuscole.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Lo standard ERC-20 definisce i token non fungibili (NFT).",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "La base fee nelle transazioni Ethereum viene bruciata (distrutta) dopo l’EIP-1559.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "In Ethereum, le transazioni possono avere più input e più output come in Bitcoin.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il tempo medio di blocco su Ethereum è di circa 12 secondi.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Ethereum ha un limite massimo di 21 milioni di Ether.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "L’aggiornamento Shanghai ha permesso agli staker di prelevare i propri ETH bloccati.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Una DAO è un’organizzazione gestita da smart contract senza una gerarchia tradizionale.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Le testnet come Sepolia permettono di testare contratti usando Ether fittizio.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "I validatori in Ethereum 2.0 devono depositare almeno 32 ETH per diventare validatori.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il gas price è stabilito solo dall’utente e non varia dinamicamente.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Un NFT è un token unico e non intercambiabile.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La finalizzazione di un blocco su Ethereum 2.0 avviene immediatamente dopo la sua creazione.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Le DApp sono applicazioni che combinano componenti on-chain e off-chain.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "In Ethereum, la lettura dello stato di uno smart contract (call) richiede sempre il pagamento del gas.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Il termine “The Merge” si riferisce all’unione della beacon chain (PoS) con la mainnet.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "I blob introdotti con l’aggiornamento Dencun vengono conservati permanentemente sulla blockchain.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Lo slashing in Ethereum 2.0 comporta la perdita dello stake in caso di comportamento malevolo.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La moneta nativa di Ethereum si chiama Ether e il suo simbolo è ETH.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "L’attacco alla DAO del 2016 ha portato alla creazione di Ethereum Classic.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "La proof-of-stake di Ethereum elimina completamente la necessità di un meccanismo di consenso.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Gli smart contract su Ethereum sono immutabili una volta deployati.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il gas è l’unità di misura del costo computazionale di una transazione o di uno smart contract.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "I rollup sono soluzioni layer 2 che elaborano transazioni off-chain e poi le riportano sulla mainnet.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Ethereum è stata la prima blockchain a introdurre gli smart contract in modo generalizzato.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Gli account normale e i contratti su Ethereum hanno entrambi una chiave privata.",
    type: "single",
    options: [
      { text: "Vero", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "La Ethereum Virtual Machine (EVM) esegue il bytecode degli smart contract.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Il campo “data” di una transazione può contenere il bytecode per la creazione di un contratto.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "L’aggiornamento Dencun ha introdotto i blob per ridurre i costi dei rollup.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Le librerie web3.js e ethers.js permettono di interagire con Ethereum da applicazioni JavaScript.",
    type: "single",
    options: [
      { text: "Vero", correct: true },
      { text: "Falso", correct: false }
    ]
  }
];
