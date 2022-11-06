import "./styles.css";

export default function App() {
  const x = 20;
  return (
    <div className="TestClass">
      <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <td>John</td>
          </tr>
          <tr>
            <td>Elsa</td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    </div>
  );
}
