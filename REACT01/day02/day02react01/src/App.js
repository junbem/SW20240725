import Hello from "./Hello";

  const App = () => {
    return (
      <>
        <h1>Hello, World!</h1>
        <p>This is a simple React app.</p>
        <Hello/>
      </>
    );
  }

  // 컴포넌트를 모듈에 등록
  // -> 프로젝트의 모든 JS파일에서 import 가능
  export default App;