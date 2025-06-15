import EmotionCard from './components/EmotionCard';
import FeedbackModal from './components/FeedbackModal';
import Home from './components/Home';
import IntensitySelector from './components/IntensitySelector';
import CheckIn from './pages/CheckIn';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Emotions from './pages/Emotions';
import Intensity from './pages/Intensity';
import SubmitingEmotion from './components/SubmitingEmotion';

const router = createBrowserRouter([
  {path : '/', element: <Home/>},
  {path: '/checkIn', element: <CheckIn/>},
  {path: '/notes', element: <CheckIn/>},
  {path: '/intensity', element: <Intensity/>},
  {path: '/feedback', element: <FeedbackModal/>},
  {path: '/emotion', element: <Emotions/>},
  {path: '/submitingCheckIn', element: <SubmitingEmotion/>}
]);


function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
