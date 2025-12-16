import { useState } from 'react';
import './PasswordAuditor.css';

function PasswordAuditor() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [analysis, setAnalysis] = useState(null);

    const commonPatterns = [
        '123', '234', '345', '456', '567', '678', '789',
        'abc', 'bcd', 'cde', 'def', 'efg', 'fgh',
        'qwerty', 'asdfgh', 'zxcvbn',
        'password', 'pass', 'admin', 'user', 'login',
        '111', '222', '333', '444', '555', '666', '777', '888', '999', '000'
    ];

    const weakPasswords = [
        'password', 'password123', '12345678', 'qwerty', 'abc123',
        'monkey', '1234567', 'letmein', 'trustno1', 'dragon',
        'baseball', 'iloveyou', 'master', 'sunshine', 'ashley',
        'bailey', 'passw0rd', 'shadow', '123123', '654321'
    ];

    const checkCharacterVariety = (pwd) => {
        const hasLowercase = /[a-z]/.test(pwd);
        const hasUppercase = /[A-Z]/.test(pwd);
        const hasNumbers = /[0-9]/.test(pwd);
        const hasSymbols = /[^a-zA-Z0-9]/.test(pwd);
        const types = [hasLowercase, hasUppercase, hasNumbers, hasSymbols];
        const typesPresent = types.filter(Boolean).length;
        return { types: typesPresent, hasLowercase, hasUppercase, hasNumbers, hasSymbols };
    };

    const calculateEntropy = (pwd) => {
        let poolSize = 0;
        if (/[a-z]/.test(pwd)) poolSize += 26;
        if (/[A-Z]/.test(pwd)) poolSize += 26;
        if (/[0-9]/.test(pwd)) poolSize += 10;
        if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 32;
        const entropyBits = pwd.length * Math.log2(poolSize);
        return { bits: entropyBits, poolSize: poolSize };
    };

    const checkPatterns = (pwd) => {
        const lowerPassword = pwd.toLowerCase();
        const foundPatterns = [];
        for (const pattern of commonPatterns) {
            if (lowerPassword.includes(pattern)) foundPatterns.push(pattern);
        }
        if (/(.)\1{2,}/.test(pwd)) foundPatterns.push('repeated characters');
        if (weakPasswords.includes(lowerPassword)) foundPatterns.push('common weak password');
        return { count: foundPatterns.length, patterns: foundPatterns };
    };

    const findVulnerabilities = (pwd) => {
        const vulnerabilities = [];
        if (pwd.length < 12) vulnerabilities.push('Password is shorter than 12 characters');
        const variety = checkCharacterVariety(pwd);
        if (variety.types < 3) vulnerabilities.push('Not enough character variety');
        const patterns = checkPatterns(pwd);
        if (patterns.count > 0) vulnerabilities.push(`Contains patterns: ${patterns.patterns.join(', ')}`);
        if (/19\d{2}|20\d{2}/.test(pwd)) vulnerabilities.push('Contains a year');
        return vulnerabilities;
    };

    const analyzePassword = (pwd) => {
        if (pwd.length === 0) return null;
        const variety = checkCharacterVariety(pwd);
        const entropy = calculateEntropy(pwd);
        const patterns = checkPatterns(pwd);
        const vulnerabilities = findVulnerabilities(pwd);
        let score = 0;
        if (pwd.length >= 16) score += 30;
        else if (pwd.length >= 12) score += 20;
        else if (pwd.length >= 8) score += 10;
        score += (variety.types / 4) * 30;
        if (entropy.bits >= 60) score += 30;
        else if (entropy.bits >= 40) score += 20;
        else if (entropy.bits >= 28) score += 10;
        score -= patterns.count * 10;
        score = Math.max(0, Math.min(100, score));
        return { length: pwd.length, variety, entropy, patterns, vulnerabilities, score };
    };

    const calculateCrackTime = (entropyBits) => {
        const combinations = Math.pow(2, entropyBits);
        const onlineSeconds = combinations / 200;
        const offlineSlowSeconds = combinations / 20000;
        const offlineFastSeconds = combinations / 20000000000;
        return { online: formatTime(onlineSeconds), offlineSlow: formatTime(offlineSlowSeconds), offlineFast: formatTime(offlineFastSeconds) };
    };

    const formatTime = (seconds) => {
        if (seconds < 1) return 'Instant';
        if (seconds < 60) return `${Math.round(seconds)} seconds`;
        if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
        if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
        if (seconds < 2592000) return `${Math.round(seconds / 86400)} days`;
        if (seconds < 31536000) return `${Math.round(seconds / 2592000)} months`;
        const years = seconds / 31536000;
        if (years < 1000) return `${Math.round(years)} years`;
        if (years < 1000000) return `${Math.round(years / 1000)} thousand years`;
        if (years < 1000000000) return `${Math.round(years / 1000000)} million years`;
        return 'Longer than the age of the universe!';
    };

    const handlePasswordChange = (e) => {
        const pwd = e.target.value;
        setPassword(pwd);
        setAnalysis(analyzePassword(pwd));
    };

    return (
        <div className="password-auditor">
            <header className="auditor-header">
                <h1>Password Strength Auditor</h1>
                <p className="auditor-subtitle">Analyze your password security in real-time</p>
            </header>
            <div className="auditor-input-section">
                <div className="input-wrapper">
                    <input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} placeholder="Enter a password to analyze..." className="password-input" autoComplete="off" />
                    <button className="toggle-btn" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
            </div>
            {password && analysis && (
                <div className="strength-meter">
                    <div className="strength-bar-container">
                        <div className="strength-bar-fill" style={{ width: `${analysis.score}%`, backgroundColor: analysis.score < 25 ? '#ef4444' : analysis.score < 50 ? '#f59e0b' : analysis.score < 75 ? '#3b82f6' : '#10b981' }} />
                    </div>
                    <p className="strength-label" style={{ color: analysis.score < 25 ? '#ef4444' : analysis.score < 50 ? '#f59e0b' : analysis.score < 75 ? '#3b82f6' : '#10b981' }}>
                        {analysis.score < 25 ? 'Weak Password' : analysis.score < 50 ? 'Fair Password' : analysis.score < 75 ? 'Good Password' : 'Strong Password!'}
                    </p>
                </div>
            )}
            {analysis && (
                <>
                    <div className="results-grid">
                        <div className="result-card">
                            <div className="result-header"><span className="result-icon">{analysis.length >= 12 ? '✓' : analysis.length >= 8 ? '!' : '✗'}</span><h3>Length</h3></div>
                            <p className="result-value">{analysis.length} characters</p>
                            <p className="result-desc">{analysis.length >= 12 ? 'Good length!' : 'Could be longer (12+ recommended)'}</p>
                        </div>
                        <div className="result-card">
                            <div className="result-header"><span className="result-icon">{analysis.entropy.bits >= 60 ? '✓' : analysis.entropy.bits >= 40 ? '!' : '✗'}</span><h3>Entropy</h3></div>
                            <p className="result-value">{Math.round(analysis.entropy.bits)} bits</p>
                            <p className="result-desc">{analysis.entropy.bits >= 60 ? 'High randomness!' : 'Increase randomness'}</p>
                        </div>
                        <div className="result-card">
                            <div className="result-header"><span className="result-icon">{analysis.variety.types === 4 ? '✓' : analysis.variety.types >= 3 ? '!' : '✗'}</span><h3>Character Variety</h3></div>
                            <p className="result-value">{analysis.variety.types}/4 types</p>
                            <p className="result-desc">{analysis.variety.types === 4 ? 'All types used!' : `Using ${analysis.variety.types} types`}</p>
                        </div>
                        <div className="result-card">
                            <div className="result-header"><span className="result-icon">{analysis.patterns.count === 0 ? '✓' : analysis.patterns.count <= 2 ? '!' : '✗'}</span><h3>Pattern Check</h3></div>
                            <p className="result-value">{analysis.patterns.count === 0 ? 'None found' : `${analysis.patterns.count} found`}</p>
                            <p className="result-desc">{analysis.patterns.count === 0 ? 'No patterns detected!' : 'Contains common patterns'}</p>
                        </div>
                    </div>
                    {analysis.vulnerabilities.length > 0 && (
                        <div className="vulnerabilities-section">
                            <h2>Vulnerabilities Found</h2>
                            <ul className="vulnerability-list">{analysis.vulnerabilities.map((vuln, index) => <li key={index}>{vuln}</li>)}</ul>
                        </div>
                    )}
                    <div className="crack-time-section">
                        <h2>Estimated Crack Time</h2>
                        <div className="crack-time-grid">
                            <div className="crack-method"><h4>Online Attack</h4><p className="crack-time">{calculateCrackTime(analysis.entropy.bits).online}</p><small>~100 attempts/second</small></div>
                            <div className="crack-method"><h4>Offline (Slow Hash)</h4><p className="crack-time">{calculateCrackTime(analysis.entropy.bits).offlineSlow}</p><small>~10,000 attempts/second</small></div>
                            <div className="crack-method"><h4>Offline (Fast Hash)</h4><p className="crack-time">{calculateCrackTime(analysis.entropy.bits).offlineFast}</p><small>~10 billion attempts/second</small></div>
                        </div>
                    </div>
                </>
            )}
            <div className="tips-section">
                <h2>Password Best Practices</h2>
                <ul className="tips-list">
                    <li>Use at least 12 characters (16+ is better)</li>
                    <li>Mix uppercase, lowercase, numbers, and symbols</li>
                    <li>Avoid dictionary words and personal information</li>
                    <li>Don't use common patterns (123, abc, qwerty)</li>
                    <li>Use a unique password for each account</li>
                    <li>Consider using a password manager</li>
                </ul>
            </div>
            <div className="auditor-footer">
                <p className="disclaimer">Note: This tool runs entirely in your browser. Your password is never sent to any server.</p>
            </div>
        </div>
    );
}

export default PasswordAuditor;