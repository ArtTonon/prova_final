import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import EscalarJogador from './pages/escalar';

const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/escalar" element={<EscalarJogador />} />
		</Routes>
	</BrowserRouter>
);

export default App;