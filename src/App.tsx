function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld />
      <h1>Vite + React</h1>
      <div className="card">
        <button
          className="my-4 rounded bg-sky px-1.2em py-0.6em text-(1em white) font-500"
          onClick={() => setCount(count => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
