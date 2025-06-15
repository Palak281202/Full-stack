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
import Reminder from './components/Reminder';
import Analytics from './components/Analytics';
import Activities from './pages/Activities.jsx';

const router = createBrowserRouter([
  {path : '/', element: <Home/>},
  {path: '/checkIn', element: <CheckIn/>},
  {path: '/notes', element: <CheckIn/>},
  {path: '/intensity', element: <Intensity/>},
  {path: '/feedback', element: <FeedbackModal/>},
  {path: '/emotion', element: <Emotions/>},
  {path: '/submitingCheckIn', element: <SubmitingEmotion/>},
  {path: '/reminder', element: <Reminder/>},
  {path: '/analytics', element: <Analytics/>},
  {path: '/activities', element: <Activities/>},
]);


function App() {
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
