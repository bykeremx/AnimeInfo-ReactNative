
import  {AnimeProvider} from './components/Context/AnimeContext.jsx'
import Routers from './components/Navigaton/Routers.jsx';
export default function App() {
  return (
    <AnimeProvider>
      <Routers/>
    </AnimeProvider>
  );
}
