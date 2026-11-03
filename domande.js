const questions = [
    // --- 1. EVOLUZIONE DEI PARADIGMI DI CALCOLO ---
    {
        question: "Quali sono le caratteristiche distintive del Grid Computing rispetto ai cluster tradizionali?",
        type: "multiple",
        options: [
            { text: "I nodi sono spesso geograficamente distribuiti e non si trovano necessariamente nello stesso data center.", correct: true },
            { text: "I nodi sono strettamente accoppiati (tightly coupled) e gestiti da un singolo sistema operativo centralizzato.", correct: false },
            { text: "I nodi sono eterogenei e scarsamente accoppiati (loosely coupled), collaborando per un obiettivo comune.", correct: true },
            { text: "È un modello utilizzato esclusivamente per l'hosting di siti web statici.", correct: false }
        ]
    },
    {
        question: "Quali affermazioni descrivono correttamente il paradigma del Utility Computing?",
        type: "multiple",
        options: [
            { text: "Si basa su un modello di business in cui le risorse informatiche sono fornite come un servizio misurato (metered service).", correct: true },
            { text: "Richiede necessariamente che l'utente acquisti tutto l'hardware in anticipo (CapEx).", correct: false },
            { text: "Gli utenti pagano solo per ciò che consumano, similarmente alle utenze domestiche come acqua o elettricità.", correct: true },
            { text: "È un sinonimo esatto di Grid Computing senza alcuna differenza commerciale.", correct: false }
        ]
    },
    {
        question: "Perché l'Edge Computing è diventato fondamentale con l'avvento dell'Internet of Things (IoT)?",
        type: "single",
        options: [
            { text: "Perché permette di centralizzare tutti i dati in un unico data center mondiale per ridurre i costi di gestione.", correct: false },
            { text: "Perché elabora i dati vicino alla fonte (es. sensori), riducendo la latenza e il volume di dati da trasmettere al cloud centrale.", correct: true },
            { text: "Perché aumenta la latenza di rete per garantire una maggiore sicurezza dei dati trasmessi.", correct: false },
            { text: "Perché sostituisce completamente la necessità di avere server cloud o database remoti.", correct: false }
        ]
    },

    // --- 2. CLOUD INFRASTRUCTURES & DELIVERY MODELS ---
    {
        question: "Quali responsabilità ricadono tipicamente sul 'Cloud Provider' secondo il modello di riferimento NIST?",
        type: "multiple",
        options: [
            { text: "Acquisire e gestire l'infrastruttura fisica di calcolo sottostante.", correct: true },
            { text: "Eseguire il software cloud che fornisce i servizi ai consumatori.", correct: true },
            { text: "Definire le policy di accesso ai dati interni dell'azienda cliente.", correct: false },
            { text: "Gestire l'utilizzo finale dell'applicazione da parte degli utenti del cliente.", correct: false }
        ]
    },
    {
        question: "Nel modello IaaS (Infrastructure as a Service), quali componenti sono gestiti dall'utente (Cloud Consumer)?",
        type: "multiple",
        options: [
            { text: "Il sistema operativo, inclusi aggiornamenti e patch di sicurezza.", correct: true },
            { text: "Le applicazioni distribuite e i relativi dati.", correct: true },
            { text: "L'hardware fisico dei server e lo storage a livello fisico.", correct: false },
            { text: "L'hypervisor che gestisce la virtualizzazione dell'hardware.", correct: false }
        ]
    },
    {
        question: "Quali caratteristiche definiscono il modello SaaS (Software as a Service)?",
        type: "multiple",
        options: [
            { text: "L'applicazione è interamente gestita dal provider e accessibile via rete (solitamente web).", correct: true },
            { text: "L'utente non ha controllo sull'infrastruttura sottostante né sulle capacità applicative individuali.", correct: true },
            { text: "L'utente deve installare manualmente il software su ogni macchina locale.", correct: false },
            { text: "È il modello ideale per sviluppare applicazioni personalizzate partendo dal sistema operativo.", correct: false }
        ]
    },
    {
        question: "In quale scenario l'utilizzo di un Hybrid Cloud è particolarmente vantaggioso?",
        type: "single",
        options: [
            { text: "Quando un'azienda vuole eliminare completamente il proprio dipartimento IT.", correct: false },
            { text: "Quando si desidera mantenere i dati sensibili in un'infrastruttura privata locale (on-premise) sfruttando il cloud pubblico per la potenza di calcolo scalabile.", correct: true },
            { text: "Quando l'azienda non ha alcuna connettività internet affidabile.", correct: false },
            { text: "Quando si vuole utilizzare un solo provider per evitare complessità contrattuali.", correct: false }
        ]
    },
    {
        question: "Qual è il ruolo del 'Cloud Broker'?",
        type: "single",
        options: [
            { text: "È l'entità che possiede fisicamente i data center.", correct: false },
            { text: "È un intermediario che gestisce l'uso, le prestazioni e la consegna dei servizi cloud, negoziando tra provider e consumatori.", correct: true },
            { text: "È responsabile della manutenzione hardware dei server.", correct: false },
            { text: "È un ente governativo che certifica la sicurezza del cloud.", correct: false }
        ]
    },

    // --- 3. VIRTUALIZZAZIONE ---
    {
        question: "Quali sono i vantaggi principali derivanti dall'utilizzo della virtualizzazione (Macchine Virtuali)?",
        type: "multiple",
        options: [
            { text: "Consolidamento dei server, permettendo a più workload di girare sullo stesso hardware fisico.", correct: true },
            { text: "Isolamento delle risorse, garantendo che un problema su una VM non impatti direttamente le altre.", correct: true },
            { text: "Eliminazione totale della necessità di avere un sistema operativo.", correct: false },
            { text: "Accesso diretto all'hardware senza alcun overhead prestazionale.", correct: false }
        ]
    },
    {
        question: "Cosa distingue un Hypervisor di Tipo 1 (Bare-Metal) da uno di Tipo 2 (Hosted)?",
        type: "single",
        options: [
            { text: "Il Tipo 1 gira direttamente sull'hardware per massimizzare le prestazioni, mentre il Tipo 2 gira sopra un sistema operativo ospite.", correct: true },
            { text: "Il Tipo 1 è usato solo per scopi di test, mentre il Tipo 2 è usato nei data center di produzione.", correct: false },
            { text: "Il Tipo 2 non supporta l'esecuzione di sistemi operativi Windows.", correct: false },
            { text: "Non ci sono differenze tecniche, è solo una distinzione commerciale.", correct: false }
        ]
    },
    {
        question: "Cos'è un VMBR (Virtual-Machine Based Rootkit) e perché è pericoloso?",
        type: "single",
        options: [
            { text: "È un tool di amministrazione legittimo per recuperare password perse.", correct: false },
            { text: "È un malware che si inserisce tra l'hardware e il sistema operativo, ottenendo il controllo totale e rimanendo invisibile al sistema ospite.", correct: true },
            { text: "È un virus che colpisce solo i file di testo all'interno di una VM.", correct: false },
            { text: "È un componente hardware difettoso che rallenta la CPU.", correct: false }
        ]
    },

    // --- 4. CONTAINERIZZAZIONE & DOCKER ---
    {
        question: "Quali affermazioni descrivono correttamente la differenza tra Container e Macchine Virtuali (VM)?",
        type: "multiple",
        options: [
            { text: "I container condividono il kernel del sistema operativo host, rendendoli più leggeri delle VM.", correct: true },
            { text: "Le VM includono un intero sistema operativo guest, occupando più risorse (RAM/CPU).", correct: true },
            { text: "I container offrono un isolamento hardware completo superiore alle VM.", correct: false },
            { text: "Le VM si avviano istantaneamente, mentre i container richiedono minuti per il boot.", correct: false }
        ]
    },
    {
        question: "Quali sono i vantaggi principali dell'utilizzo di Docker?",
        type: "multiple",
        options: [
            { text: "Portabilità: un container funziona allo stesso modo su qualsiasi ambiente che supporti Docker.", correct: true },
            { text: "Efficienza: riduce l'overhead di risorse rispetto alla virtualizzazione hardware completa.", correct: true },
            { text: "Persistenza implicita: i dati nei container sono salvati automaticamente per sempre senza configurazioni.", correct: false },
            { text: "Eliminazione della necessità di testare il software.", correct: false }
        ]
    },
    {
        question: "Quali sono le limitazioni di Docker Compose rispetto a un orchestratore completo?",
        type: "multiple",
        options: [
            { text: "Non gestisce nativamente il failover automatico o il ripristino dei nodi in caso di guasto.", correct: true },
            { text: "Non è progettato per gestire il bilanciamento del carico su cluster di grandi dimensioni distribuiti.", correct: true },
            { text: "Non permette di definire variabili d'ambiente.", correct: false },
            { text: "Non supporta la definizione di più container in un singolo file.", correct: false }
        ]
    },

    // --- 5. ORCHESTRAZIONE & KUBERNETES ---
    {
        question: "Quali compiti svolge un sistema di orchestrazione dei container come Kubernetes?",
        type: "multiple",
        options: [
            { text: "Scheduling automatico dei container sui nodi disponibili in base alle risorse.", correct: true },
            { text: "Gestione del self-healing, riavviando i container falliti o sostituendo i nodi guasti.", correct: true },
            { text: "Scrittura automatica del codice dell'applicazione.", correct: false },
            { text: "Gestione fisica dell'alimentazione elettrica dei server.", correct: false }
        ]
    },
    {
        question: "Qual è la funzione del componente 'etcd' nell'architettura di Kubernetes?",
        type: "single",
        options: [
            { text: "È il motore di containerizzazione che sostituisce Docker.", correct: false },
            { text: "È uno store key-value distribuito e persistente che conserva lo stato e la configurazione dell'intero cluster.", correct: true },
            { text: "È il componente che espone l'interfaccia grafica per gli utenti.", correct: false },
            { text: "È il load balancer che distribuisce il traffico internet.", correct: false }
        ]
    },
    {
        question: "Cosa rappresenta un 'Pod' in Kubernetes?",
        type: "single",
        options: [
            { text: "Un singolo server fisico nel data center.", correct: false },
            { text: "L'unità base di scheduling che raggruppa uno o più container che condividono risorse (rete, storage).", correct: true },
            { text: "Un database relazionale gestito da Kubernetes.", correct: false },
            { text: "Un firewall virtuale.", correct: false }
        ]
    },
    {
        question: "Quali sono le responsabilità del 'Kubelet' su un nodo worker?",
        type: "multiple",
        options: [
            { text: "Comunicare con il control plane per ricevere istruzioni.", correct: true },
            { text: "Assicurarsi che i container descritti nel PodSpec stiano effettivamente girando e siano in salute.", correct: true },
            { text: "Decidere su quale nodo del cluster posizionare un nuovo Pod.", correct: false },
            { text: "Gestire il database etcd.", correct: false }
        ]
    },

    // --- 6. MICROSERVIZI & ARCHITETTURA ---
    {
        question: "Quali problemi dell'architettura monolitica vengono risolti dai microservizi?",
        type: "multiple",
        options: [
            { text: "La difficoltà di scalare singole funzionalità in modo indipendente.", correct: true },
            { text: "L'obbligo di utilizzare un unico stack tecnologico/linguaggio per l'intera applicazione.", correct: true },
            { text: "La complessità eccessiva del deployment, dove un piccolo cambiamento richiede il rilascio dell'intero sistema.", correct: true },
            { text: "La latenza di rete tra i componenti interni (che nei monoliti è inesistente).", correct: false }
        ]
    },
    {
        question: "Cosa afferma la Legge di Conway riguardo alla progettazione del software?",
        type: "single",
        options: [
            { text: "Il software si espande fino a riempire tutta la memoria disponibile.", correct: false },
            { text: "Le organizzazioni progettano sistemi che sono copie delle loro strutture di comunicazione interne.", correct: true },
            { text: "Ogni microservizio deve avere meno di 100 righe di codice.", correct: false },
            { text: "La velocità di calcolo raddoppia ogni 18 mesi.", correct: false }
        ]
    },
    {
        question: "Quali sono alcuni dei principi della '12-Factor App' per le applicazioni cloud-native?",
        type: "multiple",
        options: [
            { text: "Codebase unica tracciata con controllo di versione.", correct: true },
            { text: "Gestione delle dipendenze esplicita e isolata.", correct: true },
            { text: "Parità tra ambienti di sviluppo, staging e produzione (Dev/Prod parity).", correct: true },
            { text: "Configurazioni hard-coded direttamente nel codice sorgente.", correct: false }
        ]
    },
    {
        question: "Come viene gestita la persistenza dei dati in un'architettura a microservizi ideale?",
        type: "single",
        options: [
            { text: "Tutti i microservizi scrivono su un unico database gigante condiviso.", correct: false },
            { text: "Ogni microservizio possiede e gestisce il proprio database in modo esclusivo (Decentralization of data).", correct: true },
            { text: "I dati vengono salvati solo nella memoria volatile per velocità.", correct: false },
            { text: "Si utilizzano solo file di testo condivisi via FTP.", correct: false }
        ]
    },

    // --- 7. CLOUD OPERATIONS (DevOps, IaC, FinOps) ---
    {
        question: "Cosa si intende per Infrastructure as Code (IaC)?",
        type: "single",
        options: [
            { text: "L'uso di hardware fisico dedicato per scrivere codice.", correct: false },
            { text: "La gestione e il provisioning dell'infrastruttura tramite file di definizione leggibili dalla macchina (codice) invece che configurazione manuale.", correct: true },
            { text: "La pratica di scrivere documentazione cartacea per i server.", correct: false },
            { text: "Un linguaggio di programmazione per creare interfacce grafiche.", correct: false }
        ]
    },
    {
        question: "Qual è la differenza tra l'approccio 'Dichiarativo' e 'Imperativo' nell'IaC?",
        type: "single",
        options: [
            { text: "Non c'è differenza, sono sinonimi.", correct: false },
            { text: "L'imperativo definisce 'cosa' vuoi ottenere (stato finale), il dichiarativo definisce 'come' ottenerlo (passaggi).", correct: false },
            { text: "Il dichiarativo definisce lo stato finale desiderato e il tool calcola come raggiungerlo; l'imperativo elenca i passaggi esatti da eseguire.", correct: true },
            { text: "Il dichiarativo funziona solo su AWS, l'imperativo solo su Azure.", correct: false }
        ]
    },
    {
        question: "Quali sono i vantaggi dell'adozione delle pratiche DevOps?",
        type: "multiple",
        options: [
            { text: "Rottura dei silos tra i team di sviluppo (Dev) e quelli operativi (Ops).", correct: true },
            { text: "Automazione dei processi di test, integrazione e rilascio (CI/CD).", correct: true },
            { text: "Rilascio di software più frequente e affidabile.", correct: true },
            { text: "Aumento della burocrazia e dei tempi di approvazione manuale.", correct: false }
        ]
    },
    {
        question: "Cosa significa 'Continuous Integration' (CI)?",
        type: "single",
        options: [
            { text: "Rilasciare il software in produzione una volta l'anno.", correct: false },
            { text: "La pratica in cui gli sviluppatori uniscono frequentemente le modifiche al codice in un repository centrale, innescando build e test automatici.", correct: true },
            { text: "L'installazione manuale degli aggiornamenti sui server dei clienti.", correct: false },
            { text: "La collaborazione tra il reparto vendite e quello marketing.", correct: false }
        ]
    },
    {
        question: "Qual è l'obiettivo principale del dominio 'FinOps' nelle Cloud Operations?",
        type: "single",
        options: [
            { text: "Massimizzare la spesa per ottenere sconti dai provider.", correct: false },
            { text: "Portare la responsabilità finanziaria nelle decisioni ingegneristiche per allineare la spesa cloud al valore di business.", correct: true },
            { text: "Gestire esclusivamente gli stipendi del personale IT.", correct: false },
            { text: "Evitare l'uso del cloud per risparmiare denaro.", correct: false }
        ]
    },
    {
        question: "Cosa si intende per 'Observability' in un sistema distribuito?",
        type: "single",
        options: [
            { text: "Avere delle telecamere di sicurezza nel data center.", correct: false },
            { text: "La capacità di capire lo stato interno di un sistema basandosi sui dati che produce (log, metriche, tracce) per identificare e risolvere problemi.", correct: true },
            { text: "La capacità di osservare gli utenti mentre usano l'applicazione.", correct: false },
            { text: "Un tool che riavvia automaticamente i server.", correct: false }
        ]
    },

    // --- 8. CYBERSECURITY FUNDAMENTALS ---
    {
        question: "Quali sono i tre pilastri della triade CIA nella sicurezza informatica?",
        type: "multiple",
        options: [
            { text: "Confidentiality (Riservatezza): i dati sono accessibili solo a chi è autorizzato.", correct: true },
            { text: "Integrity (Integrità): i dati non vengono alterati in modo non autorizzato.", correct: true },
            { text: "Availability (Disponibilità): i sistemi sono accessibili quando necessario.", correct: true },
            { text: "Anonymity (Anonimato): l'identità dell'utente non è mai tracciabile.", correct: false }
        ]
    },
    {
        question: "Che tipo di attacco è un 'Man-in-the-Middle' (MITM)?",
        type: "single",
        options: [
            { text: "Un attacco in cui un malintenzionato si interpone segretamente tra due parti che comunicano, intercettando o alterando i dati.", correct: true },
            { text: "Un attacco che mira a sovraccaricare un server con troppe richieste.", correct: false },
            { text: "Un tentativo di indovinare la password provando tutte le combinazioni.", correct: false },
            { text: "Un virus che cancella i file dal disco rigido.", correct: false }
        ]
    },
    {
        question: "Cosa si intende per 'Social Engineering' (Ingegneria Sociale)?",
        type: "single",
        options: [
            { text: "La progettazione di social network sicuri.", correct: false },
            { text: "L'arte di manipolare le persone affinché compiano azioni o divulghino informazioni riservate (es. Phishing).", correct: true },
            { text: "L'uso di algoritmi complessi per decifrare password.", correct: false },
    