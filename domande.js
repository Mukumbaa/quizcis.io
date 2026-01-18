
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
            { text: "La costruzione di firewall fisici.", correct: false }
        ]
    },

    // --- 9. RETI E SICUREZZA APPLICATIVA ---
    {
        question: "A quale livello del modello OSI operano tipicamente gli attacchi SQL Injection e XSS?",
        type: "single",
        options: [
            { text: "Layer 1 (Fisico)", correct: false },
            { text: "Layer 3 (Rete)", correct: false },
            { text: "Layer 4 (Trasporto)", correct: false },
            { text: "Layer 7 (Applicazione)", correct: true }
        ]
    },
    {
        question: "Cosa fa un attacco SQL Injection?",
        type: "single",
        options: [
            { text: "Inietta codice malevolo in un database tramite un campo di input non sanificato, manipolando le query eseguite.", correct: true },
            { text: "Inietta pacchetti falsi nella rete per rallentare la connessione.", correct: false },
            { text: "Cerca di indovinare la password di amministratore.", correct: false },
            { text: "Cripta i dati dell'utente per chiedere un riscatto.", correct: false }
        ]
    },
    {
        question: "Qual è lo scopo principale di un firewall?",
        type: "single",
        options: [
            { text: "Aumentare la velocità della connessione internet.", correct: false },
            { text: "Monitorare e controllare il traffico di rete in entrata e in uscita basandosi su regole di sicurezza predeterminate.", correct: true },
            { text: "Rimuovere i virus dai file scaricati.", correct: false },
            { text: "Gestire le identità degli utenti.", correct: false }
        ]
    },
    {
        question: "Perché Wireshark è considerato uno strumento passivo (packet sniffer)?",
        type: "single",
        options: [
            { text: "Perché può intercettare e analizzare il traffico di rete ma non può manipolare attivamente i pacchetti o crittografarli.", correct: true },
            { text: "Perché funziona solo quando il computer è spento.", correct: false },
            { text: "Perché invia pacchetti falsi per testare la rete.", correct: false },
            { text: "Perché blocca automaticamente gli attacchi.", correct: false }
        ]
    },

    // --- 10. CRITTOGRAFIA E PKI ---
    {
        question: "Qual è la differenza fondamentale tra crittografia simmetrica e asimmetrica?",
        type: "single",
        options: [
            { text: "La simmetrica usa chiavi pubbliche, l'asimmetrica usa chiavi private.", correct: false },
            { text: "La simmetrica usa la stessa chiave per cifrare e decifrare; l'asimmetrica usa una coppia di chiavi (pubblica e privata).", correct: true },
            { text: "La simmetrica è più lenta ma più sicura dell'asimmetrica.", correct: false },
            { text: "L'asimmetrica non richiede alcuna gestione delle chiavi.", correct: false }
        ]
    },
    {
        question: "In una infrastruttura a chiave pubblica (PKI), qual è il ruolo della Certification Authority (CA)?",
        type: "single",
        options: [
            { text: "Generare le password per gli utenti.", correct: false },
            { text: "Agire come terza parte fidata che firma e rilascia certificati digitali per garantire l'identità del possessore di una chiave pubblica.", correct: true },
            { text: "Criptare tutto il traffico internet mondiale.", correct: false },
            { text: "Gestire i firewall delle aziende.", correct: false }
        ]
    },
    {
        question: "Cosa garantisce la firma digitale su un certificato?",
        type: "multiple",
        options: [
            { text: "Autenticità: garantisce che il certificato provenga da una fonte fidata (la CA).", correct: true },
            { text: "Integrità: garantisce che il contenuto del certificato non sia stato modificato dopo la firma.", correct: true },
            { text: "Confidenzialità: cripta il contenuto del certificato rendendolo illeggibile.", correct: false },
            { text: "Velocità: rende la trasmissione del certificato più rapida.", correct: false }
        ]
    },

    // --- 11. CLOUD SECURITY & IAM ---
    {
        question: "Cosa definisce il 'Modello di Responsabilità Condivisa' nel cloud?",
        type: "single",
        options: [
            { text: "Il provider è responsabile di tutto, dalla sicurezza fisica ai dati dell'utente.", correct: false },
            { text: "L'utente è responsabile di tutto, il provider fornisce solo l'elettricità.", correct: false },
            { text: "La sicurezza è divisa: il provider gestisce la sicurezza 'del' cloud (infrastruttura), il cliente gestisce la sicurezza 'nel' cloud (dati, configurazioni, accessi).", correct: true },
            { text: "È un modello dove i costi sono condivisi tra più aziende.", correct: false }
        ]
    },
    {
        question: "Cosa si intende per IAM (Identity and Access Management)?",
        type: "single",
        options: [
            { text: "Un protocollo per il trasferimento di file sicuri.", correct: false },
            { text: "Il framework di policy e tecnologie per gestire le identità digitali e controllare chi ha accesso a quali risorse.", correct: true },
            { text: "Un tipo di firewall applicativo.", correct: false },
            { text: "La gestione fisica degli accessi ai data center.", correct: false }
        ]
    },
    {
        question: "Qual è il principio del 'Least Privilege' (Minimo Privilegio)?",
        type: "single",
        options: [
            { text: "Fornire a tutti gli utenti i permessi di amministratore per evitare blocchi operativi.", correct: false },
            { text: "Garantire agli utenti e ai servizi solo i permessi strettamente necessari per svolgere i propri compiti, e niente di più.", correct: true },
            { text: "Non dare alcun permesso a nessuno, richiedendo approvazione per ogni singola azione.", correct: false },
            { text: "Cambiare i permessi in modo casuale ogni giorno.", correct: false }
        ]
    },
    {
        question: "Cos'è l'autenticazione a più fattori (MFA)?",
        type: "single",
        options: [
            { text: "L'uso di una password molto lunga e complessa.", correct: false },
            { text: "Un sistema che richiede due o più prove di identità diverse (es. password + codice SMS + impronta) per accedere.", correct: true },
            { text: "L'autenticazione ripetuta ogni 5 minuti.", correct: false },
            { text: "L'uso di più account diversi per lo stesso servizio.", correct: false }
        ]
    },
    {
        question: "Quale strumento permette agli utenti di accedere a più applicazioni con un solo set di credenziali?",
        type: "single",
        options: [
            { text: "VPN (Virtual Private Network)", correct: false },
            { text: "SSO (Single Sign-On)", correct: true },
            { text: "Firewall", correct: false },
            { text: "Antivirus", correct: false }
        ]
    },
    {
        question: "In AWS IAM, qual è la policy di default per le richieste?",
        type: "single",
        options: [
            { text: "Implicit Allow: tutto è permesso a meno che non sia vietato.", correct: false },
            { text: "Implicit Deny: tutto è negato a meno che una policy non lo permetta esplicitamente.", correct: true },
            { text: "Dipende dalla regione geografica.", correct: false },
            { text: "Dipende dall'orario della richiesta.", correct: false }
        ]
    },
    {
        question: "Cosa si intende per 'Data Encryption at Rest'?",
        type: "single",
        options: [
            { text: "Cifrare i dati mentre vengono trasferiti attraverso la rete.", correct: false },
            { text: "Cifrare i dati quando sono archiviati su disco (es. database, storage a oggetti) per proteggerli da accessi fisici o furti.", correct: true },
            { text: "Cifrare solo i backup vecchi.", correct: false },
            { text: "Cifrare i dati nella RAM mentre vengono elaborati.", correct: false }
        ]
    },
    {
        question: "Come aiuta la segmentazione della rete (Network Segmentation) nella sicurezza cloud?",
        type: "single",
        options: [
            { text: "Aumenta la velocità di download.", correct: false },
            { text: "Isola i sistemi e limita il movimento laterale degli attaccanti in caso di compromissione di una parte della rete.", correct: true },
            { text: "Riduce il numero di indirizzi IP necessari.", correct: false },
            { text: "Elimina la necessità di usare password.", correct: false }
        ]
    },
    {
        question: "Qual è lo scopo del 'DevSecOps'?",
        type: "single",
        options: [
            { text: "Separare completamente il team di sicurezza dagli sviluppatori.", correct: false },
            { text: "Integrare la sicurezza in ogni fase del ciclo di vita dello sviluppo software (dalla progettazione al rilascio), automatizzando i controlli.", correct: true },
            { text: "Assumere solo sviluppatori che siano anche hacker.", correct: false },
            { text: "Rallentare lo sviluppo per fare controlli manuali alla fine.", correct: false }
        ]
    },
    {
        question: "Cos'è una 'Identity Federation'?",
        type: "single",
        options: [
            { text: "Un accordo tra sistemi IAM diversi per condividere identità, permettendo agli utenti di usare le credenziali di un'organizzazione per accedere ai servizi di un'altra.", correct: true },
            { text: "La fusione di due aziende cloud.", correct: false },
            { text: "Un database centralizzato di tutte le identità mondiali.", correct: false },
            { text: "Un metodo per clonare gli account utente.", correct: false }
        ]
    },
    // --- CLOUD MODELS & OPERATIONS ---
    {
        question: "Nel modello IaaS (Infrastructure as Service), quali elementi sono gestiti dal Provider?",
        type: "multiple",
        options: [
            { text: "Networking e Storage", correct: true },
            { text: "Sistema Operativo", correct: false },
            { text: "Server e Hypervisor", correct: true },
            { text: "Dati e Applicazioni", correct: false }
        ]
    },
    {
        question: "Quale modello di delivery solleva il consumatore dalla gestione di tutto, tranne che dell'interfaccia?",
        type: "single",
        options: [
            { text: "IaaS", correct: false },
            { text: "PaaS", correct: false },
            { text: "SaaS", correct: true },
            { text: "On Premise", correct: false }
        ]
    },
    {
        question: "Cosa si intende per 'Multiplexing' nel contesto della virtualizzazione?",
        type: "single",
        options: [
            { text: "La creazione di un oggetto virtuale da diversi tipi di oggetti fisici", correct: false },
            { text: "La creazione di più oggetti virtuali da una singola istanza di un oggetto fisico", correct: true },
            { text: "L'aggregazione di più dischi fisici in un unico disco RAID", correct: false },
            { text: "L'emulazione di una RAM tramite disco fisico", correct: false }
        ]
    },
    {
        question: "Quali sono i domini principali (Core Domains) della Cloud Operations?",
        type: "multiple",
        options: [
            { text: "Infrastructure & Provisioning", correct: true },
            { text: "Observability", correct: true },
            { text: "FinOps", correct: true },
            { text: "Marketing & Sales", correct: false }
        ]
    },
    {
        question: "Qual è l'obiettivo principale del FinOps?",
        type: "single",
        options: [
            { text: "Aumentare le prestazioni della CPU", correct: false },
            { text: "Allineare la spesa cloud al valore aziendale", correct: true },
            { text: "Eliminare completamente i costi del cloud", correct: false },
            { text: "Gestire solo le licenze software", correct: false }
        ]
    },

    // --- VIRTUALIZATION & CONTAINERS ---
    {
        question: "Qual è una caratteristica chiave della containerizzazione rispetto alle VM?",
        type: "single",
        options: [
            { text: "I container includono un sistema operativo completo", correct: false },
            { text: "I container condividono il kernel del sistema operativo host", correct: true },
            { text: "I container sono più pesanti delle macchine virtuali", correct: false },
            { text: "I container non possono correre in isolamento", correct: false }
        ]
    },
    {
        question: "Kubernetes (K8S) permette di gestire:",
        type: "multiple",
        options: [
            { text: "Il load balancing automatico tra istanze", correct: true },
            { text: "Il monitoraggio del consumo di risorse", correct: true },
            { text: "La scrittura del codice sorgente dell'app", correct: false },
            { text: "Lo spreading del carico applicativo sulla host infrastructure", correct: true }
        ]
    },

    // --- INFRASTRUCTURE AS CODE (IaC) ---
    {
        question: "Cosa definisce l'approccio 'Declarative IaC'?",
        type: "single",
        options: [
            { text: "Definisce le istruzioni passo-passo per raggiungere uno stato", correct: false },
            { text: "Definisce lo stato desiderato e il tool assicura che l'ambiente corrisponda", correct: true },
            { text: "È basato esclusivamente su script Bash", correct: false },
            { text: "Non permette il versionamento", correct: false }
        ]
    },
    {
        question: "Quali sono i vantaggi dell'Infrastructure as Code (IaC)?",
        type: "multiple",
        options: [
            { text: "Riproducibilità del sistema", correct: true },
            { text: "Riduzione degli errori umani", correct: true },
            { text: "Eliminazione della necessità di test", correct: false },
            { text: "Versionamento tramite Git", correct: true }
        ]
    },
    {
        question: "In Terraform, quale comando viene usato per vedere un'anteprima delle modifiche (dry run)?",
        type: "single",
        options: [
            { text: "terraform init", correct: false },
            { text: "terraform apply", correct: false },
            { text: "terraform plan", correct: true },
            { text: "terraform destroy", correct: false }
        ]
    },
    {
        question: "Secondo le best practice IaC, come deve essere gestita la documentazione?",
        type: "single",
        options: [
            { text: "È suggerito aggiungere molti commenti e documentazione accessoria", correct: false },
            { text: "Aggiungere commenti o documentazione accessoria non è né suggerito né desiderabile", correct: true },
            { text: "La documentazione deve essere scritta solo in PDF esterni", correct: false },
            { text: "Deve essere gestita manualmente dai sistemisti", correct: false }
        ]
    },
    {
        question: "Quale linguaggio usa nativamente Terraform?",
        type: "single",
        options: [
            { text: "Python", correct: false },
            { text: "YAML", correct: false },
            { text: "HSL (Hashicorp Configuration Language)", correct: true },
            { text: "Java", correct: false }
        ]
    },

    // --- CYBERSECURITY FUNDAMENTALS ---
    {
        question: "Quali sono i tre pilastri della Triade C.I.A.?",
        type: "multiple",
        options: [
            { text: "Confidentiality", correct: true },
            { text: "Integrity", correct: true },
            { text: "Availability", correct: true },
            { text: "Control", correct: false }
        ]
    },
    {
        question: "Cosa si intende per 'Integrità' nella sicurezza informatica?",
        type: "single",
        options: [
            { text: "Assicurare che l'informazione sia accessibile solo a utenti autorizzati", correct: false },
            { text: "Garantire che i sistemi siano accessibili quando necessario", correct: false },
            { text: "Mantenere l'accuratezza e l'affidabilità dei dati prevenendo alterazioni non autorizzate", correct: true },
            { text: "Nascondere l'identità dell'utente", correct: false }
        ]
    },
    {
        question: "Quali tra questi sono esempi di minacce (threats) intenzionali?",
        type: "multiple",
        options: [
            { text: "Hacker", correct: true },
            { text: "Disastri naturali", correct: false },
            { text: "Cybercriminali", correct: true },
            { text: "Errore umano involontario", correct: false }
        ]
    },
    {
        question: "Le minacce 'Internal' provengono da:",
        type: "single",
        options: [
            { text: "Hacker esterni all'organizzazione", correct: false },
            { text: "Dipendenti o collaboratori interni", correct: true },
            { text: "Terremoti o inondazioni", correct: false },
            { text: "Botnet mondiali", correct: false }
        ]
    },

    // --- NETWORK & WEB SECURITY ---
    {
        question: "A quale livello del modello OSI agisce la messa in sicurezza dell'hardware (tampering/theft)?",
        type: "single",
        options: [
            { text: "Layer 1 (Physical)", correct: true },
            { text: "Layer 3 (Network)", correct: false },
            { text: "Layer 7 (Application)", correct: false },
            { text: "Layer 4 (Transport)", correct: false }
        ]
    },
    {
        question: "Quale layer del modello OSI si occupa della protezione contro SQL Injection e XSS?",
        type: "single",
        options: [
            { text: "Layer 2", correct: false },
            { text: "Layer 3", correct: false },
            { text: "Layer 7 (Application)", correct: true },
            { text: "Layer 1", correct: false }
        ]
    },
    {
        question: "Wireshark è uno strumento che permette di:",
        type: "multiple",
        options: [
            { text: "Catturare e analizzare il traffico di rete in tempo reale", correct: true },
            { text: "Manipolare i messaggi durante un attacco MITM", correct: false },
            { text: "Eseguire il troubleshooting di rete", correct: true },
            { text: "Analizzare i flag contenuti nei pacchetti per ogni layer", correct: true }
        ]
    },
    {
        question: "Perché i protocolli IP, TCP e UDP sono considerati insicuri per natura?",
        type: "single",
        options: [
            { text: "Perché non includono meccanismi di crittografia per ragioni storiche", correct: true },
            { text: "Perché sono troppo lenti", correct: false },
            { text: "Perché non permettono il routing", correct: false },
            { text: "Perché sono stati creati da hacker", correct: false }
        ]
    },
    {
        question: "In un attacco SQL Injection comune, quale stringa viene spesso usata per bypassare il login?",
        type: "single",
        options: [
            { text: "ADMIN = TRUE", correct: false },
            { text: "' OR '1'='1", correct: true },
            { text: "<script>alert(1)</script>", correct: false },
            { text: "DELETE FROM users", correct: false }
        ]
    },
    {
        question: "Quale porta è tipicamente bersaglio di attacchi ai servizi web?",
        type: "single",
        options: [
            { text: "Porta 22", correct: false },
            { text: "Porta 80", correct: true },
            { text: "Porta 443", correct: false },
            { text: "Porta 21", correct: false }
        ]
    },
    {
        question: "Cos'è l'OWASP Top 10?",
        type: "single",
        options: [
            { text: "Una lista dei 10 migliori antivirus", correct: false },
            { text: "Un documento che elenca i 10 rischi più critici per la sicurezza delle applicazioni web", correct: true },
            { text: "Un tool per il cracking delle password", correct: false },
            { text: "Una classifica dei cloud provider", correct: false }
        ]
    },

    // --- CRYPTOGRAPHY & PKI ---
    {
        question: "Nella crittografia simmetrica:",
        type: "single",
        options: [
            { text: "Si usano due chiavi diverse (pubblica e privata)", correct: false },
            { text: "Si usa la stessa chiave per cifrare e decifrare", correct: true },
            { text: "Non è necessario condividere la chiave", correct: false },
            { text: "È molto più lenta della crittografia asimmetrica", correct: false }
        ]
    },
    {
        question: "Qual è lo svantaggio principale della crittografia asimmetrica?",
        type: "single",
        options: [
            { text: "Richiede la condivisione della chiave segreta", correct: false },
            { text: "È computazionalmente più pesante (lenta)", correct: true },
            { text: "Non è sicura per canali aperti", correct: false },
            { text: "Usa solo una chiave", correct: false }
        ]
    },
    {
        question: "La crittografia 'Hybrid' (usata in TLS) combina i metodi:",
        type: "single",
        options: [
            { text: "Usando asimmetrica per lo scambio della chiave e simmetrica per lo stream dei dati", correct: true },
            { text: "Usando simmetrica per lo scambio della chiave e asimmetrica per i dati", correct: false },
            { text: "Usando solo chiavi pubbliche", correct: false },
            { text: "Cifrando i dati due volte con lo stesso algoritmo", correct: false }
        ]
    },
    {
        question: "Qual è il ruolo della Certification Authority (CA) in una PKI?",
        type: "single",
        options: [
            { text: "Verificare solo l'identità tecnica del pacchetto", correct: false },
            { text: "Firmare e rilasciare certificati digitali che attestano la proprietà di una chiave pubblica", correct: true },
            { text: "Generare le password degli utenti", correct: false },
            { text: "Eseguire la scansione dei malware", correct: false }
        ]
    },
    {
        question: "Quali entità fanno parte dell'ambiente PKI?",
        type: "multiple",
        options: [
            { text: "Certification Authority (CA)", correct: true },
            { text: "Registration Authority (RA)", correct: true },
            { text: "Verification Authority (VA)", correct: true },
            { text: "Encryption Authority (EA)", correct: false }
        ]
    },

    // --- CLOUD SECURITY & SHARED RESPONSIBILITY ---
    {
        question: "Nel modello di Responsabilità Condivisa, chi è responsabile della sicurezza 'DEL' Cloud (infrastruttura fisica)?",
        type: "single",
        options: [
            { text: "Il Consumatore", correct: false },
            { text: "Il Cloud Provider", correct: true },
            { text: "Entrambi in parti uguali", correct: false },
            { text: "Il Governo", correct: false }
        ]
    },
    {
        question: "In un modello SaaS, su cosa ricade la responsabilità del Consumatore?",
        type: "multiple",
        options: [
            { text: "Dati", correct: true },
            { text: "Governance", correct: true },
            { text: "Networking fisico", correct: false },
            { text: "Manutenzione del server", correct: false }
        ]
    },
    {
        question: "Quale di questi è un principio di Cloud Security?",
        type: "multiple",
        options: [
            { text: "Network Segmentation", correct: true },
            { text: "Identity and Access Management (IAM)", correct: true },
            { text: "Data Encryption", correct: true },
            { text: "Physical Server Ownership", correct: false }
        ]
    },
    {
        question: "Cos'è un 'Orphaned Resource' nel contesto FinOps?",
        type: "single",
        options: [
            { text: "Una risorsa senza backup", correct: false },
            { text: "Una risorsa cloud attiva e pagata ma non più utilizzata", correct: true },
            { text: "Una risorsa hackerata", correct: false },
            { text: "Un server on-premise", correct: false }
        ]
    },

    // --- IDENTITY & ACCESS MANAGEMENT (IAM) ---
    {
        question: "Cosa si intende per 'Provisioning' nel ciclo di vita IAM?",
        type: "single",
        options: [
            { text: "Rimuovere gli account quando un dipendente lascia l'azienda", correct: false },
            { text: "Creare gli account e fornire le identità digitali", correct: true },
            { text: "Assegnare permessi a un database", correct: false },
            { text: "Verificare la password", correct: false }
        ]
    },
    {
        question: "Qual è la differenza tra Autenticazione e Autorizzazione?",
        type: "single",
        options: [
            { text: "Sono sinonimi", correct: false },
            { text: "L'autenticazione verifica l'identità, l'autorizzazione determina cosa l'entità può fare", correct: true },
            { text: "L'autorizzazione avviene prima dell'autenticazione", correct: false },
            { text: "L'autenticazione riguarda solo i dati, l'autorizzazione solo gli utenti", correct: false }
        ]
    },
    {
        question: "Quali sono esempi di fattori 'Something the user has' nella MFA?",
        type: "multiple",
        options: [
            { text: "Badge fisico", correct: true },
            { text: "SIM card", correct: true },
            { text: "Password", correct: false },
            { text: "Impronta digitale", correct: false }
        ]
    },
    {
        question: "Il Single Sign On (SSO) permette di:",
        type: "single",
        options: [
            { text: "Usare password diverse per ogni servizio per sicurezza", correct: false },
            { text: "Accedere a più applicazioni con un unico set di credenziali", correct: true },
            { text: "Evitare del tutto l'uso di chiavi crittografiche", correct: false },
            { text: "Monitorare il traffico di rete", correct: false }
        ]
    },
    {
        question: "Cos'è la 'Identity Federation'?",
        type: "single",
        options: [
            { text: "Un attacco hacker alle identità", correct: false },
            { text: "Sistemi IAM che concordano di condividere identità tra diverse organizzazioni", correct: true },
            { text: "L'uso obbligatorio di certificati digitali per tutti", correct: false },
            { text: "Un tipo di database SQL", correct: false }
        ]
    },
    {
        question: "Qual è l'approccio di default di AWS IAM?",
        type: "single",
        options: [
            { text: "Tutte le richieste sono implicitamente permesse", correct: false },
            { text: "Tutte le richieste sono implicitamente negate (Implicit Deny)", correct: true },
            { text: "Solo gli amministratori possono accedere", correct: false },
            { text: "Dipende dalla regione geografica", correct: false }
        ]
    },
    {
        question: "Quale servizio di Microsoft gestisce l'identità in Azure (nuovo nome)?",
        type: "single",
        options: [
            { text: "Azure Active Directory", correct: false },
            { text: "Microsoft Entra ID", correct: true },
            { text: "Azure IAM Manager", correct: false },
            { text: "Outlook ID", correct: false }
        ]
    },
    {
        question: "In GCP (Google Cloud), cosa hanno il permesso di fare i service account per default?",
        type: "single",
        options: [
            { text: "Nulla, sono tutti disabilitati", correct: false },
            { text: "Chiamare le Google Cloud API", correct: true },
            { text: "Cancellare l'intera organizzazione", correct: false },
            { text: "Accedere ai dati personali degli utenti", correct: false }
        ]
    },

    // --- DEVOPS & CI/CD ---
    {
        question: "Cosa definisce il 'Continuous Deployment'?",
        type: "single",
        options: [
            { text: "Il rilascio manuale in staging", correct: false },
            { text: "Il rilascio automatico dei cambiamenti verificati direttamente in produzione", correct: true },
            { text: "Solo la fase di build del codice", correct: false },
            { text: "La scrittura di test unitari", correct: false }
        ]
    },
    {
        question: "Qual è una regola base della Continuous Integration?",
        type: "multiple",
        options: [
            { text: "Fare commit frequenti", correct: true },
            { text: "Mai fare commit di codice non funzionante", correct: true },
            { text: "Riparare build rotte immediatamente", correct: true },
            { text: "Aspettare la fine della settimana per unire il codice", correct: false }
        ]
    },
    {
        question: "In una pipeline di deployment, cosa segue tipicamente la fase di 'Build & Run tests'?",
        type: "single",
        options: [
            { text: "Commit", correct: false },
            { text: "Deploy in staging", correct: true },
            { text: "Local test", correct: false },
            { text: "Cancellazione risorse", correct: false }
        ]
    },
    {
        question: "Il deployment 'Blue-Green' consiste in:",
        type: "single",
        options: [
            { text: "Avere un unico ambiente e aggiornarlo di notte", correct: false },
            { text: "Avere due ambienti di produzione identici, uno attivo e uno per il nuovo rilascio, per poi scambiarli", correct: true },
            { text: "Testare il codice solo su macchine locali", correct: false },
            { text: "Cifrare i dati con colori diversi", correct: false }
        ]
    },
    {
        question: "Cos'è l'A/B Testing?",
        type: "single",
        options: [
            { text: "Un test di velocità del disco", correct: false },
            { text: "Mostrare due versioni diverse di un prodotto a gruppi di utenti per raccogliere metriche", correct: true },
            { text: "Un test per verificare se la CPU è di tipo A o B", correct: false },
            { text: "Un metodo di crittografia", correct: false }
        ]
    },

    // --- EXTRA & GENERAL ---
    {
        question: "Quali sono le limitazioni del tradizionale ITIL?",
        type: "multiple",
        options: [
            { text: "Processi di cambiamento lenti", correct: true },
            { text: "Alta dipendenza dal lavoro manuale", correct: true },
            { text: "Team a compartimenti stagni (Siloed teams)", correct: true },
            { text: "Troppa automazione", correct: false }
        ]
    },
    {
        question: "Il termine 'CloudOps' è un'evoluzione di ITOps che integra i principi di:",
        type: "single",
        options: [
            { text: "Marketing", correct: false },
            { text: "DevOps", correct: true },
            { text: "Cascata (Waterfall)", correct: false },
            { text: "Solo sicurezza fisica", correct: false }
        ]
    },
    {
        question: "Quali sono le fasi del ciclo di vita di un certificato PKI?",
        type: "multiple",
        options: [
            { text: "Richiesta del certificato", correct: true },
            { text: "Emissione da parte della CA", correct: true },
            { text: "Revoca o rinnovo", correct: true },
            { text: "Cancellazione della chiave pubblica", correct: false }
        ]
    },
    {
        question: "Un attacco DDoS (Distributed Denial of Service) mira a colpire:",
        type: "single",
        options: [
            { text: "La riservatezza dei dati", correct: false },
            { text: "L'integrità del database", correct: false },
            { text: "La disponibilità (Availability) del servizio", correct: true },
            { text: "Il costo del cloud", correct: false }
        ]
    },
    {
        question: "Nel modello di sicurezza, l'approccio 'Least Privilege' suggerisce di:",
        type: "single",
        options: [
            { text: "Dare a tutti l'accesso come amministratore", correct: false },
            { text: "Fornire solo i permessi minimi necessari per svolgere un compito", correct: true },
            { text: "Non dare permessi a nessuno", correct: false },
            { text: "Cambiare password ogni ora", correct: false }
        ]
    },
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
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente il concetto di DevOps?",
        type: "multiple",
        options: [
            { text: "DevOps promuove il monitoraggio continuo e il feedback per migliorare continuamente i processi e la qualità del software.", correct: true },
            { text: "DevOps è un insieme di pratiche che uniscono sviluppo (Development) e operazioni (Operations) per migliorare la collaborazione e accelerare il ciclo di vita del software.", correct: true },
            { text: "DevOps si concentra esclusivamente sull'automazione e non tiene conto della cultura organizzativa o della comunicazione tra team.", correct: false },
            { text: "Uno dei principi fondamentali di DevOps è l'uso di pipeline CI/CD (Continuous Integration/Continuous Deployment) per automatizzare il processo di build, test e deploy.", correct: true },
            { text: "DevOps elimina completamente la necessità di test manuali, poiché tutto viene automatizzato.", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente le operazioni cloud?",
        type: "multiple",
        options: [
            { text: "Cloud Operations include il monitoraggio continuo delle applicazioni e delle risorse per garantire prestazioni ottimali.", correct: true },
            { text: "Le Cloud Operations includono il backup e il ripristino dei dati per garantire la continuità operativa e la resilienza.", correct: true },
            { text: "La sicurezza è una componente centrale delle Cloud Operations, che comprende la gestione delle vulnerabilità e il monitoraggio degli accessi.", correct: true },
            { text: "La gestione delle operazioni cloud si limita alla configurazione iniziale delle risorse e non coinvolge la manutenzione continua.", correct: false },
            { text: "Gli strumenti di Cloud Operations consentono l'automazione di attività ripetitive, come il provisioning e la scalabilità delle risorse.", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente i principi della triade CIA (Confidenzialità, Integrità, Disponibilità) in cybersecurity?",
        type: "multiple",
        options: [
            { text: "I controlli di accesso supportano sia la confidenzialità sia l’integrità.", correct: true },
            { text: "La cifratura dei dati in transito protegge la disponibilità del servizio.", correct: false },
            { text: "L'integrità si riferisce alla protezione dei dati dalla modifica o dalla corruzione accidentale, assicurando che i dati rimangano precisi e completi durante tutto il loro ciclo di vita.", correct: true },
            { text: "Un attacco Denial of Service compromette principalmente il principio di integrità.", correct: false },
            { text: "La confidenzialità garantisce che i dati non vengano modificati da utenti non autorizzati, ma non si occupa di impedire l'accesso non autorizzato.", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente i concetti di sicurezza di rete (Network Security)?",
        type: "multiple",
        options: [
            { text: "Un firewall è uno strumento di sicurezza che monitora e controlla il traffico di rete in entrata e in uscita, basato su politiche di sicurezza definite.", correct: true },
            { text: "La sicurezza di rete mira a garantire confidenzialità, integrità e disponibilità dei dati in transito.", correct: true },
            { text: "La segmentazione della rete è una tecnica che separa diverse aree della rete per limitare l'accesso e migliorare la sicurezza.", correct: true },
            { text: "La sicurezza di rete si concentra esclusivamente sulla protezione dei dati in transito, come la cifratura delle comunicazioni.", correct: false },
            { text: "La sicurezza di rete include la protezione contro gli attacchi DDoS (Distributed Denial of Service).", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente un attacco di SQL Injection?",
        type: "multiple",
        options: [
            { text: "Gli attacchi di SQL Injection non sono più comuni, poiché tutte le applicazioni web moderne sono completamente protette contro di essi.", correct: false },
            { text: "La strategia primaria per limitare gli attacchi di SQL Injection è verificare le informazioni passate in input prima di utilizzarle.", correct: true },
            { text: "Un attacco di SQL Injection sfrutta vulnerabilità nelle applicazioni web che permettono l'inserimento di comandi SQL maligni in una query, potenzialmente compromettendo la base di dati.", correct: true },
            { text: "La strategia secondaria per garantire una protezione contro gli attacchi SQL Injection è disabilitare l'accesso pubblico al database.", correct: false },
            { text: "Un attacco di SQL Injection può consentire agli aggressori di eseguire comandi arbitrari sulla base di dati, come l'estrazione di dati sensibili o la modifica dei dati.", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente il concetto di Continuous Integration (CI)?",
        type: "multiple",
        options: [
            { text: "CI non include l'automazione dei test, poiché il focus è esclusivamente sull'integrazione del codice in un unico repository.", correct: false },
            { text: "La CI è una fase finale del ciclo di vita del software, che avviene solo prima del rilascio del prodotto.", correct: false },
            { text: "Con CI, il codice viene integrato frequentemente e viene automaticamente testato per rilevare eventuali errori precocemente.", correct: true },
            { text: "La CI aiuta a ridurre i conflitti tra sviluppatori, in quanto le modifiche vengono integrate in piccoli e frequenti commit.", correct: true },
            { text: "La Continuous Integration prevede l'integrazione di codice in un repository centralizzato solo quando una nuova funzionalità è completamente sviluppata.", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente l'Infrastructure as Code (IaC)?",
        type: "multiple",
        options: [
            { text: "IaC elimina la necessità di testare le modifiche all'infrastruttura, poiché tutto è automatizzato e quindi corretto.", correct: false },
            { text: "Gli strumenti di IaC, come Terraform e AWS CloudFormation, consentono di automatizzare il provisioning e la gestione delle risorse.", correct: true },
            { text: "Uno dei vantaggi principali di IaC è la consistenza dell'infrastruttura, riducendo errori umani e semplificando il processo di replicazione degli ambienti.", correct: true },
            { text: "IaC permette di definire e gestire l'infrastruttura utilizzando file di configurazione che possono essere versionati come il codice sorgente.", correct: true },
            { text: "Con IaC, l'infrastruttura viene creata manualmente attraverso interfacce grafiche, assicurando maggiore controllo diretto sui dettagli della configurazione.", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti sono caratteristiche comuni nel gestire manualmente l'infrastruttura invece di utilizzare IaC?",
        type: "multiple",
        options: [
            { text: "Tempi di provisioning delle risorse più rapidi rispetto a quelli ottenibili con IaC.", correct: false },
            { text: "Maggiore flessibilità nella gestione delle risorse che aumenta la velocità di provisioning quando si cambia Cloud Provider.", correct: false },
            { text: "Difficoltà a replicare ambienti identici per sviluppo, test e produzione.", correct: true },
            { text: "Maggior rischio di errori umani durante la configurazione e la gestione delle risorse.", correct: true },
            { text: "Maggiore complessità nel versionare e tracciare le modifiche all'infrastruttura.", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente le best practice per l'Identity and Access Management (IAM)?",
        type: "multiple",
        options: [
            { text: "Automatizzare il provisioning e deprovisioning degli utenti riduce il rischio di accessi non autorizzati.", correct: true },
            { text: "Consentire agli utenti di condividere le loro credenziali per semplificare l'accesso ai sistemi aziendali.", correct: false },
            { text: "Utilizzare il principio del privilegio minimo, assegnando agli utenti solo i permessi strettamente necessari per eseguire il loro lavoro.", correct: true },
            { text: "Conservare le credenziali direttamente nel codice applicativo semplifica l’IAM e riduce la complessità operativa.", correct: false },
            { text: "Monitorare e rivedere regolarmente i permessi degli utenti per garantire che siano ancora appropriati per i loro ruoli e necessità.", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente l'Identity and Access Management (IAM)?",
        type: "multiple",
        options: [
            { text: "IAM è utile solo per garantire la sicurezza delle applicazioni cloud, non è rilevante per le infrastrutture on-premise.", correct: false },
            { text: "L’IAM si applica solo agli utenti umani e non ai servizi o alle applicazioni.", correct: false },
            { text: "Un sistema IAM può includere funzionalità come Single Sign-On (SSO) e multi-factor authentication (MFA) per migliorare la sicurezza e semplificare la gestione degli accessi.", correct: true },
            { text: "IAM include la gestione degli utenti e dei gruppi, l'autenticazione, l'autorizzazione e il controllo degli accessi alle risorse aziendali.", correct: true },
            { text: "L’IAM garantisce da solo la sicurezza completa delle risorse, indipendentemente dal comportamento degli utenti.", correct: false }
        ]
    },
    {
        question: "Quali affermazioni descrivono correttamente l'uso dei Secret in Kubernetes?",
        type: "multiple",
        options: [
            { text: "I Secret in Kubernetes sono utilizzati per memorizzare informazioni sensibili come password, token OAuth e certificati.", correct: true },
            { text: "I Secret possono essere accessibili tramite variabili d'ambiente.", correct: true },
            { text: "I Secret sono automaticamente crittografati a livello di cluster e non richiedono configurazioni aggiuntive per garantire la sicurezza.", correct: false },
            { text: "I Secret funzionano in locale ma non possono essere utilizzati quando si intende deployare la propria infrastruttura su Cloud Provider pubblici (come Azure o AWS).", correct: false },
            { text: "I campi dei secret devono essere codificati in BASE64.", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente l'architettura del master in Kubernetes?",
        type: "multiple",
        options: [
            { text: "Il master comunica con i nodi worker tramite il \"kubelet\", un agente che è responsabile del ciclo di vita dei pod e della gestione delle risorse sui nodi worker.", correct: true },
            { text: "Il master può essere distribuito su più nodi per garantire alta disponibilità, utilizzando un database distribuito per memorizzare lo stato del cluster.", correct: true },
            { text: "Il \"kube-apiserver\" è il componente principale del master che fornisce l'interfaccia di accesso al cluster, permettendo alle altre componenti di interagire con il sistema.", correct: true },
            { text: "Il master di Kubernetes gestisce il piano di controllo e include componenti come l'API server, il controller manager e il scheduler, che lavorano insieme per coordinare il comportamento del cluster.", correct: true },
            { text: "Il master di Kubernetes gestisce direttamente i container sui nodi worker attraverso il \"kubelet\", che è un componente presente solo sui nodi master.", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente l'architettura dei nodi in Kubernetes?",
        type: "multiple",
        options: [
            { text: "Ogni nodo Kubernetes ha un \"kube-proxy\" che gestisce il networking, abilitando la comunicazione tra i container nei diversi nodi e facilitando il bilanciamento del carico tra i pod.", correct: true },
            { text: "Ogni nodo Kubernetes esegue un \"kubelet\", che è un agente responsabile della gestione dei pod e delle risorse del nodo, garantendo che i container siano eseguiti correttamente", correct: true },
            { text: "I nodi worker sono responsabili solo dell'esecuzione dei container e non partecipano al processo di monitoraggio o gestione dello stato del cluster.", correct: false },
            { text: "I nodi worker di Kubernetes non contengono un \"kubelet\" poiché la gestione dei container è completamente delegata al master.", correct: false },
            { text: "Il \"docker daemon\" è un componente presente sui nodi Kubernetes che si occupa dell'esecuzione e della gestione dei container Docker, ed è responsabile della creazione e della gestione delle immagini.", correct: true }
        ]
    },
    {
        question: "Quali affermazioni descrivono correttamente un StatefulSet in Kubernetes?",
        type: "multiple",
        options: [
            { text: "Ogni Pod gestito da un StatefulSet ha un nome univoco e un’identità stabile che rimane la stessa attraverso riavvii o sostituzioni.", correct: true },
            { text: "Gli StatefulSet utilizzano Persistent Volumes condivisi tra tutti i Pod gestiti per garantire la persistenza dei dati.", correct: false },
            { text: "Gli StatefulSet sono spesso utilizzati per applicazioni che richiedono archiviazione persistente e una gestione ordinata, come database o sistemi di messaggistica.", correct: true },
            { text: "I StatefulSet sono utilizzati per applicazioni senza stato che non richiedono un'identità stabile o archiviazione persistente.", correct: false },
            { text: "I StatefulSet garantiscono che i Pod siano creati, aggiornati e distrutti in un ordine predeterminato.", correct: true }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente i Pods in Kubernetes?",
        type: "multiple",
        options: [
            { text: "I Pods possono essere utilizzati solo per eseguire singoli container e non supportano l'esecuzione di più container in un contesto condiviso.", correct: false },
            { text: "Un Pod in Kubernetes è l'unità di base di esecuzione, che può contenere uno o più container, condividendo lo stesso network, storage e risorse.", correct: true },
            { text: "Ogni Pod ha un indirizzo IP univoco all'interno del cluster, che consente ai container all'interno del Pod di comunicare tra loro usando il localhost.", correct: true },
            { text: "I Pods vengono creati e distrutti dal \"kube-scheduler\" ogni volta che il cluster ha bisogno di un nuovo pod, ma non possono essere ripristinati automaticamente in caso di errore.", correct: false },
            { text: "I Pods sono sempre composti da più container, ciascuno eseguendo un'applicazione separata, e devono essere gestiti come singole entità.", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni sono corrette riguardo a Kubernetes?",
        type: "multiple",
        options: [
            { text: "Kubernetes fornisce funzionalità di auto-scaling, consentendo di ridimensionare automaticamente i container in base alla domanda.", correct: true },
            { text: "Kubernetes è una piattaforma di orchestrazione per la gestione e il deployment di container su larga scala, che fornisce strumenti per il bilanciamento del carico, la gestione della scalabilità e il monitoraggio.", correct: true },
            { text: "Kubernetes può gestire solo container Docker e non è compatibile con altre tecnologie di containerizzazione.", correct: false },
            { text: "Kubernetes è una soluzione esclusivamente per la gestione di ambienti di sviluppo e non è adatta per ambienti di produzione.", correct: false },
            { text: "Kubernetes richiede un'infrastruttura dedicata e non può essere eseguito su piattaforme cloud pubbliche o sistemi on-premises.", correct: false }
        ]
    },
    {
        question: "Quali affermazioni descrivono correttamente i volumi persistenti (Persistent Volumes) in Kubernetes?",
        type: "multiple",
        options: [
            { text: "Quando l'utente dichiara almeno due container del docker compose file Docker fornisce un Persistent Volume per consentire il salvataggio di informazioni persistenti.", correct: false },
            { text: "I Persistent Volumes sono risorse di archiviazione che devono essere configurate direttamente all'interno dei Pod.", correct: false },
            { text: "Per utilizzare un Persistent Volume, un Pod deve dichiarare un Persistent Volume Claim (PVC), che ne specifica le richieste di capacità e accesso.", correct: true },
            { text: "I volumi persistenti sono distrutti automaticamente quando il Pod che li utilizza viene eliminato.", correct: false },
            { text: "Un Persistent Volume è una risorsa che rappresenta uno spazio di archiviazione fornito ad esempio da un amministratore.", correct: true }
        ]
    },
    {
        question: "Quali di questi servizi cloud sono dei database?",
        type: "multiple",
        options: [
            { text: "Docker Hub", correct: false },
            { text: "RDS", correct: true },
            { text: "Resource Group", correct: false },
            { text: "CosmosDB", correct: true },
            { text: "App Service", correct: false }
        ]
    },
    {
        question: "Quali affermazioni descrivono correttamente gli Azure App Services",
        type: "multiple",
        options: [
            { text: "Gli Azure App Services supportano solo linguaggi di programmazione Microsoft, come C# e .NET.", correct: false },
            { text: "Azure App Services permette di eseguire applicazioni web, API e backend mobile senza la necessità di gestire l'infrastruttura sottostante.", correct: true },
            { text: "Gli Azure App Services richiedono l'uso esclusivo di un database Azure SQL per gestire i dati delle applicazioni.", correct: false },
            { text: "Azure App Service è una piattaforma PaaS per ospitare applicazioni web, API e backend mobile.", correct: true },
            { text: "Azure App Services può essere configurato per eseguire sia applicazioni in ambienti Windows che applicazioni in ambienti Linux.", correct: true }
        ]
    },
    {
        question: "Quali sono i vantaggi di Cosmos DB?",
        type: "multiple",
        options: [
            { text: "Scalabilità", correct: true },
            { text: "Replicazione", correct: true },
            { text: "Decentralizzazione", correct: false },
            { text: "Garantire tutte le 3 proprietà CAP simultaneamente", correct: false },
            { text: "Basso Costo", correct: false }
        ]
    },
    {
        question: "Quali delle seguenti affermazioni descrivono correttamente il file manifest di Kubernetes di seguito indicato?\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:latest\n          ports:\n            - containerPort: 80\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  selector:\n    app: nginx\n  ports:\n    - protocol: TCP\n      port: 80\n      targetPort: 80",
        type: "multiple",
        options: [
            { text: "Il file include un Service di tipo LoadBalancer per gestire il bilanciamento del carico, ma non è necessario per un'applicazione con una sola replica.", correct: false },
            { text: "Il Deployment crea un contenitore MySQL e un contenitore Nginx all'interno di un singolo pod, ma il file non definisce una rete per la comunicazione tra i container.", correct: false },
            { text: "Il servizio nginx-service è configurato per esporre il traffico sulla porta 80 e indirizzarlo al container Nginx.", correct: true },
            { text: "Il Deployment è configurato per eseguire 3 repliche del container Nginx, ma solo una replica verrà effettivamente eseguita a causa della configurazione del servizio.", correct: false },
            { text: "Il file definisce un Deployment con una replica di un container Nginx, e un servizio per esporre l'applicazione sulla porta 80.", correct: true }
        ]
    }
];
