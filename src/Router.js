import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import MyForm from "./components/MyForm";
import TodoScreen from "./components/TodoScreen";

export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="todo" element={<TodoScreen />} />
                <Route path="form" element={<MyForm />} />
                <Route path="*" element={<App />} />
            </Route>
        </Routes>
    </BrowserRouter>;
};