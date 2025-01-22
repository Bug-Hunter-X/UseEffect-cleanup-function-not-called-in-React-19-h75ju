```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanup = () => {
      console.log('Component unmounted');
    };
    // This effect runs only once after the initial render
    console.log('Component mounted');
    return cleanup;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```