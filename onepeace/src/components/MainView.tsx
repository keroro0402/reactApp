import agent from '@/agent';
import { useState, useEffect } from 'react';
import EmblaCarousel from '@/carousel/EmblaCarousel';
import { CAROUSELCONFIG } from '@/consts/index';

function MainView() {
  let [result, setResult] = useState<string[] | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await agent.imageInfoGet();
        const fullPath = response.data.documents.map((item: any) => {
          return item.fields.path.stringValue + item.fields.filename.stringValue;
        });
        setResult(fullPath);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!result) {
    return;
  }

  return (
    <div>
      <EmblaCarousel slides={result} options={CAROUSELCONFIG.OPTIONS} />
    </div>
  );
}

export default MainView;
