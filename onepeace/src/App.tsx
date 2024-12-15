import Header from '@/components/Header';
import Navi from '@/components/Navi';
import MainView from '@/components/MainView';
import CommentArea from '@/components/CommentArea';
import TodoMain from '@/components/TodoMain';

import Footer from '@/components/Footer';
function App() {
  return (
    <>
      <Header />
      <Navi />
      <TodoMain />
      <MainView />
      <CommentArea />
      <Footer />
    </>
  );
}

export default App;
