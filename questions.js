// Question Sets for KTU S6 CSE Comprehensive Exam - Updated Subjects

const questionSets = {
    1: {
        name: "Data Structures",
        questions: [
            {
                id: 1,
                question: "Which data structure follows LIFO (Last In First Out) principle?",
                options: ["Queue", "Stack", "Tree", "Graph"],
                correct: 1
            },
            {
                id: 2,
                question: "What is the time complexity of inserting an element at the beginning of an array?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2
            },
            {
                id: 3,
                question: "Which data structure is used for implementing recursion?",
                options: ["Queue", "Stack", "Tree", "Array"],
                correct: 1
            },
            {
                id: 4,
                question: "What is the maximum number of nodes in a binary tree of height h?",
                options: ["2^h", "2^(h+1) - 1", "h²", "2h"],
                correct: 1
            },
            {
                id: 5,
                question: "Which traversal of a binary tree visits root, left subtree, then right subtree?",
                options: ["Inorder", "Preorder", "Postorder", "Levelorder"],
                correct: 1
            },
            {
                id: 6,
                question: "What is the time complexity of searching in a balanced BST?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: 1
            },
            {
                id: 7,
                question: "Which data structure is used to implement priority queue?",
                options: ["Stack", "Queue", "Heap", "Array"],
                correct: 2
            },
            {
                id: 8,
                question: "What is the time complexity of heapify operation?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: 1
            },
            {
                id: 9,
                question: "Which hashing technique resolves collision using linked lists?",
                options: ["Linear Probing", "Quadratic Probing", "Chaining", "Double Hashing"],
                correct: 2
            },
            {
                id: 10,
                question: "What is the worst case time complexity of Quick Sort?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correct: 2
            },
            {
                id: 11,
                question: "Which data structure is used in BFS (Breadth First Search)?",
                options: ["Stack", "Queue", "Heap", "Tree"],
                correct: 1
            },
            {
                id: 12,
                question: "What is the space complexity of merge sort?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correct: 2
            },
            {
                id: 13,
                question: "Which representation of graph uses adjacency matrix?",
                options: ["Sparse graph", "Dense graph", "Both", "Neither"],
                correct: 1
            },
            {
                id: 14,
                question: "What is the time complexity of finding an element in a hash table (average case)?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                correct: 2
            },
            {
                id: 15,
                question: "Which tree is self-balancing?",
                options: ["Binary Tree", "AVL Tree", "BST", "Binary Heap"],
                correct: 1
            },
            {
                id: 16,
                question: "What is the minimum number of nodes in an AVL tree of height h?",
                options: ["2^h", "F(h+2) - 1", "h²", "2h"],
                correct: 1
            },
            {
                id: 17,
                question: "Which data structure allows insertion and deletion at both ends?",
                options: ["Stack", "Queue", "Deque", "Priority Queue"],
                correct: 2
            },
            {
                id: 18,
                question: "What is the time complexity of building a heap from an array?",
                options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                correct: 0
            },
            {
                id: 19,
                question: "Which traversal gives sorted order in a BST?",
                options: ["Preorder", "Inorder", "Postorder", "Levelorder"],
                correct: 1
            },
            {
                id: 20,
                question: "What is the worst case time complexity of linear search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correct: 2
            },
            {
                id: 21,
                question: "Which algorithm is used to find shortest path in unweighted graph?",
                options: ["Dijkstra's", "BFS", "DFS", "Floyd-Warshall"],
                correct: 1
            },
            {
                id: 22,
                question: "What is the time complexity of inserting an element in a linked list at a given position?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2
            },
            {
                id: 23,
                question: "Which data structure is used for implementing expression evaluation?",
                options: ["Queue", "Stack", "Tree", "Graph"],
                correct: 1
            },
            {
                id: 24,
                question: "What is the maximum number of children in a binary tree node?",
                options: ["1", "2", "3", "Unlimited"],
                correct: 1
            },
            {
                id: 25,
                question: "Which sorting algorithm is stable?",
                options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
                correct: 2
            }
        ]
    },
    2: {
        name: "Operating System",
        questions: [
            {
                id: 1,
                question: "What is the main function of an operating system?",
                options: ["File Management", "Resource Management", "User Interface", "All of the above"],
                correct: 3
            },
            {
                id: 2,
                question: "Which scheduling algorithm has minimum average waiting time?",
                options: ["FCFS", "SJF", "Round Robin", "Priority"],
                correct: 1
            },
            {
                id: 3,
                question: "What is the condition for deadlock?",
                options: ["Mutual Exclusion", "Hold and Wait", "Circular Wait", "All of the above"],
                correct: 3
            },
            {
                id: 4,
                question: "Which page replacement algorithm replaces the page that will not be used for longest time?",
                options: ["FIFO", "LRU", "Optimal", "LFU"],
                correct: 2
            },
            {
                id: 5,
                question: "What is the time complexity of context switching?",
                options: ["O(1)", "O(log n)", "O(n)", "Depends on system"],
                correct: 3
            },
            {
                id: 6,
                question: "Which memory management technique allows programs larger than physical memory?",
                options: ["Paging", "Segmentation", "Virtual Memory", "All of the above"],
                correct: 2
            },
            {
                id: 7,
                question: "What is the purpose of semaphore?",
                options: ["Synchronization", "Deadlock prevention", "Memory management", "Process scheduling"],
                correct: 0
            },
            {
                id: 8,
                question: "Which CPU scheduling algorithm is preemptive?",
                options: ["FCFS", "SJF", "SRTF", "Non-preemptive SJF"],
                correct: 2
            },
            {
                id: 9,
                question: "What is thrashing?",
                options: ["High CPU utilization", "High page fault rate", "Low memory usage", "Fast execution"],
                correct: 1
            },
            {
                id: 10,
                question: "Which file allocation method supports random access?",
                options: ["Contiguous", "Linked", "Indexed", "All of the above"],
                correct: 2
            },
            {
                id: 11,
                question: "What is the difference between process and thread?",
                options: ["Process has separate memory space", "Thread shares memory space", "Both A and B", "No difference"],
                correct: 2
            },
            {
                id: 12,
                question: "Which disk scheduling algorithm has minimum head movement?",
                options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
                correct: 1
            },
            {
                id: 13,
                question: "What is the purpose of mutex?",
                options: ["Process synchronization", "Memory protection", "Deadlock prevention", "CPU scheduling"],
                correct: 0
            },
            {
                id: 14,
                question: "Which page replacement algorithm suffers from Belady's anomaly?",
                options: ["LRU", "Optimal", "FIFO", "LFU"],
                correct: 2
            },
            {
                id: 15,
                question: "What is the size of a page in typical paging system?",
                options: ["4KB", "8KB", "16KB", "Variable"],
                correct: 0
            },
            {
                id: 16,
                question: "Which synchronization method is used to avoid busy waiting?",
                options: ["Spinlock", "Semaphore", "Mutex", "Both B and C"],
                correct: 3
            },
            {
                id: 17,
                question: "What is the purpose of TLB (Translation Lookaside Buffer)?",
                options: ["Cache page table entries", "Store process IDs", "Manage memory", "Schedule processes"],
                correct: 0
            },
            {
                id: 18,
                question: "Which process state transition happens when a process is waiting for I/O?",
                options: ["Ready to Running", "Running to Ready", "Running to Waiting", "Waiting to Ready"],
                correct: 2
            },
            {
                id: 19,
                question: "What is the difference between paging and segmentation?",
                options: ["Paging has fixed size blocks", "Segmentation has variable size blocks", "Both A and B", "No difference"],
                correct: 2
            },
            {
                id: 20,
                question: "Which scheduling algorithm is used in time-sharing systems?",
                options: ["FCFS", "SJF", "Round Robin", "Priority"],
                correct: 2
            },
            {
                id: 21,
                question: "What is the purpose of system calls?",
                options: ["Interface between user and OS", "Memory management", "Process creation", "File operations"],
                correct: 0
            },
            {
                id: 22,
                question: "Which memory allocation method has external fragmentation?",
                options: ["Paging", "Segmentation", "Both", "Neither"],
                correct: 1
            },
            {
                id: 23,
                question: "What is the purpose of fork() system call?",
                options: ["Create new process", "Terminate process", "Wait for process", "Execute program"],
                correct: 0
            },
            {
                id: 24,
                question: "Which disk scheduling algorithm moves in one direction?",
                options: ["FCFS", "SSTF", "SCAN", "LOOK"],
                correct: 2
            },
            {
                id: 25,
                question: "What is the purpose of interrupt?",
                options: ["Signal to CPU", "Process communication", "Memory access", "File I/O"],
                correct: 0
            }
        ]
    },
    3: {
        name: "Computer Organization and Architecture",
        questions: [
            {
                id: 1,
                question: "What is the basic unit of memory?",
                options: ["Byte", "Bit", "Word", "Nibble"],
                correct: 1
            },
            {
                id: 2,
                question: "Which register holds the memory address of the next instruction?",
                options: ["Accumulator", "Program Counter", "Memory Address Register", "Instruction Register"],
                correct: 1
            },
            {
                id: 3,
                question: "What is the purpose of ALU?",
                options: ["Perform arithmetic operations", "Store data", "Control operations", "Manage memory"],
                correct: 0
            },
            {
                id: 4,
                question: "Which addressing mode specifies the operand directly?",
                options: ["Immediate", "Direct", "Indirect", "Register"],
                correct: 0
            },
            {
                id: 5,
                question: "What is the number of bits in a byte?",
                options: ["4", "8", "16", "32"],
                correct: 1
            },
            {
                id: 6,
                question: "Which memory is fastest?",
                options: ["Cache", "RAM", "ROM", "Hard Disk"],
                correct: 0
            },
            {
                id: 7,
                question: "What is the purpose of control unit?",
                options: ["Perform arithmetic", "Coordinate operations", "Store data", "Manage I/O"],
                correct: 1
            },
            {
                id: 8,
                question: "Which instruction format has opcode and operand?",
                options: ["Zero address", "One address", "Two address", "Three address"],
                correct: 1
            },
            {
                id: 9,
                question: "What is the function of MAR (Memory Address Register)?",
                options: ["Hold memory address", "Hold data", "Hold instruction", "Hold opcode"],
                correct: 0
            },
            {
                id: 10,
                question: "Which pipeline stage decodes the instruction?",
                options: ["Fetch", "Decode", "Execute", "Write Back"],
                correct: 1
            },
            {
                id: 11,
                question: "What is the purpose of cache memory?",
                options: ["Increase speed", "Reduce memory access time", "Store frequently used data", "All of the above"],
                correct: 3
            },
            {
                id: 12,
                question: "Which bus carries address information?",
                options: ["Data Bus", "Address Bus", "Control Bus", "System Bus"],
                correct: 1
            },
            {
                id: 13,
                question: "What is the number of addressing modes in 8085?",
                options: ["3", "5", "7", "10"],
                correct: 2
            },
            {
                id: 14,
                question: "Which register stores the result of arithmetic operations?",
                options: ["Program Counter", "Accumulator", "Stack Pointer", "Index Register"],
                correct: 1
            },
            {
                id: 15,
                question: "What is the purpose of interrupt?",
                options: ["Stop execution", "Change program flow", "Handle events", "All of the above"],
                correct: 3
            },
            {
                id: 16,
                question: "Which memory mapping technique is used in cache?",
                options: ["Direct Mapping", "Associative Mapping", "Set Associative", "All of the above"],
                correct: 3
            },
            {
                id: 17,
                question: "What is the purpose of stack pointer?",
                options: ["Point to top of stack", "Store return address", "Manage subroutine calls", "All of the above"],
                correct: 3
            },
            {
                id: 18,
                question: "Which instruction type performs data transfer?",
                options: ["Arithmetic", "Logical", "Data Transfer", "Control Transfer"],
                correct: 2
            },
            {
                id: 19,
                question: "What is the purpose of instruction pipeline?",
                options: ["Increase throughput", "Reduce execution time", "Improve efficiency", "All of the above"],
                correct: 3
            },
            {
                id: 20,
                question: "Which addressing mode uses register to hold address?",
                options: ["Register Direct", "Register Indirect", "Immediate", "Direct"],
                correct: 1
            },
            {
                id: 21,
                question: "What is the purpose of flag register?",
                options: ["Store status bits", "Indicate conditions", "Control operations", "All of the above"],
                correct: 3
            },
            {
                id: 22,
                question: "Which memory is non-volatile?",
                options: ["RAM", "Cache", "ROM", "Register"],
                correct: 2
            },
            {
                id: 23,
                question: "What is the purpose of instruction register?",
                options: ["Hold current instruction", "Hold opcode", "Decode instruction", "Execute instruction"],
                correct: 0
            },
            {
                id: 24,
                question: "Which bus carries control signals?",
                options: ["Data Bus", "Address Bus", "Control Bus", "System Bus"],
                correct: 2
            },
            {
                id: 25,
                question: "What is the purpose of DMA (Direct Memory Access)?",
                options: ["Transfer data without CPU", "Increase speed", "Reduce CPU load", "All of the above"],
                correct: 3
            }
        ]
    },
    4: {
        name: "FLAT (Formal Languages and Automata Theory)",
        questions: [
            {
                id: 1,
                question: "What does FA stand for?",
                options: ["Finite Automata", "Formal Automata", "Final Automata", "Function Automata"],
                correct: 0
            },
            {
                id: 2,
                question: "Which automata has finite number of states?",
                options: ["DFA", "NFA", "Both A and B", "PDA"],
                correct: 2
            },
            {
                id: 3,
                question: "What is the difference between DFA and NFA?",
                options: ["DFA has unique transitions", "NFA can have multiple transitions", "Both A and B", "No difference"],
                correct: 2
            },
            {
                id: 4,
                question: "Which language is accepted by finite automata?",
                options: ["Regular Language", "Context Free Language", "Context Sensitive Language", "Recursive Language"],
                correct: 0
            },
            {
                id: 5,
                question: "What is the purpose of epsilon transition?",
                options: ["Move without reading input", "Read input", "Change state", "Accept string"],
                correct: 0
            },
            {
                id: 6,
                question: "Which grammar generates regular languages?",
                options: ["Type 0", "Type 1", "Type 2", "Type 3"],
                correct: 3
            },
            {
                id: 7,
                question: "What is the purpose of pumping lemma?",
                options: ["Prove language is regular", "Prove language is not regular", "Generate strings", "Parse strings"],
                correct: 1
            },
            {
                id: 8,
                question: "Which automata uses stack?",
                options: ["DFA", "NFA", "PDA", "Turing Machine"],
                correct: 2
            },
            {
                id: 9,
                question: "What language is accepted by PDA?",
                options: ["Regular", "Context Free", "Context Sensitive", "Recursive"],
                correct: 1
            },
            {
                id: 10,
                question: "Which grammar is most powerful?",
                options: ["Type 0", "Type 1", "Type 2", "Type 3"],
                correct: 0
            },
            {
                id: 11,
                question: "What is the purpose of Chomsky hierarchy?",
                options: ["Classify languages", "Classify grammars", "Both A and B", "Generate strings"],
                correct: 2
            },
            {
                id: 12,
                question: "Which automata can recognize context free language?",
                options: ["DFA", "NFA", "PDA", "Turing Machine"],
                correct: 2
            },
            {
                id: 13,
                question: "What is the difference between left linear and right linear grammar?",
                options: ["Production rule position", "Variable position", "Terminal position", "No difference"],
                correct: 1
            },
            {
                id: 14,
                question: "Which closure property applies to regular languages?",
                options: ["Union", "Concatenation", "Kleene Star", "All of the above"],
                correct: 3
            },
            {
                id: 15,
                question: "What is the purpose of minimization of DFA?",
                options: ["Reduce states", "Optimize automata", "Simplify structure", "All of the above"],
                correct: 3
            },
            {
                id: 16,
                question: "Which automata can accept empty language?",
                options: ["DFA", "NFA", "Both A and B", "None"],
                correct: 2
            },
            {
                id: 17,
                question: "What is the purpose of regular expression?",
                options: ["Represent regular language", "Pattern matching", "String generation", "All of the above"],
                correct: 3
            },
            {
                id: 18,
                question: "Which operation is used in regular expression?",
                options: ["Union", "Concatenation", "Kleene Star", "All of the above"],
                correct: 3
            },
            {
                id: 19,
                question: "What is the purpose of conversion from NFA to DFA?",
                options: ["Deterministic behavior", "Easier implementation", "Better understanding", "All of the above"],
                correct: 3
            },
            {
                id: 20,
                question: "Which language requires two stacks?",
                options: ["Regular", "Context Free", "Context Sensitive", "Recursive"],
                correct: 2
            },
            {
                id: 21,
                question: "What is the purpose of Turing Machine?",
                options: ["Accept recursive languages", "Compute functions", "Model computation", "All of the above"],
                correct: 3
            },
            {
                id: 22,
                question: "Which grammar is context sensitive?",
                options: ["Type 0", "Type 1", "Type 2", "Type 3"],
                correct: 1
            },
            {
                id: 23,
                question: "What is the purpose of Myhill-Nerode theorem?",
                options: ["Minimize DFA", "Prove regularity", "Characterize regular languages", "All of the above"],
                correct: 2
            },
            {
                id: 24,
                question: "Which automata can have infinite tape?",
                options: ["DFA", "NFA", "PDA", "Turing Machine"],
                correct: 3
            },
            {
                id: 25,
                question: "What is the purpose of closure properties?",
                options: ["Prove language class", "Operation results", "Language classification", "All of the above"],
                correct: 3
            }
        ]
    },
    5: {
        name: "Data Structures - Advanced",
        questions: [
            {
                id: 1,
                question: "What is the time complexity of inserting an element in a hash table with chaining (worst case)?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2
            },
            {
                id: 2,
                question: "Which tree rotation is used in AVL tree for left-left case?",
                options: ["Left Rotation", "Right Rotation", "Left-Right Rotation", "Right-Left Rotation"],
                correct: 1
            },
            {
                id: 3,
                question: "What is the height of a complete binary tree with n nodes?",
                options: ["log₂(n)", "⌊log₂(n)⌋", "n/2", "n"],
                correct: 1
            },
            {
                id: 4,
                question: "Which graph algorithm finds strongly connected components?",
                options: ["BFS", "DFS", "Kosaraju's", "Dijkstra's"],
                correct: 2
            },
            {
                id: 5,
                question: "What is the time complexity of building a segment tree?",
                options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
                correct: 0
            },
            {
                id: 6,
                question: "Which data structure is used in Trie?",
                options: ["Array", "Tree", "Graph", "Hash Table"],
                correct: 1
            },
            {
                id: 7,
                question: "What is the purpose of B-tree?",
                options: ["Database indexing", "File systems", "Reduce disk I/O", "All of the above"],
                correct: 3
            },
            {
                id: 8,
                question: "Which algorithm finds all-pairs shortest paths?",
                options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Kruskal's"],
                correct: 2
            },
            {
                id: 9,
                question: "What is the time complexity of union-find with path compression?",
                options: ["O(n)", "O(log n)", "O(α(n))", "O(1)"],
                correct: 2
            },
            {
                id: 10,
                question: "Which data structure supports range queries efficiently?",
                options: ["Array", "Linked List", "Segment Tree", "Stack"],
                correct: 2
            },
            {
                id: 11,
                question: "What is the time complexity of topological sort?",
                options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
                correct: 2
            },
            {
                id: 12,
                question: "Which tree maintains balance using color property?",
                options: ["AVL Tree", "Red-Black Tree", "B-tree", "BST"],
                correct: 1
            },
            {
                id: 13,
                question: "What is the purpose of suffix tree?",
                options: ["String matching", "Pattern searching", "Substring operations", "All of the above"],
                correct: 3
            },
            {
                id: 14,
                question: "Which algorithm finds minimum spanning tree?",
                options: ["Dijkstra's", "Kruskal's", "Bellman-Ford", "Floyd-Warshall"],
                correct: 1
            },
            {
                id: 15,
                question: "What is the time complexity of KMP algorithm?",
                options: ["O(n)", "O(m)", "O(n + m)", "O(n * m)"],
                correct: 2
            },
            {
                id: 16,
                question: "Which data structure is used in LRU cache?",
                options: ["Stack", "Queue", "Hash Table + Doubly Linked List", "Tree"],
                correct: 2
            },
            {
                id: 17,
                question: "What is the purpose of Fenwick Tree (Binary Indexed Tree)?",
                options: ["Range queries", "Point updates", "Prefix sums", "All of the above"],
                correct: 3
            },
            {
                id: 18,
                question: "Which graph representation is space efficient for sparse graphs?",
                options: ["Adjacency Matrix", "Adjacency List", "Edge List", "Both B and C"],
                correct: 3
            },
            {
                id: 19,
                question: "What is the time complexity of finding articulation points?",
                options: ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
                correct: 2
            },
            {
                id: 20,
                question: "Which data structure is used for implementing dictionary?",
                options: ["Trie", "Hash Table", "BST", "All of the above"],
                correct: 3
            },
            {
                id: 21,
                question: "What is the purpose of disjoint set data structure?",
                options: ["Union operations", "Find operations", "Cycle detection", "All of the above"],
                correct: 3
            },
            {
                id: 22,
                question: "Which algorithm is used for string matching with multiple patterns?",
                options: ["KMP", "Rabin-Karp", "Aho-Corasick", "Boyer-Moore"],
                correct: 2
            },
            {
                id: 23,
                question: "What is the time complexity of heap sort?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correct: 1
            },
            {
                id: 24,
                question: "Which tree has all leaves at same level?",
                options: ["BST", "AVL Tree", "Complete Binary Tree", "Perfect Binary Tree"],
                correct: 3
            },
            {
                id: 25,
                question: "What is the purpose of skip list?",
                options: ["Alternative to BST", "Probabilistic data structure", "Fast search", "All of the above"],
                correct: 3
            }
        ]
    },
    6: {
        name: "Mixed Set - All Subjects",
        questions: [
            {
                id: 1,
                question: "Which data structure follows LIFO principle?",
                options: ["Queue", "Stack", "Tree", "Graph"],
                correct: 1,
                subject: "Data Structures"
            },
            {
                id: 2,
                question: "Which scheduling algorithm has minimum average waiting time?",
                options: ["FCFS", "SJF", "Round Robin", "Priority"],
                correct: 1,
                subject: "Operating System"
            },
            {
                id: 3,
                question: "Which register holds the memory address of the next instruction?",
                options: ["Accumulator", "Program Counter", "Memory Address Register", "Instruction Register"],
                correct: 1,
                subject: "Computer Organization"
            },
            {
                id: 4,
                question: "Which language is accepted by finite automata?",
                options: ["Regular Language", "Context Free Language", "Context Sensitive Language", "Recursive Language"],
                correct: 0,
                subject: "FLAT"
            },
            {
                id: 5,
                question: "What is the time complexity of searching in a balanced BST?",
                options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                correct: 1,
                subject: "Data Structures"
            },
            {
                id: 6,
                question: "Which page replacement algorithm replaces the page that will not be used for longest time?",
                options: ["FIFO", "LRU", "Optimal", "LFU"],
                correct: 2,
                subject: "Operating System"
            },
            {
                id: 7,
                question: "Which bus carries address information?",
                options: ["Data Bus", "Address Bus", "Control Bus", "System Bus"],
                correct: 1,
                subject: "Computer Organization"
            },
            {
                id: 8,
                question: "Which automata uses stack?",
                options: ["DFA", "NFA", "PDA", "Turing Machine"],
                correct: 2,
                subject: "FLAT"
            },
            {
                id: 9,
                question: "Which data structure is used to implement priority queue?",
                options: ["Stack", "Queue", "Heap", "Array"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 10,
                question: "What is the condition for deadlock?",
                options: ["Mutual Exclusion", "Hold and Wait", "Circular Wait", "All of the above"],
                correct: 3,
                subject: "Operating System"
            },
            {
                id: 11,
                question: "What is the purpose of ALU?",
                options: ["Perform arithmetic operations", "Store data", "Control operations", "Manage memory"],
                correct: 0,
                subject: "Computer Organization"
            },
            {
                id: 12,
                question: "Which grammar generates regular languages?",
                options: ["Type 0", "Type 1", "Type 2", "Type 3"],
                correct: 3,
                subject: "FLAT"
            },
            {
                id: 13,
                question: "What is the time complexity of inserting an element at the beginning of an array?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 14,
                question: "Which memory management technique allows programs larger than physical memory?",
                options: ["Paging", "Segmentation", "Virtual Memory", "All of the above"],
                correct: 2,
                subject: "Operating System"
            },
            {
                id: 15,
                question: "Which memory is fastest?",
                options: ["Cache", "RAM", "ROM", "Hard Disk"],
                correct: 0,
                subject: "Computer Organization"
            },
            {
                id: 16,
                question: "What is the difference between DFA and NFA?",
                options: ["DFA has unique transitions", "NFA can have multiple transitions", "Both A and B", "No difference"],
                correct: 2,
                subject: "FLAT"
            },
            {
                id: 17,
                question: "Which tree is self-balancing?",
                options: ["Binary Tree", "AVL Tree", "BST", "Binary Heap"],
                correct: 1,
                subject: "Data Structures"
            },
            {
                id: 18,
                question: "What is the purpose of semaphore?",
                options: ["Synchronization", "Deadlock prevention", "Memory management", "Process scheduling"],
                correct: 0,
                subject: "Operating System"
            },
            {
                id: 19,
                question: "Which addressing mode specifies the operand directly?",
                options: ["Immediate", "Direct", "Indirect", "Register"],
                correct: 0,
                subject: "Computer Organization"
            },
            {
                id: 20,
                question: "What is the purpose of pumping lemma?",
                options: ["Prove language is regular", "Prove language is not regular", "Generate strings", "Parse strings"],
                correct: 1,
                subject: "FLAT"
            },
            {
                id: 21,
                question: "Which traversal gives sorted order in a BST?",
                options: ["Preorder", "Inorder", "Postorder", "Levelorder"],
                correct: 1,
                subject: "Data Structures"
            },
            {
                id: 22,
                question: "Which CPU scheduling algorithm is preemptive?",
                options: ["FCFS", "SJF", "SRTF", "Non-preemptive SJF"],
                correct: 2,
                subject: "Operating System"
            },
            {
                id: 23,
                question: "What is the purpose of cache memory?",
                options: ["Increase speed", "Reduce memory access time", "Store frequently used data", "All of the above"],
                correct: 3,
                subject: "Computer Organization"
            },
            {
                id: 24,
                question: "Which closure property applies to regular languages?",
                options: ["Union", "Concatenation", "Kleene Star", "All of the above"],
                correct: 3,
                subject: "FLAT"
            },
            {
                id: 25,
                question: "What is the worst case time complexity of linear search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 26,
                question: "What is thrashing?",
                options: ["High CPU utilization", "High page fault rate", "Low memory usage", "Fast execution"],
                correct: 1,
                subject: "Operating System"
            },
            {
                id: 27,
                question: "What is the purpose of DMA (Direct Memory Access)?",
                options: ["Transfer data without CPU", "Increase speed", "Reduce CPU load", "All of the above"],
                correct: 3,
                subject: "Computer Organization"
            },
            {
                id: 28,
                question: "Which automata can recognize context free language?",
                options: ["DFA", "NFA", "PDA", "Turing Machine"],
                correct: 2,
                subject: "FLAT"
            },
            {
                id: 29,
                question: "Which sorting algorithm is stable?",
                options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 30,
                question: "Which process state transition happens when a process is waiting for I/O?",
                options: ["Ready to Running", "Running to Ready", "Running to Waiting", "Waiting to Ready"],
                correct: 2,
                subject: "Operating System"
            }
        ]
    },
    7: {
        name: "Database Management System (DBMS)",
        questions: [
            {
                id: 1,
                question: "What does DBMS stand for?",
                options: ["Database Management System", "Data Base Management System", "Database Manipulation System", "Data Base Manipulation System"],
                correct: 0
            },
            {
                id: 2,
                question: "Which of the following is a property of ACID?",
                options: ["Atomicity", "Consistency", "Isolation", "All of the above"],
                correct: 3
            },
            {
                id: 3,
                question: "What is the primary key?",
                options: ["A key that uniquely identifies a row", "A foreign key", "A composite key", "A candidate key"],
                correct: 0
            },
            {
                id: 4,
                question: "Which normal form eliminates partial dependencies?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                correct: 1
            },
            {
                id: 5,
                question: "What is the purpose of a foreign key?",
                options: ["To uniquely identify a row", "To establish relationship between tables", "To index data", "To sort data"],
                correct: 1
            },
            {
                id: 6,
                question: "Which SQL command is used to retrieve data from a database?",
                options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
                correct: 0
            },
            {
                id: 7,
                question: "What is a transaction?",
                options: ["A single SQL statement", "A sequence of operations that form a single logical unit", "A database table", "A database view"],
                correct: 1
            },
            {
                id: 8,
                question: "Which join returns all rows from both tables?",
                options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
                correct: 3
            },
            {
                id: 9,
                question: "What is the purpose of an index?",
                options: ["To store data", "To speed up data retrieval", "To enforce constraints", "To create relationships"],
                correct: 1
            },
            {
                id: 10,
                question: "Which normal form eliminates transitive dependencies?",
                options: ["1NF", "2NF", "3NF", "BCNF"],
                correct: 2
            },
            {
                id: 11,
                question: "What is a view in database?",
                options: ["A physical table", "A virtual table based on a query", "A stored procedure", "A trigger"],
                correct: 1
            },
            {
                id: 12,
                question: "Which SQL aggregate function counts the number of rows?",
                options: ["SUM", "AVG", "COUNT", "MAX"],
                correct: 2
            },
            {
                id: 13,
                question: "What is the purpose of GROUP BY clause?",
                options: ["To filter rows", "To sort rows", "To group rows with same values", "To join tables"],
                correct: 2
            },
            {
                id: 14,
                question: "Which constraint ensures that a column cannot have NULL values?",
                options: ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL", "UNIQUE"],
                correct: 2
            },
            {
                id: 15,
                question: "What is the difference between DELETE and TRUNCATE?",
                options: ["DELETE removes rows, TRUNCATE removes table", "DELETE can be rolled back, TRUNCATE cannot", "TRUNCATE is faster", "All of the above"],
                correct: 3
            },
            {
                id: 16,
                question: "Which type of relationship exists when one record in a table relates to many records in another table?",
                options: ["One-to-One", "One-to-Many", "Many-to-Many", "None of the above"],
                correct: 1
            },
            {
                id: 17,
                question: "What is the purpose of HAVING clause?",
                options: ["To filter rows before grouping", "To filter groups after GROUP BY", "To sort results", "To join tables"],
                correct: 1
            },
            {
                id: 18,
                question: "Which SQL command is used to modify existing data in a table?",
                options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
                correct: 2
            },
            {
                id: 19,
                question: "What is a stored procedure?",
                options: ["A database table", "A precompiled collection of SQL statements", "A database view", "An index"],
                correct: 1
            },
            {
                id: 20,
                question: "Which isolation level prevents dirty reads?",
                options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
                correct: 1
            },
            {
                id: 21,
                question: "What is the purpose of a trigger?",
                options: ["To store data", "To automatically execute in response to events", "To create relationships", "To index data"],
                correct: 1
            },
            {
                id: 22,
                question: "Which SQL operator is used to combine multiple conditions?",
                options: ["AND", "OR", "NOT", "All of the above"],
                correct: 3
            },
            {
                id: 23,
                question: "What is the difference between UNION and UNION ALL?",
                options: ["UNION removes duplicates, UNION ALL keeps duplicates", "UNION ALL is faster", "UNION sorts results", "All of the above"],
                correct: 0
            },
            {
                id: 24,
                question: "Which type of lock allows multiple transactions to read but not write?",
                options: ["Exclusive Lock", "Shared Lock", "Intent Lock", "Update Lock"],
                correct: 1
            },
            {
                id: 25,
                question: "What is the purpose of normalization?",
                options: ["To reduce data redundancy", "To improve data integrity", "To eliminate anomalies", "All of the above"],
                correct: 3
            }
        ]
    },
    8: {
        name: "Computer Networks",
        questions: [
            {
                id: 1,
                question: "Which layer of the OSI model is responsible for routing?",
                options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
                correct: 2
            },
            {
                id: 2,
                question: "What is the standard length of a MAC address?",
                options: ["32 bits", "48 bits", "64 bits", "128 bits"],
                correct: 1
            },
            {
                id: 3,
                question: "Which protocol is used for secure web browsing?",
                options: ["HTTP", "FTP", "HTTPS", "SMTP"],
                correct: 2
            },
            {
                id: 4,
                question: "What is the purpose of DNS?",
                options: ["To route packets", "To resolve domain names to IP addresses", "To encrypt data", "To assign IP addresses"],
                correct: 1
            },
            {
                id: 5,
                question: "Which transport layer protocol is connection-oriented?",
                options: ["UDP", "TCP", "IP", "ICMP"],
                correct: 1
            },
            {
                id: 6,
                question: "What is the default port number for HTTP?",
                options: ["21", "25", "80", "443"],
                correct: 2
            },
            {
                id: 7,
                question: "Which device operates at the Data Link Layer?",
                options: ["Hub", "Switch", "Router", "Repeater"],
                correct: 1
            },
            {
                id: 8,
                question: "What does DHCP stand for?",
                options: ["Dynamic Host Configuration Protocol", "Data Host Control Protocol", "Dynamic Host Control Protocol", "Domain Host Configuration Protocol"],
                correct: 0
            },
            {
                id: 9,
                question: "Which IP address class supports the most hosts?",
                options: ["Class A", "Class B", "Class C", "Class D"],
                correct: 0
            },
            {
                id: 10,
                question: "What is the purpose of a firewall?",
                options: ["To speed up the network", "To prevent unauthorized access", "To route data", "To assign IP addresses"],
                correct: 1
            },
            {
                id: 11,
                question: "Which command is used to test reachability of a host?",
                options: ["ping", "ipconfig", "netstat", "tracert"],
                correct: 0
            },
            {
                id: 12,
                question: "What is the size of an IPv4 address?",
                options: ["32 bits", "48 bits", "64 bits", "128 bits"],
                correct: 0
            },
            {
                id: 13,
                question: "Which protocol is used for sending email?",
                options: ["POP3", "IMAP", "SMTP", "HTTP"],
                correct: 2
            },
            {
                id: 14,
                question: "What is the full form of URL?",
                options: ["Uniform Resource Locator", "Uniform Resource Link", "Unified Resource Locator", "Universal Resource Locator"],
                correct: 0
            },
            {
                id: 15,
                question: "Which topology requires a central controller or hub?",
                options: ["Bus", "Ring", "Star", "Mesh"],
                correct: 2
            },
            {
                id: 16,
                question: "What is the purpose of ARP?",
                options: ["To find IP address from MAC", "To find MAC address from IP", "To find route", "To test connection"],
                correct: 1
            },
            {
                id: 17,
                question: "Which layer provides end-to-end communication?",
                options: ["Network Layer", "Transport Layer", "Session Layer", "Application Layer"],
                correct: 1
            },
            {
                id: 18,
                question: "What is the maximum size of a TCP header?",
                options: ["20 bytes", "40 bytes", "60 bytes", "80 bytes"],
                correct: 2
            },
            {
                id: 19,
                question: "Which protocol is stateless?",
                options: ["TCP", "FTP", "HTTP", "SMTP"],
                correct: 2
            },
            {
                id: 20,
                question: "What is the loopback address in IPv4?",
                options: ["127.0.0.1", "192.168.1.1", "10.0.0.1", "0.0.0.0"],
                correct: 0
            },
             {
                id: 21,
                question: "Which layer is responsible for encryption and decryption?",
                options: ["Application Layer", "Presentation Layer", "Session Layer", "Transport Layer"],
                correct: 1
            },
            {
                id: 22,
                question: "What is the data unit at the Data Link Layer?",
                options: ["Bit", "Frame", "Packet", "Segment"],
                correct: 1
            },
            {
                id: 23,
                question: "Which of the following is a private IP address?",
                options: ["172.16.0.1", "8.8.8.8", "128.0.0.1", "202.10.1.1"],
                correct: 0
            },
            {
                id: 24,
                question: "What does CSMA/CD stand for?",
                options: ["Carrier Sense Multiple Access with Collision Detection", "Carrier Sense Multiple Access with Collision Domain", "Computer Sense Multiple Access with Collision Detection", "Carrier System Multiple Access with Collision Detection"],
                correct: 0
            },
            {
                id: 25,
                question: "Which protocol is used to retrieve email from a server?",
                options: ["SMTP", "POP3", "FTP", "HTTP"],
                correct: 1
            }
        ]
    },
    9: {
        name: "Mixed Set 2 - All Subjects",
        questions: [
            {
                id: 1,
                question: "What is the worst-case time complexity of QuickSort?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 2,
                question: "Which command is used to list files in Linux?",
                options: ["cd", "ls", "mkdir", "rm"],
                correct: 1,
                subject: "Operating System"
            },
            {
                id: 3,
                question: "What does SQL stand for?",
                options: ["Structured Question Language", "Structured Query Language", "Simple Query Language", "System Query Language"],
                correct: 1,
                subject: "DBMS"
            },
            {
                id: 4,
                question: "What is the standard port number for FTP Control?",
                options: ["20", "21", "23", "25"],
                correct: 1,
                subject: "Computer Networks"
            },
            {
                id: 5,
                question: "What does RISC stand for?",
                options: ["Reduced Instruction Set Computer", "Reduced Integrated Set Computer", "Resource Instruction Set Computer", "Complex Instruction Set Computer"],
                correct: 0,
                subject: "Computer Organization"
            },
            {
                id: 6,
                question: "Which automata recognizes Context-Free Languages?",
                options: ["Finite Automata", "Pushdown Automata", "Linear Bounded Automata", "Turing Machine"],
                correct: 1,
                subject: "FLAT"
            },
            {
                id: 7,
                question: "Which tree traversal gives sorted output for a BST?",
                options: ["Preorder", "Postorder", "Inorder", "Level Order"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 8,
                question: "What is a semaphore used for?",
                options: ["Memory Management", "Process Synchronization", "File Management", "Deadlock Detection"],
                correct: 1,
                subject: "Operating System"
            },
            {
                id: 9,
                question: "Which key uniquely identifies a record in a table?",
                options: ["Foreign Key", "Secondary Key", "Primary Key", "Candidate Key"],
                correct: 2,
                subject: "DBMS"
            },
            {
                id: 10,
                question: "Which layer of OSI model is responsible for routing?",
                options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
                correct: 1,
                subject: "Computer Networks"
            },
            {
                id: 11,
                question: "Which memory is placed between CPU and Main Memory?",
                options: ["Hard Disk", "Cache Memory", "Register", "Virtual Memory"],
                correct: 1,
                subject: "Computer Organization"
            },
            {
                id: 12,
                question: "What type of grammar is Type 3 in Chomsky Hierarchy?",
                options: ["Regular Grammar", "Context-Free Grammar", "Context-Sensitive Grammar", "Unrestricted Grammar"],
                correct: 0,
                subject: "FLAT"
            },
            {
                id: 13,
                question: "In a full binary tree, every node has how many children?",
                options: ["0 or 1", "1 or 2", "0 or 2", "Exactly 2"],
                correct: 2,
                subject: "Data Structures"
            },
            {
                id: 14,
                question: "What is the main purpose of Virtual Memory?",
                options: ["To increase execution speed", "To provide larger memory than physical memory", "To protect data", "To manage files"],
                correct: 1,
                subject: "Operating System"
            },
            {
                id: 15,
                question: "Which command is part of DDL?",
                options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
                correct: 2,
                subject: "DBMS"
            },
            {
                id: 16,
                question: "What is the PDU of the Transport Layer?",
                options: ["Frame", "Packet", "Segment", "Bit"],
                correct: 2,
                subject: "Computer Networks"
            },
            {
                id: 17,
                question: "What is Pipelining?",
                options: ["Memory allocation technique", "Instruction execution technique", "Data storage technique", "I/O management technique"],
                correct: 1,
                subject: "Computer Organization"
            },
            {
                id: 18,
                question: "Which language is accepted by a Turing Machine?",
                options: ["Regular Language", "Context-Free Language", "Recursive Enumerable Language", "Context-Sensitive Language"],
                correct: 2,
                subject: "FLAT"
            },
            {
                id: 19,
                question: "Which data structure is used for function call stack?",
                options: ["Queue", "Stack", "Heap", "Tree"],
                correct: 1,
                subject: "Data Structures"
            },
            {
                id: 20,
                question: "Banker's Algorithm is used for?",
                options: ["Deadlock Prevention", "Deadlock Avoidance", "Deadlock Detection", "Deadlock Recovery"],
                correct: 1,
                subject: "Operating System"
            },
            {
                id: 21,
                question: "What is a Foreign Key?",
                options: ["A key that uniquely identifies a row", "A field that refers to the primary key of another table", "A key with multiple columns", "A key that allows NULL values"],
                correct: 1,
                subject: "DBMS"
            },
            {
                id: 22,
                question: "TCP is a ___ protocol.",
                options: ["Connection-oriented", "Connectionless", "Datagram", "Unreliable"],
                correct: 0,
                subject: "Computer Networks"
            },
            {
                id: 23,
                question: "What does DMA stand for?",
                options: ["Direct Memory Access", "Dynamic Memory Access", "Direct Media Access", "Digital Memory Access"],
                correct: 0,
                subject: "Computer Organization"
            },
            {
                id: 24,
                question: "Which algorithm converts NFA to DFA?",
                options: ["Subset Construction", "Minimization", "Pumping Lemma", "Kleene's Theorem"],
                correct: 0,
                subject: "FLAT"
            },
            {
                id: 25,
                question: "Which data structure follows FIFO?",
                options: ["Stack", "Queue", "Tree", "Graph"],
                correct: 1,
                subject: "Data Structures"
            }
        ]
    }
};
