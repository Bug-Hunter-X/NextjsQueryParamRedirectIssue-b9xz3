```javascript
// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      {name && <p>Welcome, {name}!</p>}
      {/* ...rest of the component */}
    </div>
  );
}
```
```javascript
// pages/about.js
// ... (Existing code)
```