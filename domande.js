const questions = [
    // --- EVOLUZIONE DEI PARADIGMI ---
    {
        question: "Quale paradigma di calcolo è caratterizzato dall'essere 'metered' (misurato) come una comune utenza (acqua, elettricità)?",
        type: "single",
        options: [
            { text: "Grid Computing", correct: false },
            { text: "Utility Computing", correct: true },
            { text: "Mainframe Computing", correct: false },
            { text: "Green Computing", correct: false }
        ]
    },
    {
        question: "Che differenza c'è tra Edge Computing e Fog Computing?",
        type: "single",
        options: [
            { text: "Sono sinonimi", correct: false },
            { text: "L'Edge elabora i dati sul dispositivo o molto vicino, il Fog agisce come strato intermedio distribuito (es. router/gateway)", correct: true },
            { text: "Il Fog Computing non supporta l'IoT", correct: false },
            { text: "L'Edge Computing si basa esclusivamente su server centralizzati", correct: false }
        ]
    },

    // --- INFRASTRUTTURE E SERVIZI CLOUD ---
    {
        question: "Secondo il modello NIST, quali sono attori ufficiali del Cloud Computing?",
        type: "multiple",
        options: [
            { text: "Cloud Provider", correct: true },
            { text: "Cloud Broker", correct: true },
            { text: "Cloud Auditor", correct: true },
            { text: "Cloud Hacker", correct: false }
        ]
    },
    {
        question: "Nel modello di responsabilità condivisa per il SaaS, di cosa è responsabile il consumatore?",
        type: "single",
        options: [
            { text: "Della gestione del sistema operativo", correct: false },
            { text: "Della sicurezza fisica del data center", correct: false },
            { text: "Della configurazione dei propri dati e degli accessi utente", correct: true },
            { text: "Dell'aggiornamento dell'applicazione", correct: false }
        ]
    },
    {
        question: "Quale tipo di Cloud prevede un'infrastruttura condivisa tra diverse organizzazioni con interessi o missioni comuni?",
        type: "single",
        options: [
            { text: "Public Cloud", correct: false },
            { text: "Private Cloud", correct: false },
            { text: "Community Cloud", correct: true },
            { text: "Hybrid Cloud", correct: false }
        ]
    },

    // --- VIRTUALIZZAZIONE ---
    {
        question: "Qual è la differenza principale tra un Hypervisor di Tipo 1 e uno di Tipo 2?",
        type: "single",
        options: [
            { text: "Il Tipo 1 gira sopra un sistema operativo host, il Tipo 2 gira direttamente sull'hardware", correct: false },
            { text: "Il Tipo 1 (Bare-metal) gira direttamente sull'hardware, il Tipo 2 (Hosted) gira sopra un sistema operativo", correct: true },
            { text: "Il Tipo 2 è più veloce del Tipo 1", correct: false },
            { text: "Non esiste differenza, è solo marketing", correct: false }
        ]
    },
    {
        question: "Quali sono i vantaggi della virtualizzazione?",
        type: "multiple",
        options: [
            { text: "Migliore utilizzo delle risorse hardware (consolidamento)", correct: true },
            { text: "Possibilità di migrare le macchine virtuali live", correct: true },
            { text: "Isolamento tra diverse applicazioni e sistemi operativi", correct: true },
            { text: "Eliminazione totale della necessità di hardware fisico", correct: false }
        ]
    },
    {
        question: "Cosa si intende per VMBR (Virtual-Machine Based Rootkit)?",
        type: "single",
        options: [
            { text: "Un tool per il backup delle VM", correct: false },
            { text: "Un malware che si inserisce sotto il sistema operativo o sotto l'hypervisor legittimo, rendendosi invisibile", correct: true },
            { text: "Un tipo di container sicuro", correct: false },
            { text: "Un sistema di gestione delle licenze", correct: false }
        ]
    },

    // --- CONTAINERIZZAZIONE E KUBERNETES ---
    {
        question: "In cosa differisce un Container da una Macchina Virtuale?",
        type: "single",
        options: [
            { text: "Il container virtualizza l'hardware, la VM virtualizza il SO", correct: false },
            { text: "Il container virtualizza il livello del sistema operativo (condivide il kernel), la VM virtualizza l'hardware", correct: true },
            { text: "I container sono più lenti all'avvio", correct: false },
            { text: "Le VM non offrono isolamento", correct: false }
        ]
    },
    {
        question: "Cos'è un Pod in Kubernetes?",
        type: "single",
        options: [
            { text: "Un server fisico", correct: false },
            { text: "L'unità di scheduling base che contiene uno o più container co-locati", correct: true },
            { text: "Il database di configurazione", correct: false },
            { text: "Un servizio di load balancing", correct: false }
        ]
    },
    {
        question: "Qual è la funzione di 'etcd' in un cluster Kubernetes?",
        type: "single",
        options: [
            { text: "Eseguire i container sui nodi worker", correct: false },
            { text: "Gestire il traffico di rete come proxy", correct: false },
            { text: "Fungere da store key-value distribuito per salvare lo stato e la configurazione del cluster", correct: true },
            { text: "Monitorare le risorse hardware", correct: false }
        ]
    },
    {
        question: "In Kubernetes, come si chiama l'agente che gira su ogni nodo worker e comunica con il control plane?",
        type: "single",
        options: [
            { text: "Kube-proxy", correct: false },
            { text: "Kubelet", correct: true },
            { text: "Scheduler", correct: false },
            { text: "Controller Manager", correct: false }
        ]
    },

    // --- MICROSERVIZI ---
    {
        question: "Qual è uno dei principali vantaggi dell'architettura a Microservizi rispetto a quella Monolitica?",
        type: "single",
        options: [
            { text: "Semplicità di deployment iniziale", correct: false },
            { text: "Scalabilità indipendente dei singoli componenti e diversità tecnologica", correct: true },
            { text: "Minore latenza di rete", correct: false },
            { text: "Transazioni ACID più semplici da gestire", correct: false }
        ]
    },
    {
        question: "Cosa afferma la Legge di Conway?",
        type: "single",
        options: [
            { text: "La potenza di calcolo raddoppia ogni 18 mesi", correct: false },
            { text: "Le organizzazioni progettano sistemi che sono copie delle loro strutture di comunicazione interne", correct: true },
            { text: "Ogni microservizio deve avere il proprio database", correct: false },
            { text: "Il software si espande fino a occupare tutta la memoria disponibile", correct: false }
        ]
    },
    {
        question: "Quali dei seguenti sono principi della '12-Factor App'?",
        type: "multiple",
        options: [
            { text: "Codebase (una singola codebase tracciata in revision control)", correct: true },
            { text: "Dev/Prod Parity (mantenere ambienti simili)", correct: true },
            { text: "Logs (trattare i log come flussi di eventi)", correct: true },
            { text: "Hard-coding delle configurazioni", correct: false }
        ]
    },

    // --- CLOUD OPERATIONS & IaC ---
    {
        question: "Cosa si intende per Infrastructure as Code (IaC)?",
        type: "single",
        options: [
            { text: "Scrivere il codice dell'applicazione in Python", correct: false },
            { text: "Gestire e provisioning dell'infrastruttura attraverso file di configurazione machine-readable invece che configurazione manuale", correct: true },
            { text: "L'uso di server fisici al posto del cloud", correct: false },
            { text: "La documentazione cartacea dell'infrastruttura", correct: false }
        ]
    },
    {
        question: "Qual è la differenza tra approccio Imperativo e Dichiarativo nell'IaC?",
        type: "single",
        options: [
            { text: "L'imperativo descrive lo stato finale desiderato, il dichiarativo descrive i passi per raggiungerlo", correct: false },
            { text: "Il dichiarativo descrive lo stato finale desiderato (what), l'imperativo descrive i passi passo-passo (how)", correct: true },
            { text: "Non c'è differenza", correct: false },
            { text: "L'imperativo usa solo GUI, il dichiarativo solo CLI", correct: false }
        ]
    },
    {
        question: "Quali sono obiettivi del DevOps?",
        type: "multiple",
        options: [
            { text: "Rompere i silos tra team di sviluppo e operazioni", correct: true },
            { text: "Automatizzare test e deployment (CI/CD)", correct: true },
            { text: "Rilasciare software più velocemente e con maggiore affidabilità", correct: true },
            { text: "Aumentare la burocrazia nei processi di change management", correct: false }
        ]
    },

    // --- SICUREZZA ---
    {
        question: "Cosa garantisce l'obiettivo 'Confidentiality' della triade CIA?",
        type: "single",
        options: [
            { text: "Che i sistemi siano sempre attivi", correct: false },
            { text: "Che le informazioni siano accessibili solo a chi è autorizzato", correct: true },
            { text: "Che i dati non siano stati alterati", correct: false },
            { text: "Che l'utente non possa negare un'azione", correct: false }
        ]
    },
    {
        question: "Quale tecnica crittografica utilizza una coppia di chiavi (pubblica e privata)?",
        type: "single",
        options: [
            { text: "Crittografia Simmetrica", correct: false },
            { text: "Crittografia Asimmetrica", correct: true },
            { text: "Hashing", correct: false },
            { text: "Codifica Base64", correct: false }
        ]
    },
    {
        question: "A cosa serve un certificato digitale in una PKI (Public Key Infrastructure)?",
        type: "single",
        options: [
            { text: "A crittografare il database", correct: false },
            { text: "Ad associare univocamente un'identità a una chiave pubblica tramite la firma di una CA", correct: true },
            { text: "A generare password sicure", correct: false },
            { text: "A prevenire attacchi DDoS", correct: false }
        ]
    },
    {
        question: "In un attacco SQL Injection, l'attaccante cerca di:",
        type: "single",
        options: [
            { text: "Indovinare la password provando molte combinazioni", correct: false },
            { text: "Inserire codice SQL malevolo in un campo di input per manipolare il database", correct: true },
            { text: "Intercettare il traffico di rete", correct: false },
            { text: "Sovraccaricare il server con richieste", correct: false }
        ]
    },
    {
        question: "Cosa si intende per IAM (Identity and Access Management)?",
        type: "single",
        options: [
            { text: "La gestione fisica dei server", correct: false },
            { text: "Il framework di policy e tecnologie per gestire identità digitali e controllare l'accesso alle risorse", correct: true },
            { text: "Un protocollo di rete per il trasferimento file", correct: false },
            { text: "Un tipo di firewall", correct: false }
        ]
    }
];
