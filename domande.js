
const questions = [ // --- CLOUD MODELS & OPERATIONS --- { question: "Nel
  modello IaaS (Infrastructure as Service), quali elementi sono gestiti dal
  Provider?", type: "multiple", options: [ { text: "Networking e Storage",
    correct: true }, { text: "Sistema Operativo", correct: false }, { text: "Server
    e Hypervisor", correct: true }, { text: "Dati e Applicazioni", correct: false }
  ] }, { question: "Quale modello di delivery solleva il consumatore dalla
  gestione di tutto, tranne che dell'interfaccia?", type: "single", options: [ {
    text: "IaaS", correct: false }, { text: "PaaS", correct: false }, { text:
    "SaaS", correct: true }, { text: "On Premise", correct: false } ] }, { question:
    "Cosa si intende per 'Multiplexing' nel contesto della virtualizzazione?", type:
    "single", options: [ { text: "La creazione di un oggetto virtuale da diversi
      tipi di oggetti fisici", correct: false }, { text: "La creazione di più oggetti
      virtuali da una singola istanza di un oggetto fisico", correct: true }, { text:
      "L'aggregazione di più dischi fisici in un unico disco RAID", correct: false },
      { text: "L'emulazione di una RAM tramite disco fisico", correct: false } ] }, {
      question: "Quali sono i domini principali (Core Domains) della Cloud
      Operations?", type: "multiple", options: [ { text: "Infrastructure &
        Provisioning", correct: true }, { text: "Observability", correct: true }, {
        text: "FinOps", correct: true }, { text: "Marketing & Sales", correct: false } ]
      }, { question: "Qual è l'obiettivo principale del FinOps?", type: "single",
      options: [ { text: "Aumentare le prestazioni della CPU", correct: false }, {
        text: "Allineare la spesa cloud al valore aziendale", correct: true }, { text:
        "Eliminare completamente i costi del cloud", correct: false }, { text: "Gestire
        solo le licenze software", correct: false } ] },

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
        }
];
