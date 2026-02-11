const questions = [
    {
        question: "In order to subscribe multiple topics we can use:",
        type: "multiple",
        options: [
            { text: "the multi level wildcard *", correct: false },
            { text: "the single level wildcard +", correct: true },
            { text: "the multi level wildcard #", correct: true },
            { text: "the single level wildcard ?", correct: false }
        ]
    },
    {
        question: "The Controller Area Network (CAN) is:",
        type: "multiple",
        options: [
            { text: "an asynchronous parallel communication interface specification used for long distance communication between sensors", correct: false },
            { text: "a multi-master serial bus standard for connecting nodes (ECU, Electronic Control Units)", correct: true },
            { text: "a message-based protocol, designed originally for multiplex electrical wiring within automobiles to save cables", correct: true },
            { text: "a robust vehicle bus standard designed to allow microcontrollers and devices to communicate with each other in applications without a host computer", correct: true }
        ]
    },
    {
        question: "In the context of a toolchain, the floating point support must be defined:",
        type: "single",
        options: [
            { text: "Through an environment variable", correct: false },
            { text: "Exploiting the flag “-mcpu”", correct: false },
            { text: "During the toolchain configuration", correct: true },
            { text: "During the compilation process", correct: false }
        ]
    },
    {
        question: "The CPU architecture and cross-compiler prefix are defined through several variables in the toplevel Makefile, what are these variables?",
        type: "multiple",
        options: [
            { text: "CROSS_COMPILE", correct: true },
            { text: "ARCH", correct: true },
            { text: "ARCH_TYPE", correct: false },
            { text: "CROSS_ARCHITECTURE", correct: false }
        ]
    },
    {
        question: "The MQTT $SYS topic:",
        type: "multiple",
        options: [
            { text: "is reserved to publish information about the MQTT broker", correct: true },
            { text: "is not represent a standard topic", correct: true },
            { text: "represents a standard topic used by most MQTT brokers to publish information about them", correct: false },
            { text: "is a read-only topic", correct: true }
        ]
    },
    {
        question: "According to the Ohm's Law, the formula to use in order to calculate the electrical current is:",
        type: "single",
        options: [
            { text: "Current = Voltage / Resistance²", correct: false },
            { text: "Current = Voltage / Resistance", correct: true },
            { text: "Current = Voltage - Resistance", correct: false },
            { text: "Current = Voltage x Resistance", correct: false }
        ]
    },
    {
        question: "The Universal Asynchronous Receiver-Transmitter (UART) is:",
        type: "multiple",
        options: [
            { text: "a protocol able to operate in Simplex, Full-duplex, and Half-duplex mode", correct: true },
            { text: "one of most used standard protocols transmitting digital data over short distances", correct: true },
            { text: "a protocol that takes bytes of data and transmits the individual bits in a sequential way", correct: true },
            { text: "a protocol based on a shift register", correct: true }
        ]
    },
    {
        question: "The pressure that forces electrons to flow through a circuit is named:",
        type: "single",
        options: [
            { text: "Farad force or capacitance", correct: false },
            { text: "Magnetomotive force or inductance", correct: false },
            { text: "Electromotive force or voltage", correct: true },
            { text: "Thermal force or heat", correct: false }
        ]
    },
    {
        question: "An advantage of the I2C/TWI protocol is:",
        type: "single",
        options: [
            { text: "The involved devices do not need an unique address", correct: false },
            { text: "It uses only one wire", correct: false },
            { text: "It allows us to vary the communication speed", correct: true },
            { text: "It operates through simple transactions", correct: false }
        ]
    },
    {
        question: "The UART communication can be:",
        type: "multiple",
        options: [
            { text: "Half-duplex", correct: true },
            { text: "Simplex", correct: true },
            { text: "Full-duplex", correct: true },
            { text: "General-purpose", correct: false }
        ]
    },
    {
        question: "In the context of the embedded protocols, the acronym SPI stands for:",
        type: "single",
        options: [
            { text: "Serial Path Interface", correct: false },
            { text: "Serial Peripheral Interface", correct: true },
            { text: "Synchronous Peripheral Interface", correct: false },
            { text: "Synchronous Peripheral Interconnession", correct: false }
        ]
    },
    {
        question: "The Universal Asynchronous Receiver-Transmitter (UART) protocol:",
        type: "multiple",
        options: [
            { text: "it takes bytes of data and transmits the individual bits in an asynchronous way", correct: false },
            { text: "it converts a data signal from serial to parallel", correct: true },
            { text: "It is one of most used standard protocols for transmitting digital data over long distances", correct: false },
            { text: "It is one of most used standard protocols for transmitting digital data over short distances", correct: true }
        ]
    },
    {
        question: "The SPI protocol is not suitable for short distance sensors",
        type: "single",
        options: [
            { text: "Vero", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "CAN and MODBUS are two application protocols",
        type: "single",
        options: [
            { text: "Vero", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "The Local Interconnect Network (LIN) is:",
        type: "multiple",
        options: [
            { text: "an asynchronous serial communication interface specification used for long distance communication between sensors", correct: false },
            { text: "a serial network protocol used for communication between components in vehicles", correct: true },
            { text: "a broadcast serial network comprising 16 nodes, which are typically one master and up to 15 slaves", correct: true },
            { text: "a cheap serial network used to implement the new technologies in vehicles", correct: true }
        ]
    },
    {
        question: "In a CAN network, all nodes are connected to each other through a two wire bus",
        type: "single",
        options: [
            { text: "Vero", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "Some disadvantage of the I2C/TWI protocol are:",
        type: "multiple",
        options: [
            { text: "It is not suitable for short distance sensors", correct: false },
            { text: "It allows us only half-duplex communications", correct: true },
            { text: "The transactions are complex, involving clock detection, start condition, stop condition, etc.", correct: true },
            { text: "It can not be used in embedded systems", correct: false }
        ]
    },
    {
        question: "In an UART communication, the communications line starts in:",
        type: "single",
        options: [
            { text: "It depends on the number of connected devices", correct: false },
            { text: "High state", correct: true },
            { text: "High or Low state", correct: false },
            { text: "Low state", correct: false }
        ]
    },
    {
        question: "LIN is a broadcast serial network comprising 16 nodes, which are typically up to 15 masters and one slave",
        type: "single",
        options: [
            { text: "Vero", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "In the SPI protocol, during a clock cycle an half-duplex data transmission is performed",
        type: "single",
        options: [
            { text: "Vero", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "A disadvantage related to UART is its predefined speed of communication",
        type: "single",
        options: [
            { text: "Vero", correct: true },
            { text: "Falso", correct: false }
        ]
    },
    {
        question: "The MODBUS protocol is:",
        type: "single",
        options: [
            { text: "a serial communications protocol", correct: true },
            { text: "a parallel communications protocol", correct: false },
            { text: "it is not a protocol", correct: false },
            { text: "a serial and parallel communications protocol", correct: false }
        ]
    },
    {
        question: "A serial transmission of digital information (bits) through a single wire is:",
        type: "single",
        options: [
            { text: "more costly than a parallel transmission by using multiple wires", correct: false },
            { text: "has the same cost of a parallel transmission by using multiple wires", correct: false },
            { text: "digital transmissions can be performed only through a serial way", correct: false },
            { text: "less costly than a parallel transmission by using multiple wires", correct: true }
        ]
    },
    {
        question: "Some advantages of the I2C/TWI protocol are:",
        type: "single",
        options: [
            { text: "The transactions are simple", correct: false },
            { text: "It can be used in embedded systems", correct: true },
            { text: "It allows us half-duplex communications", correct: false },
            { text: "It allows us to perform full-duplex communications", correct: false }
        ]
    },
    {
        question: "A communication protocol:",
        type: "multiple",
        options: [
            { text: "defines the rules syntax, semantics, and synchronization of communication", correct: true },
            { text: "can be implemented by hardware, software, or a combination of both", correct: true },
            { text: "is a system of rules that allow two or more entities of a communications system to transmit information via any kind of variation of a physical quantity", correct: true },
            { text: "defines the possible error recovery methods", correct: true }
        ]
    },
    {
        question: "The CAN protocol is:",
        type: "single",
        options: [
            { text: "a parallel to serial IoT protocol", correct: false },
            { text: "a message-based protocol", correct: true },
            { text: "an event-based protocol", correct: false },
            { text: "it is not a protocol", correct: false }
        ]
    },
    {
        question: "Select the incorrect statements regarding MQTT:",
        type: "multiple",
        options: [
            { text: "MQTT protocol specification is open but not royalty free", correct: true },
            { text: "MQTT API uses a set of well defined topics", correct: true },
            { text: "MQTT API uses a set of well defined verbs", correct: false },
            { text: "MQTT is industry agnostic", correct: false }
        ]
    },
    {
        question: "What limits the current that flows through a circuit for a particular applied DC voltage:",
        type: "single",
        options: [
            { text: "Reactance", correct: false },
            { text: "Isolation", correct: false },
            { text: "Saturation", correct: false },
            { text: "Resistance", correct: true }
        ]
    },
    {
        question: "Select the incorrect statements regarding Linux Kernel:",
        type: "multiple",
        options: [
            { text: "Some Linux kernel components are architecture-independent", correct: false },
            { text: "Linux kernel is also designed for small microcontrollers", correct: true },
            { text: "All Linux kernel components are architecture-independent", correct: true },
            { text: "Linux kernel supports the MMU architectures", correct: false }
        ]
    },
    {
        question: "The unit of charge is called:",
        type: "single",
        options: [
            { text: "Potential difference", correct: false },
            { text: "Joule", correct: false },
            { text: "Farad", correct: false },
            { text: "Coulomb", correct: true }
        ]
    },
    {
        question: "The basic unit of electric current is the:",
        type: "single",
        options: [
            { text: "Watt", correct: false },
            { text: "Ohm", correct: false },
            { text: "Ampere", correct: true },
            { text: "Volt", correct: false }
        ]
    },
    {
        question: "All binaries in a system:",
        type: "single",
        options: [
            { text: "must be compiled with the same ABI", correct: true },
            { text: "must be compiled with several ABI versions (their number depends on the hardware)", correct: false },
            { text: "can be compiled with different but compatible versions of ABI", correct: false },
            { text: "do not involve ABI in the compilation process", correct: false }
        ]
    },
    {
        question: "If the “clean session” option is set to true:",
        type: "multiple",
        options: [
            { text: "the client does not have a persistent session", correct: true },
            { text: "the client has a persistent session", correct: false },
            { text: "all information are lost when the client disconnects", correct: true },
            { text: "all information are preserved when the client disconnects", correct: false }
        ]
    },
    {
        question: "MQTT Topics are:",
        type: "multiple",
        options: [
            { text: "case sensitive and they must have at least two characters", correct: false },
            { text: "structured in a hierarchy similar to a file-system", correct: true },
            { text: "not case sensitive and they must have at least one character", correct: false },
            { text: "case sensitive and they must have at least one character", correct: true }
        ]
    },
    {
        question: "The instrument able to measure the electric current is the:",
        type: "single",
        options: [
            { text: "Ohmmeter", correct: false },
            { text: "Wavemeter", correct: false },
            { text: "Voltmeter", correct: false },
            { text: "Ammeter", correct: true }
        ]
    },
    {
        question: "In terms of electrical conductivity all materials can be classified as:",
        type: "single",
        options: [
            { text: "Conductors, Insulators, Semiconductors", correct: true },
            { text: "Conductors, Semiconductors", correct: false },
            { text: "Conductors, Insulators, Semiconductors, Seminsulators", correct: false },
            { text: "Conductors, Insulators", correct: false }
        ]
    },
    {
        question: "The topics are created dynamically in the following cases:",
        type: "multiple",
        options: [
            { text: "When someone publishes a message to a topic with the “retained message” option set to False", correct: false },
            { text: "When someone publishes a message to a topic with the “retained message” option set to True", correct: true },
            { text: "When the MQTT broker receives a message", correct: false },
            { text: "When someone subscribes to a topic", correct: true }
        ]
    },


    // --- SEZIONE: NodeMCU & Electronics ---
    {
        question: "NodeMCU allows us to design IoT projects by using which specific programming language?",
        type: "single",
        options: [
            { text: "Python", correct: false },
            { text: "Lua", correct: true },
            { text: "Java", correct: false },
            { text: "Assembly", correct: false }
        ]
    },
    {
        question: "In the context of digital logic circuits, what is the purpose of a Pull-up or Pull-down circuit?",
        type: "single",
        options: [
            { text: "To increase the voltage level of the output", correct: false },
            { text: "To avoid the floating input problem (indeterminate state)", correct: true },
            { text: "To convert AC current to DC current", correct: false },
            { text: "To increase the speed of the bus", correct: false }
        ]
    },
    {
        question: "Which of the following statements about the ESP32 compared to the ESP8266 is true?",
        type: "multiple",
        options: [
            { text: "ESP32 has a dual-core processor while ESP8266 is single-core", correct: true },
            { text: "ESP32 supports both Wi-Fi and Bluetooth", correct: true },
            { text: "ESP32 has fewer GPIO pins than ESP8266", correct: false },
            { text: "ESP32 is generally less power efficient than ESP8266", correct: false }
        ]
    },

    // --- SEZIONE: Embedded Linux & Compilation ---
    {
        question: "In a cross-compilation procedure, the 'Host Machine' is:",
        type: "single",
        options: [
            { text: "The machine where the toolchain is built", correct: false },
            { text: "The machine where the binaries created by the toolchain are executed", correct: false },
            { text: "The machine where the toolchain is executed to generate code", correct: true },
            { text: "The machine used to store the source code repository", correct: false }
        ]
    },
    {
        question: "The Linux Kernel makes system and kernel information available in user space through pseudo filesystems. Which of the following are pseudo filesystems?",
        type: "multiple",
        options: [
            { text: "/proc", correct: true },
            { text: "/sys", correct: true },
            { text: "/home", correct: false },
            { text: "/etc", correct: false }
        ]
    },
    {
        question: "What is a 'Device Tree' in the context of Embedded Linux?",
        type: "single",
        options: [
            { text: "A file system structure for organizing user files", correct: false },
            { text: "A data structure and language for describing non-discoverable hardware", correct: true },
            { text: "A graphical interface to configure the kernel", correct: false },
            { text: "A tree of all connected USB devices", correct: false }
        ]
    },
    {
        question: "Which license is the Linux Kernel released under?",
        type: "single",
        options: [
            { text: "Apache License 2.0", correct: false },
            { text: "GNU General Public License version 2 (GPLv2)", correct: true },
            { text: "MIT License", correct: false },
            { text: "BSD License", correct: false }
        ]
    },
    {
        question: "What is the role of the 'Bootloader' in an embedded system?",
        type: "multiple",
        options: [
            { text: "Basic hardware initialization", correct: true },
            { text: "Loading the application binary (usually OS kernel) from storage to memory", correct: true },
            { text: "Managing the memory after the OS has started", correct: false },
            { text: "Providing a shell for basic operations (memory inspection, flashing)", correct: true }
        ]
    },

    // --- SEZIONE: AWS IoT & Cloud ---
    {
        question: "In AWS IoT, what is a 'Device Shadow'?",
        type: "single",
        options: [
            { text: "A backup copy of the device firmware", correct: false },
            { text: "A persistent virtual version of a device that includes its last state", correct: true },
            { text: "A security protocol to hide the device identity", correct: false },
            { text: "A log file containing all errors generated by the device", correct: false }
        ]
    },
    {
        question: "The AWS IoT 'Rules Engine' allows you to:",
        type: "multiple",
        options: [
            { text: "Transform and process data on the fly", correct: true },
            { text: "Route messages to other AWS services (like DynamoDB or S3)", correct: true },
            { text: "Physically connect the wires of the sensors", correct: false },
            { text: "Compile the code for the microcontroller", correct: false }
        ]
    },

    // --- SEZIONE: Docker ---
    {
        question: "What is a Docker 'Container'?",
        type: "single",
        options: [
            { text: "A heavy virtual machine with its own full operating system", correct: false },
            { text: "A read-only template used to create images", correct: false },
            { text: "An encapsulated application and its dependencies running as a portable unit", correct: true },
            { text: "A hardware component used to store data", correct: false }
        ]
    },
    {
        question: "Which command is used to run a Docker container from an image?",
        type: "single",
        options: [
            { text: "docker start", correct: false },
            { text: "docker run", correct: true },
            { text: "docker execute", correct: false },
            { text: "docker build", correct: false }
        ]
    },

    // --- SEZIONE: Node-RED ---
    {
        question: "Node-RED is built on which runtime environment?",
        type: "single",
        options: [
            { text: "Python", correct: false },
            { text: "Java Runtime Environment", correct: false },
            { text: "Node.js", correct: true },
            { text: ".NET Framework", correct: false }
        ]
    },
    {
        question: "In Node-RED, the basic building blocks used to create a flow are called:",
        type: "single",
        options: [
            { text: "Bricks", correct: false },
            { text: "Nodes", correct: true },
            { text: "Functions", correct: false },
            { text: "Wires", correct: false }
        ]
    },
    {
        question: "What is the name of the standard JavaScript object passed between nodes in Node-RED?",
        type: "single",
        options: [
            { text: "packet", correct: false },
            { text: "data", correct: false },
            { text: "msg", correct: true },
            { text: "payload_obj", correct: false }
        ]
    },

    // --- SEZIONE: Robotics ---
    {
        question: "Which type of robot features a horizontal jointed arm structure and is widely used for pick-and-place operations?",
        type: "single",
        options: [
            { text: "Anthropomorphic Robot", correct: false },
            { text: "SCARA Robot", correct: true },
            { text: "Cartesian Robot", correct: false },
            { text: "Mobile Robot", correct: false }
        ]
    },
    {
        question: "In robotics, 'Forward Kinematics' deals with:",
        type: "single",
        options: [
            { text: "Determining the joint angles required to reach a specific position", correct: false },
            { text: "Predicting the position and orientation of the end-effector based on joint angles", correct: true },
            { text: "Calculating the power consumption of the motors", correct: false },
            { text: "Sensing the environment using cameras", correct: false }
        ]
    },
    {
        question: "What is an 'End Effector' in a robot?",
        type: "single",
        options: [
            { text: "The main controller or brain of the robot", correct: false },
            { text: "The battery or power source", correct: false },
            { text: "The tool or mechanism attached to the robot's arm to perform specific tasks", correct: true },
            { text: "The sensor used to detect obstacles", correct: false }
        ]
    },
    {
        question: "A Cartesian Robot operates on which coordinate system?",
        type: "single",
        options: [
            { text: "Cylindrical (r, θ, z)", correct: false },
            { text: "Spherical (r, θ, φ)", correct: false },
            { text: "Three-axis Cartesian (X, Y, Z)", correct: true },
            { text: "Parallel linkage system", correct: false }
        ]
    }
    
];
