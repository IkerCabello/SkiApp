import { StyleSheet} from 'react-native';
import QuestionScreen from './Screens/QuestionScreen';
import QuestionScreen2 from './Screens/QuestionScreen2';
import QuestionScreen3 from './Screens/QuestionScreen3';

export default function App() {
  return (
    <QuestionScreen3/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});