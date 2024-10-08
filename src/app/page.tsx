'use client';

import Home from './components/Home';
import { Suspense } from 'react';

function HomePage() {
  return (
    <div>
      <h1>ホーム画面</h1>

      <Suspense fallback={<div>...読み込み中</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default HomePage;
