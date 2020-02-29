import React from 'react';

export const Footer = React.memo(function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/avadavat/truth-fiddle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/github-logo-light-64px.png"
          alt="Github Logo"
          title="Source Code"
        />
      </a>
    </div>
  );
});
