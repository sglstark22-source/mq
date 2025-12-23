# KTU S6 CSE Comprehensive Exam - MCQ Practice Website

A fully functional Multiple Choice Questions (MCQ) practice website with student and admin authentication for KTU S6 CSE Comprehensive Exam syllabus.

## Features

### Question Sets (7 Sets)

- **Set 1: Data Structures** (25 questions)
  - Stack, Queue, Trees, Graphs, Hashing, Sorting algorithms, and more

- **Set 2: Operating System** (25 questions)
  - Process scheduling, Memory management, Deadlock, File systems, and more

- **Set 3: Computer Organization and Architecture** (25 questions)
  - CPU architecture, Memory hierarchy, Instruction sets, Pipeline, and more

- **Set 4: FLAT (Formal Languages and Automata Theory)** (25 questions)
  - DFA/NFA, Regular languages, Context-free languages, PDA, Turing machines, and more

- **Set 5: Data Structures - Advanced** (25 questions)
  - Advanced topics: AVL trees, B-trees, Segment trees, Advanced algorithms

- **Set 6: Mixed Set - All Subjects Combined** (30 questions)
  - Questions from all 4 main subjects combined

- **Set 7: Database Management System (DBMS)** (25 questions)
  - ACID properties, Normalization, SQL queries, Transactions, Indexing, ER model, Keys, Joins, and more

### Authentication & User Management

- **Student Login/Registration**
  - Students can register for new accounts
  - Secure login system
  - Session management

- **Admin Login**
  - Admin dashboard for question management
  - Full CRUD operations on questions
  - View statistics and all student results
  - Filter and analyze student performance

### Interactive Quiz Features

- **Timer** (60 minutes per exam)
  - Visual countdown with color-coded warnings
  - Yellow warning at 15 minutes
  - Red warning at 5 minutes
  - Auto-submit when time runs out

- **Progress Tracking**
  - Real-time progress bar
  - Question palette showing answered/unanswered questions
  - Current question highlighting

- **Navigation**
  - Previous/Next buttons
  - Question palette for quick navigation
  - Answer review mode after submission

- **Results & Review**
  - Score calculation with percentage
  - Detailed breakdown (correct, wrong, unanswered)
  - Review mode with correct/incorrect highlighting
  - Color-coded performance indicators
  - Results automatically saved for leaderboard and admin review

- **Leaderboard** 🏆
  - View top performers across all question sets
  - Filter by question set or view overall rankings
  - Display top 10, 20, 50, or 100 students
  - Special medals for top 3 positions (🥇 🥈 🥉)
  - Summary statistics (average scores, perfect scores)
  - Color-coded score badges
  - Real-time updates as students complete quizzes

### Admin Dashboard

- **Question Management**
  - View all questions in a set
  - Add new questions
  - Edit existing questions
  - Delete questions
  - Statistics dashboard

- **Set Management**
  - Select and manage different question sets
  - Question count tracking
  - Easy navigation between sets

- **Student Results Management**
  - View all student quiz attempts
  - Filter results by student or question set
  - Summary statistics (total attempts, average score, pass/fail counts)
  - Detailed results table with scores, correct/wrong answers, and timestamps
  - Color-coded performance indicators
  - Export-ready data format

### User-Friendly Interface

- Modern, responsive design
- Color-coded question status
- Visual progress indicators
- Smooth transitions and animations
- Mobile-friendly layout
- Accessible and intuitive UI

## Default Credentials

### Admin Account
- **Username:** `admin`
- **Password:** `admin123`
- **Access:** Full admin dashboard with question management

### Student Account
- **Username:** `student`
- **Password:** `student123`
- **Access:** Quiz interface and question sets

## How to Use

### For Students

1. **Login or Register**:
   - Open `index.html` in any modern web browser
   - Use default student credentials or register a new account
   - Click "Register as Student" to create a new account

2. **Select a Question Set**:
   - Click on any question set card from the home screen
   - Each set covers different subjects

3. **Take the Exam**:
   - Read each question carefully
   - Click on your answer choice
   - Use Previous/Next buttons to navigate
   - Use the question palette to jump to any question
   - Monitor your progress and time remaining

4. **Submit Your Exam**:
   - Click "Submit Exam" when you're done
   - Confirm your submission
   - The exam will auto-submit when time runs out

5. **View Results**:
   - See your score percentage
   - View detailed breakdown (correct, wrong, unanswered)
   - Click "Review Answers" to see all questions with correct answers highlighted
   - Click "Take Another Set" to return to home screen

6. **View Leaderboard**:
   - Click "🏆 View Leaderboard" button on the home screen
   - See top performers across all question sets
   - Filter by specific question set or view overall rankings
   - Check your position among other students
   - View summary statistics

### For Administrators

1. **Login**:
   - Open `index.html` in any modern web browser
   - Login with admin credentials

2. **Manage Questions**:
   - Select a question set from the dropdown
   - View all questions in that set
   - Click "Add New Question" to add questions
   - Click "Edit" to modify existing questions
   - Click "Delete" to remove questions

3. **View Statistics**:
   - Check total question sets and total questions
   - Monitor question distribution

4. **View Student Results**:
   - Click on "View Results" tab in admin dashboard
   - See all student quiz attempts
   - Filter by student username or question set
   - View summary statistics (total attempts, average score, pass/fail counts)
   - Analyze student performance trends
   - Each result shows: student name, username, question set, score, correct/wrong/unanswered counts, and timestamp

## File Structure

```
mcq/
├── index.html          # Main HTML structure with login and admin dashboard
├── styles.css          # Styling and responsive design
├── script.js           # Main JavaScript functionality (quiz, admin, auth handlers)
├── auth.js             # Authentication system and user management
├── questions.js        # All question sets and answers
├── server.py           # Simple Python HTTP server (optional)
├── server.bat          # Windows batch file to run server
└── README.md           # This file
```

## Technical Details

- **Pure HTML/CSS/JavaScript**: No external dependencies required
- **LocalStorage**: Used for user data, question persistence, and student results storage
- **SessionStorage**: Used for session management
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Browser Compatibility**: Chrome, Firefox, Edge, Safari, Opera
- **Data Persistence**: All quiz results are automatically saved and available for leaderboard and admin review

## Running the Application

### Option 1: Direct File Access
Simply open `index.html` in any modern web browser. No server required!

### Option 2: Local Server (Recommended)
For better compatibility, run a local server:

**Using Python:**
```bash
python server.py
```
Or double-click `server.bat` on Windows.

Then open `http://localhost:8000/index.html` in your browser.

**Using Node.js (if installed):**
```bash
npx http-server
```

## Adding More Questions

### For Administrators (Recommended)
1. Login as admin
2. Select a question set
3. Click "Add New Question"
4. Fill in the question, options, and select the correct answer
5. Click "Save Question"

### Manual Method
Edit `questions.js` and add to the appropriate question set:

```javascript
{
    id: 26,
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
```

## Security Notes

⚠️ **Important**: This is a client-side application intended for educational purposes. In a production environment:

- Use server-side authentication
- Hash passwords securely
- Implement proper session management
- Use HTTPS for secure communication
- Validate all user inputs server-side
- Implement proper access controls

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ✅ Opera

## Notes

- Timer automatically submits the exam when time runs out
- Answers can be changed before submission
- After submission, answers cannot be modified
- Each question set is independent - start fresh each time
- Admin changes are saved to localStorage
- User sessions expire when the browser is closed
- Students can only register (admin accounts must be created manually)
- **Quiz results are automatically saved** when students submit their exams
- **Leaderboard updates in real-time** as students complete quizzes
- **Admin can view all student results** including historical data
- Results are stored in browser localStorage (per-browser/device)

## Troubleshooting

**Login not working?**
- Check if you're using the correct credentials
- Clear browser cache and localStorage if needed
- Make sure JavaScript is enabled

**Questions not loading?**
- Check browser console for errors
- Ensure `questions.js` is loaded properly
- Try refreshing the page

**Admin dashboard not appearing?**
- Make sure you're logged in as admin
- Check browser console for JavaScript errors
- Clear sessionStorage and login again

**Leaderboard not showing results?**
- Make sure students have completed at least one quiz
- Check if results are saved in localStorage
- Try refreshing the page

**Student results not appearing in admin dashboard?**
- Ensure students have submitted their quizzes (results are saved on submission)
- Check browser localStorage for 'studentResults' key
- Verify you're viewing the "View Results" tab in admin dashboard

## License

This project is open source and available for educational purposes.

---

**Good luck with your KTU S6 CSE Comprehensive Exam preparation!**

**Subjects Covered:** Data Structures, Operating System, Computer Organization and Architecture, FLAT (Formal Languages and Automata Theory), Database Management System (DBMS)

## Recent Updates

- ✅ Added **Database Management System (DBMS)** question set (Set 7) with 25 comprehensive questions
- ✅ Implemented **Admin Results Dashboard** - Admins can now view all student quiz attempts with filtering and statistics
- ✅ Added **Student Leaderboard** - Students can view top performers and compete for rankings
- ✅ Enhanced result tracking - All quiz results are automatically saved and displayed
