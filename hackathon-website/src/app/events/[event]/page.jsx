import { notFound } from 'next/navigation';
import Quiz from '../../components/QuizPage';
import Hackathon from '../../components/HackthonPage';
import Gaming from '../../components/GamingPage';

export default function EventPage({ params }) {
  const { event } = params;

  // Render the appropriate component based on the event type
  const renderComponent = () => {
    switch (event) {
      case 'quiz':
        return <Quiz />;
      case 'hackathon':
        return <Hackathon />;
      case 'gaming':
        return <Gaming />;
      default:
        return notFound(); // Render a 404 page if the event is not found
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
}
