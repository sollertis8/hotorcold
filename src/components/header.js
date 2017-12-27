import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestartGame={() => props.onRestartGame()}
      />
      <h1><span class="hot">HOT</span> or <span class="cold">COLD</span></h1>
    </header>
  );
}