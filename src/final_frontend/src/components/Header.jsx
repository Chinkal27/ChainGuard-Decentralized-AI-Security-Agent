import React from 'react';
import { Shield, Moon, Sun, LogOut, User, Activity, LogIn, RefreshCw, Wifi, WifiOff } from 'lucide-react';
import './Header.css';

const Header = ({ userPrincipal, darkMode, onToggleDarkMode, onLogout, onLogin, backendConnected, onRefreshBackend }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-brand">
            <div className="brand-icon-container">
              <Shield className="brand-icon" />
              <div className="status-indicator"></div>
            </div>
            <div className="brand-text">
              <h1 className="brand-title">
                ChainGuard AI
              </h1>
              <p className="brand-subtitle">Security Agent</p>
            </div>
          </div>

          <div className="header-actions">
            {/* Backend Connection Status */}
            <div className="backend-status">
              {backendConnected ? (
                <div className="connection-status">
                  <Wifi className="icon-sm" />
                  <span className="status-text">Backend Online</span>
                </div>
              ) : (
                <div className="connection-status-offline">
                  <WifiOff className="icon-sm" />
                  <span className="status-text-offline">Backend Offline</span>
                  <button
                    onClick={onRefreshBackend}
                    className="refresh-button"
                    title="Retry backend connection"
                  >
                    <RefreshCw className="icon-sm" />
                  </button>
                </div>
              )}
            </div>

            {userPrincipal ? (
              <div className="user-section">
                <div className="connection-status">
                  <Activity className="icon-sm" />
                  <span className="status-text">
                    Connected
                  </span>
                </div>
                <div className="user-info">
                  <User className="icon-sm" />
                  <span className="user-principal">
                    {userPrincipal}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="logout-button"
                  title="Logout"
                >
                  <LogOut className="icon-md" />
                </button>
              </div>
            ) : (
              <div className="user-section">
                <button
                  onClick={onLogin}
                  className="login-button"
                  title="Login with Internet Identity"
                >
                  <LogIn className="icon-md" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            )}

            <button
              onClick={onToggleDarkMode}
              className="theme-toggle"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="icon-md" /> : <Moon className="icon-md" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;