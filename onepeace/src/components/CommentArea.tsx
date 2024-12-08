import { COMMENTARRAY } from '@/consts/index';

console.log(COMMENTARRAY);
const CommentArea = () => {
  return (
    <>
      <div className='commentarea py-4'>
        <section id='comments'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-2'>
                <h3>News</h3>
              </div>
              <div className='col-md-10'>
                {COMMENTARRAY.filter((item) => item.id === 1).map((item) => {
                  return (
                    <dl className='row' key={item.id}>
                      <dd className='col-md-12'>{item.comment}</dd>
                    </dl>
                  );
                })}
              </div>
              {/* <div className='col-md-10'>
                <dl className='row'>
                  <dt className='col-md-3'>2018年○月○日</dt>
                  <dd className='col-md-9'>ランチクーポン配布中です</dd>
                  <dt className='col-md-3'>2018年○月○日</dt>
                  <dd className='col-md-9'>季節限定メニューを追加しました</dd>
                  <dt className='col-md-3'>2018年○月○日</dt>
                  <dd className='col-md-9'>新しい雑貨さん入荷しました</dd>
                </dl>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CommentArea;
