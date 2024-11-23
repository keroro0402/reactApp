import agent from '@/agent';
import { useState, useEffect } from 'react';

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
      {result.map((item, index) => {
        return (
          <span key={index}>
            <img src={item} alt={`image-${index}`} />
          </span>
        );
      })}
    </div>
  );
}

export default MainView;
