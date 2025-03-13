import { useTheme } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <h1>{theme === 'light' ? 'ライトテーマ' : 'ダークテーマ'}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: theme === 'light' ? '#000000' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#000000',
          marginTop: '20px',
        }}
      >
        テーマを切り替える
      </button>
    </div>
  );
}

export default App;
