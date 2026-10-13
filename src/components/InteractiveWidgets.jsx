import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Sparkles, 
  Check, 
  X, 
  RefreshCw, 
  Plus, 
  DollarSign, 
  BookOpen, 
  Bell, 
  Layers,
  ArrowRight
} from 'lucide-react';

export default function InteractiveWidgets() {
  const [activeTab, setActiveTab] = useState('password');

  // Password Strength Checker State
  const [password, setPassword] = useState('Dharini@Secure2026!');
  const [showPassword, setShowPassword] = useState(true);

  // Analyze password
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const criteriaCount = [hasMinLength, hasUpperCase, hasLowerCase, hasNumber, hasSymbol].filter(Boolean).length;
  
  let strengthLabel = 'Very Weak';
  let strengthColor = '#ef4444';
  let crackTime = '< 1 second';

  if (criteriaCount === 5 && password.length >= 12) {
    strengthLabel = 'Extremely Strong 🛡️';
    strengthColor = '#10b981';
    crackTime = '120+ Million Years';
  } else if (criteriaCount >= 4) {
    strengthLabel = 'Strong 🔒';
    strengthColor = '#06b6d4';
    crackTime = '8,000+ Years';
  } else if (criteriaCount >= 3) {
    strengthLabel = 'Moderate ⚠️';
    strengthColor = '#f59e0b';
    crackTime = '3 Days';
  } else if (criteriaCount >= 2) {
    strengthLabel = 'Weak ⚠️';
    strengthColor = '#f97316';
    crackTime = '15 Minutes';
  }

  const generateRandomPassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let result = '';
    for (let i = 0; i < 14; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  // Student Collaboration Hub State
  const [notes, setNotes] = useState([
    { id: 1, title: 'Data Structures - Tree Traversals Summary', author: 'Dharini S', subject: 'CS201', time: 'Today' },
    { id: 2, title: 'Java OOP Inheritance & Interface Cheatsheet', author: 'Team Tech', subject: 'CS204', time: 'Yesterday' },
    { id: 3, title: 'Web Development CSS Flexbox vs Grid Guide', author: 'Dev Group', subject: 'CS208', time: '2 days ago' }
  ]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteSubject, setNewNoteSubject] = useState('CS201');

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNoteTitle.trim()) return;
    const item = {
      id: Date.now(),
      title: newNoteTitle.trim(),
      author: 'You (Peer)',
      subject: newNoteSubject,
      time: 'Just now'
    };
    setNotes([item, ...notes]);
    setNewNoteTitle('');
  };

  // Expense Management State
  const [budgetLimit, setBudgetLimit] = useState(5000);
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Textbooks & Study Material', category: 'Academics', amount: 1200 },
    { id: 2, name: 'Campus Cafeteria & Meals', category: 'Food', amount: 850 },
    { id: 3, name: 'Bus Pass & Commute', category: 'Travel', amount: 600 }
  ]);
  const [expName, setExpName] = useState('');
  const [expCat, setExpCat] = useState('Academics');
  const [expAmount, setExpAmount] = useState('');

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBudget = budgetLimit - totalSpent;

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expName || !expAmount) return;
    const num = parseFloat(expAmount);
    if (isNaN(num) || num <= 0) return;
    setExpenses([...expenses, { id: Date.now(), name: expName, category: expCat, amount: num }]);
    setExpName('');
    setExpAmount('');
  };

  return (
    <div className="glass-card playground-section" id="interactive-playground">
      <div className="playground-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-cyan)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
            <Sparkles size={16} />
            <span>Interactive Project Lab</span>
          </div>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-heading)', marginTop: '0.2rem' }}>
            Live Demonstrations
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            Experience working interactive prototypes simulating the logic developed in Dharini's core projects.
          </p>
        </div>

        <div className="interactive-tabs">
          <button
            onClick={() => setActiveTab('password')}
            className={`tab-btn ${activeTab === 'password' ? 'active' : ''}`}
            id="tab-btn-pwd"
          >
            🛡️ Password Checker
          </button>
          <button
            onClick={() => setActiveTab('collab')}
            className={`tab-btn ${activeTab === 'collab' ? 'active' : ''}`}
            id="tab-btn-collab"
          >
            👥 Student Hub
          </button>
          <button
            onClick={() => setActiveTab('expense')}
            className={`tab-btn ${activeTab === 'expense' ? 'active' : ''}`}
            id="tab-btn-expense"
          >
            📊 Expense Manager
          </button>
        </div>
      </div>

      {/* 1. PASSWORD CHECKER DEMO */}
      {activeTab === 'password' && (
        <div className="pwd-checker-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Test any credential against Dharini's Python algorithmic entropy rules:
            </span>
            <button
              onClick={generateRandomPassword}
              className="btn btn-secondary"
              style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
              id="gen-pwd-btn"
            >
              <RefreshCw size={14} />
              <span>Generate Sample Password</span>
            </button>
          </div>

          <div className="pwd-input-wrap">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type a password to test..."
              className="pwd-input"
              id="pwd-tester-input"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '15px', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '4px 8px' }}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Strength Meter */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Strength Score:</span>
              <span style={{ fontWeight: 700, color: strengthColor }}>{strengthLabel}</span>
            </div>
            <div className="pwd-meter">
              {[1, 2, 3, 4, 5].map((seg) => (
                <div
                  key={seg}
                  className="pwd-meter-segment"
                  style={{
                    background: seg <= criteriaCount ? strengthColor : 'rgba(255, 255, 255, 0.08)'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.6rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <span>Estimated Brute-force Time: <strong style={{ color: 'var(--text-heading)' }}>{crackTime}</strong></span>
              <span>Length: {password.length} chars</span>
            </div>
          </div>

          {/* Rules Breakdown */}
          <div className="pwd-rules-grid">
            <div className={`pwd-rule-item ${hasMinLength ? 'valid' : ''}`}>
              {hasMinLength ? <Check size={16} /> : <X size={16} />}
              <span>At least 8 characters ({password.length}/8)</span>
            </div>
            <div className={`pwd-rule-item ${hasUpperCase ? 'valid' : ''}`}>
              {hasUpperCase ? <Check size={16} /> : <X size={16} />}
              <span>Uppercase letter (A-Z)</span>
            </div>
            <div className={`pwd-rule-item ${hasLowerCase ? 'valid' : ''}`}>
              {hasLowerCase ? <Check size={16} /> : <X size={16} />}
              <span>Lowercase letter (a-z)</span>
            </div>
            <div className={`pwd-rule-item ${hasNumber ? 'valid' : ''}`}>
              {hasNumber ? <Check size={16} /> : <X size={16} />}
              <span>Number (0-9)</span>
            </div>
            <div className={`pwd-rule-item ${hasSymbol ? 'valid' : ''}`}>
              {hasSymbol ? <Check size={16} /> : <X size={16} />}
              <span>Special symbol (!@#$%^&*)</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. STUDENT COLLABORATION HUB DEMO */}
      {activeTab === 'collab' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ color: 'var(--text-heading)', fontSize: '1.15rem' }}>Peer Study Repository</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Real-time student notes and coursework sharing simulated from Dharini's web project.</p>
            </div>
            <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', color: 'var(--primary-cyan)', fontWeight: 600 }}>
              {notes.length} Active Notes
            </span>
          </div>

          {/* Add Note Form */}
          <form onSubmit={handleAddNote} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Add a new study guide or topic..."
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              className="form-input"
              style={{ flex: 1, minWidth: '220px' }}
              id="student-note-input"
            />
            <select
              value={newNoteSubject}
              onChange={(e) => setNewNoteSubject(e.target.value)}
              className="form-input"
              style={{ width: '130px', cursor: 'pointer' }}
            >
              <option value="CS201">CS201 (DSA)</option>
              <option value="CS204">CS204 (Java)</option>
              <option value="CS208">CS208 (Web)</option>
              <option value="CS210">CS210 (DBMS)</option>
            </select>
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem' }}>
              <Plus size={16} />
              <span>Post Note</span>
            </button>
          </form>

          {/* Note Cards Feed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {notes.map((n) => (
              <div
                key={n.id}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.15)', color: 'var(--primary-blue)' }}>
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.95rem' }}>{n.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Shared by <span style={{ color: 'var(--primary-cyan)' }}>{n.author}</span> • {n.time}
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'var(--bg-pill)', border: '1px solid var(--border-light)', color: 'var(--text-secondary)' }}>
                  {n.subject}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. EXPENSE MANAGER DEMO */}
      {activeTab === 'expense' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Summary Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div style={{ padding: '1.2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Budget</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)', marginTop: '0.2rem' }}>₹{budgetLimit.toLocaleString()}</div>
            </div>
            <div style={{ padding: '1.2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Total Spent</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f43f5e', marginTop: '0.2rem' }}>₹{totalSpent.toLocaleString()}</div>
            </div>
            <div style={{ padding: '1.2rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Remaining Balance</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: remainingBudget >= 0 ? '#10b981' : '#f43f5e', marginTop: '0.2rem' }}>
                ₹{remainingBudget.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Quick Expense Add Form */}
          <form onSubmit={handleAddExpense} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Expense description (e.g., Python Course)..."
              value={expName}
              onChange={(e) => setExpName(e.target.value)}
              className="form-input"
              style={{ flex: 1, minWidth: '180px' }}
              id="expense-name-input"
            />
            <select
              value={expCat}
              onChange={(e) => setExpCat(e.target.value)}
              className="form-input"
              style={{ width: '130px', cursor: 'pointer' }}
            >
              <option value="Academics">Academics</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Personal">Personal</option>
            </select>
            <input
              type="number"
              placeholder="Amount (₹)"
              value={expAmount}
              onChange={(e) => setExpAmount(e.target.value)}
              className="form-input"
              style={{ width: '130px' }}
              id="expense-amt-input"
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.25rem' }}>
              <Plus size={16} />
              <span>Add</span>
            </button>
          </form>

          {/* Expenses list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {expenses.map((exp) => (
              <div
                key={exp.id}
                style={{
                  padding: '0.85rem 1.2rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-heading)', fontSize: '0.92rem' }}>{exp.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{exp.category}</div>
                </div>
                <div style={{ fontWeight: 700, color: '#f43f5e', fontSize: '1rem' }}>
                  - ₹{exp.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
