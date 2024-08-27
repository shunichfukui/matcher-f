'use client';

import { Suspense } from 'react';
import Admin from '../components/admin/Admin';

function AdminPage() {
  return (
    <div>
      <Suspense fallback={<div>...読み込み中</div>}>
        <Admin />
      </Suspense>
    </div>
  );
}

export default AdminPage;
