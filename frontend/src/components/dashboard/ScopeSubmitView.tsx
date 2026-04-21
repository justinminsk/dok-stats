import { useState } from 'react';
import type { ScopePayload } from '../../models/siteData';

type ScopeSubmitViewProps = {
  scope: ScopePayload;
  tabId: string;
};

export function ScopeSubmitView({ scope, tabId }: ScopeSubmitViewProps) {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [tournamentLink, setTournamentLink] = useState('');
  const [plainTextList, setPlainTextList] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const title = encodeURIComponent(`[Submit List] ${wins}-${losses} in ${scope.label}`);
    const body = encodeURIComponent(
      `**Wins**: ${wins}\n**Losses**: ${losses}\n**Tournament Link**: ${tournamentLink}\n\n**Plain Text List**:\n\`\`\`\n${plainTextList}\n\`\`\``
    );
    const url = `https://github.com/justinminsk/dok-stats/issues/new?title=${title}&body=${body}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div aria-labelledby={tabId} className="view-panel" id="scope-view-submit" role="tabpanel">
      <h4 className="sr-only">Submit a List</h4>
      
      <div className="card">
        <div className="card__header">
          <h5 className="card__title">Submit a Tournament List</h5>
          <p className="card__description">Help improve the stats by submitting a valid tournament list. This will open a GitHub issue with your list details.</p>
        </div>
        
        <form onSubmit={handleSubmit} style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="submit-wins" style={{ fontWeight: 'bold' }}>Wins</label>
              <input 
                id="submit-wins" 
                type="number" 
                min="0" 
                value={wins} 
                onChange={(e) => setWins(Number(e.target.value))} 
                required
                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <label htmlFor="submit-losses" style={{ fontWeight: 'bold' }}>Losses</label>
              <input 
                id="submit-losses" 
                type="number" 
                min="0" 
                value={losses} 
                onChange={(e) => setLosses(Number(e.target.value))} 
                required
                style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label htmlFor="submit-link" style={{ fontWeight: 'bold' }}>Tournament Link / Page</label>
            <input 
              id="submit-link" 
              type="url" 
              value={tournamentLink} 
              onChange={(e) => setTournamentLink(e.target.value)} 
              placeholder="https://..."
              required
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <label htmlFor="submit-list" style={{ fontWeight: 'bold' }}>Plain Text List</label>
            <textarea 
              id="submit-list" 
              rows={10} 
              value={plainTextList} 
              onChange={(e) => setPlainTextList(e.target.value)} 
              placeholder="Paste your army list here..."
              required
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontFamily: 'monospace' }}
            />
          </div>

          <button type="submit" className="action-pill" style={{ alignSelf: 'flex-start', background: 'var(--accent)', color: '#fff', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px' }}>
            Open GitHub Issue
          </button>
        </form>
      </div>
    </div>
  );
}
